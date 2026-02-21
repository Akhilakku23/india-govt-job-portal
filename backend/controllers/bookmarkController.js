const Bookmark = require("../models/Bookmark");

exports.addBookmark = async(req,res)=>{

    const bookmark = new Bookmark(req.body);

    await bookmark.save();

    res.json("Bookmarked");

};

exports.getBookmarks = async(req,res)=>{

    const bookmarks = await Bookmark.find({

        userId: req.params.userId

    }).populate("portalId");

    res.json(bookmarks);

};

exports.deleteBookmark = async(req,res)=>{

    await Bookmark.findByIdAndDelete(req.params.id);

    res.json("Bookmark deleted");

};