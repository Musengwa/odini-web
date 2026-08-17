// components/Download.js
import React from 'react';
import './Download.css';
import { FaAndroid, FaPlayCircle } from 'react-icons/fa';
import EmailForm from './email';
import Reveal from './Reveal';

const Download = () => {
  return (
    <section id="download" className="download">
      <div className="container">
        <div className="download-grid">
          <Reveal variant="fade-up" className="download-intro">
            <span className="kicker">Get the app</span>
            <h2 className="download-title">ODINI for Android</h2>
            <p className="download-subtitle">
              We're an advanced functional prototype, preparing for pilot launch in Lusaka and
              Livingstone. The Android app and demo aren't public yet join the waitlist and
              we'll notify you the moment they are.
            </p>

            <div className="link-row download-buttons">
              <span className="link-cta link-cta-muted">
                <FaAndroid /> Download for Android
                <span className="badge-soon">Coming soon</span>
              </span>
              <span className="link-cta link-cta-muted">
                <FaPlayCircle /> Try Android Demo
                <span className="badge-soon">Coming soon</span>
              </span>
            </div>
          </Reveal>

          <Reveal variant="fade-up" delay={150} className="download-waitlist">
            <p>Join the waitlist to be first to know:</p>
            <EmailForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Download;
