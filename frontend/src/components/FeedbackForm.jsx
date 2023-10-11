import React, { useState } from 'react';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('submitting feedback');
    const data = { name, email, feedback };

    try {
      const response = await fetch('/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.status === 200) {
        alert('Feedback submitted successfully!');
        setShowForm(false);
      } else {
        alert('Failed to submit feedback. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div data-cy="feedbackForm" className='feedback-container'>
      <button data-cy="giveFeedback" className="NavButton" onClick={handleToggleForm}>Give Feedback</button>
      {showForm && (
        <div data-cy="feedbackFormContainer" className="feedback-form">
          <form data-cy="FormForFeedback" onSubmit={handleSubmit} className='FeedBackForm'>
            <input
              data-cy="nameInput"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              data-cy="emailInput"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              data-cy="feedbackInput"
              placeholder="Feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            ></textarea>
            <button data-cy="submitFeedbackButton" className="NavButton" type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
