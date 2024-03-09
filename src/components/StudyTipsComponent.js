// StudyTipsComponent.js
import React from 'react';
import './StudyTipsComponent.css';

const StudyTipsComponent = () => {
  const studyTips = [
    'Create a study schedule and stick to it.',
    'Take breaks during study sessions to avoid burnout.',
    'Stay organized with notes and study materials.',
    'Find a quiet and comfortable place to study.',
    'Use mnemonic devices to remember information.',
    'Teach concepts to someone else to reinforce learning.',
    'Stay hydrated and eat nutritious foods for better focus.',
    'Practice active learning techniques like summarizing and self-quizzing.',
    'Get enough sleep to improve memory and concentration.',
    'Don\'t procrastinate; start studying early for exams.',
  ];

  return (
    <div className="study-tips-container">
      <h2>Study Tips and Tricks</h2>
      <ul className="study-tips-list">
        {studyTips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudyTipsComponent;
