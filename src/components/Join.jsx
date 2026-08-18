// components/Join.js
import React, { useState } from 'react';
import './Join.css';
import EmailModal from './EmailModal';
import Reveal from './Reveal';

const Join = () => {
  const [showModal, setShowModal] = useState(false)
  const [modalProps, setModalProps] = useState({})

  return (
    <section id="join" className="join">
      <div className="container">
        <div className="section-head">
          <span className="kicker">Get involved</span>
          <h2>Join Us</h2>
        </div>

        <div className="join-content">
          <Reveal variant="fade-up" className="join-column">
            <h3>For Businesses</h3>
            <p>
              Are you a stay owner, event host, or experience provider? Partner with us to
              reach more travelers and grow with zero upfront cost.
            </p>
            <ul className="partner-benefits">
              <li>Fair visibility based on relevance, not just budget</li>
              <li>Free growth tools no cost to list or onboard</li>
              <li>Better customer targeting through AI-enhanced listings</li>
              <li>Referral and followers systems to build your audience</li>
              <li>Actionable analytics on who's booking and why</li>
            </ul>
            <div>
              <button
                type="button"
                className="email-form-submit"
                onClick={() => {
                  setModalProps({ placeholder: 'you@business.com', buttonText: 'Work with us' })
                  setShowModal(true)
                }}
              >
                Work with us <span className="link-cta-arrow">→</span>
              </button>
            </div>
          </Reveal>

          <Reveal variant="fade-up" delay={150} className="join-column">
            <h3>For Travelers</h3>
            <p>
              Be the first to experience ODINI and transform how you discover, plan, and
              book across Zambia. Sign up for early access and updates.
            </p>
            <ul className="partner-benefits">
              <li>Personalized, AI-powered recommendations</li>
              <li>Faster trip planning with intelligent itineraries</li>
              <li>Trusted, verified listings you can book with confidence</li>
              <li>Better discovery of hidden gems near you</li>
            </ul>
            <div>
              <button
                type="button"
                className="email-form-submit"
                onClick={() => {
                  setModalProps({ placeholder: 'you@email.com', buttonText: 'Contact us' })
                  setShowModal(true)
                }}
              >
                Contact us <span className="link-cta-arrow">→</span>
              </button>
            </div>
          </Reveal>
        </div>
      </div>
      {showModal && (
        <EmailModal onClose={() => setShowModal(false)} {...modalProps} />
      )}
    </section>
  );
};

export default Join;

