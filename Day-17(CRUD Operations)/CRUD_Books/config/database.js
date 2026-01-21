const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://roshni:12345@cluster0.yj3ae4z.mongodb.net/CRUD");

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Database Connected");
});

db.on("error", (err) => {
  console.log("DB Error:", err);
});

module.exports = db;
