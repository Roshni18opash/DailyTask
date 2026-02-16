const { error } = require("console");
const express = require("express");
const db = require("./config/blogDatabase");
const { router } = require("./routers/blog.routes");
const cookieParser = require("cookie-parser");
const path = require("path");
require("dotenv").config();

const PORT = process.env.PORT || 8082;
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use(express.json()); //read json data (handel json request)
app.use(express.urlencoded({ extended: true })); //for read xwwwformurl encoded data read krva mate(handle form submission)
app.use(cookieParser());
app.use((req, res, next) => {
  const token = req.cookies.myfirstjwt;
  //if valid, saves decoded user info to res.locals.user → available in all EJS templates.If invalid/missing, sets res.locals.user = null.
  if (token) {
    try {
      const decoded = require("jsonwebtoken").verify(
        token,
        process.env.JWT_SECRET,
      );
      res.locals.user = decoded;
    } catch (err) {
      res.locals.user = null;
    }
  } else {
    res.locals.user = null;
  }

  next();
});

app.use("/", router);

const startServer = async () => {
  try {
    await db();

    app.listen(PORT, () => {
      console.log("Server Start at:- http://localhost:" + PORT);
    });
  } catch (error) {
    console.log("Server failed to start ", error);
  }
};

startServer();
