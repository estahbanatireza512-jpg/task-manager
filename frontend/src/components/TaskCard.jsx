import React from 'react';

function TaskCard({ task }) {
  return (
    <div style={{ background: 'white', padding: '10px', margin: '8px 0', borderRadius: '5px' }}>
      <h4>{task.title}</h4>
      <p>{task.description}</p>
    </div>
  );
}

export default TaskCard;