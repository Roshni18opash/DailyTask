const blog = require("../models/blog.schema");

// index
const index = async (req, res) => {
  try {
    let data = await blog.find();
    res.render("index", { data });
  } catch (error) {
    console.log(error);
  }
};

// form
const form = async (req, res) => {
  try {
    res.render("form");
  } catch (error) {
    console.log(error);
  }
};

// submit
const submit = async (req, res) => {
  // console.log(req.body);
  const { title, image, bname, type, date, dsc } = req.body;

  try {
    const newBlog = await blog.create({ title, image, bname, type, date, dsc });
    res.cookie("blogId", newBlog._id);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

// delete
const deleteData = async (req, res) => {
  let { id } = req.params;
  try {
    await blog.findByIdAndDelete(id);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

// edit
const getEditData = async (req, res) => {
  let id = req.query.id;
  try {
    let data = await blog.findById(id);
    res.render("editData", { data });
  } catch (error) {
    console.log(error);
  }
};

const editData = async (req, res) => {
  let { id } = req.params;
  const { title, image, bname, type, date, dsc } = req.body;

  try {
    await blog.findByIdAndUpdate(
      id,
      { title, image, bname, type, date, dsc },
      { new: true },
    );
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { index, form, submit, deleteData, getEditData, editData };
