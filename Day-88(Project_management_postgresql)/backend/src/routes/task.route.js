const express = require("express");
const router = express.Router();

const protect = require("../middleware/auth.middleware");
const taskController = require("../controllers/task.controller");

// CREATE TASK
router.post("/", protect, taskController.createTask);

// GET TASKS (FILTER)
router.get("/", protect, taskController.getTasks);

// UPDATE TASK
router.patch("/:id", protect, taskController.updateTaskStatus);

// DELETE TASK
router.delete("/:id", protect, taskController.deleteTask);

module.exports = router;
