const express = require('express');
const router = express.Router();
const Student = require('../models/Student');
const Assessment = require('../models/Assesment');

router.get('/', async (req, res) => {
  const { fname, lname } = req.query;

  try {
    console.log(`Searching for student: ${fname} ${lname}`);
    
    // Find the student
    const student = await Student.findOne({ fname, lname }).populate({
      path: 'gradeId',
      select: 'grade_name section',
    });

    if (!student) {
      console.log('Student not found');
      return res.status(404).json({ message: 'Student not found' });
    }

    console.log('Student found:', student);

    // Find assessments
    const assessments = await Assessment.find({ studentId: student._id }).populate('courseId', 'courseName');

    console.log('Assessments found:', assessments);

    // Prepare the data to be sent
    const studentData = {
      fullName: `${student.fname} ${student.lname}`,
      gradeName: student.gradeId.grade_name,
      gradeSection: student.gradeId.section,
      assessments: assessments.map(assessment => ({
        courseName: assessment.courseId.courseName,
        midterm: assessment.midterm,
        finalterm: assessment.finalterm,
        continuous: assessment.continuous,
        average: ((assessment.midterm + assessment.finalterm + assessment.continuous) / 3).toFixed(2),
      })),
    };

    console.log('Student Data:', studentData);

    // Send the response
    res.json(studentData);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
