const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User.model");

exports.register = async (req, res) => {
  const { email, password } = req.body;

  const hash = await bcrypt.hash(password, 10);

  const user = await User.create({
    email,
    passwordHash: hash,
  });
  res.json(user);
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  const isMatch = await bcrypt.compare(password, user.passwordHash);
  if (!isMatch) return res.status(400).json({ message: "Invalid password" });
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_TOKEN,
  );
  res.json({ token });
};
