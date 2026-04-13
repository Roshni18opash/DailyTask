// import express from "express";
// import { createTeam, getTeams } from "../controllers/team.controller";
// import { protect } from "../middleware/auth.middleware";

// const router = express.Router();

// router.post("/", protect, createTeam);
// router.get("/", protect, getTeams);

// export default router;
const express = require("express");
const router = express.Router();

const protect = require("../middleware/auth.middleware");
const teamController = require("../controllers/team.controller");

// CREATE TEAM
router.post("/", protect, teamController.createTeam);

// GET TEAMS
router.get("/", protect, teamController.getTeams);

// DELETE TEAM
router.delete("/:id", protect, teamController.deleteTeam);

module.exports = router;
