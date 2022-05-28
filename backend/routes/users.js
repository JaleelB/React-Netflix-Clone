const router = require("express").Router();
const User = require("../models/User");
const Show = require("../models/Show");
const CryptoJS = require("crypto-js");
const verifyAccessToken = require("../verifyAccessToken");

//update method
router.put("/:id", verifyAccessToken, async (request, response)=>{

    if(request.user.id === request.params.id){
        if(request.body.password){
            request.body.password = CryptoJS.AES.encrypt(request.body.password, process.env.SECRET_KEY).toString();
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
        response.status(403).json("Account cannot be updated.")
    }
})

//delete method
router.delete("/:id", verifyAccessToken, async (request, response)=>{

    if(request.user.id === request.params.id){
        try{

            await User.findByIdAndDelete(request.params.id)
            response.status(200).json("Account Deleted.");

        }catch(error){ response.status(500).json(error);  }
    }
    else{
        response.status(403).json("Account cannot be deleted.")
    }
})

//get method
router.get("/find/:id", async (request, response)=>{

    try{
 
        const user = await User.findById(request.params.id)
        const {password, ...userDetails} = user._doc;
        response.status(200).json(userDetails);

    }catch(error){ response.status(500).json(error);  }
    
})

//add movie
router.put("/saveMovie/:id", verifyAccessToken, async (request, response)=>{

    if(request.user.id === request.params.id){
        const show = new Show(request.body);
        
        try{
            const user = await User.findById(request.params.id);
            const updatedUser = await User.findByIdAndUpdate(request.params.id, 
                { $set: {savedMovies: [...user.savedMovies, show]}, }, 
                {new: true} 
            )
            
            response.status(201).json(updatedUser)
        }catch(error){ console.log(error) }

    }else{
        response.status(403).json("Cannot save movies to account.")
    }
})


//delete movie
router.delete("/deleteMovie/:id", verifyAccessToken, async (request, response)=>{

    if(request.user.id === request.params.id){
        // const show = new Show(request.body);
        
        try{
            const user = await User.findById(request.params.id);
            const updatedUser = await User.findByIdAndUpdate(request.params.id, 
                { $set: {savedMovies: [...user.savedMovies, show]}, }, 
                {new: true} 
            )
            
            response.status(201).json(updatedUser)
        }catch(error){ console.log(error) }

    }else{
        response.status(403).json("Cannot save movies to account.")
    }
})



module.exports = router;