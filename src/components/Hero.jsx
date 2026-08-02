import React from 'react';
import '../styles/components/hero.css';
import { openResumePreview } from '../utils/resume';
import {
  EmailIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  EyeIcon,
  YoutubeIcon,
} from './icons';

const photoUrl = '/photo.jpeg';

// Main landing section with the portrait and quick contact cards.
export default function Hero() {
  // Move the user to the work section when they tap the CTA.
  const goToProjects = () => {
    const target = document.getElementById('projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero-section" id="home">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />

      <div className="section-inner hero-inner">
        <div className="hero-copy">
          <h1 className="hero-title">
            Harshita
            <span>Paliwal</span>
          </h1>

          <p className="hero-tagline">Full Stack Developer & AI Systems Builder</p>

          <div className="hero-kicker">
            <span className="section-dot" />
            Available for opportunities
          </div>

          <p className="hero-description">
            Building intelligent, scalable web applications with the MERN stack and AI-powered
            systems. Specializing in clean architecture, NLP integrations, and beautiful user
            experiences.
            <br />
            Based in New Delhi, India.
          </p>

          <div className="hero-actions">
            <button className="hero-button hero-button-primary" onClick={goToProjects}>
              View My Work
            </button>

            <button className="hero-button hero-button-secondary" onClick={openResumePreview}>
              <EyeIcon width="16" height="16" />
              <span>Resume</span>
            </button>
          </div>
        </div>

        <div className="hero-contact-grid">
          <a className="hero-contact-card" href="mailto:paliwalharshita16@gmail.com" aria-label="Email Harshita at paliwalharshita16@gmail.com" title="Email">
            <span className="hero-contact-icon hero-contact-icon-gold">
              <EmailIcon width="18" height="18" />
            </span>
            <span className="sr-only">Email</span>
          </a>

          <a className="hero-contact-card" href="https://www.linkedin.com/in/harshipali16" target="_blank" rel="noreferrer" aria-label="Open LinkedIn profile" title="LinkedIn">
            <span className="hero-contact-icon hero-contact-icon-linkedin">
              <LinkedinIcon width="18" height="18" />
            </span>
            <span className="sr-only">LinkedIn</span>
          </a>

          <a className="hero-contact-card hero-contact-card-social" href="https://github.com/Harshita-Paliwal" target="_blank" rel="noreferrer" aria-label="Open GitHub profile" title="GitHub">
            <span className="hero-contact-icon hero-contact-icon-github">
              <GithubIcon width="18" height="18" />
            </span>
            <span className="sr-only">GitHub</span>
          </a>

          <a className="hero-contact-card hero-contact-card-social" href="https://www.instagram.com/getupharshi" target="_blank" rel="noreferrer" aria-label="Open Instagram profile" title="Instagram">
            <span className="hero-contact-icon hero-contact-icon-instagram">
              <InstagramIcon width="18" height="18" />
            </span>
            <span className="sr-only">Instagram</span>
          </a>

          <a className="hero-contact-card hero-contact-card-social" href="https://www.youtube.com/@getupharshi" target="_blank" rel="noreferrer" aria-label="Open YouTube channel" title="YouTube">
            <span className="hero-contact-icon hero-contact-icon-youtube">
              <YoutubeIcon width="18" height="18" />
            </span>
            <span className="sr-only">YouTube</span>
          </a>
        </div>

        <div className="hero-photo-card">
          <div className="hero-photo-frame">
            <img className="hero-photo" src={photoUrl} alt="Harshita Paliwal" />
          </div>
        </div>
      </div>
    </section>
  );
}
