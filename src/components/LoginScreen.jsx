import { useState } from 'react';

export default function LoginScreen({ onLogin }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (password === 'walleed') {
      onLogin();
    } else {
      setError('Galat password hai jaan! Hint: walleed');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Welcome Mari Zindagi ❤️</h1>
        <p>Apni duniya mein enter hone ke liye password likho</p>
        <input 
          type="password" 
          placeholder="Password likho..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
        <button onClick={handleLogin}>Enter My Heart 💖</button>
        <small>Hint: walleed</small>
      </div>
    </div>
  );
}