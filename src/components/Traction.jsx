// components/Traction.js
import React from 'react';
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
        <h2 className="section-title">Traction</h2>

        <div className="traction-grid">
          {TRACTION_ITEMS.map((item) => (
            <div className="traction-card" key={item}>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Traction;
