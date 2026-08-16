// components/Join.js
import React from 'react';
import './Join.css';
import EmailForm from './email';

const Join = () => {
  return (
    <section id="join" className="join">
      <div className="container">
        <h2 className="section-title">Join Us</h2>

        <div className="join-content">
          <div className="join-partners">
            <div className="join-card">
              <h3>For Businesses</h3>
              <p>
                Are you a stay owner, event host, or experience provider? Partner with us to
                reach more travelers and grow with zero upfront cost.
              </p>
              <ul className="partner-benefits">
                <li>Fair visibility based on relevance, not just budget</li>
                <li>Free growth tools — no cost to list or onboard</li>
                <li>Better customer targeting through AI-enhanced listings</li>
                <li>Referral and followers systems to build your audience</li>
                <li>Actionable analytics on who's booking and why</li>
              </ul>
              <EmailForm />
            </div>
          </div>

          <div className="join-users">
            <div className="join-card">
              <h3>For Travelers</h3>
              <p>
                Be the first to experience Odini and transform how you discover, plan, and
                book across Zambia. Sign up for early access and updates.
              </p>
              <ul className="partner-benefits">
                <li>Personalized, AI-powered recommendations</li>
                <li>Faster trip planning with intelligent itineraries</li>
                <li>Trusted, verified listings you can book with confidence</li>
                <li>Better discovery of hidden gems near you</li>
              </ul>
              <EmailForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
