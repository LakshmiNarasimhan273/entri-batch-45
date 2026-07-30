const patientModel = require("../models/patient.model");

// get all patients information, method: GET
const getall_patients = (req, res) => {
  if (patientModel.length === 0) {
    return res.status(404).json({ message: "Not patient records found" });
  }
  res.status(200).json(patientModel);
};

// get patient by ID, method: GET
const getpatient_byid = (req, res) => {
  const id = Number(req.params.id); // http://localhost:8083/patient/283476812

  const searchPatient = patientModel.find((data) => data.id === id);

  if (!searchPatient) {
    return res.status(404).json({ message: "No patient record found" });
  }
  res.status(200).json(searchPatient);
};

// create a new patient record in our db, method: POST
const add_patient = (req, res) => {
  const { name, mobilenumber, reason } = req.body;

  //   validation
  if (!name || !mobilenumber || !reason) {
    return res.status(400).json({ message: "All 3 fields are mandatory" });
  }

  const newPatient = {
    id: Date.now(),
    name,
    mobilenumber,
    reason,
  };
  patientModel.push(newPatient);
  res.status(201).json({ message: "Patient record created", newPatient });
}; // 70% industry aligned api structure

// update the existing patient records, method: PUT
// inputs: id, updatedData
const update_patient = (req, res) => {
  const id = Number(req.params.id);
  const { name, mobilenumber, reason } = req.body;

  const searchPatient = patientModel.find(data => data.id === id);
    // find -> indicator: 0 & 1

  if (!searchPatient) {
    return res.status(404).json({ message: "No patient record found" });
  }

//   update logic
  searchPatient.name = name || searchPatient.name ;
  searchPatient.mobilenumber = mobilenumber || searchPatient.mobilenumber;
  searchPatient.reason = reason || searchPatient.reason;

  res.status(200).json({message: "Patient record updated"});
};// 60% industry aligned api structure

// delete the patient record, method: DELETE/
const delete_patient = (req, res) => {
    const id = Number(req.params.id);

    const searchPatient = patientModel.findIndex(data => data.id === id);
    // find -> indicator: 0 & 1
    // -> 0
    if(searchPatient == -1){
        return res.status(404).json({message: "Patient record not found"});
    }
    patientModel.splice(searchPatient, 1);

    res.status(200).json({message: "Patient record deleted"});
}

module.exports = { getall_patients, getpatient_byid, add_patient, update_patient, delete_patient };