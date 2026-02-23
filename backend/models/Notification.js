const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({

    title: String,

    description: String,

    link: String,

      createdAt: { type: Date, default: Date.now }

}, {timestamps:true});

module.exports = mongoose.model("Notification", notificationSchema);