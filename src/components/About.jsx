// components/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Who We Are</h3>
            <p>Odini was born from a passion for Zambia's incredible cultural heritage and natural beauty. Our team of Zambian tech enthusiasts and travel experts came together with a shared vision: to create a platform that celebrates and preserves our nation's unique identity while making travel more accessible and meaningful.</p>
            
            <h3>Why Now?</h3>
            <p>Zambia's tourism industry is growing rapidly, but local businesses and travelers lack tools designed specifically for our unique needs. Global platforms don't understand our culture, our events, or our rural communities. Odini changes that.</p>
            
            <h3>Our Mission</h3>
            <p className="mission">"To digitize, preserve, and promote Zambia's cultural & travel landscape through technology."</p>
          </div>
          
          <div className="about-image">
            <div className="image-frame">
              <img 
                src="https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80" 
                alt="Zambian culture" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;