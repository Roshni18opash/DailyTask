const mongoose = require("mongoose");

const signInSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
})

const signIn = mongoose.model("signInTbl", signInSchema);
module.exports = signIn;