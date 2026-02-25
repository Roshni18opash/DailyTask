const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const { company, name, sort, page, limit } = req.query;

  let queryObject = {};
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  if (company) {
    queryObject.company = company;
  }

  let apiData = Product.find(queryObject);

  if (sort) {
    apiData = apiData.sort(sort.split(",").join(" "));
  } else {
    apiData = apiData.sort("createdAt");
  }

  const pageNumber = Number(page) || 1;
  const limitNumber = Number(limit) || 5;
  const skip = (pageNumber - 1) * limitNumber;

  apiData = apiData.skip(skip).limit(limitNumber);

  const products = await apiData;
  const totalProducts = await Product.countDocuments(queryObject);
  const totalPages = Math.ceil(totalProducts / limitNumber);

  res.status(200).json({
    totalProducts,
    totalPages,
    currentPage: pageNumber,
    products,
  });
};

module.exports = { getAllProducts };
