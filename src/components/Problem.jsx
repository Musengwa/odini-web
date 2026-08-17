// components/Problem.js
import React from 'react';
import Reveal from './Reveal';
import './Problem.css';

const Problem = () => {
  return (
    <section id="problem" className="problem">
      <div className="container">
        <div className="section-head section-head--right">
          <span className="kicker">The gap</span>
          <h2>The Problem</h2>
          <p>
            Tourism discovery remains fragmented despite Zambia welcoming{' '}
            <strong>2.2 million international visitors in 2025</strong>.
          </p>
        </div>

        <div className="problem-grid">
          <Reveal variant="fade-up" className="problem-block problem-block-highlight">
            <h3>Travelers</h3>
            <ul>
              <li>Information is scattered across multiple platforms.</li>
              <li>Planning trips requires switching between several apps.</li>
              <li>Hidden gems are difficult to discover.</li>
              <li>Recommendations are based on popularity rather than personal relevance.</li>
            </ul>
          </Reveal>

          <Reveal variant="fade-up" delay={120} className="problem-block">
            <h3>Businesses</h3>
            <ul>
              <li>Limited digital visibility.</li>
              <li>Dependence on social media for marketing.</li>
              <li>Difficulty reaching customers who are most likely to convert.</li>
            </ul>
          </Reveal>
        </div>

        <div className="problem-stats">
          <p className="problem-stats-intro">A 2026 study of Livingstone tourism MSMEs found:</p>
          <div className="stats-row">
            {[
              { number: '75%', label: 'reported revenue growth after adopting digital marketing' },
              { number: '44.2%', label: 'lack ICT funding' },
              { number: '50%', label: 'lack digital skills' },
            ].map((s, i) => (
              <Reveal as="div" variant="fade-up" delay={i * 120} className="stat" key={s.number}>
                <span className="stat-number">{s.number}</span>
                <span className="stat-label">{s.label}</span>
              </Reveal>
            ))}
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
