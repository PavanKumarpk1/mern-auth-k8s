import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { styles } from './styles'; // Use the same styles

export default function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/login', { email, password });
      onLoginSuccess(res.data.count);
      navigate('/details');
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleLogin} style={styles.card}>
        <h2>Login</h2>
        <input style={styles.input} type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required />
        <input style={styles.input} type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required />
        <button style={styles.button} type="submit">Sign In</button>
        <p style={{marginTop: '15px'}}>
          New user? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}