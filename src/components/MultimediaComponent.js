// MultimediaComponent.js
import React, { useState } from 'react';
import './MultimediaComponent.css';

const MultimediaComponent = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const multimediaItems = [
    { id: 1, type: 'image', src: 'https://via.placeholder.com/150', alt: 'Placeholder Image 1' },
    { id: 2, type: 'image', src: 'https://via.placeholder.com/150', alt: 'Placeholder Image 2' },
    { id: 3, type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    // Add more multimedia items as needed
  ];

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="multimedia-container">
      <h2>Multimedia Content</h2>
      <div className="items">
        {multimediaItems.map(item => (
          <div key={item.id} className="item" onClick={() => handleClick(item)}>
            {item.type === 'image' ? (
              <img src={item.src} alt={item.alt} />
            ) : (
              <video controls>
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>
      {selectedItem && (
        <div className="selected-item">
          {selectedItem.type === 'image' ? (
            <img src={selectedItem.src} alt={selectedItem.alt} />
          ) : (
            <video controls>
              <source src={selectedItem.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      )}
    </div>
  );
};

export default MultimediaComponent;
