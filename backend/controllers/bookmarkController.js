const Bookmark = require("../models/Bookmark");

// Add bookmark
exports.addBookmark = async (req, res) => {
  const { portalId } = req.body;

  const bookmark = await Bookmark.create({
    userId: req.user.id,
    portalId
  });

  res.json(bookmark);
};

// Get user bookmarks
exports.getUserBookmarks = async (req, res) => {
  const bookmarks = await Bookmark.find({
    userId: req.params.userId
  }).populate("portalId");

  res.json(bookmarks);
};

// Delete bookmark
exports.deleteBookmark = async (req, res) => {
  await Bookmark.findByIdAndDelete(req.params.id);
  res.json({ message: "Bookmark removed" });
};