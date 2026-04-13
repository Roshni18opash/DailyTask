const express = require("express");
const router = express.Router();

const protect = require("../middleware/auth.middleware");
const {
  createProject,
  getProjects,
  updateProject,
  deleteProject,
} = require("../controllers/project.controller");

router.post("/", protect, createProject);
router.get("/", protect, getProjects);
router.patch("/:id", protect, updateProject);
router.delete("/:id", protect, deleteProject);

module.exports = router;
