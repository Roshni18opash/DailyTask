const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");
const validate = require("../middlewares/validateMiddleware");
const verifyToken = require("../middlewares/authMiddleware");

router.post("/register", validate, register);
router.post("/login", login);

router.get("/profile", verifyToken, (req, res) => {
  res.json({
    msg: "Protected route",
    user: req.user,
  });
});

module.exports = router;
