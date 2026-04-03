const mongoose = require("mongoose");

const passportSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  phone: Number,
  otp: Number
})

const passportSch = mongoose.model("passportTbl", passportSchema);

module.exports = passportSch;