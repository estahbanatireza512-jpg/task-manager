import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      navigate('/dashboard');
    }
  };

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h2>لاگین</h2>
      <div>
        <input
          type="text"
          placeholder="یوزرنیم"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ display: 'block', margin: '10px auto', padding: '8px' }}
        />
        <input
          type="password"
          placeholder="پسورد"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ display: 'block', margin: '10px auto', padding: '8px' }}
        />
        <button onClick={handleLogin} style={{ padding: '8px 20px' }}>
          ورود
        </button>
      </div>
    </div>
  );
}

export default Login;