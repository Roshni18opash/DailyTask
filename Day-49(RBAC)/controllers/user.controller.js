// const { name } = require("ejs");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const signIn = require("../models/signin.schema");
// //const { generateToken } = require("../middleware/blogAuth");
// // signup
// const signup = async (req, res) => {
//   const { username, email, password, role } = req.body;
//   const hashedPassword = await bcrypt.hash(password, 10);

//   try {
//     console.log(req.body);
//     await signIn.create({ username, email, password: hashedPassword });
//     console.log(`User ${username} created successfully`);
//     return res.redirect("/login");
//   } catch (error) {
//     console.error(error);
//   }
// };

// const signupPage = async (req, res) => {
//   await res.render("signup");
// };

// // login
// const login = async (req, res) => {
//   const { username, password } = req.body;
//   let user = await signIn.findOne({ username: username });

//   if (user) {
//     if (user.password === password) {
//       // res.cookie("id", user.id);  //create cookie
//       //JWT(json web token)
//       const token = jwt.sign(
//         { id: user._id, role: user.role },
//         process.env.JWT_SECRET,
//         { expiresIn: "1h" },
//       );

//       console.log("this is" + user);
//       res.cookie("myfirstjwt", token);
//       res.redirect("/");
//     } else {
//       console.log("Password Invalid");
//       return res.redirect("/login");
//     }
//   } else {
//     console.log("Invalid Username");
//     return res.redirect("/login");
//   }
// };

// const loginPage = async (req, res) => {
//   await res.render("login");
// };

// // logout
// const logout = (req, res) => {
//   res.clearCookie("id");
//   res.redirect("/login");
// };

// module.exports = {
//   signup,
//   signupPage,
//   login,
//   loginPage,
//   logout,
//   generateToken,
// };
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const signIn = require("../models/signin.schema");

// SIGNUP
const signup = async (req, res) => {
  const { username, email, password, role } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await signIn.create({
      username,
      email,
      password: hashedPassword,
      role,
    });

    console.log(`User ${username} created successfully`);
    return res.redirect("/login");
  } catch (error) {
    console.error(error);
  }
};

const signupPage = async (req, res) => {
  res.render("signup");
};

//LOGIN
const login = async (req, res) => {
  const { username, password } = req.body;

  const user = await signIn.findOne({ username });

  if (!user) {
    console.log("Invalid Username");
    return res.redirect("/login");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    console.log("Invalid Password");
    return res.redirect("/login");
  }
  const token = jwt.sign(
    { id: user._id, role: user.role, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: "1h" },
  );

  res.cookie("myfirstjwt", token);
  res.redirect("/");
};

const loginPage = async (req, res) => {
  res.render("login");
};

// LOGOUT
const logout = (req, res) => {
  res.clearCookie("myfirstjwt");
  res.redirect("/login");
};

module.exports = {
  signup,
  signupPage,
  login,
  loginPage,
  logout,
};
