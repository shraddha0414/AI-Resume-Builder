import React, { useState } from 'react';
import './TextDescriptionStep.css';
import { useNavigate } from 'react-router-dom';

const TextDescriptionStep = () => {
  const navigate = useNavigate();

  const [experiences, setExperiences] = useState([{ company: '', title: '', startDate: '', endDate: '', responsibilities: '' }]);
  const [education, setEducation] = useState([{ school: '', degree: '', startDate: '', endDate: '' }]);

  const addExperience = () => {
    setExperiences([...experiences, { company: '', title: '', startDate: '', endDate: '', responsibilities: '' }]);
  };

  const addEducation = () => {
    setEducation([...education, { school: '', degree: '', startDate: '', endDate: '' }]);
  };

  return (
    <div className="container">
      <a onClick={() => navigate('/')} style={{ color: '#2563eb', cursor: 'pointer' }}>← Back to Home</a>
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

      {/* Experience Details */}
      <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>← <span>Experience Details</span></h2>

      {/* Personal Details */}
      <h3>Personal Details</h3>
      <div className="grid grid-cols-2 gap-4">
        <input placeholder="Name *" />
        <input placeholder="Email *" />
        <input placeholder="Phone *" />
        <input placeholder="Location" />
        <input placeholder="LinkedIn Profile" className="col-span-2" />
      </div>

      {/* Professional Experience */}
      <div className="mt-6">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h3>Professional Experience</h3>
          <button onClick={addExperience}>➕ Add Experience</button>
        </div>

        {experiences.map((exp, idx) => (
          <div className="experience-box" key={idx}>
            <h4>Experience {idx + 1}</h4>
            <div className="grid grid-cols-2 gap-4">
              <input placeholder="Company *" />
              <input placeholder="Title *" />
              <input placeholder="Start Date (e.g., Jan 2020) *" />
              <input placeholder="End Date (e.g., Present or Dec 2022)" />
            </div>
            <textarea placeholder="Responsibilities *" className="w-full mt-2" />
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="mt-6">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h3>Education</h3>
          <button onClick={addEducation}>➕ Add Education</button>
        </div>

        {education.map((edu, idx) => (
          <div className="education-box" key={idx}>
            <h4>Education {idx + 1}</h4>
            <div className="grid grid-cols-12 gap-10">
              <input placeholder="School *" />
              <input placeholder="Degree *" />
              <input placeholder="Start Date (e.g., Sep 2016) *" />
              <input placeholder="End Date (e.g., Jun 2020) *" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6" style={{ textAlign: 'right' }}>
        <button onClick={() => navigate('/job-description')} className="continue-button">
          Continue
        </button>
      </div>
    </div>
  );
};

export default TextDescriptionStep;
