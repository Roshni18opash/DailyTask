const jwt = require("jsonwebtoken");
const formAuth = (req, res, next) => {
  const { title, image, bname, type, date, dsc } = req.body;
  if (title && image && bname && type && date && dsc) {
    next();
  } else {
    return res.redirect("/");
  }
};

const singAuth = (req, res, next) => {
  const { username, email, password, role } = req.body;

  if (username && email && password && role) {
    next();
  } else {
    return res.redirect("/signup");
  }
};
//jwt validation
const isAuth = (req, res, next) => {
  const { myfirstjwt } = req.cookies;

  if (!myfirstjwt) {
    return res.redirect("/login");
  }

  try {
    const decoded = jwt.verify(myfirstjwt, process.env.JWT_SECRET);

    req.user = decoded;
    next();
  } catch (error) {
    return res.redirect("/login");
  }
};

const checkRole = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.send("Access Denied ");
    }
    next();
  };
};

module.exports = {
  formAuth,
  singAuth,
  isAuth,
  checkRole,
};
