import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/VOTE_POLL_DB");
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Database connection failed !");
    process.exit(1);
  }
};
