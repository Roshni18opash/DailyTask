const Post = require("../models/Post");
const User = require("../models/User");

exports.createUser = async (req, res) => {
  await User.create(req.body);
  res.redirect("/");
};

exports.createPost = async (req, res) => {
  await Post.create(req.body);
  res.redirect("/");
};

exports.index = async (req, res) => {
  const posts = await Post.find().populate("author"); //This replaces the stored ObjectId with the full Customer
  // document so I can display customer name on the UI."
  const users = await User.find();

  res.render("index", {
    posts,
    users,
    projectName: "Bank Management System",
    userLabel: "Customer",
    postLabel: "Account",
  });
};

exports.deletePost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.redirect("/");
};
exports.deleteUser = async (req, res) => {
  await Post.deleteMany({ author: req.params.id });
  await User.findByIdAndDelete(req.params.id);
  res.redirect("/");
};
