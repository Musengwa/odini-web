
// components/EmailForm.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './EmailForm.css';

const EmailForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log('EmailJS Config:', {
  service: ` ${process.env.REACT_APP_EMAILJS_SERVICE_ID}`,
  template: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  user: process.env.REACT_APP_EMAILJS_USER_ID
});
    
    // Use the correct environment variable names
    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;
    
    // Add validation for environment variables
    if (!SERVICE_ID || !TEMPLATE_ID || !USER_ID) {
      console.error('Missing EmailJS environment variables');
      setMessage({ 
        text: 'Configuration error. Please contact support.', 
        type: 'error' 
      });
      setIsSubmitting(false);
      return;
    }
    
    emailjs.sendForm(
      SERVICE_ID,
      TEMPLATE_ID,
      e.target,
      USER_ID
    ).then(
      (result) => {
        console.log('Email sent successfully!', result.text);
        setMessage({ text: 'Thank you! We\'ll be in touch soon.', type: 'success' });
        e.target.reset();
      },
      (error) => {
        console.error('EmailJS error:', error);
        setMessage({ 
          text: `Failed to send: ${error.text || 'Please try again later'}`, 
          type: 'error' 
        });
      }
    ).finally(() => {
      setIsSubmitting(false);
      setTimeout(() => setMessage({ text: '', type: '' }), 5000);
    });
  };

  return (
    <div className="email-form-container">
      <form onSubmit={sendEmail}>
        <input 
          type="email" 
          name="user_email"
          placeholder="Enter your email" 
          required 
          disabled={isSubmitting}
        />
        <button 
          type="submit" 
          disabled={isSubmitting}
          className={`btn ${isSubmitting ? 'submitting' : ''}`}
        >
          {isSubmitting ? 'Sending...' : 'Join the Journey'}
        </button>
      </form>
      
      {message.text && (
        <div className={`message ${message.type}`}>
          {message.text}
        </div>
      )}
    </div>
  );
};
export default EmailForm;