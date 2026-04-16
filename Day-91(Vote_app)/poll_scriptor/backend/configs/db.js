const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("mongoDB connected!");
  } catch (error) {
    console.error("DB not connected:", error);
    process.exit(1);
  }
};
module.exports = connectDB;
