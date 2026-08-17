
// components/EmailForm.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './EmailForm.css';

const EmailForm = ({
  placeholder = 'you@email.com',
  buttonText = 'Get in touch',
  successText = "Thanks — we'll be in touch soon.",
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;

    if (!SERVICE_ID || !TEMPLATE_ID || !USER_ID) {
      console.error('Missing EmailJS environment variables');
      setMessage({
        text: 'Configuration error. Please contact support.',
        type: 'error',
      });
      setIsSubmitting(false);
      return;
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      () => {
        setMessage({ text: successText, type: 'success' });
        e.target.reset();
      },
      (error) => {
        setMessage({
          text: `Failed to send: ${error.text || 'please try again later'}`,
          type: 'error',
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
          placeholder={placeholder}
          required
          disabled={isSubmitting}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className={`email-form-submit ${isSubmitting ? 'submitting' : ''}`}
        >
          {isSubmitting ? 'Sending' : buttonText}
          <span className="link-cta-arrow">&rarr;</span>
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
