import React from 'react';
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
  return (
    <div>
      <NavigationBar />
      <main>
        <BlogPostListComponent />
        <QuizPollComponent />
        <EventsCalendarComponent />
        <StudentSpotlightComponent />
        <ResourcesDirectoryComponent />
        <StudyTipsComponent />
        <GuestBloggersComponent />
        <InteractiveMapComponent />
        <JobInternshipComponent />
        <MultimediaComponent />
        <SocialIntegrationComponent />
      </main>
      <Footer />
    </div>
  );
};

export default App;
