import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ExperienceInputPage.css';

const ExperienceInputPage = () => {
  const navigate = useNavigate();

  return (
    <div className="experience-container">
      {/* Back to Home */}
      <a className="back-home" onClick={() => navigate('/')}>← Back to Home</a>

      {/* Heading */}
      <h1>AI Resume Builder</h1>

      {/* Stepper */}
      <div className="step-tracker">
        {['Welcome', 'Experience Input', 'Experience Details', 'Job Description', 'Processing', 'Result'].map((label, i) => (
          <div className="step-item" key={i}>
            <div className={`circle ${i <= 1 ? 'active' : ''}`}>{i + 1}</div>
            <span>{label}</span>
          </div>
        ))}
      </div>

      {/* Step Title */}
      <div className="experience-content">
        <a className="back-prev" onClick={() => navigate('/intro')}>← Provide your experience</a>
        <h2>How would you like to provide your experience?</h2>
        <p>Choose one of the following methods:</p>

        {/* Upload Options */}
        <div className="option-grid">
          {/* 📄 Upload Resume */}
          <div className="option-box" onClick={() => navigate('/resume-upload')}>
            <div className="icon">📄</div>
            <h3>Upload Resume</h3>
            <p>Upload your existing resume (PDF, DOCX, or TXT)</p>
          </div>

          {/* ✏️ Text Description */}
          <div className="option-box" onClick={() => navigate('/text-description')}>
            <div className="icon">✏️</div>
            <h3>Text Description</h3>
            <p>Describe your experience, skills, and education</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceInputPage;
