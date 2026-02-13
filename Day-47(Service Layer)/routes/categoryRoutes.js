const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

router.get("/category/add", categoryController.showCategoryForm);
router.post("/category/add", categoryController.addCategory);

module.exports = router;
