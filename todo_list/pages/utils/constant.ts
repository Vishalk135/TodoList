if (!process.env.NEXT_PUBLIC_API_BASE_URL) {
  throw new Error('Missing NEXT_PUBLIC_API_BASE_URL');
}

export const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4000/tasks';

//export const baseURL = https://todo-list-zn4l.vercel.app/tasks; //vercel backend url