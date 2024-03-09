// JobInternshipComponent.js
import React, { useState } from 'react';
import './JobInternshipComponent.css';

const JobInternshipComponent = () => {
  const [selectedListing, setSelectedListing] = useState(null);

  const listings = [
    { id: 1, title: 'Software Engineer Intern', company: 'ABC Tech', location: 'Boston, MA', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, title: 'Marketing Assistant', company: 'XYZ Corp', location: 'New York, NY', description: 'Nulla facilisi. Duis convallis est at risus lacinia, ac tincidunt libero vehicula.' },
    // Add more job/internship listings as needed
  ];

  const handleClick = (listing) => {
    setSelectedListing(listing);
  };

  return (
    <div className="job-internship-container">
      <h2>Job and Internship Listings</h2>
      <div className="listings">
        {listings.map(listing => (
          <div key={listing.id} className="listing" onClick={() => handleClick(listing)}>
            <h3>{listing.title}</h3>
            <p>{listing.company} - {listing.location}</p>
          </div>
        ))}
      </div>
      {selectedListing && (
        <div className="selected-listing">
          <h3>{selectedListing.title}</h3>
          <p>{selectedListing.company} - {selectedListing.location}</p>
          <p>{selectedListing.description}</p>
        </div>
      )}
    </div>
  );
};

export default JobInternshipComponent;
