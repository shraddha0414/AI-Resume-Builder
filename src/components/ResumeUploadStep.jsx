import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./ResumeUploadStep.css";

const ResumeUploadStep = () => {
  const navigate = useNavigate();
  const [fileData, setFileData] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    // Simulated parsed data — Replace with actual backend parsing
    if (file) {
      const dummyResume = {
        name: "Shraddha Somnath Chandane",
        email: "shraddha@example.com",
        phone: "09881483296",
        location: "Pune, India",
        linkedin: "linkedin.com/in/shraddha",
        summary: "Frontend Developer with React expertise.",
        skills: ["React", "JavaScript", "HTML", "CSS"],
        experience: [
          {
            company: "TCS",
            title: "Frontend Developer",
            startDate: "Jan 2020",
            endDate: "Present",
            responsibilities: "Developed UIs using React."
          }
        ]
      };

      setFileData(dummyResume);
    }
  };

  const handleContinue = () => {
    if (fileData) {
      navigate('/processing', { state: { resumeData: fileData } });
    } else {
      alert("Please upload your resume file first.");
    }
  };

  return (
    <div className="experience-container">
      <a className="back-home" onClick={() => navigate('/')}>← Back to Home</a>
      <h1>AI Resume Builder</h1>

      {/* Step Tracker */}
      <div className="step-tracker">
        {['Welcome', 'Experience Input', 'Experience Details', 'Job Description', 'Processing', 'Result'].map((label, i) => (
          <div className="step-item" key={i}>
            <div className={`circle ${i <= 2 ? 'active' : ''}`}>{i + 1}</div>
            <span>{label}</span>
          </div>
        ))}
      </div>

      {/* Upload Section */}
      <div className="upload-section">
        <h2 className="clickable-title" onClick={() => navigate('/experience-input')}>← Experience Details</h2>
        <p className="upload-title">Upload your resume</p>
        <p className="upload-description">We'll analyze your existing resume for optimization</p>

        <div className="upload-box">
          <div className="upload-icon">📄</div>
          <p>Drag and drop your resume, or click to select file</p>
          <p className="formats">Supported formats: PDF, DOCX, DOC, TXT</p>
          <label htmlFor="fileUpload" className="select-btn">
            Select File
            <input type="file" id="fileUpload" hidden onChange={handleFileChange} />
          </label>
        </div>

        <button onClick={handleContinue} className="continue-button">Continue</button>
      </div>
    </div>
  );
};

export default ResumeUploadStep;
