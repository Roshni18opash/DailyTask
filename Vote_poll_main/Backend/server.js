const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = 8082;

const pollRoutes = require("./routes/pollRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/pollapp");

app.use("/api/auth", authRoutes);
app.use("/api/polls", pollRoutes);

app.listen(port, () => console.log("Server running"));
