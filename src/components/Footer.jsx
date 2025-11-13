// components/Footer.js
import React from 'react';
import './Footer.css';
import { FaDoorOpen, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';
//import { GiFist } from 'react-icons/gi';

const Footer = () => {

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-icon"><FaDoorOpen size={30} color='#e06d00'/></span>
              <span className="logo-text">Odini</span>
            </div>
            <p>Zambia's AI travel mate—where booking meets culture and adventure.</p>
            <div className="social-links">
              <a href='http://localhost:3000/'aria-label="Facebook"><FaWhatsapp size={30} color='rgba(255, 255, 255, 1)'/></a>
              <a href='Odinizambia@gmail.com' aria-label="Twitter"><MdEmail size={30} color='rgba(255, 255, 255, 1)'/></a>
              <a href='http://localhost:3000/' aria-label="Instagram"><FaInstagram size={30} color='rgba(255, 255, 255, 1)'/></a>
            </div> 
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href='http://localhost:3000/'>Home</a></li>
              <li><a href='http://localhost:3000/'>About</a></li>
              <li><a href='http://localhost:3000/'>Vision</a></li>
              <li><a href='http://localhost:3000/'>Join Us</a></li>
              <li><a href='http://localhost:3000/'>Roadmap</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <ul>
              <li>Odinizambia@gmail.com</li>
              <li> +260 778 002 538</li>
              <li> Lusaka, Zambia</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Odini. All rights reserved.</p>
          <div className="legal-links">
            <a href='http://localhost:3000/'>Privacy Policy</a>
            <a href='http://localhost:3000/'>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;