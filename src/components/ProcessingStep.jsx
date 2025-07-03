import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './ProcessingStep.css';

const ProcessingStep = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const resumeData = location.state?.resumeData;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (resumeData) {
        navigate('/result', { state: { resumeData } });
      } else {
        navigate('/result'); // fallback
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate, resumeData]);

  return (
    <div className="container">
      <a onClick={() => navigate('/')} className="back-home">← Back to Home</a>
      <h1>AI Resume Builder</h1>

      {/* Step Tracker */}
      <div className="step-tracker">
        {['Welcome', 'Experience Input', 'Experience Details', 'Job Description', 'Processing', 'Result'].map((label, i) => (
          <div className="step-item" key={i}>
            <div className={`circle ${i <= 4 ? 'active' : ''}`}>{i + 1}</div>
            <span>{label}</span>
          </div>
        ))}
      </div>

      {/* Processing Animation */}
      <div className="processing-box">
        <div className="spinner"></div>
        <p className="processing-text">
          We’re analyzing your inputs and generating your AI-optimized resume. This may take a few seconds…
        </p>
      </div>
    </div>
  );
};

export default ProcessingStep;
