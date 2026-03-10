const express = require("express");
const connectDB = require("./config/db");
const studentRoutes = require("./routes/studentRoutes");

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/students", studentRoutes);
app.get("/", (req, res) => {
  res.send("Hello World");
});
const server = async () => {
  try {
    await connectDB();

    app.listen(port, () => {
      console.log(`MongoDB connected successfully`);
      console.log(`http://localhost:${port}`);
    });
  } catch (err) {
    console.log("Error starting server:", err);
  }
};

server();
