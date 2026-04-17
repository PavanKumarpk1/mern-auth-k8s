import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { styles } from './styles'; // Import the styles here

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/signup', { email, password });
      alert("Account created! Please login.");
      navigate('/login');
    } catch (err) {
      alert("Error creating account");
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSignup} style={styles.card}>
        <h2>Create Account</h2>
        <input 
          style={styles.input} 
          type="email" 
          placeholder="Email" 
          onChange={e => setEmail(e.target.value)} 
          required 
        />
        <input 
          style={styles.input} 
          type="password" 
          placeholder="Password" 
          onChange={e => setPassword(e.target.value)} 
          required 
        />
        <button style={styles.button} type="submit">Register</button>
        <p style={{marginTop: '15px'}}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}