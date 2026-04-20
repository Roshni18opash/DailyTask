const mongoose = require("mongoose");

const pollSchema = new mongoose.Schema({
  creatorEmail: String,
  question: String,
  isClosed: {
    type: Boolean,
    default: false,
  },
  options: [{ text: String, votes: { type: Number, default: 0 } }],
});

module.exports = mongoose.model("Poll", pollSchema);
