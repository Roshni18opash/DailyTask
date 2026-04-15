const express = require("express");
const Poll = require("../models/poll");
const Vote = require("../models/vote");
const auth = require("../middlewares/auth");
const { text } = require("body-parser");
const { default: poll } = require("../models/poll");

const router = express.Router();

//poll crt here
router.post("/", auth, async (req, res) => {
  const { question, options } = req.body;

  if (!question || options.length < 2) {
    return res.status(400).json({
      msg: "Invalid Data",
    });
  }
  const poll = await Poll.create({
    question,
    options: options.map((o) => ({
      text: o,
    })),
  });
  res.json(poll);
});

//get poll
router.get("/:id", async (req, res) => {
  const poll = await Poll.findById(req.params.id);
  res.json(poll);
});

router.post("/:id/vote", auth, async (req, res) => {
  try {
    await Vote.create({
      pollId: req.params.id,
      userId: req.user.id,
      optionIndex: req.body.optionIndex,
    });
    await Poll.updateOne(
      { _id: req.params.id },
      {
        $inc: { [`options.${req.body.optionIndex}.count`]: 1 },
      },
    );
    res.json({ msg: "Voted Successfully" });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ msg: "Already voted" });
    }
    res.status(500).json({ msg: "server Error" });
  }
});
export default router;
