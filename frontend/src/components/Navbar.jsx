import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ background: '#333', padding: '10px' }}>
      <Link to="/" style={{ color: 'white', marginRight: '20px' }}>لاگین</Link>
      <Link to="/dashboard" style={{ color: 'white', marginRight: '20px' }}>داشبورد</Link>
      <Link to="/tasks" style={{ color: 'white' }}>تسک‌ها</Link>
    </nav>
  );
}

export default Navbar;