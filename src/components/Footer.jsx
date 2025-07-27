// components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-icon">🌍</span>
              <span className="logo-text">Odini</span>
            </div>
            <p>Zambia's AI travel mate—where booking meets culture and adventure.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📱</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Instagram">📸</a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#vision">Vision</a></li>
              <li><a href="#join">Join Us</a></li>
              <li><a href="#roadmap">Roadmap</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <ul>
              <li>📧 info@odini.com</li>
              <li>📞 +260 211 123 4567</li>
              <li>📍 Lusaka, Zambia</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Odini. All rights reserved.</p>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;