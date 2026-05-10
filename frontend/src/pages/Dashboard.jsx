import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/projects/')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>داشبورد پروژه‌ها</h2>
      {projects.map(project => (
        <div key={project.id} style={{
          border: '1px solid #ccc',
          padding: '15px',
          margin: '10px',
          borderRadius: '8px'
        }}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <button onClick={() => navigate('/tasks')}>
            مشاهده تسک‌ها
          </button>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;