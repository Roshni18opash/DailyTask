require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./models/product");
const ProductJson = require("./products.json");
const start = async () => {
  try {
    await connectDB(process.env.CONNECTION_STRING);
    await Product.deleteMany();
    await Product.create(ProductJson);
    console.log("get all data!");
  } catch (error) {
    console.log(error);
  }
};
start();
