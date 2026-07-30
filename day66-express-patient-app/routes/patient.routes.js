const express = require("express");
const router = express.Router();

const patientController = require("../controllers/patient.controller");

router.get("/patient", patientController.getall_patients);
router.get("/patient/:id", patientController.getpatient_byid);
router.post("/patient", patientController.add_patient);
router.put("/patient/:id", patientController.update_patient);
router.delete("/patient/:id", patientController.delete_patient);
// http://localhost:8083/patient/1234

module.exports = router;