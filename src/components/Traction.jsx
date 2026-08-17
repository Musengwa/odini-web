// components/Traction.js
import React from 'react';
import Reveal from './Reveal';
import './Traction.css';

const TRACTION_ITEMS = [
  'Advanced Functional Prototype completed',
  'Accepted into the National Technology Business Centre (NTBC) Virtual Incubation Programme',
  'Customer validation survey completed',
  'Early waitlist established',
  'Brilliant Catalyst Sandbox Winner',
  'MTN Pachipanda Semifinalist',
  'Five-person founding team',
];

const Traction = () => {
  return (
    <section id="traction" className="traction">
      <div className="container">
        <div className="section-head section-head--right">
          <span className="kicker">Where we stand</span>
          <h2>Traction</h2>
        </div>

        <div className="traction-list">
          {TRACTION_ITEMS.map((item, i) => (
            <Reveal as="div" variant="fade-up" delay={i * 70} className="traction-item" key={item}>
              <span className="traction-index">{String(i + 1).padStart(2, '0')}</span>
              <p>{item}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Traction;
