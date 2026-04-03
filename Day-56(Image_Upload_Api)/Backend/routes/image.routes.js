const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const imageController = require("../controllers/imageController");

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb(new Error("Only JPEG and PNG allowed"));
    }
  },
  limits: { fileSize: 2 * 1024 * 1024 },
});

// Routes
router.get("/", imageController.getAllImages);
router.get("/upload", imageController.showUploadForm);
router.post("/upload", upload.single("image"), imageController.uploadImage);
router.delete("/image/:id", imageController.deleteImage);

router.get("/image/:id/edit", imageController.showEditForm);
router.put("/image/:id", imageController.updateImage);

module.exports = router;
