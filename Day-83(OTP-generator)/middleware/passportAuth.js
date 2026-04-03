const passport = require("passport");
const passportSch = require("../models/passport.schema");
const LocalStrategy = require("passport-local").Strategy;

// Middleware check request body contains all required fields
const auth = (req, res, next) => {
  const { username, email, password } = req.body;
  if (username && email && password) {
    next();
  } else {
    res.send("All fields are required.");
  }
};

// Middleware check the user is authenticated
const isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.redirect("/login");
  }
};

// Passport configuration for local authentication
const localAuth = (passport) => {
  passport.use(new LocalStrategy(async (username, password, done) => {
    try {
      let user = await passportSch.findOne({ username: username });
      if (!user) {
        return done(null, false, { message: "Incorrect username." });
      }
      if (user.password !== password) {
        return done(null, false, { message: "Incorrect password." });
      }
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }));
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      let user = await passportSch.findById(id);
      done(null, user);
    } catch (error) {
      done(error);
    }
  });
}
module.exports = { auth, isAuth, localAuth };