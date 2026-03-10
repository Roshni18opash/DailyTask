const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please Add the username Name"],
    },
    email: {
      type: String,
      required: [true, "Please Add the email Address"],
      unique: [true, "Email address already taken"],
    },
    password: {
      type: String,
      required: [true, "Please Add the user password"],
    },
  },
  {
    timestamps: true,
  },
);
module.exports = mongoose.model("Users", userSchema);
