const mongoose = require("mongoose");

const showSchema = new mongoose.Schema({

    posterId: { type: Number },
    title: { type: String },
    description: { type: String },
    posterImage: { type: String },
    posterBackdrop: { type: String },
    // airDate: { type: String },
    trailer: { type: String },
    mediaType: { type: String },
    showRating: { type: String },
    genres: { type: Array}
    
});

module.exports = mongoose.model("Show", showSchema);