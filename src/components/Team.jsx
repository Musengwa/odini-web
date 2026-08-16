// components/Team.js
import React from 'react';
import './Team.css';

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
        <h2 className="section-title">The Team</h2>
        <p className="section-subtitle">Building for long-term success.</p>

        <div className="team-grid">
          {TEAM.map((member) => (
            <div className="team-card" key={member.name}>
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
