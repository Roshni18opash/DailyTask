
const mongoose = require("mongoose");

// connect mongoose
mongoose.connect("mongodb://localhost:27017/user");

const db = mongoose.connection;

db.on('connected',(error)=>{
  if(error){
    console.log("Database isn't Connected");
    return false;
  } 
    console.log("Database is Connected");
})

// module.exports = db;