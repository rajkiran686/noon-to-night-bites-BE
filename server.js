import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import menuRoutes from './routes/menuRoutes.js';
import offerRoutes from './routes/offerRoutes.js';

const app = express();

// ✅ Allow only your Vercel frontend
const allowedOrigins = [
  'https://noon-to-night-bites.vercel.app',
  'http://localhost:3000' // optional, for local dev
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
    credentials: true, // if you use cookies or auth headers
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
  })
);

app.use(express.json());

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
