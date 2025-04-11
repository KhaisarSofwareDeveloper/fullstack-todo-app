import axios from 'axios';
import { Task } from '../types/task';

const API_BASE_URL = 'http://localhost:3000/tasks'; 
export const getAllTasks = async (): Promise<Task[]> => {
  try {
    const response = await axios.get<Task[]>(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

export const createTask = async (title: string, description?: string): Promise<Task> => {
  try {
    const response = await axios.post<Task>(API_BASE_URL, { title, description });
    return response.data;
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
};

export const deleteTask = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_BASE_URL}/${id}`);
  } catch (error) {
    console.error(`Error deleting task ${id}:`, error);
    throw error;
  }
};

export function getTasks() {
  throw new Error('Function not implemented.');
}
