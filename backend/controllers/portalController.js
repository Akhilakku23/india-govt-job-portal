const Portal = require("../models/Portal");

// Get all portals
exports.getPortals = async (req, res) => {
  const portals = await Portal.find();
  res.json(portals);
};

// Get single portal
exports.getPortalById = async (req, res) => {
  const portal = await Portal.findById(req.params.id);
  if (!portal) return res.status(404).json({ message: "Portal not found" });
  res.json(portal);
};

// Create portal (Admin)
exports.createPortal = async (req, res) => {
  const portal = await Portal.create(req.body);
  res.json(portal);
};

// Update portal (Admin)
exports.updatePortal = async (req, res) => {
  const portal = await Portal.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(portal);
};

// Delete portal (Admin)
exports.deletePortal = async (req, res) => {
  await Portal.findByIdAndDelete(req.params.id);
  res.json({ message: "Portal deleted" });
};