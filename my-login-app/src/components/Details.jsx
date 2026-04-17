import React from 'react';
import { Link } from 'react-router-dom';

function Details({ count }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '16px', width: '360px', textAlign: 'center' }}>
        <h2>Stats</h2>
        <div style={{ fontSize: '48px' }}>{count}</div>
        <Link to="/">Sign Out</Link>
      </div>
    </div>
  );
}

export default Details;
