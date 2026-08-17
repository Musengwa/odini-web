// components/Team.js
import React from 'react';
import Reveal from './Reveal';
import './Team.css';

const initials = (name) =>
  name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .toUpperCase();

const TEAM = [
  {
    name: 'Enos Malunga',
    role: 'Founder & CEO, Software Engineer',
    bio: 'MTN Pachipanda semifinalist, Top 3 winner at the Brilliant Catalyst Entrepreneurship Sandbox 2025.',
  },
  {
    name: 'Taizya Yambayamba',
    role: 'Lead AI Engineer',
    bio: 'MTN Pachipanda semifinalist.',
  },
  {
    name: 'Musengwa Himoonga',
    role: 'Full-Stack Developer',
    bio: "2 years' experience. MTN Pachipanda semifinalist.",
  },
  {
    name: 'Nephas Kango',
    role: 'UI/UX Designer',
    bio: 'UCS Secretary General.',
  },
  {
    name: 'Mike Shatamuka',
    role: 'Backend Engineer',
    bio: 'Top 10 in the UNZA Innovation Challenge.',
  },
];

const Team = () => {
  return (
    <section id="team" className="team">
      <div className="container">
        <div className="section-head section-head--right">
          <span className="kicker">Who's building this</span>
          <h2>The Team</h2>
          <p>Building for long-term success.</p>
        </div>

        <div className="team-grid">
          {TEAM.map((member, i) => (
            <Reveal as="div" variant="fade-up" delay={i * 90} className="team-tile" key={member.name}>
              <div className="team-avatar" aria-hidden="true">
                <span>{initials(member.name)}</span>
              </div>
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-bio">{member.bio}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
