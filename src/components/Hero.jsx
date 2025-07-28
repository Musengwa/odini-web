// components/Hero.js
import React from 'react';
import EmailForm from './email';// Import the EmailForm component
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Odini – Zambia's AI Travel Mate</h1>
            <p className="tagline">Where booking meets culture and adventure.</p>
            <p className="subtitle">Your intelligent travel companion for authentic Zambian experiences.</p>
            
            {/* Replaced the form with EmailForm component */}
            <EmailForm />
          </div>
        </div>
      </div>
      <div className="hero-overlay"></div>
    </section>
  );
};

export default Hero;