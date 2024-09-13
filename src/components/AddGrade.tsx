import React, { useState, FormEvent } from 'react';

// Define the type for the onAdd prop
interface AddGradeProps {
  onAdd: () => void;
}

const AddGrade: React.FC<AddGradeProps> = ({ onAdd }) => {
  const [gradename, setGradename] = useState<string>('');
  const [section, setSection] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate input data
    if (!gradename || !section) {
      alert('Grade name and section are required.');
      return;
    }
    const gradeData = {
      grade_name: gradename,
      section,
       // Only include if provided
    };
    try {
      const response = await fetch('http://localhost:5000/api/grades', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(gradeData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Grade added:', result);
      onAdd(); // Notify parent to refresh data
      setGradename('');
      setSection('');
      
    } catch (error) {
      console.error('Error adding grade:', error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Grade Name"
        value={gradename}
        onChange={(e) => setGradename(e.target.value)}
      />
      <input
        type="text"
        placeholder="Section"
        value={section}
        onChange={(e) => setSection(e.target.value)}
      />
      <button type="submit">Add Grade</button>
    </form>
  );
};

export default AddGrade;
