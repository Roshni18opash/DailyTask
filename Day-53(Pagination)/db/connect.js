// const mongoose = require("mongoose");

// uri = "mongodb://localhost:27017/Pagination";

// const connectDB = () => {
//   return mongoose.connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
// };
// module.exports = connectDB;
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(
      "Database Connected:",
      connect.connection.host,
      connect.connection.name,
    );
  } catch (error) {
    console.log("Database connection failed:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
