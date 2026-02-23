const router = require("express").Router();
const {
  getPortals,
  getPortalById,
  createPortal,
  updatePortal,
  deletePortal
} = require("../controllers/portalController");

const { protect, adminOnly } = require("../middleware/authMiddleware");

// Public
router.get("/", getPortals);
router.get("/:id", getPortalById);

// Admin
router.post("/", protect, adminOnly, createPortal);
router.put("/:id", protect, adminOnly, updatePortal);
router.delete("/:id", protect, adminOnly, deletePortal);

module.exports = router;