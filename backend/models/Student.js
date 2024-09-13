// models/Student.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Student', studentSchema);

