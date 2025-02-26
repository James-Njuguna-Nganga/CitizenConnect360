const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const incidentRoutes = require('./routes/incidentRoutes');
const pollRoutes = require('./routes/pollRoutes');
const userRoutes = require('./routes/userRoutes');
// const summarizationRoutes = require('./routes/summarizationRoutes');

const app = express();


// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/incidents', incidentRoutes);
app.use('/api/polls', pollRoutes);
app.use('/api/users', userRoutes);
// app.use('/api/summarization', summarizationRoutes);

module.exports = app;