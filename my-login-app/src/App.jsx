import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import Navbar
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Details from './components/Details';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar /> {/* This stays on every page */}
      <div style={{ paddingTop: '60px' }}> {/* Space for fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login onLoginSuccess={(num) => setCount(num)} />} />
          <Route path="/details" element={<Details count={count} />} />
        </Routes>
      </div>
    </Router>
  );
}