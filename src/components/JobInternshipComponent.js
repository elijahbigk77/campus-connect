import React, { useState, useEffect } from 'react';
import './JobInternshipComponent.css';

const JobsTab = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch('https://api.adzuna.com/v1/api/jobs/us/search?app_id=c517dc0d&app_key=f77d04712010a1dc057e4feeead4adc4&results_per_page=60'); 
      if (!response.ok) {
        throw new Error('Failed to fetch job listings');
      }
      const data = await response.json();
      setJobs(data.results);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  return (
    <div className="job-listings">
      <h2>Job Listings</h2>
      <div className="job-cards">
        {jobs.map((job, index) => (
          <div key={index} className="job-card">
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <p className="company">{job.company.display_name}</p>
            {/* Add more job details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsTab;
