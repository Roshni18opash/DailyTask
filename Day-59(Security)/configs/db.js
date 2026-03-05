const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Database Connected Successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
module.exports = connectDB;
