const Student = require("../models/studentModel");
//Queries:db.students.find({ rollNo: 1 }).explain("executionStats") show:IXSCAN
//http://localhost:8080/api/students/add (pass body)  POST
exports.addStudent = async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.status(201).json({ message: "Student added successfully" });
};
//http://localhost:8080/api/students/get  GET
exports.getStudents = async (req, res) => {
  const students = await Student.find();
  res.status(200).json(students);
};
//search by roll number
exports.getStudentByRoll = async (req, res) => {
  const student = await Student.findOne({ rollNo: req.params.rollNo });
  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }
  res.status(200).json(student);
};
//search by city
exports.getStudentsByCity = async (req, res) => {
  const students = await Student.find({ city: req.params.city });
  if (students.length === 0) {
    return res.status(404).json({ message: "No students found in this city" });
  }
  res.status(200).json(students);
};
exports.deleteStudent = async (req, res) => {
  const student = await Student.findOneAndDelete({ rollNo: req.params.rollNo });
  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }
  res.status(200).json({ message: "Student deleted successfully" });
};
exports.updateStudent = async (req, res) => {
  const student = await Student.findOneAndUpdate(
    { rollNo: req.params.rollNo },
    req.body,
    { new: true },
  );
  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.status(200).json({ message: "Student updated successfully", student });
};
