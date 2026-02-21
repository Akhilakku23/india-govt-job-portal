const mongoose = require("mongoose");

const portalSchema = new mongoose.Schema({

    name: String,

    link: String,

    category: String,

    description: String

}, {timestamps:true});

module.exports = mongoose.model("Portal", portalSchema);