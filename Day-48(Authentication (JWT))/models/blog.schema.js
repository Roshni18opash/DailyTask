const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  bname: String,
  type: String,
  date: String,
  dsc: String
})

const blog = mongoose.model("blogTbl", blogSchema);
module.exports = blog;