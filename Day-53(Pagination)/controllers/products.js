const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const { company, name, featured, sort, select } = req.query;

  const queryObject = {};

  if (company) queryObject.company = company;
  if (featured) queryObject.featured = featured === "true";

  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  if (req.query.numericFilters) {
    const operatorMap = {
      ">": "$gt",
      ">=": "$gte",
      "=": "$eq",
      "<": "$lt",
      "<=": "$lte",
    };

    const regEx = /\b(>=|<=|>|<|=)\b/g;

    let filters = req.query.numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`,
    );

    const options = ["price", "rating"];

    filters.split(",").forEach((item) => {
      const [field, operator, value] = item.split("-");
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) };
      }
    });
  }

  let apiData = Product.find(queryObject);

  // Sorting
  if (sort) {
    const sortFix = sort.split(",").join(" ");
    apiData = apiData.sort(sortFix);
  } else {
    apiData = apiData.sort("createdAt");
  }

  // Field Selection
  if (select) {
    const selectFix = select.split(",").join(" ");
    apiData = apiData.select(selectFix);
  }

  // Pagination
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 5;
  const skip = (page - 1) * limit;

  apiData = apiData.skip(skip).limit(limit);

  const Products = await apiData;

  const totalProducts = await Product.countDocuments(queryObject);
  const totalPages = Math.ceil(totalProducts / limit);

  res.status(200).json({
    nbHits: Products.length,
    totalProducts,
    totalPages,
    currentPage: page,
    Products,
  });
};

module.exports = { getAllProducts };
