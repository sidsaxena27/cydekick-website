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
    <div className='feedback-container'>
      <button className="NavButton" onClick={handleToggleForm}>Give Feedback</button>
      {showForm && (
        <div className="feedback-form">
          <form onSubmit={handleSubmit} className='FeedBackForm'>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder="Feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            ></textarea>
            <button className="NavButton" type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
