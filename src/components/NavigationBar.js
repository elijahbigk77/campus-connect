// NavigationBar.js
import React, { useState } from 'react';
import './NavigationBar.css';

const NavigationBar = () => {
  // State to track dropdown visibility
  const [showDropdownStudy, setShowDropdownStudy] = useState(false);
  const [showDropdownResources, setShowDropdownResources] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdownStudy = () => {
    setShowDropdownStudy(!showDropdownStudy);
  };

  const toggleDropdownResources = () => {
    setShowDropdownResources(!showDropdownResources);
  };

  return (
    <nav>
      <div className="logo"><span className="superscript">Campus</span><span className="subscript">Connect</span></div>
      <ul>
        <li><a href="/">Blogs</a></li>
        <li><a href="/events">Events</a></li>
        <li><a href="/jobs">Jobs</a></li>
        <li className="dropdown" onClick={toggleDropdownStudy}>
          Study
          {showDropdownStudy && (
            <ul className="dropdown-menu">
              <li><a href="/study">Study Tips</a></li>
              <li><a href="/quiz">Quiz</a></li>
            </ul>
          )}
        </li>
        <li className="dropdown" onClick={toggleDropdownResources}>
          Resources
          {showDropdownResources && (
            <ul className="dropdown-menu">
              <li><a href="/map">Map</a></li>
              <li><a href="/resources">Campus Resources</a></li>
            </ul>
          )}
        </li>
      </ul>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
    </nav>
  );
};

export default NavigationBar;
