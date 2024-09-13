import React, { useState, FormEvent } from 'react';

// Define the type for the onAdd prop
interface AddStudentProps {
  onAdd: () => void;
}

const AddStudent: React.FC<AddStudentProps> = ({ onAdd }) => {
  // State for the form fields
  const [fname, setFname] = useState<string>('');
  const [lname, setLname] = useState<string>('');

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Send data to the backend
    await fetch('http://localhost:5000/api/students', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fname, lname }),
    });

    // Clear form fields
    setFname('');
    setLname('');

    // Notify parent component to refresh data
    onAdd();
  };

  return (
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
      <button type="submit">Add Student</button>
    </form>
  );
};

export default AddStudent;
