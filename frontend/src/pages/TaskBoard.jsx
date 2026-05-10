import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TaskBoard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/tasks/')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const todoTasks = tasks.filter(task => task.status === 'todo');
  const inProgressTasks = tasks.filter(task => task.status === 'in_progress');
  const doneTasks = tasks.filter(task => task.status === 'done');

  return (
    <div style={{ display: 'flex', padding: '20px', gap: '20px' }}>
      
      <div style={{ flex: 1, background: '#f0f0f0', padding: '15px', borderRadius: '8px' }}>
        <h3>Todo</h3>
        {todoTasks.map(task => (
          <div key={task.id} style={{ background: 'white', padding: '10px', margin: '8px 0', borderRadius: '5px' }}>
            <h4>{task.title}</h4>
            <p>{task.description}</p>
          </div>
        ))}
      </div>

      <div style={{ flex: 1, background: '#fff3cd', padding: '15px', borderRadius: '8px' }}>
        <h3>In Progress</h3>
        {inProgressTasks.map(task => (
          <div key={task.id} style={{ background: 'white', padding: '10px', margin: '8px 0', borderRadius: '5px' }}>
            <h4>{task.title}</h4>
            <p>{task.description}</p>
          </div>
        ))}
      </div>

      <div style={{ flex: 1, background: '#d4edda', padding: '15px', borderRadius: '8px' }}>
        <h3>Done</h3>
        {doneTasks.map(task => (
          <div key={task.id} style={{ background: 'white', padding: '10px', margin: '8px 0', borderRadius: '5px' }}>
            <h4>{task.title}</h4>
            <p>{task.description}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default TaskBoard;