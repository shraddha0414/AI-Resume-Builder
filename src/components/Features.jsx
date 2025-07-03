import React from 'react';

const FeatureCard = ({ title, description }) => (
  <div className="card">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      title: 'AI-Powered',
      description: 'Automatically optimizes your resume for the job description you upload.',
    },
    {
      title: 'Easy to Use',
      description: 'Simple interface. Upload and get results instantly.',
    },
    {
      title: 'Customizable',
      description: 'Tweak the resume as per your target role.',
    },
  ];

  return (
    <div className="container">
      <h2>Features</h2>
      <div className="flex-row">
        {features.map((f, i) => (
          <FeatureCard key={i} title={f.title} description={f.description} />
        ))}
      </div>  
    </div>  
  );
};

export default Features;
