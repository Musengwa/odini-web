import React, { useEffect } from 'react'
import './EmailModal.css'
import EmailForm from './email'

const EmailModal = ({ onClose, placeholder, buttonText, successText }) => {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="email-modal-overlay" onMouseDown={onClose} role="dialog" aria-modal="true">
      <div className="email-modal" onMouseDown={(e) => e.stopPropagation()}>
        <button className="email-modal-close" onClick={onClose} aria-label="Close">✕</button>
        <div className="email-modal-inner">
          <h3>Join the waitlist</h3>
          <p style={{ marginTop: 6, marginBottom: 14, color: 'var(--text-on-dark-muted)' }}>Enter your email and we'll be in touch.</p>
          <EmailForm placeholder={placeholder} buttonText={buttonText} successText={successText} />
        </div>
      </div>
    </div>
  )
}

export default EmailModal
