import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import taskRoutes from './routes/taskRoute';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors({
  origin: "https://todo-list-full-stack-project.netlify.app"
}));
app.use(bodyParser.json());

// Route
app.use('/tasks', taskRoutes);
app.get('/', (_req, res) => {
  res.send('To-Do List API is running!');
});

// Connect to MongoDB and start the server
mongoose.connect(process.env.MONGO_URI!)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
