import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/mongodb.js';
import searchRoutes from './routes/searchRoutes.js';
import errorHandler from './middleware/errorHandler.js';

dotenv.config();
connectDB();

const app = express();


const corsOptions = {
  origin: 'https://api-frontend-delta.vercel.app', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true 
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api', searchRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
