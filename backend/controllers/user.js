const User =  require("../models/User.js");
const Show =  require("../models/Show.js");
const bcrypt = require('bcrypt');
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
            const updatedUser = await User.findByIdAndUpdate(request.params.id, 
                { $set: {savedMovies: [...user.savedMovies, show]}, }, 
                {new: true} 
            )
            
            response.status(201).json(updatedUser)
        }catch(error){ response.status(500).json(error); }

    }else{
        return next(createError(403,"Cannot save movies to account."));
    }

}

async function deleteUserMovies (request, response, next){

    if(request.user.id === request.params.id){
          
        try{
            const user = await User.findById(request.params.id);

            // user.savedMovies.map((movie, index)=>{
                
            //     console.log(movie.id, request.params.showID)
            //     if(movie.id === request.params.showID){
            //         savedMovieIndex=index;
            //         // console.log(index);
            //     }   
            // });
            // const paramsID = new ObjectId(`${request.params.showID}`);
            const updatedMovies = user.savedMovies.filter(movie => movie._id !== request.params.showID );

            // savedMovieIndex = getArrayIndex(user.savedMovies, request.params.showID);
            console.log(updatedMovies)

            const updatedUser = await User.findByIdAndUpdate(request.params.id, 
                // { $set: {savedMovies: [user.savedMovies[savedMovieIndex], ...user.savedMovies]}}, 
                { $set: {savedMovies: updatedMovies}}, 
                {new: true} 
            );
            
            response.status(201).json(updatedUser.savedMovies)

        }catch(error){ next(error) }

    }else{
        response.status(403).json("Delete save movies from account.")
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

// function getArrayIndex(array, itemToFind){
//     array.map((movie, index)=>{
//         if(movie._id === itemToFind){
//             savedMovieIndex=index;
//             console.log(index, movie._id);
//         }   
//     });
// };



module.exports = {
    deleteUser,
    updateUser,
    getUser,
    updateUserMovies,
    deleteUserMovies,
    getAllUserMovies
};