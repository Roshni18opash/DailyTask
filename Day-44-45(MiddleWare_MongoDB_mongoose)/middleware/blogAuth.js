import jwt from "jsonwebtoken";

// Generate JWT token here...
export const generateToken = ({ id, name, email }) => {
  return jwt.sign({ id, name, email }, "jwttoken", { expiresIn: "15d" }); //jwt.io check
};

// Middleware functions
export const formAuth = (req, res, next) => {
  const { title, image, bname, type, date, dsc } = req.body;
  if (title && image && bname && type && date && dsc) {
    next();
  } else {
    return res.redirect("/");
  }
};

export const singAuth = (req, res, next) => {
  const { username, email, password } = req.body;
  if (username && email && password) {
    next();
  } else {
    return res.redirect("/login");
  }
};

export const isAuth = (req, res, next) => {
  const { myfirstjwt } = req.cookies;
  if (myfirstjwt) {
    next();
  } else {
    return res.redirect("/login");
  }
};
