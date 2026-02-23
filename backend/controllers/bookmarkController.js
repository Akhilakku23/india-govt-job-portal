const Bookmark = require("../models/Bookmark");

// Add bookmark
exports.addBookmark = async (req, res) => {
  try {
    const { portalId } = req.body;

    const bookmark = await Bookmark.create({
      user: req.user._id,   // ✅ correct field
      portal: portalId,    // ✅ correct field
    });

    res.json(bookmark);
  } catch (err) {
    res.status(500).json({ message: "Error adding bookmark" });
  }
};


// Get logged-in user bookmarks
exports.getUserBookmarks = async (req, res) => {
  try {
    const bookmarks = await Bookmark.find({
      user: req.user._id,   // ✅ get from token
    }).populate("portal");

    res.json(bookmarks);
  } catch (err) {
    res.status(500).json({ message: "Error fetching bookmarks" });
  }
};


// Delete bookmark
exports.deleteBookmark = async (req, res) => {
  try {
    await Bookmark.findByIdAndDelete(req.params.id);
    res.json({ message: "Bookmark removed" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed" });
  }
};