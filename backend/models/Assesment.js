// models/Assessment.js
const mongoose = require('mongoose');

const assessmentSchema = new mongoose.Schema({
  student_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
  },
  course_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  grade_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Grade',
    required: true,
  },
  midterm: {
    type: Number,
    required: false,
  },
  finalterm: {
    type: Number,
    required: false,
  },
  continuous: {
    type: Number,
    required: false,
  },
});

module.exports = mongoose.model('Assessment', assessmentSchema);
