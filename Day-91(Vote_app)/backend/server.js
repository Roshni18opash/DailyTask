require("dotenv").config();
// import voteRoutes = require("./controllers/voteController");
const express = require("express");
const cors = require("cors");
const connectDB = require("./configs/db");
const authRoutes = require("./routes/authRoutes");
const pollRoutes = require("./routes/pollRoutes");
const voteRoutes = require("./routes/voteRoute");
const app = express();

app.use(express.json());
app.use(cors());
connectDB();

app.use("/", authRoutes);
app.use("/api/polls", pollRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`),
);
