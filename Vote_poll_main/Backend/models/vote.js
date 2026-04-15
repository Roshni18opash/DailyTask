const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  pollId: mongoose.Schema.Types.ObjectId,
  userId: mongoose.Schema.Types.ObjectId,
  optionIndex: Number,
});

schema.index({ pollId: 1, userId: 1 }, { unique: true });

module.exports = mongoose.model("Vote", schema);
