import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>AI Resume Builder</h1>
      <p>Create AI-optimized resumes tailored for specific job descriptions.</p>
      <p>Upload your resume, provide a job description, and let our AI do the rest.</p>
      <button onClick={() => navigate('/intro')}>
        Get Started
      </button>
    </div>
  );
};

export default Header;
