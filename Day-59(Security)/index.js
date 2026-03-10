const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const authRoutes = require("./routes/authRoutes");
//const authController = require("./controllers/authController");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = require("./configs/db");

app.use(express.json());
app.use(helmet()); //enable 15 headers
//ccross site scripting-XSS - avoid wrong script on page
//Clickjacking - avoid to show page in iframe,so user can not click on wrong btn
//MIME sniffing - avoid to guess content type of file,so it can not execute wrong script
//EXPRESS send header X-Powered-By: Express, so we can hide it by helmet.hidePoweredBy()
//HTTP - TELL browser to use HTTPS instead of HTTP, so we can use helmet.hsts() to set Strict-Transport-Security header
app.use(
  cors({
    origin: "http://localhost:8000",
  }),
);
connectDB();
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, //in 15 min 5 req allowed
  max: 5,
});
app.use(limiter);

app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log("Server running on", +port);

  console.log("http://localhost:", port);
});
