import { Request, Response } from 'express';
import { Task } from '../models/taskModel';

export const getAllTasks = async (_req: Request, res: Response) => {
  const tasks = await Task.find();
  res.json(tasks);
};

export const createTask = async (req: Request, res: Response) => {
  try {
    const { name, description, status } = req.body;
    const newTask = new Task({ name, description, status });
    const saved = await newTask.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create task' });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, description, status } = req.body;

  try {
    const updated = await Task.findByIdAndUpdate(
      id,
      { name, description, status },
      { new: true }
    );
   
    res.json({ message: 'Task updated', task: updated });
  } catch {
    res.status(500).json({ message: 'Error updating task' });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deleted = await Task.findByIdAndDelete(id);
    res.json({ message: 'Task deleted' });
  } catch {
    res.status(500).json({ message: 'Error deleting task' });
  }
};
