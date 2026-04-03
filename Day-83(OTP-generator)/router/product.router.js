const { Router } = require("express");
const { productPage, addProduct, deleteData, updateData } = require("../controller/product.controller");

const p_router = Router();

p_router.get("/", productPage);
p_router.post("/addproduct", addProduct);
p_router.get("/delete/:id", deleteData);
p_router.patch("/update/:id", updateData);

module.exports = { p_router }