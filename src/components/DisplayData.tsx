import React, { useState, useEffect } from 'react';

// Define the type for the data items
interface DataItem {
  fname: string;
  lname: string;
  course_name: string;  // Updated to match the backend field name
  gradename: string;
  gradesection: string;
  mid: number;
  final: number;
  continuous: number;
  average: string; // Can also be 'number' if preferred
}

const DisplayData: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/all-data');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result: DataItem[] = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>All Data</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Course Name</th>
            <th>Grade Name</th>
            <th>Grade Section</th>
            <th>Midterm</th>
            <th>Final</th>
            <th>Continuous</th>
            <th>Average (%)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.fname}</td>
              <td>{item.lname}</td>
              <td>{item.course_name}</td>  {/* Updated to course_name */}
              <td>{item.gradename}</td>
              <td>{item.gradesection}</td>
              <td>{item.mid}</td>
              <td>{item.final}</td>
              <td>{item.continuous}</td>
              <td>{item.average}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayData;
