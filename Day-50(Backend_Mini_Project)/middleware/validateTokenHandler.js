const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const validateToken = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    // token = authHeader.split(" ")[1];
    //
    //   if (err) {
    res.status(401);
    throw new Error("User is notb Authorized!");
  }
  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      res.status(401);
      throw new Error("User not Authorized!");
    }

    //console.log(decoded);
    req.user = decoded.user;
    next();
  });
});
module.exports = validateToken;
