const { error } = require("console");
const express = require("express");
const db = require("./config/blogDatabase");
const { router } = require("./routers/blog.routes");
const cookieParser = require("cookie-parser");
const path =require("path")

const port = 8000;
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.use(express.json()); //read json data (handel json request)
app.use(express.urlencoded({ extended: true })); //for read xwwwformurl encoded data read krva mate(handle form submission)
app.use(cookieParser());

app.use(router);

app.listen(port, (error) => {
  db();
  if (!error) {
    console.log("Server Start at:- http://localhost:" + port);
  }
})