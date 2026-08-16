// components/Roadmap.js
import React from 'react';
import './Roadmap.css';

import { SiOpenai } from 'react-icons/si';
import { MdVerified } from 'react-icons/md';
import { FaMapMarkedAlt } from 'react-icons/fa';


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
                <h3>Lusaka Launch</h3>
                <ul>
                  <li>Mobile money live across MTN, Airtel and Zamtel</li>
                  <li>15–20 partners onboarded</li>
                  <li>Recommendation engine live</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">phase 2</div>
              <div className="timeline-content">
                <h3>Livingstone Launch</h3>
                <ul>
                  <li>40+ partners onboarded</li>
                  <li>Commission model switched on</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">phase 3</div>
              <div className="timeline-content">
                <h3>Nationwide Expansion</h3>
                <ul>
                  <li>Launch in a third city</li>
                  <li>100+ partners onboarded</li>
                  <li>Team scaling to match growth</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="feature-highlight">
            <h2>How It Works</h2>
            <div className="feature-card">
              <div className="feature-icon"><FaMapMarkedAlt size={30} color="#7a1e3a" /></div>
              <h3>Discover</h3>
              <p>Browse AI-curated stays, events and experiences near you</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><SiOpenai size={30} color="#7a1e3a" /></div>
              <h3>Ask Your AI Guide</h3>
              <p>Chat naturally — "what's buzzing for food near me?" — and get real answers</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><MdVerified size={30} color="#7a1e3a" /></div>
              <h3>Book Instantly</h3>
              <p>Confirm your booking with integrated mobile money checkout</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
