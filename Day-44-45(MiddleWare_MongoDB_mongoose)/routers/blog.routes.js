const { Router } = require("express");
const { index, form, submit, deleteData, getEditData, editData } = require("../controllers/blog.controllers");
const { formAuth, singAuth, isAuth } = require("../middleware/blogAuth");
const { signup, signupPage, login, loginPage, logout } = require("../controllers/user.controller");

const router = Router();

router.get("/", isAuth, index);
router.get("/form", isAuth, form);
router.post("/submit", formAuth, submit);
router.get("/deleteData/:id", deleteData);
router.get("/editData", getEditData);
router.post("/editData/:id", formAuth, editData);

router.get("/signup", signupPage);
router.post("/signup", singAuth, signup);
router.get("/login", loginPage);
router.post("/login", login);
router.get("/logout", logout);

module.exports = { router };
