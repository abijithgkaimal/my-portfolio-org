import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('abijithgkaimal@gmail.com');
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        
        {/* Central Hero Typography */}
        <div className="contact-hero-wrapper">
          <h2 className="contact-title contact-title--top">
            Let's Work
          </h2>
          <h2 className="contact-title contact-title--bottom">
            Together
          </h2>
        </div>

        {/* Email Container (Footer Center) */}
        <div className="contact-email-container">
          <span className="contact-email-label">Drop me an email :</span>
          <div className="contact-email-row">
            <a 
              href="mailto:abijithgkaimal@gmail.com" 
              className="contact-email-link"
            >
              abijithgkaimal@gmail.com
            </a>
            
            {/* Copy Button */}
            <div className="contact-copy-wrapper">
              <button 
                onClick={handleCopyEmail}
                className="contact-copy-btn"
                aria-label="Copy email to clipboard"
                title="Copy email to clipboard"
              >
                {copied ? (
                  // Checkmark icon for copied state
                  <svg 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="#171717" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  // Dual-document copy icon
                  <svg 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="#171717" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                )}
              </button>
              
              {/* Tooltip feedback */}
              <span className={`contact-copy-tooltip ${copied ? 'contact-copy-tooltip--visible' : ''}`}>
                Copied!
              </span>
            </div>
          </div>
        </div>

        {/* Floating Right-Side Social Links */}
        <div className="contact-socials-wrapper">
          <a 
            href="https://linkedin.com/in/abijithgkaimal" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-social-link font-sans font-bold"
            title="LinkedIn"
          >
            in
          </a>
          <a 
            href="https://github.com/abijithgkaimal" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-social-link font-sans font-bold"
            title="GitHub"
          >
            GH
          </a>
          <a 
            href="https://my-portfolio-org.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-social-link font-sans font-bold"
            title="Portfolio"
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#9AC900" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="contact-social-svg"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;
