const express = require("express");
const bodyParser = require("body-parser");
const db = require("./config/database");
const Book = require("./models/Book");
const app = express();
const port = 8081;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

/* ================= HOME / FORM ================= */
app.get("/", (req, res) => {
  res.render("form");
});

/* ================= CREATE ================= */
app.post("/insertData", (req, res) => {
  const { url, title, author, dsc, price } = req.body;

  Book.create({ url, title, author, dsc, price })
    .then(() => {
      console.log("Book Added");
      res.redirect("/show");
    })
    .catch((err) => console.log(err));
});

/* ================= READ ================= */
app.get("/show", (req, res) => {
  Book.find({})
    .then((data) => {
      res.render("show", { data });
    })
    .catch((err) => console.log(err));
});

/* ================= DELETE ================= */
app.get("/deleteData", (req, res) => {
  const id = req.query.id;

  Book.findByIdAndDelete(id)
    .then(() => {
      console.log("Book Deleted");
      res.redirect("/show");
    })
    .catch((err) => console.log(err));
});

/* ================= EDIT PAGE ================= */
app.get("/editData", (req, res) => {
  const id = req.query.id;

  Book.findById(id)
    .then((data) => {
      res.render("edit", { data });
    })
    .catch((err) => console.log(err));
});

/* ================= UPDATE ================= */
app.post("/editData", (req, res) => {
  const { id, url, title, author, dsc, price } = req.body;

  Book.findByIdAndUpdate(id, {
    url,
    title,
    author,
    dsc,
    price,
  })
    .then(() => {
      console.log("Book Updated");
      res.redirect("/show");
    })
    .catch((err) => console.log(err));
});

app.listen(port, () => {
  console.log("Server Started");
  console.log("http://localhost:" + port);
});
