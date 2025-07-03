import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './ResultPage.css';

const ResultPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [layout, setLayout] = useState('Split');
  const [resumeData, setResumeData] = useState(null);

  useEffect(() => {
    const passedData = location.state?.resumeData;

    if (passedData) {
      setResumeData(passedData);
      localStorage.setItem('resumeData', JSON.stringify(passedData));
    } else {
      const cached = localStorage.getItem('resumeData');
      if (cached) {
        setResumeData(JSON.parse(cached));
      }
    }
  }, [location.state]);

  // ✅ PDF Download logic using html2pdf.js
  const handleDownload = async () => {
    const element = document.getElementById('resume-to-download');
    const opt = {
      margin: 0.5,
      filename: 'AI_Resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    const html2pdf = (await import('html2pdf.js')).default;
    html2pdf().set(opt).from(element).save();
  };

  if (!resumeData) return <p>Loading resume...</p>;

  return (
    <div className="result-container">
      {/* HEADER */}
      <div className="container">
        <a onClick={() => navigate('/')} className="back-home">← Back to Home</a>
        <h1>AI Resume Builder</h1>

        {/* Step Tracker */}
        <div className="step-tracker">
          {['Welcome', 'Experience Input', 'Experience Details', 'Job Description', 'Processing', 'Result'].map((label, i) => (
            <div className="step-item" key={i}>
              <div className={`circle ${i <= 5 ? 'active' : ''}`}>{i + 1}</div>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* SUCCESS MESSAGE */}
      <div className="success-msg">
        ✅ Your optimized resume is ready! It has been tailored to match the job requirements.
      </div>

      {/* LAYOUT SELECTOR & DOWNLOAD */}
      <div className="result-header">
        <h2>Generated Resume</h2>
        <div className="layout-selector">
          <label>Layout:</label>
          <select value={layout} onChange={e => setLayout(e.target.value)}>
            <option value="Split">Split</option>
            <option value="Linear">Linear</option>
          </select>
        </div>
        <button onClick={handleDownload} className="download-btn">Download PDF</button>
      </div>

      {/* ✅ PDF DOWNLOAD TARGET AREA */}
      <div id="resume-to-download" className={`resume-content ${layout.toLowerCase()}`}>
        <aside className="left-pane">
          <h1>{resumeData.name}</h1>
          <p>📍 {resumeData.location}</p>
          <p>📧 {resumeData.email}</p>
          <p>📞 {resumeData.phone}</p>
          <p>🔗 {resumeData.linkedin}</p>
          <h3>SKILLS</h3>
          <ul>
            {resumeData.skills?.map((skill, idx) => <li key={idx}>{skill}</li>)}
          </ul>
        </aside>

        <main className="right-pane">
          <section>
            <h3>SUMMARY</h3>
            <p>{resumeData.summary}</p>
          </section>

          <section>
            <h3>EXPERIENCE</h3>
            {resumeData.experience?.map((exp, idx) => (
              <div key={idx} className="experience-entry">
                <strong>{exp.title}</strong> @ <em>{exp.company}</em><br />
                {exp.startDate} - {exp.endDate}
                <p>{exp.responsibilities}</p>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
};

export default ResultPage;