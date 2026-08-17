// components/About.js
import React from 'react';
import Reveal from './Reveal';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-head">
          <span className="kicker">Why we started</span>
          <h2>About ODINI</h2>
        </div>

        <div className="about-content">
          <Reveal variant="fade-up" className="about-text">
            <h3>Background</h3>
            <ul className="about-list">
              <li>As students, accomodation was always an issue.</li>
              <li>Nowhere to find an affordable stay everything scattered across WhatsApp and
                Facebook, no way to compare or verify.</li>
              <li>A solution for targeted stays was needed</li>
              <li>we realized that the same gap existed in events and experiences too</li>
            </ul>

            <h3>Vision</h3>
            <p>
              To become Africa's leading AI-powered experience platform, inspiring people to
              discover, experience, and connect with the very best their destinations have to
              offer.
            </p>

            <h3>Mission</h3>
            <p className="mission">
              "To make discovering, planning, and booking unforgettable experiences effortless
              through intelligent technology while empowering local businesses to reach the
              people most likely to love what they offer."
            </p>
          </Reveal>

          <Reveal variant="zoom" delay={150} className="about-image">
            <img
              src="https://d2vc0hr24xoxe3.cloudfront.net/eyJidWNrZXQiOiJ3ZWItYXBwLXN0b3JhZ2Utbm9ydGgtdmlyZ2luaWEiLCJrZXkiOiJ3cC1jb250ZW50L3VwbG9hZHMvMjAyMy8wMy8xNTA3MDEzMy9MaXZpbmdzdG9uZS1XaWRlc2NyZWVuLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJoZWlnaHQiOjEwODAsIndpZHRoIjoxOTIwLCJmaXQiOiJpbnNpZGUifX19"
              alt="Livingstone, Zambia"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
