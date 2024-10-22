// src/components/Footer.jsx
import React from 'react';
import './Footer.css'; // Create a separate CSS file for the footer if needed

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 BookStore. All rights reserved.</p>
      <p>
        Follow us on: 
        <a href="#" className="social-link">Facebook</a> | 
        <a href="#" className="social-link">Twitter</a> | 
        <a href="#" className="social-link">Instagram</a>
      </p>
    </footer>
  );
};

export default Footer;
