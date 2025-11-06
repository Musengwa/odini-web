// components/Vision.js
import React from 'react';
import './Vision.css';
import {FaBook} from 'react-icons/fa';
import {FaShieldAlt} from 'react-icons/fa';
import {FaCalendar} from 'react-icons/fa';
import {MdLocationCity} from 'react-icons/md';

const Vision = () => {
  return (
    <section id="vision" className="vision">
      <div className="container">
        <h2 className="section-title">The Vision</h2>
        <p className="vision-intro">Odini is more than just an app - it's Zambia's digital travel companion that transforms how you experience our beautiful country.</p>
        
        <div className="vision-grid">
          <div className="vision-card">
            <div className="vision-icon"><FaBook size={30} color="#232424ff" /></div>
            <h3>Zambia's Cultural Wiki</h3>
            <p>Learn traditions, languages, and tribal histories with our comprehensive cultural database.</p>
          </div>
          
          <div className="vision-card">
            <div className="vision-icon"><div className="vision-icon"><FaShieldAlt size={30} color="#232424ff" /></div></div>
            <h3>Safe & Verified Bookings</h3>
            <p>Book with confidence through our verified system that prioritizes safety and authenticity.</p>
          </div>
          
          <div className="vision-card">
            <div className="vision-icon"><div className="vision-icon"><FaCalendar size={30} color="#323436ff" /></div></div>
            <h3>Real-Time Event Updates</h3>
            <p>Never miss a festival or cultural event with live updates and personalized notifications.</p>
          </div>
          
          <div className="vision-card">
            <div className="vision-icon"><MdLocationCity size={30} color="#232424ff"/></div>
            <h3>Support Local Homestays</h3>
            <p>Discover and support authentic local experiences that benefit local communities directly.</p>
          </div>
        </div>
        
        <div className="comparison">
          <h3>Why Odini Stands Out</h3>
          
          <div className="comparison-table">
            <div className="table-header">
              <div className="header-cell">Feature</div>
              <div className="header-cell">Odini (Zambia-Focused)</div>
              <div className="header-cell">Global Apps</div>
            </div>
            
            <div className="table-row">
              <div className="row-cell">AI Concierge</div>
              <div className="row-cell">Answers Zambia-specific questions</div>
              <div className="row-cell">Generic, no local nuance</div>
            </div>
            
            <div className="table-row">
              <div className="row-cell">Event-Driven</div>
              <div className="row-cell">Live updates on local events + notifications</div>
              <div className="row-cell">Limited event integration</div>
            </div>
            
            <div className="table-row">
              <div className="row-cell">Hyperlocal</div>
              <div className="row-cell">Lists any business, even local homestays</div>
              <div className="row-cell">Prioritizes large hotels</div>
            </div>
            
            <div className="table-row">
              <div className="row-cell">Cultural Depth</div>
              <div className="row-cell">Teaches traditions and tribal histories</div>
              <div className="row-cell">Surface-level information</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
