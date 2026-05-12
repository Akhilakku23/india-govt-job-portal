const mongoose = require("mongoose");

const portalSchema = new mongoose.Schema({

    name: String,

    website: String,

    category: String,

    description: String,

     createdAt: { type: Date, default: Date.now }

}, {timestamps:true});

module.exports = mongoose.model("Portal", portalSchema);