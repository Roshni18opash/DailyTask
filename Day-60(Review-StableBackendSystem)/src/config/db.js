const mongoose = require("mongoose");

const connectDB = () => {
  return mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Server is connected to db");
    })
    .catch((err) => {
      console.log("Error connecting to db", err);
      process.exit(1); // Exit the process with an error code
    });
};
module.exports = connectDB;
