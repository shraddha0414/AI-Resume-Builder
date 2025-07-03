import React from 'react';
import { useNavigate } from 'react-router-dom';
import './IntroStepOne.css';

const IntroStepOne = () => {
  const navigate = useNavigate();

  return (
    <div className="intro-container">
      <a className="back-link" onClick={() => navigate('/')}>
        ← Back to Home
      </a>

      <h1>AI Resume Builder</h1>

      <div className="step-tracker">
        {['Welcome', 'Experience Input', 'Experience Details', 'Job Description', 'Processing', 'Result'].map((label, i) => (
          <div className="step-item" key={i}>
            <div className={`circle ${i === 0 ? 'active' : ''}`}>{i + 1}</div>
            <span>{label}</span>
          </div>
        ))}
      </div>

      <div className="intro-content">
        <div className="left-panel">
          <div className="icon">📄</div>
          <h2>AI Resume Builder</h2>
          <p>Perfect your resume for your dream job</p>
        </div>

        <div className="right-panel">
          <div className="step-desc">
            <span className="circle-small">1</span>
            <div>
              <strong>Provide your experience</strong><br />
              <small>via resume upload or text description</small>
            </div>
          </div>

          <div className="step-desc">
            <span className="circle-small">2</span>
            <div>
              <strong>Upload or paste a job description</strong> <small>(optional)</small><br />
              <small>for the position you're interested in</small>
            </div>
          </div>

          <div className="step-desc">
            <span className="circle-small">3</span>
            <div>
              <strong>Get an AI-optimized resume</strong><br />
              <small>tailored specifically for that job</small>
            </div>
          </div>

          <button className="get-started-btn" onClick={() => navigate('/experience-input')}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroStepOne;
