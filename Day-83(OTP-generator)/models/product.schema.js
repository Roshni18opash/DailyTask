const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  image: String,
  dsc: String,
  rate: Number
})

const product = mongoose.model("productTbl", productSchema);

module.exports = product;