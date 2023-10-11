const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://cydekickofficial:ziFKwsfK6MT0aNWe@cluster0.ulmr0rg.mongodb.net/Cydekick?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`);
});



const feedbackSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  feedback: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Feedback', feedbackSchema);
