const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const verifyAccessToken = require("../verifyAccessToken");

//update method
router.put("/:id", verifyAccessToken, async (request, response)=>{
    if(request.user.id === request.params.id){
        if(request.body.password){
            request.body.password = CryptoJS.AES.encrypt(request.body.password, process.env.SECRET_KEY).toString()
        }

        try{

            const updatedUser = await User.findByIdAndUpdate(request.params.id, 
                { $set: request.body, }, //sets new user information after update
                {new: true} // creates new user from updated information
            )
            response.status(200).json(updatedUser);

        }catch(error){ response.status(500).json(error);  }
    }
    else{
        response.status(403).json("Account cannot be updated")
    }
})

//delete method


//get method

module.exports = router;