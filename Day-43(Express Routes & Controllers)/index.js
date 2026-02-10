
const express = require("express");
const db = require("./config/database");
const userDB = require("./models/userTbl");

const port = 8000;

const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {

  userDB.find({}).then((user) => {
    console.log("Data Successfully Inserted");
    return res.render("form", { user });
  }).catch((error) => {
    console.log(error);
    return false;
  })
});

// store Data
app.post("/insertData", (req, res) => {

  const { name, email, password, gender, hobby, mobile, city } = req.body;

  userDB.create({
    //userId: userId,
    name: name,
    email: email,
    password: password,
    gender: gender,
    hobby: hobby,
    mobile: mobile,
    city: city,
  }).then((user) => {
    console.log("Data Successfully Insserted.");
    return res.redirect("/");
  }).catch((error) => {
    console.log(error);
    return false;
  })
});
// delete data - using parameters
// app.get("/deleteData/:id",(req,res)=>{
//   let id = req.params.id;

//   userDB.findByIdAndDelete(id).then((user)=>{
//     console.log("Data Deleted Successfully");
//     return res.redirect("/");
//   }).catch((error)=>{
//     console.log(error);
//     return false;
//   })
// })
// delete data - using query
app.get("/deleteData", (req, res) => {
  let id = req.query.id;

  userDB.findByIdAndDelete(id).then((user) => {
    console.log("Data Deleted Successfully");
    return res.redirect("/");
  }).catch((error) => {
    console.log(error);
    return false;
  })
})

// edit Data
app.get("/editData", (req, res) => {
  let id = req.query.id;

  userDB.findById(id).then((user) => {
    // console.log(user);
    return res.render("edit", { user });
  }).catch((error) => {
    console.log(error);
    return false;
  })
})
app.post("/editData", (req, res) => {
  let { id, name, email, password, gender, hobby, mobile, city } = req.body;
console.log(req.body);
if(!Array.isArray(hobby)){
  hobby= hobby?[hobby]:[];
}
  userDB.findByIdAndUpdate(id,{name, email, password, gender, hobby, mobile, city}).then(()=>{
    console.log("Data Updated");
    return res.redirect("/");
  }).catch((error)=>{
    console.log(error);
    
  })
})


app.listen(port, (error) => {
  if (!error) {
    console.log("Server Started at http://localhost:" + port);
  } else {
    console.log("Server Not Started Yet.");
    return false;
  }
})