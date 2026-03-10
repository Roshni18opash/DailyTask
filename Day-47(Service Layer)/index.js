const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const taskRoutes = require("./routes/taskRoutes");
const app = express();
const port = 8082;
const categoryRoutes = require("./routes/categoryRoutes");
mongoose
  .connect("mongodb://localhost:27017/taskManagerDb")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.use("/", taskRoutes);
app.use(categoryRoutes);

app.listen(port, (err) => {
  if (!err) {
    console.log("http://localhost:" + port);
  } else {
    console.log("oops!! something went wrong!!" + err);
  }
});
