import React from 'react';
import '../styles/components/contact.css';

// Final call to action and page footer.
export default function Contact() {
  return (
    <>
      <section className="page-section contact-section" id="contact">
        <div className="section-inner contact-inner">
          <p className="contact-kicker">Let's Connect</p>
          <h2 className="contact-title">
            Open to roles,
            <br />
            <em>internships and collaborations</em>
          </h2>
          <p className="contact-copy">
            If you have a role, idea, or project in mind, I would love to hear from you.
          </p>
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-inner footer-inner">
          <span className="footer-name">Harshita Paliwal</span>
          <span className="footer-location">New Delhi, India</span>
        </div>
      </footer>
    </>
  );
}
