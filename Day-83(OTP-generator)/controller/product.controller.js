const product = require("../models/product.schema")

const productPage = async (req, res) => {
  try {
    let data = await product.find()
    return res.render("product", { data, user: req.user })
  } catch (error) {
    console.log(error);
  }
}

// insert data
const addProduct = async (req, res) => {
  try {
    await product.create(req.body);
    return res.redirect("/product");
  } catch (error) {
    console.log(error);
  }
}

// delete data
const deleteData = async (req, res) => {
  try {
    let { id } = req.params;
    await product.findByIdAndDelete(id);
    res.redirect("/product");
  } catch (error) {
    console.log(error);
  }
}

// update data
const updateData = async (req, res) => {
  try {
    let { id } = req.params;
    await product.findByIdAndUpdate(id, req.body);
    res.send("Data updated Successfully....");
  } catch (error) {
    console.log(error);
  }
}
module.exports = { productPage, addProduct, deleteData, updateData }