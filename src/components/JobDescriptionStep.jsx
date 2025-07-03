import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './JobDescriptionStep.css';

const JobDescriptionStep = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(null);
  const [jobText, setJobText] = useState('');
  const [fileName, setFileName] = useState('');

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) setFileName(file.name);
  };

  return (
    <div className="container">
      <a className="back-home" onClick={() => navigate('/')}>← Back to Home</a>
      <h1>AI Resume Builder</h1>

      {/* Stepper */}
      <div className="step-tracker">
        {['Welcome', 'Experience Input', 'Experience Details', 'Job Description', 'Processing', 'Result'].map((label, i) => (
          <div className="step-item" key={i}>
            <div className={`circle ${i <= 3 ? 'active' : ''}`}>{i + 1}</div>
            <span>{label}</span>
          </div>
        ))}
      </div>

      <h2>Job Description <span style={{ fontWeight: 'normal' }}>(Optional)</span></h2>
      <p>How would you like to provide the job description?</p>
      <p className="subtext">This step is optional but recommended for best results</p>

      <div className="option-grid">
        <div className="option-box" onClick={() => setActiveTab('upload')}>
          <div className="icon">📄</div>
          <h3>File Upload</h3>
          <p>Upload a file containing the job description</p>
        </div>

        <div className="option-box" onClick={() => setActiveTab('text')}>
          <div className="icon">✏️</div>
          <h3>Text Input</h3>
          <p>Paste the job description text directly</p>
        </div>
      </div>

      {/* Upload Option */}
      {activeTab === 'upload' && (
        <div className="upload-section">
          <h3>Upload job description file</h3>
          <p>We'll extract the job description from your file</p>

          <div className="upload-box">
            <label className="file-label">
              <input type="file" accept=".pdf,.docx,.txt" onChange={handleFileUpload} />
              <span>Browse Files</span>
            </label>
            {fileName && <p className="file-name">Selected File: {fileName}</p>}
          </div>
        </div>
      )}

      {/* Text Input Option */}
      {activeTab === 'text' && (
        <div className="text-section">
          <h3>Provide the job description</h3>
          <p>We'll optimize your resume specifically for this job</p>

          <label>Job Description</label>
          <textarea
            placeholder="Paste the full job description here..."
            rows={8}
            value={jobText}
            onChange={(e) => setJobText(e.target.value)}
          />
          <p style={{ textAlign: 'right' }}>{jobText.length} characters</p>
        </div>
      )}

      {/* Buttons */}
      {(activeTab === 'upload' || activeTab === 'text') && (
        <div className="button-row">
          <button className="skip-btn" onClick={() => navigate('/processing')}>Skip this step</button>
          <button className="continue-btn" onClick={() => navigate('/processing')}>Continue</button>
        </div>
      )}
    </div>
  );
};

export default JobDescriptionStep;
