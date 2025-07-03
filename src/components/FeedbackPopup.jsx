import React, { useState } from 'react';

const FeedbackPopup = ({ onClose }) => {
  const [rating, setRating] = useState(null);
  const [feedback, setFeedback] = useState('');

  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <h2 style={styles.title}>We'd Love Your Feedback!</h2>

        <p style={styles.label}>How would you rate your experience?</p>
        <div style={styles.ratingContainer}>
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              onClick={() => setRating(num)}
              style={{
                ...styles.ratingButton,
                backgroundColor: rating === num ? '#3B82F6' : '#E5E7EB',
                color: rating === num ? '#FFFFFF' : '#000000',
              }}
            >
              {num}
            </button>
          ))}
        </div>

        <label style={styles.optionalLabel}>Your feedback (optional)</label>
        <textarea
          rows="4"
          placeholder="Tell us what you think..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          style={styles.textarea}
        />

        <div style={styles.buttonRow}>
          <button onClick={onClose} style={styles.cancelButton}>Cancel</button>
          <button
            onClick={() => {
              console.log('Submitted:', { rating, feedback });
              onClose();
            }}
            style={styles.submitButton}
          >
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 999,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    background: 'white',
    borderRadius: '12px',
    padding: '24px',
    width: '100%',
    maxWidth: '400px',
    boxShadow: '0 0 20px rgba(0,0,0,0.2)',
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '16px',
  },
  label: {
    fontWeight: '600',
    marginBottom: '8px',
  },
  ratingContainer: {
    display: 'flex',
    gap: '12px',
    marginBottom: '16px',
  },
  ratingButton: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
  },
  optionalLabel: {
    fontWeight: '600',
    marginBottom: '4px',
    display: 'block',
  },
  textarea: {
    width: '100%',
    padding: '8px',
    borderRadius: '6px',
    border: '1px solid #D1D5DB',
    marginBottom: '16px',
    resize: 'none',
  },
  buttonRow: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '12px',
  },
  cancelButton: {
    background: 'transparent',
    border: 'none',
    color: '#6B7280',
    cursor: 'pointer',
    fontSize: '14px',
  },
  submitButton: {
    backgroundColor: '#3B82F6',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
  },
};

export default FeedbackPopup;
