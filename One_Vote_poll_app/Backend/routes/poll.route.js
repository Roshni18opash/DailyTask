const router = require("express").Router();
const auth = require("../middleware/auth.middleware");

const { createPoll, vote, getPoll } = require("../controllers/poll.controller");

router.post("/", auth, createPoll);
router.get("/:id", getPoll);
router.post("/:id/vote", auth, vote);

module.exports = router;
ss;
