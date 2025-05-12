// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={{
    alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      position: 'fixed',
      left: 0,
      right: 0,
      top: 'auto',
    margin:0,
    bottom: 0,
      backgroundColor: '#222',
      color: 'white',
      textAlign: 'center',
      padding: '20px',
    
    }}>
      <p>&copy; {new Date().getFullYear()} Sandip Naskar. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
