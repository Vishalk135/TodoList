import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import taskRoutes from '../backend/src/routes/taskRoute';

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

app.use('/tasks', taskRoutes);

app.get('/', (_req, res) => {
  res.send('To-Do List API is running!');
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
