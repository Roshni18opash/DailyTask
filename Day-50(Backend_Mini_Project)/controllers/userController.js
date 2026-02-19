const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//@description Register User
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  // ✅ Validation
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }

  // ✅ Check if user already exists
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already registered!");
  }

  // ✅ Hash password
  const hashPassword = await bcrypt.hash(password, 10);

  // ✅ Create user
  const user = await User.create({
    username,
    email,
    password: hashPassword,
  });

  // ✅ Response
  if (user) {
    res.status(201).json({
      _id: user.id,
      username: user.username,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("User data is not valid!");
  }
});

//@description Login User
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1h" },
    );

    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("Email or password not valid!");
  }
});

//@description Current user Info
//@route GET /api/users/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});
//update user
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  res.status(200).json(user);
});

const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  }).select("-password");

  res.status(200).json(updatedUser);
});
//delete
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  await user.deleteOne();

  res.status(200).json({ message: "User deleted successfully" });
});

module.exports = {
  registerUser,
  getUserById,
  updateUser,
  loginUser,
  deleteUser,
  currentUser,
};
