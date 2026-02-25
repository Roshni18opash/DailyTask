const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const products_routes = require("./routes/products");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.use(express.static("./public"));

app.use("/api/products", products_routes);

const server = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

server();
