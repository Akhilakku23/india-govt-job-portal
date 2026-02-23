const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Bookmark = require("../models/Bookmark");

// 🔎 Get All Users With Bookmark Count
router.get("/users", async (req, res) => {
  try {
    const users = await User.find().select("-password");

    const data = await Promise.all(
      users.map(async (user) => {
        const bookmarks = await Bookmark.find({ user: user._id })
          .populate("portal");

        return {
          ...user._doc,
          bookmarks,
          bookmarkCount: bookmarks.length,
        };
      })
    );

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});


// ❌ Delete User
router.delete("/user/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  await Bookmark.deleteMany({ user: req.params.id });
  res.json({ message: "User Deleted" });
});

// ❌ Remove Bookmark
router.delete("/bookmark/:id", async (req, res) => {
  await Bookmark.findByIdAndDelete(req.params.id);
  res.json({ message: "Bookmark Removed" });
});

module.exports = router;