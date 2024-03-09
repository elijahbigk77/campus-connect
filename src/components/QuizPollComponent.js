// QuizPollComponent.js
import React, { useState } from 'react';
import './QuizPollComponent.css'; // Import CSS for styling

const QuizPollComponent = () => {
  const [answer, setAnswer] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle the submission of the answer
    setSubmitted(true);
    // Example: You can send the answer to the server for processing
  };

  return (
    <div className="quiz-poll-container">
      <h2>Interactive Quiz or Poll</h2>
      <p>This is an interactive quiz or poll component.</p>
      <form onSubmit={handleSubmit}>
        <label>Question 1:</label>
        <input
          type="text"
          placeholder="Enter your answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {submitted && <p>Thank you for submitting your answer!</p>}
    </div>
  );
};

export default QuizPollComponent;
