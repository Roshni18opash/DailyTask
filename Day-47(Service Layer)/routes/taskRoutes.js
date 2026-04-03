const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

router.get("/", taskController.index);
router.get("/add", taskController.addForm);
router.post("/add", taskController.createTask);

router.get("/edit/:id", taskController.editForm);
router.post("/update/:id", taskController.updateTask);

router.get("/delete/:id", taskController.deleteTask);

router.get("/toggle/:id", taskController.toggleComplete);

module.exports = router;
