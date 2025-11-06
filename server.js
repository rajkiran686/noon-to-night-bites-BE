import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import menuRoutes from './routes/menuRoutes.js';
import offerRoutes from './routes/offerRoutes.js';

const app = express();

// Middleware
app.use(cors({ origin: '*' })); // or your frontend URL if you want restriction
app.use(express.json()); // built-in JSON parser

// Routes
app.use('/api/menu', menuRoutes);
app.use('/api/offers', offerRoutes);

// MongoDB connection
mongoose
  .connect('mongodb+srv://gutturthirajkiran143:Raj123@cluster.n17eyrp.mongodb.net/mama-biryani?retryWrites=true&w=majority')
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

const PORT = process.env.PORT || 1234;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
