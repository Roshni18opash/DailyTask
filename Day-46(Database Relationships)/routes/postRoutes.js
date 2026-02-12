const express = require("express");
const router = express.Router();
const controller = require("../controllers/postController");

router.get("/", controller.index);
router.post("/add-user", controller.createUser);
router.post("/add-post", controller.createPost);
router.get("/delete-post/:id", controller.deletePost);
router.get("/delete-user/:id", controller.deleteUser);

module.exports = router;
