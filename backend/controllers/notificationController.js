const Notification = require("../models/Notification");

// Get all notifications
exports.getNotifications = async (req, res) => {
  const notifications = await Notification.find().sort({ createdAt: -1 });
  res.json(notifications);
};

// Create notification (Admin)
exports.createNotification = async (req, res) => {
  const notification = await Notification.create(req.body);
  res.json(notification);
};

// Delete notification (Admin)
exports.deleteNotification = async (req, res) => {
  await Notification.findByIdAndDelete(req.params.id);
  res.json({ message: "Notification deleted" });
};