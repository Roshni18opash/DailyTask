const Image = require("../models/imageModel");
const cloudinary = require("../config/cloudinary");
const fs = require("fs");

//get all img
exports.getAllImages = async (req, res) => {
  const images = await Image.find().sort({ createdAt: -1 });
  res.render("index", { images });
};
//show form
exports.showUploadForm = (req, res) => {
  res.render("upload");
};

//upload img
exports.uploadImage = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    const newImage = new Image({
      title: req.body.title,
      description: req.body.description,
      imageUrl: result.secure_url,
    });
    await newImage.save();

    //local file delete here (unneccesary to store )
    fs.unlinkSync(req.file.path);
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.status(500).send("image uploading failed");
  }
};
//delete img
exports.deleteImage = async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) return res.status(404).send("Image not found");

    // Extract public_id from URL
    const publicId = image.imageUrl.split("/upload/")[1].split(".")[0];

    await cloudinary.uploader.destroy(publicId);

    await Image.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error deleting image");
  }
};
// Show edit form
exports.showEditForm = async (req, res) => {
  const image = await Image.findById(req.params.id);
  if (!image) return res.status(404).send("Image not found");
  res.render("edit", { image });
};

// Update title/description
exports.updateImage = async (req, res) => {
  try {
    await Image.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      description: req.body.description,
    });
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error updating image");
  }
};
