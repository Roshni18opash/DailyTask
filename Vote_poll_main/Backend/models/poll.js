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

export default mongoose.model("Poll", schema);
