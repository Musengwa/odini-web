// components/Footer.js
import React from 'react';
import './Footer.css';
import { FaDoorOpen, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-icon"><FaDoorOpen size={28} color="#a44e69"/></span>
              <span className="logo-text">Odini</span>
            </div>
            <p>Africa's AI-powered experience platform — where discovery meets culture and adventure.</p>
            <div className="social-links">
              <a href="https://wa.me/260967047847" target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp size={26} color="rgba(255, 255, 255, 1)"/></a>
              <a href="mailto:odinizambia@gmail.com" aria-label="Email"><MdEmail size={26} color="rgba(255, 255, 255, 1)"/></a>
              <a href="#hero" aria-label="Instagram"><FaInstagram size={26} color="rgba(255, 255, 255, 1)"/></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="hero" spy smooth offset={-70} duration={500}>Home</Link></li>
              <li><Link to="about" spy smooth offset={-70} duration={500}>About</Link></li>
              <li><Link to="solution" spy smooth offset={-70} duration={500}>Solution</Link></li>
              <li><Link to="download" spy smooth offset={-70} duration={500}>Get the App</Link></li>
              <li><Link to="join" spy smooth offset={-70} duration={500}>Join Us</Link></li>
              <li><Link to="team" spy smooth offset={-70} duration={500}>Team</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <ul>
              <li>odinizambia@gmail.com</li>
              <li>+260 967 047 847</li>
              <li>Lusaka, Zambia</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} ODINI Technologies Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
