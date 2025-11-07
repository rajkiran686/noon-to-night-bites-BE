import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import menuRoutes from './routes/menuRoutes.js';
import offerRoutes from './routes/offerRoutes.js';

// Load environment variables
dotenv.config();

const app = express();

// ✅ Allowed origins
const allowedOrigins = [
  'https://noon-to-night-bites.vercel.app',
  'http://localhost:8080' // optional for local dev
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
  })
);

app.use(express.json());

// ✅ Routes
app.use('/api/menu', menuRoutes);
app.use('/api/offers', offerRoutes);


// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// ✅ Server start
const PORT = process.env.PORT || 1234;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
