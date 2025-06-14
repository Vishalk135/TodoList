import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import taskRoutes from './routes/taskRoute';

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/tasks', taskRoutes);

app.get('/', (_req, res) => {
  res.send('To-Do List API is running!');
});

mongoose.connect(process.env.MONGO_URI!)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

export default app;
