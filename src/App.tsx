// src/App.tsx
import React, { useState } from 'react';
import AddStudent from './components/AddStudent';
import AddCourse from './components/AddCourse';
import AddGrade from './components/AddGrade';
import AddAssessment from './components/AddAssessment';
import DisplayData from './components/DisplayData';
import StudentPortal from './components/StudentPortal';

const App: React.FC = () => {
  const [refresh, setRefresh] = useState<boolean>(false);

  const handleAdd = () => {
    // Trigger a refresh by toggling the state
    setRefresh(prev => !prev);
  };

  return (
    <div className="App">
      <h1>Student Information System</h1>
      <h2>Add New</h2>
      <AddStudent onAdd={handleAdd} />
      <AddCourse onAdd={handleAdd} />

      <AddGrade onAdd={handleAdd} />
      <AddAssessment onAdd={handleAdd} />
      <button onClick={() => setRefresh(prev => !prev)}>Show All Data</button>
      <DisplayData key={refresh} /> {/* Use the refresh state as a key */}
      <StudentPortal/>
    </div>
  );
};

export default App;
