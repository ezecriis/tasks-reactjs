import React, { useState } from 'react';
import '../css/TaksList.css'; 
import Task from './Task';
import TasksForm from './TasksForm';

export default function TasksList() {

  const [tasks, setTasks] = useState([]);

  const addTasks = task => {
    if (task.text.trim()) {
      task.text = task.text.trim();

      const tasksUpdate = [ task, ...tasks];
      setTasks(tasksUpdate);
    }
  };

  const removeTask = id => {
    const tasksUpdate = tasks.filter(task => task.id !== id);
    setTasks(tasksUpdate);
  };

  const completedTask = id => {
    const tasksUpdate = tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(tasksUpdate);
  };

  return (
    <>
    <TasksForm onSubmit={addTasks} />
    <div className="task-list-container">
      { 
      tasks.map((task => 
        <Task 
          key={task.id}
          id={task.id}
          text={task.text}
          completed={task.completed}
          completedTask={completedTask}
          deleteTask={removeTask}
        />
        ))
      }
      </div>
    </>
  );
}
   