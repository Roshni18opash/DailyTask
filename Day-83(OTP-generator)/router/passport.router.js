const { Router } = require("express");
const { index, index2, signupPage, signup, login, loginPage, formBasic, table, logout, profile, changePassword, changePasswordPage, forgetPassword, verifyOtp, resetPasswordPage, resetPassword } = require("../controller/passport.controller");
const { auth, isAuth } = require("../middleware/passportAuth");
const passport = require("passport");

const router = Router();

router.get("/", isAuth, index);
router.get("/index", isAuth, index2);
router.get("/signup", signupPage);
router.post("/signup", auth, signup);
router.post("/login", login);
router.post("/local", passport.authenticate('local', { successRedirect: "/", failureRedirect: "/login" }));
router.get("/login", loginPage);
router.get("/form-basic", isAuth, formBasic);
router.get("/tables", isAuth, table);
router.get("/logout", logout);
router.get("/profile", isAuth, profile);
router.get("/changepassword", isAuth, changePassword);
router.post("/changepassword", isAuth, changePasswordPage);
router.post("/forget", forgetPassword);
router.post("/verify", verifyOtp);
router.get("/reset-password", resetPasswordPage);
router.post("/reset-password", resetPassword);

module.exports = { router };
