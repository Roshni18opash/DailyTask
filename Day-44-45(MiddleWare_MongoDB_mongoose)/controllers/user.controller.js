const signIn = require("../models/signin.schema");

// signup
const signup = async (req, res) => {
  let { username, email, password } = req.body;
  try {
    console.log(req.body);
    await signIn.create({ username, email, password });
    console.log("User created successfully");
    return res.redirect("/login");
  } catch (error) {
    console.error(error);
  }
};

const signupPage = async (req, res) => {
  await res.render("signup");
};


// login
const login = async (req, res) => {
  const { username, password } = req.body;
  let user = await signIn.findOne({ username: username });

  if (user) {
    if (user.password === password) {
      res.cookie("id", user.id);  //create cookie
      res.redirect("/");
    } else {
      console.log("Password Invalid");
      return res.redirect("/login");
    }
  } else {
    console.log("Invalid Username");
    return res.redirect("/login");
  }
}

const loginPage = async (req, res) => {
  await res.render("login");
};

// logout
const logout = (req, res) => {
  res.clearCookie("id");
  res.redirect('/login');
}

module.exports = { signup, signupPage, login, loginPage, logout }