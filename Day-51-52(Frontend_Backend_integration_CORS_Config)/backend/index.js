const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
dotenv.config();
connectDB();
const app = express();
app.use(
  //add CORS configuration to allow all origin req coming from react
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/contacts", require("./routes/contactRoutes"));

const PORT = process.env.PORT || 8082;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`),
);
