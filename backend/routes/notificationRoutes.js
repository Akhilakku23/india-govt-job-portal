const router = require("express").Router();
const {
  getNotifications,
  createNotification,
  deleteNotification
} = require("../controllers/notificationController");

const { protect, adminOnly } = require("../middleware/authMiddleware");

router.get("/", getNotifications);
router.post("/", protect, adminOnly, createNotification);
router.delete("/:id", protect, adminOnly, deleteNotification);

module.exports = router;