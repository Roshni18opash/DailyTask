const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
  pollId: mongoose.Schema.Types.ObjectId,
  userId: mongoose.Schema.Types.ObjectId,
  optionIndex: Number
});

voteSchema.index({ pollId: 1, userId: 1 }, { unique: true });

module.exports = mongoose.model('Vote', voteSchema);
