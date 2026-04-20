import React from 'react';
import '../styles/components/navbar.css';
import { openAndDownloadResume } from '../utils/resume';

// Top navigation for the one-page portfolio.
export default function Navbar() {
  // Smoothly scroll to a section on the page.
  const goToSection = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="nav-shell">
      <nav className="nav-bar" aria-label="Primary">
        <a className="nav-brand" href="#home" onClick={() => goToSection('home')}>
          HP<span>.</span>
        </a>

        <div className="nav-links">
          <button className="nav-link" onClick={() => goToSection('about')}>
            About
          </button>
          <button className="nav-link" onClick={() => goToSection('experience')}>
            Experience
          </button>
          <button className="nav-link" onClick={() => goToSection('projects')}>
            Projects
          </button>
          <button className="nav-link" onClick={() => goToSection('skills')}>
            Skills
          </button>
          <button className="nav-link" onClick={() => goToSection('education')}>
            Education
          </button>

          <a
            className="nav-resume"
            href="/resume.pdf"
            onClick={(event) => {
              event.preventDefault();
              openAndDownloadResume();
            }}
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
