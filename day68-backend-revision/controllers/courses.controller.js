const courseModel = require("../models/courses.model");

// get all courses
const getall_courses = (req, res) => {
    if(courseModel.length === 0){
        return res.status(404).json({message: "No courses found"});
    }
    res.status(200).json(courseModel);
}

// get course by id
const getcourse_byid = (req, res) => {
    const id = Number(req.params.id);

    const searchCourse = courseModel.find(data => data.id === id);

    if(!searchCourse){
        return res.status(404).json({message: "Course Not Found"});
    }

    res.status(200).json(searchCourse);
}

// add course
const add_course = (req, res) => {
    const { title, description, category, mentor } = req.body;

    // validation
    if(!title || !description || !category || !mentor){
        return res.status(400).json({message: "All the fields are mandatory"});
    }

    const newCourse = {
        id: Date.now(),
        title,
        description,
        category,
        mentor
    };
    courseModel.push(newCourse);
    res.status(201).json({message: "Course added"});
}

// edit course
const update_course = (req, res) => {
    const id = Number(req.params.id);
    const {title, description, category, mentor} = req.body;

    const searchCourse = courseModel.find(data => data.id === id);

    if(!searchCourse){
        return res.status(404).json({message: "No Course Found"});
    }

    // update logic
    searchCourse.title = title || searchCourse.title;
    searchCourse.description = description || searchCourse.description;
    searchCourse.category = category || searchCourse.category;
    searchCourse.mentor = mentor || searchCourse.mentor;

    res.status(200).json({message: "Course updated"});
}

// delete course
const delete_course = (req, res) => {
    const id = Number(req.params.id);

    const searchCourse = courseModel.findIndex(data => data.id === id);

    if(searchCourse == -1){
        return res.status(404).json({message: "Course Not Found"});
    }

    courseModel.splice(searchCourse, 1);

    res.status(200).json({message: "Course deleted"});
}

module.exports = {getall_courses, getcourse_byid, add_course, update_course, delete_course};