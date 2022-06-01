const router = require("express").Router();
const {
    deleteUser,
    updateUser,
    getUser,
    updateUserMovies,
    deleteUserMovies
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
router.delete("/deleteMovie/:id", verifyUser, deleteUserMovies)




module.exports = router;