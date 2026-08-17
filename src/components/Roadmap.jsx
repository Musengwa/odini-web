// components/Roadmap.js
import React from 'react';
import './Roadmap.css';
import Reveal from './Reveal';

import { SiProbot } from 'react-icons/si';
import { MdVerified } from 'react-icons/md';
import { FaMapMarkedAlt } from 'react-icons/fa';

const PHASES = [
  {
    title: 'Lusaka Launch',
    items: [
      'Mobile money live across MTN, Airtel and Zamtel',
      '15–20 partners onboarded',
      'Recommendation engine live',
    ],
  },
  {
    title: 'Livingstone Launch',
    items: ['40+ partners onboarded', 'Commission model switched on'],
  },
  {
    title: 'Nationwide Expansion',
    items: ['Launch in a third city', '100+ partners onboarded', 'Team scaling to match growth'],
  },
];

const HOW_IT_WORKS = [
  {
    icon: <FaMapMarkedAlt size={26} />,
    title: 'Discover',
    text: 'Browse AI-curated stays, events and experiences near you',
  },
  {
    icon: <SiProbot size={26} />,
    title: 'Ask Your AI Guide',
    text: 'Chat naturally "what\'s buzzing for food near me?" and get real answers',
  },
  {
    icon: <MdVerified size={26} />,
    title: 'Book Instantly',
    text: 'Confirm your booking with integrated mobile money checkout',
  },
];

const Roadmap = () => {
  return (
    <section id="roadmap" className="roadmap">
      <div className="container">
        <div className="section-head">
          <span className="kicker">The path ahead</span>
          <h2>What&rsquo;s Coming</h2>
        </div>

        <div className="roadmap-content">
          <div className="timeline">
            {PHASES.map((phase, i) => (
              <Reveal as="div" variant="fade-up" delay={i * 120} className="timeline-item" key={phase.title}>
                <span className="timeline-index">{String(i + 1).padStart(2, '0')}</span>
                <div className="timeline-content">
                  <h3>{phase.title}</h3>
                  <ul>
                    {phase.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="feature-highlight">
            <span className="kicker">How it works</span>
            {HOW_IT_WORKS.map((f, i) => (
              <Reveal as="div" variant="fade-up" delay={i * 120} className="feature-item" key={f.title}>
                <div className="feature-icon">{f.icon}</div>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
