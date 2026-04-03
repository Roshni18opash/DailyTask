const mongoose = require("mongoose");

const db = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/NodemailerDB");
    console.log("Database Connected");
  } catch (error) {
    console.log(error);
  }
}

module.exports = db;