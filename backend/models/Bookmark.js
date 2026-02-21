const mongoose = require("mongoose");

const bookmarkSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    portalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Portal"
    }

}, {timestamps:true});

module.exports = mongoose.model("Bookmark", bookmarkSchema);