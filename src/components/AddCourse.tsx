import React, { useState, FormEvent } from 'react';

// Define the type for the onAdd prop
interface AddCourseProps {
  onAdd: () => void;
}

const AddCourse: React.FC<AddCourseProps> = ({ onAdd }) => {
  const [coursename, setCoursename] = useState<string>('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate input data
    if (!coursename) {
      alert('Course name is required.');
      return;
    }

    const courseData = {
      course_name: coursename, // Ensure this matches the backend field
    };

    try {
      const response = await fetch('http://localhost:5000/api/courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(courseData),
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const result = await response.json();
      console.log('Course added:', result);
      onAdd(); // Notify parent to refresh data
      setCoursename('');
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Course Name"
        value={coursename}
        onChange={(e) => setCoursename(e.target.value)}
      />
      <button type="submit">Add Course</button>
    </form>
  );
};

export default AddCourse;
