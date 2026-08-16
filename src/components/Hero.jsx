// components/Hero.js
import React from 'react';
import EmailForm from './email';
import { Link } from 'react-scroll';
import DarkVeil from './DarkVeil';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-veil">
        <DarkVeil
          hueShift={-120}
          noiseIntensity={0.02}
          scanlineIntensity={0}
          speed={1.5}
          scanlineFrequency={0}
          warpAmount={0.1}
          resolutionScale={1}
        />
      </div>
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-header">ODINI</h1>
            <span className="eyebrow eyebrow-light">AI-Powered Experience Platform</span>           
            <p className="tagline">Where discovery meets culture and adventure.</p>
            <p className="subtitle">
              Discover, plan, and book unforgettable stays, events, and experiences across
              Zambia — with AI-powered recommendations built for Africa.
            </p>

            <div className="btn-row hero-app-buttons">
              <button type="button" className="btn btn-dark btn-soon" disabled aria-disabled="true">
                Download for Android
                <span className="badge-soon badge-soon-dark">Coming soon</span>
              </button>
              <Link to="download" spy={true} smooth={true} offset={-70} duration={500} className="btn btn-outline-light">
                Try Android Demo
              </Link>
            </div>

            <p className="hero-waitlist-label">Be first in line — join the waitlist:</p>
            <EmailForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
