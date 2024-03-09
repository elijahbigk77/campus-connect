// ResourcesDirectoryComponent.js
import React from 'react';
import './ResourcesDirectoryComponent.css';

const ResourcesDirectoryComponent = () => {
  return (
    <div className="resources-directory-container">
      <h2>Campus Resources Directory</h2>
      <div className="resource-list">
        <h3>Academic Support</h3>
        <ul>
          <li>Library</li>
          <li>Tutoring Center</li>
          <li>Writing Center</li>
        </ul>
        <h3>Health and Wellness</h3>
        <ul>
          <li>Health Clinic</li>
          <li>Counseling Services</li>
          <li>Fitness Center</li>
        </ul>
        {/* Add more resource categories and items */}
      </div>
    </div>
  );
};

export default ResourcesDirectoryComponent;
