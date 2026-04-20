const Poll = require("../models/Poll");
const Vote = require("../models/Vote");

exports.createPoll = async (req, res) => {
  try {
    const { question, options } = req.body;

    if (!question || !options || options.length < 2) {
      return res.status(400).json({
        msg: "Question and at least 2 options required.",
      });
    }

    const poll = await Poll.create({
      creatorEmail: req.user.email,
      question,
      options: options.map((text) => ({ text })),
    });

    res.status(201).json(poll);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Failed to create poll" });
  }
};

exports.getAllPolls = async (req, res) => {
  try {
    const polls = await Poll.find();

    let votedPollIds = [];
    if (req.user) {
      const userVotes = await Vote.find({ userId: req.user._id });
      votedPollIds = userVotes.map((v) => v.pollId.toString());
    }

    const pollsData = polls.map((poll) => ({
      ...poll.toObject(),
      isVoted: votedPollIds.includes(poll._id.toString()),
    }));

    res.json(pollsData);
  } catch (err) {
    res.status(500).json({ msg: "Failed to fetch polls" });
  }
};

exports.getMyPolls = async (req, res) => {
  try {
    const polls = await Poll.find({ creatorEmail: req.user.email });
    res.json(polls);
  } catch (err) {
    res.status(500).json({ msg: "Failed to fetch your polls" });
  }
};

exports.getPollById = async (req, res) => {
  try {
    const poll = await Poll.findById(req.params.id);
    if (!poll) {
      return res.status(404).json({ msg: "Poll not found" });
    }

    let userVote = null;

    if (req.user) {
      const vote = await Vote.findOne({
        pollId: poll._id,
        userId: req.user._id,
      });

      if (vote) userVote = vote.optionIndex;
    }

    res.json({
      ...poll.toObject(),
      userVote,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Error fetching poll" });
  }
};

exports.votePoll = async (req, res) => {
  try {
    const { optionIndex } = req.body;

    if (optionIndex === undefined) {
      return res.status(400).json({ msg: "Option required" });
    }

    const poll = await Poll.findById(req.params.id);
    if (!poll) {
      return res.status(404).json({ msg: "Poll not found" });
    }

    if (poll.isClosed) {
      return res.status(400).json({ msg: "Poll is closed for voting" });
    }

    try {
      await Vote.create({
        pollId: req.params.id,
        userId: req.user._id,
        optionIndex,
      });
    } catch (err) {
      if (err.code === 11000) {
        return res
          .status(409)
          .json({ msg: "You have already voted on this poll" });
      }
      throw err;
    }
    await Poll.updateOne(
      { _id: req.params.id },
      { $inc: { [`options.${optionIndex}.votes`]: 1 } },
    );

    res.json({ msg: "Vote recorded successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Vote failed" });
  }
};

exports.togglePollStatus = async (req, res) => {
  try {
    const poll = await Poll.findById(req.params.id);
    if (!poll) {
      return res.status(404).json({ msg: "Poll not found" });
    }

    if (req.user.role !== "admin") {
      return res
        .status(403)
        .json({ msg: "Forbidden: Only admins can open or close polls" });
    }

    poll.isClosed = !poll.isClosed;
    await poll.save();

    res.json({
      msg: `Poll ${poll.isClosed ? "closed" : "opened"} successfuly`,
      isClosed: poll.isClosed,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Failed to toggle poll status" });
  }
};
