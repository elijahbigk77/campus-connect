// InteractiveMapComponent.js
import React, { useState } from 'react';
import './InteractiveMapComponent.css';

const InteractiveMapComponent = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const locations = [
    { id: 1, name: 'Library', lat: 37.7749, lng: -122.4194 },
    { id: 2, name: 'Student Center', lat: 37.7739, lng: -122.4312 },
    // Add more locations as needed
  ];

  const handleMarkerClick = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div className="interactive-map-container">
      <h2>Interactive Map</h2>
      <div className="map">
        <iframe
          title="Interactive Map"
          width="100%"
          height="400"
          frameBorder="0"
          style={{ border: 0 }}
          src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyBPK-JBf6UNgaaGs7rJIeB0fuZBoYZOVOg&center=42.4072,-71.3824&zoom=8`}
          allowFullScreen
        ></iframe>
        <div className="info-box">
          {selectedLocation && (
            <div>
              <h3>{selectedLocation.name}</h3>
              <p>Latitude: {selectedLocation.lat}</p>
              <p>Longitude: {selectedLocation.lng}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InteractiveMapComponent;
