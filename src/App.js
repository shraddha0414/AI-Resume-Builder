import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FeedbackButton from './components/FeedbackButton';
import IntroStepOne from './components/IntroStepOne';
import ExperienceInputPage from './components/ExperienceInputPage';
import ResumeUploadStep from './components/ResumeUploadStep';
import TextDescriptionStep from './components/TextDescriptionStep';
import JobDescriptionStep from './components/JobDescriptionStep';
import ProcessingStep from './components/ProcessingStep';
import ResultPage from './components/ResultPage';



function App() {
  return (
    <Router>
      <FeedbackButton />
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Features />
            <Testimonials />
          </>
        } />
        <Route path="/intro" element={<IntroStepOne />} />
        <Route path="/experience-input" element={<ExperienceInputPage />} />
          <Route path="/resume-upload" element={<ResumeUploadStep />} />
               <Route path="//text-description" element={<TextDescriptionStep />} />
<Route path="//job-description" element={<JobDescriptionStep />} /> 
<Route path="//processing" element={<ProcessingStep />} /> 
<Route path="/result" element={<ResultPage />} />


      </Routes>
    </Router>
  );
}

export default App;
