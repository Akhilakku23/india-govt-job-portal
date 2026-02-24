const Bookmark = require("../models/Bookmark");

// Add bookmark
exports.addBookmark = async (req, res) => {
  try {
    const bookmark = new Bookmark({
      portal: req.body.portalId,
      user: req.user.id   // comes from token
    });

    await bookmark.save();
    res.status(201).json(bookmark);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getUserBookmarks = async (req, res) => {
  try {
    const bookmarks = await Bookmark.find({
      user: req.user.id
    }).populate("portal");

    res.json(bookmarks);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete bookmark
exports.deleteBookmark = async (req, res) => {
  await Bookmark.findByIdAndDelete(req.params.id);
  res.json({ message: "Bookmark removed" });
};