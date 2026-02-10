
const mongoose = require("mongoose");

// schema
const userSchema = new mongoose.Schema({
  // userId: {
  //   type: Number,
  //   required: true,
  // },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true
  },
  hobby: {
    type: Array,
    required: true
  },
  mobile: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  }
})

const userDB = mongoose.model("userTbl", userSchema);

module.exports = userDB;