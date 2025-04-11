import React, { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import AddTaskForm from '../components/AddTaskForm';
import * as taskService from '../services/taskService';
import { Task } from '../types/task';

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const data = await taskService.getAllTasks();
      setTasks(data);
    } catch (error) {
      console.error('Failed to fetch tasks', error);
    }
  };

  const handleAddTask = async (title: string, description?: string) => {
    try {
      const newTask = await taskService.createTask(title, description);
      setTasks([...tasks, newTask]);
    } catch (error) {
      console.error('Failed to add task', error);
    }
  };

  const handleDeleteTask = async (id: number) => {
    try {
      await taskService.deleteTask(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error(`Failed to delete task ${id}`, error);
    }
  };

  return (
    <div>
      <h1>Todo Application</h1>
      <AddTaskForm onAddTask={handleAddTask} />
      <h2>Task List</h2>
      {tasks.length > 0 ? (
        <TaskList tasks={tasks} onDelete={handleDeleteTask} />
      ) : (
        <p>No tasks yet!</p>
      )}
    </div>
  );
};

export default Home;