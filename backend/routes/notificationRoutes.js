const router = require("express").Router();

const controller = require("../controllers/notificationController");

const auth = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");

router.get("/", controller.getNotifications);

router.post("/", auth, admin, controller.createNotification);

router.delete("/:id", auth, admin, controller.deleteNotification);

module.exports = router;