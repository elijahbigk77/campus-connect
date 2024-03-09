// NavigationBar.js
import React from 'react';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <nav>
      <div className="logo"><span className="superscript">Campus</span><span className="subscript">Connect</span></div>
      <ul>
        <li><a href="/">Blogs</a></li>
        <li><a href="/blog">Events</a></li>
        <li><a href="/events">Jobs</a></li>
        <li><a href="/events">Study</a></li>
        <li><a href="/events">Resources</a></li>
      </ul>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
    </nav>
  );
};

export default NavigationBar;
