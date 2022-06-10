const User =  require("../models/User.js");
const Show =  require("../models/Show.js");
const bcrypt = require('bcryptjs')
const { createError } = require("../utils/errorHandler.js");

async function updateUser (request, response, next){

    try{
        let password = '';
        let user = '';

        if(request.body.password){
            password = await hashPassword(request.body.password)
            request.body.password = password;
        }

        if(request.body.username){
            const findUser = await User.findOne({ username: request.body.username })
            if(findUser) user = true;
        }

        if(user) next(createError(403, "Usernae already exists. Username should be unique"))
        
        const updatedUser = await User.findByIdAndUpdate(
            request.params.id,
            {$set: request.body},
            {new: true}
        );
        
        response.status(200).json(updatedUser);

    }catch(error){
        next(error)
    }
};

async function hashPassword(password){
    const salt = await bcrypt.genSaltSync();
    const hashedPassword = await bcrypt.hashSync(password, salt);

    return hashedPassword;
}


async function deleteUser (request, response, next){

    try{

        await User.findByIdAndDelete(request.params.id);
        return response.status(200).send("User has been deleted");

    }catch(error){
        next(error);
    }
   
};

async function getUser (request, response, next) {

    try{

        const user = await User.findById(request.params.id);
        return response.status(200).json(user);

    }catch(error){
        next(error);
    }

};

async function updateUserMovies (request, response, next){

    if(request.user.id === request.params.id){
        const show = new Show(request.body);
        
        try{
            const user = await User.findById(request.params.id);
            const userMovies = user.savedMovies;

            const isFound = userMovies.some(movie => {

                if (movie.id === request.body.id) {
                  return true;
                }
              
                return false;
            });

            if(isFound) return next(createError(403, "This movie already exists in the database. It cannot be readded."))


            const updatedUser = await User.findByIdAndUpdate(request.params.id, 
                { $set: {savedMovies: [...user.savedMovies, show]}, }, 
                {new: true} 
            )
            
            response.status(201).json(updatedUser.savedMovies)
        }catch(error){ response.status(500).json(error); }

    }else{
        return next(createError(403,"Cannot save movies to account."));
    }

}

async function deleteUserMovies (request, response, next){

    if(request.user.id === request.params.id){
          
        try{
            const user = await User.findById(request.params.id);
            let userMovies = user.savedMovies;

            const indexOfObject = userMovies.findIndex(movie => {
                return movie.id === Number(request.params.showID);
            });

              
            userMovies.splice(indexOfObject, 1);

            const updatedUser = await User.findByIdAndUpdate(request.params.id, 
                { $set: {savedMovies: userMovies}}, 
                {new: true} 
            );
            
            response.status(201).json(updatedUser.savedMovies)

        }catch(error){ next(error) }

    }else{
        response.status(403).json("Cannot delete movies from account.")
    }

};

async function getAllUserMovies (request, response, next){

    if(request.user.id === request.params.id){
        
        try{
            const user = await User.findById(request.params.id);
            const userMovies = user.savedMovies;
            return response.status(200).json(userMovies);
        }catch(error){ response.status(500).json(error); }

    }else{
        return next(createError(403,"Cannot access movies for this account."));
    }

};


module.exports = {
    deleteUser,
    updateUser,
    getUser,
    updateUserMovies,
    deleteUserMovies,
    getAllUserMovies
};