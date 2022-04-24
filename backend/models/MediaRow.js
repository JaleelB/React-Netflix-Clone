const mongoose = require("mongoose");

const MediaRowSchema = new mongoose.Schema({

    rowTitle: { type: String, required: true, unique: true },
    rowType: { type: String },
    shows: { type: Arrray }    
});

module.exports = mongoose.model("User", MediaRowSchema);