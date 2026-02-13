const Category = require("../models/categoryModel");

exports.showCategoryForm = (req, res) => {
  res.render("addCategory");
};

exports.addCategory = async (req, res) => {
  try {
    await Category.create({ name: req.body.name });
    res.redirect("/add");
  } catch (err) {
    console.log(err);
  }
};
