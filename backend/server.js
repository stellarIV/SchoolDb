// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const studentRoutes = require('./routes/students');
const studentPortalRoutes = require('./routes/studentPortal');
const courseRoutes = require('./routes/courses');
const gradeRoutes = require('./routes/grades');
const assessmentRoutes = require('./routes/assessments');
const allDataRoutes = require('./routes/AllData');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/schoolDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/students', studentRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/grades', gradeRoutes);
app.use('/api/assessments', assessmentRoutes);
app.use('/api/student-portal', studentPortalRoutes);
// server.js

app.use('/api/all-data', allDataRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
