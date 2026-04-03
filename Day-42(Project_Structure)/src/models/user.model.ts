import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  city: String, // add city if you are showing it
});

 const User = mongoose.model("User", userSchema);
module.exports={User}