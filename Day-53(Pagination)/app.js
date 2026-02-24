const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const PORT = process.env.PORT || 5000;
const dotenv = require("dotenv").config();
const products_routes = require("./routes/products");

app.get("/", (req, res) => {
  res.send("HI, I am Roshni");
});
app.use("/api/products", products_routes);
const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
