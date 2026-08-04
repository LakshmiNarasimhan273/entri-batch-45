const express = require("express");
const router = express.Router();

const courseController = require("../controllers/courses.controller");

router.get("/", courseController.getall_courses);
router.get("/:id", courseController.getcourse_byid);
router.post("/", courseController.add_course);
router.put("/:id", courseController.update_course);
router.delete("/:id", courseController.delete_course);

module.exports = router;