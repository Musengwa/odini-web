// components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import { FaDoorOpen } from 'react-icons/fa';

const NAV_ITEMS = [
  { to: 'hero', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'solution', label: 'Solution' },
  { to: 'download', label: 'Get the App' },
  { to: 'join', label: 'Join Us' },
  { to: 'roadmap', label: 'Roadmap' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <div className="logo">
            <span className="logo-icon"><FaDoorOpen size={28} color="#7a1e3a" /></span>
            <span className="logo-text">ODINI</span>
          </div>

          <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="nav-actions">
            <Link
              className="link-cta link-cta-primary"
              to="join"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setMobileMenuOpen(false)}
            >
              Early Access
              <span className="link-cta-arrow">&rarr;</span>
            </Link>
          </div>

          <div className="mobile-toggle" onClick={toggleMobileMenu}>
            <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
