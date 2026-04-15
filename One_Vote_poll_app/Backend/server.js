require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth.route");
const pollRoutes = require("./routes/poll.route");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/polls", pollRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    message: err.message || "Server Error",
  });
});

mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(5000, () => console.log("Server running on 5000"));
});
