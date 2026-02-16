const { Router } = require("express");
const {
  index,
  form,
  submit,
  deleteData,
  getEditData,
  editData,
} = require("../controllers/blog.controllers");
const {
  formAuth,
  singAuth,
  isAuth,
  checkRole,
} = require("../middleware/blogAuth");
const {
  signup,
  signupPage,
  login,
  loginPage,
  logout,
} = require("../controllers/user.controller");
const router = Router();

router.get("/", isAuth, index);

// Add blog (admin + manager)
router.get("/form", isAuth, checkRole(["admin", "manager"]), form);

router.post(
  "/submit",
  isAuth,
  checkRole(["admin", "manager"]),
  formAuth,
  submit,
);

// Delete blog (admin only)
router.get("/deleteData/:id", isAuth, checkRole(["admin"]), deleteData);

// Edit blog (admin + manager)
router.get("/editData", isAuth, checkRole(["admin", "manager"]), getEditData);

router.post(
  "/editData/:id",
  isAuth,
  checkRole(["admin", "manager"]),
  formAuth,
  editData,
);

router.get("/signup", signupPage);
router.post("/signup", singAuth, signup);

router.get("/login", loginPage);
router.post("/login", login);

router.get("/logout", logout);

module.exports = { router };
