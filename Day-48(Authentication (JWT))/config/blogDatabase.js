const mongoose = require("mongoose");

const db = async()=>{
  await mongoose.connect("mongodb://localhost:27017/blogDb");
  console.log("Database is Connected Successfully...");
}

module.exports = db;