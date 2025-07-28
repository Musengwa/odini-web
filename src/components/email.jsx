// components/EmailForm.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './EmailForm.css'; // Ensure you have a CSS file for styling

const EmailForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Verify your IDs in EmailJS dashboard
    const SERVICE_ID = 'service_stuld99'; // Replace with actual service ID
    const TEMPLATE_ID = 'template_36dwhwc'; // Replace with actual template ID
    const USER_ID = 'FAO7CKzb60CaCS0xI'; // Replace with actual user ID
    
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
          text: `Failed to send: ${error.text || 'Please check your EmailJS configuration'}`, 
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
          name="user_email"  // EmailJS requires this exact field name
          placeholder="Enter your email" 
          required 
          disabled={isSubmitting}
        />
        <button type="submit" disabled={isSubmitting} className='btn'>
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