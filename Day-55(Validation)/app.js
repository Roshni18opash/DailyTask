const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("form");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
