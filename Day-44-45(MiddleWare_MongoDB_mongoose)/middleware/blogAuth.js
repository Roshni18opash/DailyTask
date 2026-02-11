// form
const formAuth = (req, res, next) => {
  const { title, image, bname, type, date, dsc } = req.body;

  if (title && image && bname && type && date && dsc) {
    next();
  } else {
    return res.redirect('/');
  }
}

// signup
const singAuth = (req, res, next) => {
  const { username, email, password } = req.body;
  if (username && email && password) {
    next();
  } else {
    // res.send("All fields are required.");
    return res.redirect('/login');
  }
}

//check the user is authenticated
const isAuth = (req, res, next) => {
  let { id } = req.cookies;
  if (id) {
    next();
  } else {
    return res.redirect("/login");
  }
}

module.exports = { formAuth, singAuth, isAuth };