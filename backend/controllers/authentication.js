const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const { createError } =  require("../utils/errorHandler.js");
const jwt = require("jsonwebtoken");


async function register(request, response, next){

    if(request.body.username && request.body.email && request.body.password){
        
        bcrypt.hash(request.body.password, 10).then(async (hash) => {

            try{
                const newUser = new User({
                    username: request.body.username,
                    email: request.body.email,
                    password: hash,
                });

                await newUser.save();
                response.status(201).json("Your account has been created!");
            }catch(error){ 
                response.status(500).json(error); 
            }
        });
    }
    else{
        return next(createError(400, "You are missing a username/email/passowrd. Fill in all details to create an account!"));
    }

};

async function login(request, response, next){

    if(request.body.username && request.body.password || request.body.email && request.body.password){

        let user = '';

        try {
            if(request.body.username) user = await User.findOne({ username: request.body.username });
            if(request.body.email) user = await User.findOne({ email: request.body.email });
            if (!user) return next(createError(404, "User not found!"));
        
            const isPasswordCorrect = await bcrypt.compare(
                request.body.password,
                user.password
            );
            
            if (!isPasswordCorrect) return next(createError(400, "Wrong password or username!"));
        
            const token = jwt.sign(
                { id: user._id },
                process.env.SECRET_KEY
            );
        
            const { password, ...otherDetails } = user._doc;
            response
                .cookie("access_token", token, {
                httpOnly: true,
                })
                .status(200)
                .json({ details: { ...otherDetails } });

        } catch (err) {
        next(err);
        }
    }
};

  module.exports = {
    register,
    login
};