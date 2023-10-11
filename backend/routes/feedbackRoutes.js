const express = require('express');
const Feedback = require('../models/Feedback');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const feedback = new Feedback({
      name: req.body.name,
      email: req.body.email,
      feedback: req.body.feedback,
    });

    await feedback.save();
    console.log('feedback saved', req.body.feedback)
    res.status(200).send({ message: 'Feedback received.' });
  } catch (error) {
    res.status(500).send({ message: 'Server error. Please try again later.' });
  }
});

module.exports = router;
