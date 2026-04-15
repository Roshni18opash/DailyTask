const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  email: String,
  password: String,
});

export default mongoose.model("User", schema);
