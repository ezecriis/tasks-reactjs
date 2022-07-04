import React from 'react';
import './App.css';
import LogoFreeCodeCamp from './components/LogoFreeCodeCamp';
import TasksList from './components/TasksList';

function App() {
  return (
    <div className="app-tasks">
      <LogoFreeCodeCamp />
      <div className="list-tasks-principal">
        <h1>Mis tareas</h1>
        <TasksList />
      </div>
    </div>
  );
}
 
export default App;
