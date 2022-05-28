const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema; 

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // savedMovies: [{type: ObjectId, ref: "Show"}]
    savedMovies: {type: Array}
});

userSchema.methods.addMovies = function (object) {
    this.savedMovies.push(object)
    // console.log(this.savedMovies)
}

module.exports = mongoose.model("User", userSchema);