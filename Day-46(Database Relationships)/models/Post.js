const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String, //a/c name
  content: String, // a/c details
  accountType: String, //saving/current/salary
  author: {
    //Referance relationship  This stores only the Customer's
    //  ObjectId and creates a reference to the User collection."
    type: mongoose.Schema.Types.ObjectId, //objid store only userID
    ref: "User", //a/c link to customer
  },
});

module.exports = mongoose.model("Post", postSchema);
