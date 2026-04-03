const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const methodOverride = require("method-override");
const path = require("path");
dotenv.config();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

const routes = require("./routes/image.routes");
app.use("/", routes);

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongodb connected");

    const port = process.env.PORT || 8080;
    app.listen(port, () => console.log("http://localhost:" + port));
  } catch (error) {
    console.log(error);
  }
};

db();
