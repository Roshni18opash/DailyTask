const mongoose = require("mongoose");

const voteSchema = new mongoose.Schema({
  pollId: mongoose.Types.ObjectId,
  userId: mongoose.Types.ObjectId,
  optionIndex: Number,
});

voteSchema.index(
  {
    pollId: 1,
    userId: 1,
  },
  {
    unique: true,
  },
);
module.exports = mongoose.model("Vote", voteSchema);
