import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={navStyles.navbar}>
      <div style={navStyles.logo}>MyAuthApp</div>
      <div style={navStyles.links}>
        <Link style={navStyles.link} to="/">Home</Link>
        <Link style={navStyles.link} to="/login">Login</Link>
        <Link style={navStyles.link} to="/signup">Signup</Link>
      </div>
    </nav>
  );
}

const navStyles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 2rem',
    height: '60px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000,
    boxSizing: 'border-box'
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#4f46e5'
  },
  links: {
    display: 'flex',
    gap: '20px'
  },
  link: {
    textDecoration: 'none',
    color: '#374151',
    fontWeight: '500',
    fontSize: '14px'
  }
};
