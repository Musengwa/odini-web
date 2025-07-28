// components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import { FaDoorOpen } from 'react-icons/fa';

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
            <span className="logo-icon"><FaDoorOpen size={30} color='#ff6d13ff'/></span>
            <span className="logo-text">Odini</span>
          </div>
          
          <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <Link 
              to="hero" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="about" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="vision" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              onClick={() => setMobileMenuOpen(false)}
            >
              Vision
            </Link>
            <Link 
              to="join" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              onClick={() => setMobileMenuOpen(false)}
            >
              Join Us
            </Link>
            <Link 
              to="roadmap" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              onClick={() => setMobileMenuOpen(false)}
            >
              Roadmap
            </Link>
          </div>
          
          <div className="nav-actions">
            <button className="btn btn-outline"><Link 
              to="join" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              onClick={() => setMobileMenuOpen(false)}
            >
              Early Access
            </Link></button>
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