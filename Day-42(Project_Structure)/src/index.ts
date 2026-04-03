const express = require("express");
const path = require("path");
const userRoutes = require("./routes/user.routes");
const { connectDB } = require("./config/database");


const app = express();
connectDB();
app.use(express.static(path.join(process.cwd(), "public")));
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));





app.use("/", userRoutes);

app.listen(8000, () => {
  console.log("Server running on http://localhost:8000");
});
