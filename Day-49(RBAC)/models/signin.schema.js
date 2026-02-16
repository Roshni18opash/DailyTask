const mongoose = require("mongoose");

const signInSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["admin", "manager", "user"],
    },
  },
  {
    timestamps: true,
  },
);

const signIn = mongoose.model("signInTbl", signInSchema);
module.exports = signIn;
