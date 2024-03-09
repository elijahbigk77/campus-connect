// EventsCalendarComponent.js
import React from 'react';
import './EventsCalendarComponent.css'; // Import CSS for styling

const EventsCalendarComponent = () => {
  return (
    <div className="events-calendar-container">
      <h2>Events Calendar</h2>
      <p>This is the events calendar component.</p>
      <div className="event-list">
        {/* Example events */}
        <div className="event-item">
          <span className="event-date">May 15, 2024</span>
          <span className="event-details">Seminar on Artificial Intelligence</span>
        </div>
        <div className="event-item">
          <span className="event-date">May 20, 2024</span>
          <span className="event-details">Career Fair</span>
        </div>
        {/* Add more events here */}
      </div>
    </div>
  );
};

export default EventsCalendarComponent;
