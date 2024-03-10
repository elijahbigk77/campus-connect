// App.js remains unchanged
import React, { useState, useEffect } from 'react';
import BlogPostListComponent from './components/BlogPostListComponent';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import QuizPollComponent from './components/QuizPollComponent';
import EventsCalendarComponent from './components/EventsCalendarComponent';
import StudentSpotlightComponent from './components/StudentSpotlightComponent';
import ResourcesDirectoryComponent from './components/ResourcesDirectoryComponent';
import StudyTipsComponent from './components/StudyTipsComponent';
import GuestBloggersComponent from './components/GuestBloggersComponent';
import InteractiveMapComponent from './components/InteractiveMapComponent';
import JobInternshipComponent from './components/JobInternshipComponent';
import MultimediaComponent from './components/MultimediaComponent';
import SocialIntegrationComponent from './components/SocialIntegrationComponent';

const App = () => {
  // State to track current page/component to render
  const [currentPage, setCurrentPage] = useState('');

  // Use useEffect to update currentPage based on URL pathname
  useEffect(() => {
    const pathname = window.location.pathname;
    setCurrentPage(pathname);
  }, []);

  // Function to render the appropriate component based on currentPage
  const renderComponent = () => {
    switch (currentPage) {
      case '/': return <BlogPostListComponent />;
      case '/quiz': return <QuizPollComponent />;
      case '/events': return <EventsCalendarComponent />;
      case '/students': return <StudentSpotlightComponent />;
      case '/resources': return <ResourcesDirectoryComponent />;
      case '/study': return <StudyTipsComponent />;
      case '/guestbloggers': return <GuestBloggersComponent />;
      case '/map': return <InteractiveMapComponent />;
      case '/jobs': return <JobInternshipComponent />;
      case '/multimedia': return <MultimediaComponent />;
      case '/social': return <SocialIntegrationComponent />;
      default: return null;
    }
  };

  return (
    <div>
      <NavigationBar />
      <main>
        {renderComponent()} {/* Render the appropriate component */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
