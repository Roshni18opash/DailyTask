const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeaer = req.headers.authorization;

  if (!authHeaer) {
    return res.status(401).json({ msg: "Access denied" });
  }
  const token = authHeaer.split(" ")[1];
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ msg: "Invalid token" });
  }
};

module.exports = verifyToken;
