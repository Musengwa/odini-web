// components/Download.js
import React from 'react';
import './Download.css';
import { FaAndroid, FaPlayCircle } from 'react-icons/fa';
import EmailForm from './email';

const Download = () => {
  return (
    <section id="download" className="download">
      <div className="container">
        <span className="eyebrow eyebrow-light">Get the App</span>
        <h2 className="download-title">Odini for Android</h2>
        <p className="download-subtitle">
          We're an advanced functional prototype, preparing for pilot launch in Lusaka and
          Livingstone. The Android app and demo aren't public yet — join the waitlist and
          we'll notify you the moment they are.
        </p>

        <div className="btn-row download-buttons">
          <button type="button" className="btn btn-outline-light btn-soon" disabled aria-disabled="true">
            <FaAndroid /> Download for Android
            <span className="badge-soon badge-soon-dark">Coming soon</span>
          </button>
          <button type="button" className="btn btn-outline-light btn-soon" disabled aria-disabled="true">
            <FaPlayCircle /> Try Android Demo
            <span className="badge-soon badge-soon-dark">Coming soon</span>
          </button>
        </div>

        <div className="download-waitlist">
          <p>Join the waitlist to be first to know:</p>
          <EmailForm />
        </div>
      </div>
    </section>
  );
};

export default Download;
