const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  rollNo: { type: Number, required: true },
  name: { type: String, required: true },
  city: { type: String, required: true },
  age: { type: Number, required: true },
});

studentSchema.index({ rollNo: 1 });
studentSchema.index({ city: 1 });

module.exports = mongoose.model("Student", studentSchema);
