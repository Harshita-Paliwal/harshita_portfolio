import React from 'react';
import '../styles/components/projects.css';
import { ExternalIcon, GithubIcon } from './icons';

// Project gallery with direct links and short summaries.
export default function Projects() {
  return (
    <section className="page-section projects-section" id="projects">
      <div className="section-inner">
        <div className="projects-head">
          <h2 className="section-title">
            Featured <em>Projects</em>
          </h2>

          <a
            className="projects-all"
            href="https://github.com/Harshita-Paliwal"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon className="projects-all-icon" width="16" height="16" />
            View all on GitHub
          </a>
        </div>

        <div className="projects-list">
          <article className="project-card project-card-teal">
            <div className="project-topline">
              <span className="project-number">01</span>
              <span className="project-status">Vercel + Render</span>
            </div>

            <h3>SmartGroCart</h3>
            <p className="project-subtitle">Online Grocery Management System</p>
            <p className="project-copy">
              A full-stack MERN application that helps users manage grocery shopping, track
              budgets, and organize family members efficiently. It includes secure
              authentication, RESTful APIs, and MongoDB Atlas for scalable data storage.
            </p>

            <div className="project-tags">
              <span>React.js</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>Express</span>
              <span>Vercel</span>
              <span>Render</span>
              <span>JWT Auth</span>
            </div>

            <div className="project-links">
              <a className="project-link project-link-primary" href="https://smartgrocart.vercel.app/" target="_blank" rel="noreferrer">
                <ExternalIcon width="16" height="16" />
                Live Demo
              </a>
              <a
                className="project-link"
                href="https://github.com/Harshita-Paliwal/SmartGroCart"
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon width="16" height="16" />
                Source Code
              </a>
            </div>
          </article>

          <article className="project-card project-card-gold">
            <div className="project-topline">
              <span className="project-number">02</span>
              <span className="project-status">In Development</span>
            </div>

            <h3>NextHire AI</h3>
            <p className="project-subtitle">AI-Powered Recruitment & Resume Screening</p>
            <p className="project-copy">
              An intelligent recruitment platform that uses NLP and embedding models to evaluate
              candidates, screen resumes, and generate actionable insights for hiring teams.
            </p>

            <div className="project-tags">
              <span>React</span>
              <span>Node.js</span>
              <span>PostgreSQL</span>
              <span>Python</span>
              <span>NLP</span>
              <span>Embeddings</span>
              <span>AI/ML</span>
            </div>

            <div className="project-links">
              <a
                className="project-link project-link-primary"
                href="https://nexthire-ai-gamma.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <ExternalIcon width="16" height="16" />
                Live Demo
              </a>
              <a
                className="project-link"
                href="https://github.com/Harshita-Paliwal/NextHireAI"
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon width="16" height="16" />
                Source Code
              </a>
            </div>
          </article>

          <article className="project-card project-card-violet">
            <div className="project-topline">
              <span className="project-number">03</span>
              <span className="project-status">Static Deploy</span>
            </div>

            <h3>BillifyX</h3>
            <p className="project-subtitle">Billing & Invoice Manager</p>
            <p className="project-copy">
              Responsive billing and invoice management system with dynamic bill generation,
              customer data handling, and a Kanban-style workflow board for tracking billing
              pipeline status.
            </p>

            <div className="project-tags">
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
              <span>Bootstrap</span>
              <span>Kanban Board</span>
            </div>

            <div className="project-links">
              <a
                className="project-link project-link-primary"
                href="https://billifyx.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <ExternalIcon width="16" height="16" />
                Live Demo
              </a>
              <a
                className="project-link"
                href="https://github.com/Harshita-Paliwal/BillifyX"
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon width="16" height="16" />
                Source Code
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
