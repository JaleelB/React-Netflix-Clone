const mongoose = require("mongoose");

const showSchema = new mongoose.Schema({

    title: { type: String, required: true, unique: true },
    description: { type: String },
    posterImage: { type: String },
    posterBackdrop: { type: String },
    airDate: { type: String },
    trailer: { type: String },
    mediaType: { type: String },
    showRating: { type: String },
    genres: { type: String}
    
});

module.export = mongoose.model("User", showSchema);