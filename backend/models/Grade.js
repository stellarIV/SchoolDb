// models/Grade.js
const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
  grade_name: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Grade', gradeSchema);
