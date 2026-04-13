const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.route");
const taskRoutes = require("./routes/task.route");
const teamRoutes = require("./routes/team.routes");
const projectRoutes = require("./routes/project.route");
const app = express();

app.use(cors());

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/task", taskRoutes);
app.use("/api/team", teamRoutes);
app.use("/api/project", projectRoutes);
app.get("/", (req, res) => {
  res.send("API is running...");
});

module.exports = app;
