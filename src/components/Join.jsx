// components/Join.js
import React from 'react';
import './Join.css';

const Join = () => {
  return (
    <section id="join" className="join">
      <div className="container">
        <h2 className="section-title">Join Us</h2>
        
        <div className="join-content">
          <div className="join-partners">
            <div className="join-card">
              <h3>For Partners</h3>
              <p>Are you a lodge owner, event host, or cultural guide? Partner with us to reach more travelers and showcase authentic Zambian experiences.</p>
              <ul className="partner-benefits">
                <li>Reach new customers with our AI-powered recommendations</li>
                <li>Manage bookings through our simple dashboard</li>
                <li>Promote your events to a targeted audience</li>
                <li>Get verified for increased trust and visibility</li>
              </ul>
              <button className="btn">Become a Partner</button>
            </div>
          </div>
          
          <div className="join-users">
            <div className="join-card">
              <h3>For Travelers</h3>
              <p>Be the first to experience Odini and transform how you explore Zambia. Sign up for early access and updates.</p>
              <form className="early-access-form">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  required 
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  required 
                />
                <button type="submit" className="btn">Get Early Access</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;