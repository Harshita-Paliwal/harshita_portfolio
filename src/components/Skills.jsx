import React from 'react';
import '../styles/components/skills.css';

// Skills section grouped by category for quick scanning.
export default function Skills() {
  return (
    <section className="page-section skills-section" id="skills">
      <div className="section-inner">
        <div className="section-heading">
          <h2 className="section-title">
            Technical <em>Skills</em>
          </h2>
        </div>

        <div className="skills-panel">
          <article className="skill-group">
            <p className="skill-label skill-label-gold">Languages</p>
            <div className="skill-chips">
              <span>JavaScript</span>
              <span>Java</span>
              <span>Python</span>
              <span>HTML5</span>
              <span>CSS3</span>
            </div>
          </article>

          <article className="skill-group">
            <p className="skill-label skill-label-teal">Frameworks & Libraries</p>
            <div className="skill-chips">
              <span>React.js</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>Tailwind CSS</span>
              <span>Bootstrap</span>
            </div>
          </article>

          <article className="skill-group">
            <p className="skill-label skill-label-violet">Databases</p>
            <div className="skill-chips">
              <span>MongoDB</span>
              <span>PostgreSQL</span>
              <span>MySQL</span>
            </div>
          </article>

          <article className="skill-group">
            <p className="skill-label skill-label-red">Tools & Platforms</p>
            <div className="skill-chips">
              <span>Git / GitHub</span>
              <span>Postman</span>
              <span>VS Code</span>
              <span>IntelliJ IDEA</span>
              <span>Vercel</span>
              <span>Render</span>
            </div>
          </article>

          <article className="skill-group skill-group-last">
            <p className="skill-label skill-label-blue">Methodologies</p>
            <div className="skill-chips">
              <span>Agile / Scrum</span>
              <span>SDLC</span>
              <span>REST APIs</span>
              <span>Modular Architecture</span>
              <span>Responsive Design</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
