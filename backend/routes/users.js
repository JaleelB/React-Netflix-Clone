const router = require("express").Router();
const {
    deleteUser,
    updateUser,
    getUser,
    updateUserMovies,
    deleteUserMovies,
    getAllUserMovies
} = require("../controllers/user.js");
const { verifyUser } = require("../utils/verifyAccessToken.js");

//update method
router.put("/update/:id", verifyUser, updateUser)

//delete method
router.delete("/delete/:id", verifyUser, deleteUser)

//get method
router.get("/find/:id", verifyUser, getUser)

//add movie
router.put("/saveMovie/:id", verifyUser,updateUserMovies)

//delete movie
router.put("/deleteMovie/:id/:showID", verifyUser, deleteUserMovies)

//get all movies
router.get("/getAllMovies/:id", verifyUser,getAllUserMovies)




module.exports = router;