const express = require("express");
const router = express.Router();
const pollController = require("../controllers/pollController");
const {
  checkAuth,
  optionalAuth,
  checkAdmin,
  checkVoter,
} = require("../middleware/authMiddleware");

router.get("/", optionalAuth, pollController.getAllPolls);
router.get("/my", checkAuth, pollController.getMyPolls);
router.get("/:id", optionalAuth, pollController.getPollById);
router.post("/:id/vote", checkAuth, checkVoter, pollController.votePoll);
router.patch(
  "/:id/toggle",
  checkAuth,
  checkAdmin,
  pollController.togglePollStatus,
);
router.post("/create-poll", checkAuth, pollController.createPoll);
router.post("/", checkAuth, pollController.createPoll);
module.exports = router;
