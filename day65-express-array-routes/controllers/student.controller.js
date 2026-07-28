const studentModel = require("../model/student.model");

// get api logic
const getallStudents = (req, res) => {
  if (studentModel.length === 0) {
    // error message
    return res.status(404).json({ message: "No Students details found" });
  }

  // success message
  res.status(200).json(studentModel);
};

// post api logic
const addStudent = (req, res) => {
  // div, span, section, form, input ❌
  // body, header ✅
  const { name, email, dept } = req.body;

  const newStudent = {
    id: Date.now(), 
    name, 
    email,
    dept
  };
  studentModel.push(newStudent);
  res.status(201).json({message: "Student record added"});
};

module.exports = { getallStudents, addStudent };