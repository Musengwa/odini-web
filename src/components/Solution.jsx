// components/Solution.js
import React from 'react';
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
        <h2 className="section-title">The Solution</h2>
        <p className="section-subtitle">
          Odini combines AI with an experience-first ecosystem to simplify discovery and
          business growth.
        </p>

        <div className="solution-grid">
          <div className="solution-card solution-card-highlight">
            <h3>For Travelers</h3>
            <ul className="solution-list">
              {travelerFeatures.map((f) => (
                <li key={f.label}>
                  <span className="solution-icon">{f.icon}</span>
                  {f.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="solution-card">
            <h3>For Businesses</h3>
            <ul className="solution-list solution-list-plain">
              {businessFeatures.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="comparison">
          <h3>Why Odini Stands Out</h3>

          <div className="comparison-table">
            <div className="table-header">
              <div className="header-cell">Capability</div>
              <div className="header-cell">Odini</div>
              <div className="header-cell">Other Platforms</div>
            </div>

            <div className="table-row">
              <div className="row-cell">Primary Focus</div>
              <div className="row-cell">Stays + Events + Experiences</div>
              <div className="row-cell">Single-purpose — lodging, nightlife, or booking only</div>
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
        </div>
      </div>
    </section>
  );
};

export default Solution;
