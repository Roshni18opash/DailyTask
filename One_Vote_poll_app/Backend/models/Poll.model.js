const mongoose = require("mongoose");

const pollSchema = new mongoose.Schema(
  {
    creatorId: mongoose.Types.ObjectId,
    questions: String,
    options: [
      {
        text: String,
        count: {
          type: Number,
          default: 0,
        },
      },
    ],
    closed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Poll", pollSchema);
