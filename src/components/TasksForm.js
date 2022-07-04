import React, { useState } from 'react';
import '../css/TaskForm.css';
import { v4 as uuidv4 } from 'uuid';

function TasksForm(props) {
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        const taskNew = {
            id: uuidv4(),
            text: input,
            completed: false,
        }
        props.onSubmit(taskNew);
    };

  return (
    <form 
      className='task-form'
      onSubmit={handleSubmit}
     >
      <input 
        className='task-input'
        type='text'
        placeholder='Escribe una Tarea'
        name='texto'
        onChange={handleChange}
      />
      <button className='task-button'>
        Agregar Tarea
      </button>
    </form>
  );
}

export default TasksForm;