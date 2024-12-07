// src/components/Faculty.js
import React from 'react';

const Faculty = () => {
  // Sample faculty data
  const facultyData = [
    { name: 'John Doe', subject: 'Mathematics' },
    { name: 'Jane Smith', subject: 'Physics' },
    { name: 'Mark Johnson', subject: 'Chemistry' },
  ];

  return (
    <div>
      <h2>Faculty Details</h2>
      <ul>
        {facultyData.map((faculty, index) => (
          <li key={index}>
            {faculty.name} - {faculty.subject}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faculty;
