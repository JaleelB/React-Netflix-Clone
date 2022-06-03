const mongoose = require("mongoose");

const showSchema = new mongoose.Schema({

    id: { type: Number, required: true,},
    title: { type: String },
    description: { type: String },
    poster_path: { type: String },
    backdrop_path: { type: String },
    release_date: { type: String },
    trailer: { type: String },
    mediaType: { type: String, required: true },
    vote_average: { type: Number },
    isNetflixOriginalShow: {type: Boolean},
    genres: { type: Array},
    cast: { type: Array},
    crew: { type: Array},
    
});

module.exports = mongoose.model("Show", showSchema);