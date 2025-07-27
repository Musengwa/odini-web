// components/Hero.js
import React from 'react';
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
            <form className="email-form">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                required 
              />
              <button type="submit" className="btn">Join the Journey</button>
            </form>
          </div>
        </div>
      </div>
      <div className="hero-overlay"></div>
    </section>
  );
};

export default Hero;