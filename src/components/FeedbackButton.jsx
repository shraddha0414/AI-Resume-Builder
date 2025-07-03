import React, { useState } from 'react';
import FeedbackPopup from './FeedbackPopup'; // Adjust path if needed

const FeedbackButton = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 40 }}>
        <button onClick={() => setShowPopup(true)}>❗ Your Feedback Matters</button>
      </div>
      {showPopup && <FeedbackPopup onClose={() => setShowPopup(false)} />}
    </>
  );
};

export default FeedbackButton;
