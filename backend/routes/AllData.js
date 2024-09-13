// routes/allData.js
const express = require('express');
const router = express.Router();
const Student = require('../models/Student');
const Course = require('../models/Course');
const Grade = require('../models/Grade');
const Assessment = require('../models/Assesment');

// Get all data joined
router.get('/', async (req, res) => {
  try {
    const assessments = await Assessment.find()
      .populate('student_id')
      .populate('course_id')
      .populate('grade_id');

    const data = assessments.map(assessment => {
      const student = assessment.student_id;
      const course = assessment.course_id;
      const grade = assessment.grade_id;

      const average = ((assessment.midterm + assessment.finalterm + assessment.continuous) / 3).toFixed(2);
      
      return {
        fname: student.fname,
        lname: student.lname,
        course_name: course.course_name,  // Changed from coursename to course_name
        gradename: grade.grade_name,
        gradesection: grade.section,
        mid: assessment.midterm,
        final: assessment.finalterm,
        continuous: assessment.continuous,
        average: parseFloat(average).toFixed(2),
      };
    });

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
