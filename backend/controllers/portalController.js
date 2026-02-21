const Portal = require("../models/Portal");

exports.getPortals = async(req,res)=>{

    const portals = await Portal.find();

    res.json(portals);

};

exports.getPortal = async(req,res)=>{

    const portal = await Portal.findById(req.params.id);

    res.json(portal);

};

exports.createPortal = async(req,res)=>{

    const portal = new Portal(req.body);

    await portal.save();

    res.json("Portal created");

};

exports.updatePortal = async(req,res)=>{

    await Portal.findByIdAndUpdate(req.params.id, req.body);

    res.json("Portal updated");

};

exports.deletePortal = async(req,res)=>{

    await Portal.findByIdAndDelete(req.params.id);

    res.json("Portal deleted");

};