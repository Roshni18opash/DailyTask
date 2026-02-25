import express from "express";
import path from "path";
import connectDB from "./config/db";
import userRoutes from "./routes/user.routes";

const app = express();

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", userRoutes);

app.listen(5000, () => {
  console.log("http://localhost:"+5000);
});