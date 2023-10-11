const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// Here you would typically import and use your route files
// e.g., app.use('/api/items', require('./routes/itemRoutes'));

app.use(express.static(path.resolve(__dirname, '..', 'dist')));
app.use('/styling.css', express.static(path.resolve(__dirname, '..', 'frontend','src', 'styling.css')));
app.use('/assets', express.static(path.resolve(__dirname, '..', 'frontend','assets')))
app.use('/feedback', require('./routes/feedbackRoutes'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
});


app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
  });
  
  // Global error handling
  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message,
      },
    });
  });
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
