const router = require("express").Router();

const controller = require("../controllers/bookmarkController");

router.post("/", controller.addBookmark);

router.get("/user/:userId", controller.getBookmarks);

router.delete("/:id", controller.deleteBookmark);

module.exports = router;