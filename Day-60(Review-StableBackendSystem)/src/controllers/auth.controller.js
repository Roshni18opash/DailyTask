const emailService = require("../services/email.service");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

//user registration controller
//POST /api/auth/register
async function userRegisterController(req, res) {
  const { name, email, password } = req.body;

  const isExits = await userModel.findOne({ email: email });
  if (isExits) {
    return res
      .status(422)
      .json({ message: "Email already exists", status: "failed!" });
  }
  const user = await userModel.create({ name, email, password });
  // Generate JWT token for the registered user
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  res.cookie("token", token);
  res.status(201).json({
    user: {
      _id: user._id,
      email: user.email,
      name: user.name,
    },

    token,
  });
  await emailService.sendRegistrationEmail(user.email, user.name);
}

//user login controller
//POST /api/auth/login
const userLoginController = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email: email }).select("+password");
  if (!user) {
    return res
      .status(401)
      .json({ message: "User not found", status: "failed!" });
  }
  // Check if the provided password matches the user's password
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return res
      .status(401)
      .json({ message: "Invalid credentials", status: "failed!" });
  }
  const isValidPassword = await user.comparePassword(password);
  if (!isValidPassword) {
    return res
      .status(401)
      .json({ message: "Invalid credentials", status: "failed!" });
  }
  // Generate JWT token for the logged-in user
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  res.cookie("token", token);
  res.status(200).json({
    user: {
      _id: user._id,
      email: user.email,
      name: user.name,
    },
    token,
  });
};
module.exports = { userRegisterController, userLoginController };
