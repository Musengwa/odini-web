// components/AndroidInstallModal.jsx
import React, { useEffect } from 'react';
import { FaAndroid } from 'react-icons/fa';
import './AndroidInstallModal.css';

const RELEASES_URL = 'https://github.com/Odini-tech/odini_mobile_app/releases';

const AndroidInstallModal = ({ onClose }) => {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div className="android-modal-overlay" onClick={onClose}>
      <div
        className="android-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="android-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="android-modal-icon">
          <FaAndroid />
        </div>
        <h3 id="android-modal-title">Before you install</h3>
        <p>
          Odini is an early beta, still ahead of its Google Play launch — so it's distributed
          directly as an APK from our GitHub releases, not the Play Store.
        </p>
        <p>
          Your phone will likely warn you about installing from an unknown source. That's
          expected: just allow the install when prompted. This is the official build from the
          Odini team, safe to install.
        </p>
        <div className="android-modal-actions">
          <button className="link-cta link-cta-muted" onClick={onClose}>
            Cancel
          </button>
          <a
            href={RELEASES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="link-cta link-cta-primary"
            onClick={onClose}
          >
            Continue to GitHub <span className="link-cta-arrow">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AndroidInstallModal;
