// backend/app.js

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());

// Import routes
const brandRoutes = require('./routes/brand');
const consumerRoutes = require('./routes/consumer');
const qrRoutes = require('./routes/qr');
const aiProxyRoutes = require('./routes/aiProxy');

// Use routes
app.use('/api/brand', brandRoutes);
app.use('/api/consumer', consumerRoutes);
app.use('/api/qr', qrRoutes);
app.use('/api/aiProxy', aiProxyRoutes);

// Root route for health check
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});