const express = require("express");
const db = require("./config/passportDb");
const { router } = require("./router/passport.router");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const { localAuth } = require("./middleware/passportAuth");
const { p_router } = require("./router/product.router");

const port = 8082;
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({ secret: "private-key", resave: false, saveUninitialized: false }));

localAuth(passport);

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static("public"));
app.use(router);
app.use("/product", p_router)

app.listen(port, (error) => {
  db();
  if (!error) {
    console.log("Server start at:- http://localhost:" + port);
  }
})