// components/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Odini</h2>

        <div className="about-content">
          <div className="about-text">
            <h3>Background</h3>
            <ul className="about-list">
              <li>Lost my room at UNZA during exam period.</li>
              <li>
                Nowhere to find an affordable stay — everything scattered across WhatsApp and
                Facebook, no way to compare or verify.
              </li>
              <li>Started with stays, found the same gap in events and experiences.</li>
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
          </div>

          <div className="about-image">
            <div className="image-frame">
              <img
                src="https://d2vc0hr24xoxe3.cloudfront.net/eyJidWNrZXQiOiJ3ZWItYXBwLXN0b3JhZ2Utbm9ydGgtdmlyZ2luaWEiLCJrZXkiOiJ3cC1jb250ZW50L3VwbG9hZHMvMjAyMy8wMy8xNTA3MDEzMy9MaXZpbmdzdG9uZS1XaWRlc2NyZWVuLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJoZWlnaHQiOjEwODAsIndpZHRoIjoxOTIwLCJmaXQiOiJpbnNpZGUifX19"
                alt="Livingstone, Zambia"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
