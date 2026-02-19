const express = require("express");
const errorHandler = require("./middleware/errorhandler");
const connectDb = require("./configs/dbConnection");
const dotenv = require("dotenv").config();

connectDb();
const app = express();
console.log("Secret:", process.env.ACCESS_TOKEN_SECRET);

const port = process.env.PORT || 8000;
// console.log("welcome to mini project");
app.use(express.json());

app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);
// app.get("/check", (req, res) => {
//   res.send("API Working");
// });

app.listen(port, () => {
  console.log("server running on port:" + port);

  console.log("http://localhost:" + port);
});
