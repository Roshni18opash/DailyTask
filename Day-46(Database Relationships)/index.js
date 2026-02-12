const express = require("express");
const connectDB = require("./config/db");
const routes = require("./routes/postRoutes");

const app = express();
connectDB();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

app.listen(8000, () => {
  console.log("Server running");
  console.log("http://localhost:8000");
});
