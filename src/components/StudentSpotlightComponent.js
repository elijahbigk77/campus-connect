// StudentSpotlightComponent.js
import React from 'react';
import './StudentSpotlightComponent.css';

const StudentSpotlightComponent = () => {
  return (
    <div className="student-spotlight-container">
      <h2>Student Spotlight Section</h2>
      <div className="student">
        <h3>Student of the Month</h3>
        <p><span className="label">Name:</span> John Doe</p>
        <p><span className="label">Major:</span> Computer Science</p>
        <p><span className="label">Achievement:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
};

export default StudentSpotlightComponent;
