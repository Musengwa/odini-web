// components/Roadmap.js
import React from 'react';
import './Roadmap.css';

import {SiOpenai} from 'react-icons/si';
import {MdVerified} from 'react-icons/md';
import {FaMapMarkedAlt} from 'react-icons/fa';


const Roadmap = () => {
  return (
    <section id="roadmap" className="roadmap">
      <div className="container">
        <h2 className="section-title">What's Coming</h2>
        
        <div className="roadmap-content">
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">phase 1</div>
              <div className="timeline-content">
                <h3>MVP Launch</h3>
                <ul>
                  <li>AI Travel Guide (basic NLP)</li>
                  <li>Verified Booking System</li>
                  <li>Event Calendar (Lusaka/Livingstone)</li>
                </ul>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-date">phase 2</div>
              <div className="timeline-content">
                <h3>Cultural Expansion</h3>
                <ul>
                  <li>Cultural Wiki with offline access</li>
                  <li>Multimedia uploads (photos/videos)</li>
                  <li>Bemba/Nyanja language support</li>
                </ul>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-date">phase 3</div>
              <div className="timeline-content">
                <h3>Nationwide Coverage</h3>
                <ul>
                  <li>Rural homestay integration</li>
                  <li>Mobile money payment options</li>
                  <li>Safety features & SOS system</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="feature-highlight">
            <h2>more to come</h2>
            <div className="feature-card">
              <div className="feature-icon"><SiOpenai size={30} color='#2c2c2eff'/></div>
              <h3>AI Travel Guide</h3>
              <p>Ask Zambia-specific questions and get personalized recommendations</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon"><MdVerified size={30} color='#2c2c2eff'/></div>
              <h3>Verified Bookings</h3>
              <p>Book with confidence through our verified partner system</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon"><FaMapMarkedAlt size={30} color='#2c2c2eff'/></div>
              <h3>Offline Maps</h3>
              <p>Access maps and guides even without internet connection</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;