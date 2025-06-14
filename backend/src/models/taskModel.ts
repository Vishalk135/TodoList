import mongoose from 'mongoose';

export interface TaskType extends mongoose.Document {
  name: string;
  description: string;
  status: 'Complete' | 'Incomplete';
}

const taskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ['Complete', 'Incomplete'], default: 'Incomplete' },
});

export const Task = mongoose.model<TaskType>('Task', taskSchema);
