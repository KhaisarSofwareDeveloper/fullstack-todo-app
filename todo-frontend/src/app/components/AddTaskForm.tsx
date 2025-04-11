import React, { useState } from 'react';

interface AddTaskFormProps {
  onAddTask: (title: string, description?: string) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask(title, description.trim());
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input style={{ padding: '10px 14px' }}
        type="text"
        placeholder="Add Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input style={{ padding: '10px 14px' }}
        type="text"
        placeholder=" Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br></br>
      <br></br> 
      <button  type="submit"style={{ backgroundColor: 'blue', color: 'white', border: 'none', padding: '6px 8px', cursor: 'pointer' }}>Add Task</button>
    </form>
  );
};

export default AddTaskForm;