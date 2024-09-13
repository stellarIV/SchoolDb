import React, { useState, FormEvent } from 'react';

// Define the type for the onAdd prop
interface AddAssessmentProps {
  onAdd: () => void;
}

const AddAssessment: React.FC<AddAssessmentProps> = ({ onAdd }) => {
  const [studentId, setStudentId] = useState<string>('');
  const [courseId, setCourseId] = useState<string>('');
  const [gradeId, setGradeId] = useState<string>('');
  const [midterm, setMidterm] = useState<number>(0);
  const [finalterm, setFinalterm] = useState<number>(0);
  const [continuous, setContinuous] = useState<number>(0);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate input data
    if (!studentId || !courseId || !gradeId || midterm === undefined || finalterm === undefined || continuous === undefined) {
      alert('All fields are required.');
      return;
    }

    const assessmentData = {
      studentId,
      courseId,
      gradeId,
      midterm,
      finalterm,
      continuous,
    };

    try {
      const response = await fetch('http://localhost:5000/api/assessments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(assessmentData),
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const result = await response.json();
      console.log('Assessment added:', result);
      onAdd(); // Notify parent to refresh data
      setStudentId('');
      setCourseId('');
      setGradeId('');
      setMidterm(0);
      setFinalterm(0);
      setContinuous(0);
    } catch (error) {
      console.error('Error adding assessment:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Student ID"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Course ID"
        value={courseId}
        onChange={(e) => setCourseId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Grade ID"
        value={gradeId}
        onChange={(e) => setGradeId(e.target.value)}
      />
      <input
        type="number"
        placeholder="Midterm Score"
        value={midterm}
        onChange={(e) => setMidterm(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Final Term Score"
        value={finalterm}
        onChange={(e) => setFinalterm(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Continuous Assessment Score"
        value={continuous}
        onChange={(e) => setContinuous(Number(e.target.value))}
      />
      <button type="submit">Add Assessment</button>
    </form>
  );
};

export default AddAssessment;
