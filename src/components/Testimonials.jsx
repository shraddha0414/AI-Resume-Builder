import React from 'react';

const TestimonialCard = ({ text }) => (
  <div className="card">
    <div style={{ color: 'gold' }}>★★★★★</div>
    <p><i>{text}</i></p>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    'This tool helped me get interviews faster!',
    'Highly recommended resume optimizer.',
    'Simple and effective. Loved it!',
  ];

  return (
    <div className="container">
      <h2>What Our Users Say</h2>
      <div className="flex-row">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} text={t} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
