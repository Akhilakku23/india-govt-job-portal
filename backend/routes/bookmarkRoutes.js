const router = require("express").Router();
const {
  addBookmark,
  getUserBookmarks,
  deleteBookmark
} = require("../controllers/bookmarkController");

const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, addBookmark);
router.get("/user/:userId", protect, getUserBookmarks);
router.delete("/:id", protect, deleteBookmark);

module.exports = router;