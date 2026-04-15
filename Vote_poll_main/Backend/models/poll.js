const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  question: String,
  options: [
    {
      text: String,
      count: {
        type: Number,
        default: 0,
      },
    },
  ],
});
module.exports = mongoose.model("Poll", schema);
