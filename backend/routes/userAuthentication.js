const router  = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken")

//Create request for a new user signing up
router.post("/register", async (request, response)=>{
    const newUser = new User({
        username: request.body.username,
        email: request.body.email,

        //using crptojs library, the password in encrypted and in its place a hash is shown in the json genmerated as a response from post request
        password: CryptoJS.AES.encrypt(request.body.password, process.env.SECRET_KEY).toString(),
    });

    try{
        //waits until the new user has been created and saves the new user to mongo database using the use schema
        const user = await newUser.save();

        //listens for the succesful status of the user being created and saved then returns response to user of the userChema created by user in json format
        response.status(201).json(user);
    }
    catch(error){ 
        response.status(500).json(error); 
    }

    
});

//Create request for a user logging up
router.post("/login", async (request, response)=>{
    try{

        //tries to find user using find one function based on the criteria 
        //that email equal the email in the requesrt body made by the user
        //if equal that user exists; otherwise no user exists
        const user = await User.findOne({ email: request.body.email })
        if(!user) return response.status(401).json("Incorrect user email or password!");

        //decrpyts hashed user password
        const bytes  = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

        if( originalPassword !== request.body.password ) return response.status(401).json("Incorrect user email and/or password!");

        //hides user id inside jwt token
        const accessToken = jwt.sign(
            { id: user._id },
            process.env.SECRET_KEY,
            {expiresIn: "1d"}
        );

        //holds (removes) the password field in the json object in the body of the response
        const { password, ...userDetails} = user._doc;

        response.status(200).json({...userDetails, accessToken});

    }catch(error){ 
        // response.status(200).json(user);
        response.status(500); 
    }

});

module.exports = router;