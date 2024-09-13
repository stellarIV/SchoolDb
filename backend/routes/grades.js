// routes/grades.js
const express = require('express');
const router = express.Router();
const Grade = require('../models/Grade');

// Create a new grade
router.post('/', async (req, res) => {
  const { grade_name, section, student_id } = req.body;

  // Basic validation
  if (!grade_name || !section) {
    return res.status(400).json({ message: 'Grade name and section are required' });
  }

  try {
    // Create and save the new grade
    const grade = new Grade({ grade_name, section, student_id });
    const savedGrade = await grade.save();
    res.status(201).json(savedGrade);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all grades
router.get('/', async (req, res) => {
  try {
    // Fetch all grades and populate student_id field if needed
    const grades = await Grade.find().populate('student_id');
    res.json(grades);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
