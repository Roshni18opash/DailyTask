const jwt = require("jsonwebtoken");
const User = require("../models/User");

const checkAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).send("Unauthorized");

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.userId);

    if (!req.user) return res.status(401).send("User not found");
    next();
  } catch {
    res.status(401).send("Unauthorized");
  }
};

const optionalAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (token && token !== "null") {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId);
    }
  } catch (err) {
    res.status().send("token not provided");
  }
  next();
};

const checkAdmin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403).send("Forbidden: Admins only");
  }
};

const checkVoter = (req, res, next) => {
  if (req.user && req.user.role === "voter") {
    next();
  } else {
    res.status(403).send("Forbidden: Voters only");
  }
};

module.exports = { checkAuth, optionalAuth, checkAdmin, checkVoter };
