const { Poll } = require("../models/Poll");
exports.voteOnPoll = async (req, res) => {
  try {
    const pollId = req.params.id;
    const { optionId } = req.body;

    const poll = await Poll.findById(pollId);

    if (!poll) {
      return res.status(404).json({ msg: "Poll not Found" });
    }

    if (poll.isClosed) {
      return res.status(400).json({
        msg: "Poll is closed",
      });
    }

    const option = poll.options.id(optionId);

    if (!option) {
      return res.status(404).json({
        msg: "Option Not Found!",
      });
    }
    option.votes += 1;

    res.json({ msg: "Vote Successfully submitted!", poll });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
