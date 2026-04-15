const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = "../models/user.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const hash = await bcrypt.hash(req.body.password, 10);
  const user = await User.create({
    email: req.body.email,
    password: hash,
  });
  res.json(user);
});
router.post("/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
  });
  if (!user) return res.status(400).json({ msg: "User not found" });

  const match = await bcrypt.compare(req.body.password, user.password);

  if (!match) return res.status(400).json({ msg: "Wrong password" });

  const token = jwt.sign({ id: user._id }, "secret");

  res.json({ token });
});

export default router;
