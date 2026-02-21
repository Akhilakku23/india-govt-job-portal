const router = require("express").Router();

const controller = require("../controllers/portalController");

const auth = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");

router.get("/", controller.getPortals);

router.get("/:id", controller.getPortal);

router.post("/", auth, admin, controller.createPortal);

router.put("/:id", auth, admin, controller.updatePortal);

router.delete("/:id", auth, admin, controller.deletePortal);

module.exports = router;