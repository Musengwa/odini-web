// components/Download.js
import React, { useState } from 'react';
import './Download.css';
import { FaAndroid, FaGlobe, FaServer } from 'react-icons/fa';
import EmailForm from './email';
import Reveal from './Reveal';
import AndroidInstallModal from './AndroidInstallModal';

const WEB_PROTOTYPE_URL = 'https://odini-zambia-prototype.vercel.app/';

const Download = () => {
  const [showAndroidModal, setShowAndroidModal] = useState(false);

  return (
    <section id="download" className="download">
      <div className="container">
        <div className="download-grid">
          <Reveal variant="fade-up" className="download-intro">
            <span className="kicker">Get the app</span>
            <h2 className="download-title">Odini for Android</h2>
            <p className="download-subtitle">
              We're an advanced functional prototype, preparing for pilot launch in Lusaka and
              Livingstone. Ahead of the Play Store launch, you can already try the Android beta
              or the web prototype below.
            </p>

            <div className="link-row download-buttons">
              <button
                type="button"
                className="link-cta link-cta-primary"
                onClick={() => setShowAndroidModal(true)}
              >
                <FaAndroid /> Try the Android beta <span className="link-cta-arrow">&rarr;</span>
              </button>
              <a
                href={WEB_PROTOTYPE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="link-cta link-cta-primary"
              >
                <FaGlobe /> Try the web prototype <span className="link-cta-arrow">&rarr;</span>
              </a>
              <span className="link-cta link-cta-muted">
                <FaServer /> Host app
                <span className="badge-soon">Coming soon</span>
              </span>
            </div>
          </Reveal>

          <Reveal variant="fade-up" delay={150} className="download-contact">
            <p>For partnerships or support, get in touch:</p>
            <EmailForm buttonText="Contact us" />
          </Reveal>
        </div>
      </div>

      {showAndroidModal && (
        <AndroidInstallModal onClose={() => setShowAndroidModal(false)} />
      )}
    </section>
  );
};

export default Download;
