const express = require("express");
const { voteOnPoll } = require("../controllers/voteController");
const { checkAuth } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/:id/vote", checkAuth, voteOnPoll);
module.exports = router;
