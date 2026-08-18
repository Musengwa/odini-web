// components/Hero.js
import React from 'react';
import EmailForm from './email';
import { Link } from 'react-scroll';
import DarkVeil from './DarkVeil';
import Reveal from './Reveal';
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
          <span className="kicker">AI-Powered Experience Platform</span>
          <h1 className="hero-header">ODINI</h1>
          <p className="tagline">Where discovery meets culture and adventure.</p>

          <div className="hero-secondary">
            <Reveal variant="fade-up" delay={100}>
              <p className="subtitle">
                Discover, plan, and book unforgettable stays, events, and experiences across
                Zambia with AI-powered recommendations built for Africa.
              </p>

              <div className="link-row hero-app-buttons">
                <span className="link-cta link-cta-muted">
                  Download for Android.
                  <span className="badge-soon">Coming soon.</span>
                </span>
                <Link to="download" spy={true} smooth={true} offset={-70} duration={500} className="link-cta link-cta-primary">
                  Try Android Demo <span className="link-cta-arrow">&rarr;</span>
                </Link>
              </div>

              <p className="hero-contact-label">Questions, partnerships, or support — contact us:</p>
              <EmailForm buttonText="Contact us" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
