const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const { company, name, featured, sort, select } = req.query;
  console.log(sort);

  const queryObject = {};
  //serach functionality
  if (company) {
    queryObject.company = company;
    //console.log(queryObject.company);
  }
  if (featured) {
    queryObject.featured = featured;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
    //console.log(queryObject.company);
  }
  let apiData = Product.find(queryObject); //jo user a sort lkhyu hoy toj sort kro main data ne
  if (sort) {
    let sortFix = sort.split(",").join(" ");
    apiData = apiData.sort(sortFix);
  }
  //select = name company;

  if (select) {
    //let selectFix = select.replace(",", " ");
    let selectFix = select.split(",").join(" ");
    apiData = apiData.select(selectFix);
  }
  //for pagination
  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 5;
  let skip = (page - 1) * limit;

  apiData = apiData.skip(skip).limit(limit);

  console.log(queryObject);

  const Products = await apiData;
  res.status(200).json({ Products, nbHits: Products.length });
};

//just for testing
// const getAllProductsTesting = async (req, res) => {
//   console.log(req.query);

//const myData = await Product.find(req.query).sort("name");//for accending name
//const myData = await Product.find(req.query).sort("-name"); //for decending name
//const myData = await Product.find(req.query).sort("price"); //low to high

//   const myData = await Product.find(req.query);
//   res.status(200).json({ myData, nbHits: myData.length });
// };

//new
const getAllProductsTesting = async (req, res) => {
  const { page = 1, limit = 2 } = req.query;

  const skip = (page - 1) * limit;

  const myData = await Product.find({}).skip(skip).limit(Number(limit));
  console.log({ ...req.query });

  res.status(200).json({ myData });
};

module.exports = { getAllProducts, getAllProductsTesting };
