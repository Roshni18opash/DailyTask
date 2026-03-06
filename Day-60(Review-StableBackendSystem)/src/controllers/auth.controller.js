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
}

//user login controller
//POST /api/auth/login
const userLoginController = async (req, res) => {
  const { email, password } = req.body;
};
module.exports = { userRegisterController };
