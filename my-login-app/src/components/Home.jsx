import React from 'react';
import { styles } from './styles';

export default function Home() {
  return (
    <div style={styles.container}>
      <div style={{...styles.card, width: '500px'}}>
        <h1 style={{fontSize: '2.5rem', color: '#111827'}}>Build Something Great.</h1>
        <p style={{color: '#6b7280', fontSize: '1.1rem', lineHeight: '1.6'}}>
          This is your new project dashboard. Use the navigation bar above to explore 
          the login and signup features connected to your MongoDB database.
        </p>
      </div>
    </div>
  );
}