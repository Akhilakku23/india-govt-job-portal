const Notification = require("../models/Notification");

exports.getNotifications = async(req,res)=>{

    const data = await Notification.find();

    res.json(data);

};

exports.createNotification = async(req,res)=>{

    const data = new Notification(req.body);

    await data.save();

    res.json("Notification added");

};

exports.deleteNotification = async(req,res)=>{

    await Notification.findByIdAndDelete(req.params.id);

    res.json("Notification deleted");

};