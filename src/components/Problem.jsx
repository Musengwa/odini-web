// components/Problem.js
import React from 'react';
import './Problem.css';

const Problem = () => {
  return (
    <section id="problem" className="problem">
      <div className="container">
        <h2 className="section-title">The Problem</h2>
        <p className="section-subtitle">
          Tourism discovery remains fragmented despite Zambia welcoming{' '}
          <strong>2.2 million international visitors in 2025</strong>.
        </p>

        <div className="problem-grid">
          <div className="problem-card problem-card-highlight">
            <h3>Travelers</h3>
            <ul>
              <li>Information is scattered across multiple platforms.</li>
              <li>Planning trips requires switching between several apps.</li>
              <li>Hidden gems are difficult to discover.</li>
              <li>Recommendations are based on popularity rather than personal relevance.</li>
            </ul>
          </div>

          <div className="problem-card">
            <h3>Businesses</h3>
            <ul>
              <li>Limited digital visibility.</li>
              <li>Dependence on social media for marketing.</li>
              <li>Difficulty reaching customers who are most likely to convert.</li>
            </ul>
          </div>
        </div>

        <div className="problem-stats">
          <p className="problem-stats-intro">A 2026 study of Livingstone tourism MSMEs found:</p>
          <div className="stats-row">
            <div className="stat">
              <span className="stat-number">75%</span>
              <span className="stat-label">reported revenue growth after adopting digital marketing</span>
            </div>
            <div className="stat">
              <span className="stat-number">44.2%</span>
              <span className="stat-label">lack ICT funding</span>
            </div>
            <div className="stat">
              <span className="stat-number">50%</span>
              <span className="stat-label">lack digital skills</span>
            </div>
          </div>
          <p className="problem-citation">
            Zimba, P., Nsama, C. &amp; Kabwalwa, C. (2026). African Journal of Empirical
            Research 7(2). n=97. Arrivals: Ministry of Tourism, January 2026.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
