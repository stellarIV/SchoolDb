import React, { useState } from 'react';

interface Assessment {
  courseName: string;
  midterm: number;
  finalterm: number;
  continuous: number;
  average: number;
}

interface StudentData {
  fullName: string;
  gradeName: string;
  gradeSection: string;
  assessments: Assessment[];
}

const StudentPortal: React.FC = () => {
  const [fname, setFname] = useState<string>('');
  const [lname, setLname] = useState<string>('');
  const [studentData, setStudentData] = useState<StudentData | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/api/student-portal?fname=${fname}&lname=${lname}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch student data');
      }

      const data = await response.json();
      setStudentData(data);
    } catch (error) {
      console.error('Error fetching student data:', error);
      setStudentData(null); // Reset student data on error
    }
  };

  return (
    <div>
      <h2>Student Portal</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {studentData ? (
        <div>
          <h3>{studentData.fullName}</h3>
          <p>Grade: {studentData.gradeName}</p>
          <p>Section: {studentData.gradeSection}</p>
          <h4>Assessments</h4>
          {studentData.assessments && studentData.assessments.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Midterm</th>
                  <th>Final Term</th>
                  <th>Continuous</th>
                  <th>Average (%)</th>
                </tr>
              </thead>
              <tbody>
                {studentData.assessments.map((assessment, index) => (
                  <tr key={index}>
                    <td>{assessment.courseName}</td>
                    <td>{assessment.midterm}</td>
                    <td>{assessment.finalterm}</td>
                    <td>{assessment.continuous}</td>
                    <td>{assessment.average}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No assessments available</p>
          )}
        </div>
      ) : (
        <p>No student data available</p>
      )}
    </div>
  );
};

export default StudentPortal;
