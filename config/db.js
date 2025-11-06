const mongoose = require('mongoose');

async function connectDB(uri) {
  if (!uri) {
    uri = process.env.MONGO_URI || 'mongodb://localhost:27017/restaurant-db';
  }

  try {
    await mongoose.connect(uri);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    throw err;
  }
}

module.exports = { connectDB };
