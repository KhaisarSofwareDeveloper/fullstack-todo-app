import React from 'react';
import { Task } from '../types/task';

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete }) => {
  return (
    <table style={{ padding: '8px' }}>
    <thead>
      <tr>
        <th>Title</th>
        <th>Description</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {tasks.map((task) => (
        <tr key={task.id}>
           <td style={{  padding: '8px' }}>{task.title}</td>
           <td style={{  padding: '8px' }}>{task.description || ''}</td>
           <td style={{  padding: '8px' }}>
      <button onClick={() => onDelete(task.id)}  style={{
    backgroundColor: 'red',
    color: 'white', 
    border: 'none',
    padding: '6px 8px', 
    cursor: 'pointer', 
  }}>Delete</button>
    </td>
        </tr>
      ))}
    </tbody>
  </table>
  );
};

export default TaskList;