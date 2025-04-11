'use client';

import React, { useState, useEffect } from 'react';
import TaskList from '../app/components/TaskList'; // Adjust path as needed
import AddTaskForm from '../app/components/AddTaskForm'; // Adjust path as needed
import { getAllTasks, createTask, deleteTask } from '../app/services/taskService';


const Home: React.FC = () => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getAllTasks();
      if (Array.isArray(data)) { // Add a check to ensure data is an array
        setTasks(data);
      } else {
        setError('Failed to fetch tasks: Data received was not an array.');
      }
    } catch (err: any) {
      setError(err.message || 'Failed to fetch tasks');
    } finally {
      setLoading(false);
    }
  };

  const handleAddTask = async (title: string, description?: string) => {
        try {
            await createTask(title, description);// Call createTask directly
          fetchTasks();
        } catch (err: any) {
          setError(err.message || 'Failed to add task');
        }
      };
    
      const handleDeleteTask = async (id: number) => {
        try {
          await deleteTask(id); // Call deleteTask directly
          fetchTasks();
        } catch (err: any) {
          setError(err.message || 'Failed to delete task');
        }
      };

  if (loading) {
    return <div>Loading tasks...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1 style={{ fontSize:'2em', fontWeight: 'bold' }}>Todo App</h1>
      <br></br>
      <AddTaskForm onAddTask={handleAddTask} />
      <br></br>
      <h2 style={{ fontSize:'1em', fontWeight: 'bold' }}>Task List</h2>
      <br></br>
      <TaskList tasks={tasks} onDelete={handleDeleteTask} />
    </div>
  );
};

export default Home;