// components/Solution.js
import React from 'react';
import Reveal from './Reveal';
import './Solution.css';
import { FaRobot, FaMapMarkedAlt, FaWallet, FaSearch, FaCalendarAlt, FaLayerGroup } from 'react-icons/fa';

const travelerFeatures = [
  { icon: <FaRobot />, label: 'AI-powered recommendations' },
  { icon: <FaMapMarkedAlt />, label: 'Intelligent itinerary planning' },
  { icon: <FaWallet />, label: 'Budget optimization' },
  { icon: <FaSearch />, label: 'Semantic AI search' },
  { icon: <FaCalendarAlt />, label: 'Hyperlocal event discovery' },
  { icon: <FaLayerGroup />, label: 'Smart experience bundling' },
];

const businessFeatures = [
  'AI-enhanced listings',
  'Business analytics',
  'Referral system',
  'Followers system',
  'Promotions',
  'Increased discoverability',
];

const Solution = () => {
  return (
    <section id="solution" className="solution">
      <div className="container">
        <div className="section-head">
          <span className="kicker">How we fix it</span>
          <h2>The Solution</h2>
          <p>
            ODINI combines AI with an experience-first ecosystem to simplify discovery and
            business growth.
          </p>
        </div>

        <div className="solution-grid">
          <Reveal variant="fade-up" className="solution-block solution-block-highlight">
            <h3>For Travelers</h3>
            <ul className="solution-list">
              {travelerFeatures.map((f) => (
                <li key={f.label}>
                  <span className="solution-icon">{f.icon}</span>
                  {f.label}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal variant="fade-up" delay={120} className="solution-block">
            <h3>For Businesses</h3>
            <ul className="solution-list solution-list-plain">
              {businessFeatures.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal variant="fade-up" className="comparison">
          <h3>Why ODINI Stands Out</h3>

          <div className="comparison-table">
            <div className="table-header">
              <div className="header-cell">Capability</div>
              <div className="header-cell">ODINI</div>
              <div className="header-cell">Other Platforms</div>
            </div>

            <div className="table-row">
              <div className="row-cell">Primary Focus</div>
              <div className="row-cell">Stays + Events + Experiences</div>
              <div className="row-cell">Single-purpose lodging, nightlife, or booking only</div>
            </div>

            <div className="table-row">
              <div className="row-cell">Mobile Money Checkout</div>
              <div className="row-cell">Integrated, native</div>
              <div className="row-cell">Rarely supported</div>
            </div>

            <div className="table-row">
              <div className="row-cell">Event + Stay + Experience Bundling</div>
              <div className="row-cell">Unified booking flow</div>
              <div className="row-cell">Not offered</div>
            </div>

            <div className="table-row">
              <div className="row-cell">Hyper-Local Live Inventory</div>
              <div className="row-cell">Yes, across categories</div>
              <div className="row-cell">Limited or host-only</div>
            </div>

            <div className="table-row">
              <div className="row-cell">Transaction Execution</div>
              <div className="row-cell">Native, in-app</div>
              <div className="row-cell">Often text-only or third-party</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Solution;
