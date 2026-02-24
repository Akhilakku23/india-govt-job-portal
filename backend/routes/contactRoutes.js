const router = require("express").Router();
const {
  getContacts,
  createContact,
  deleteContact
} = require("../controllers/contactController");

const { protect, adminOnly } = require("../middleware/authMiddleware");

router.get("/", protect, adminOnly, getContacts);
router.post("/",adminOnly, createContact);
router.delete("/:id", protect, adminOnly, deleteContact);

module.exports = router;