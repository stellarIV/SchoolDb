const express = require('express');
const router = express.Router();
const Assessment = require('../models/Assesment');

// Create a new assessment
router.post('/', async (req, res) => {
  const { studentId, courseId, gradeId, midterm, finalterm, continuous } = req.body;

  if (!studentId || !courseId || !gradeId || midterm === undefined || finalterm === undefined || continuous === undefined) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const assessment = new Assessment({
      student_id: studentId,
      course_id: courseId,
      grade_id: gradeId,
      midterm,
      finalterm,
      continuous,
    });
    
    const savedAssessment = await assessment.save();
    res.status(201).json(savedAssessment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all assessments
router.get('/', async (req, res) => {
  try {
    const assessments = await Assessment.find()
      .populate('student_id')
      .populate('course_id')
      .populate('grade_id');
    res.json(assessments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
