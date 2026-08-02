import React from 'react';
import '../styles/components/experience.css';

// Experience section with stats, roles, and certification.
export default function Experience() {
  return (
    <section className="page-section experience-section" id="experience">
      <div className="section-inner">
        <div className="section-heading">
          <h2 className="section-title">
            Work <em>Experience</em>
          </h2>
        </div>

        <div className="experience-stats" aria-label="Quick stats">
          <article className="experience-stat">
            <strong>8.9</strong>
            <span>CGPA - B.Tech CS</span>
          </article>
          <article className="experience-stat">
            <strong>3+</strong>
            <span>Years of Coding</span>
          </article>
          <article className="experience-stat">
            <strong>3+</strong>
            <span>Internships</span>
          </article>
          <article className="experience-stat">
            <strong>5+</strong>
            <span>Projects Built</span>
          </article>
        </div>

        <div className="experience-list">
          <article className="experience-card">
            <div className="experience-index">01</div>
            <div className="experience-content">
              <h3>Software Engineer Intern</h3>
              <p className="experience-company">Surepass Technologies</p>
              <p className="experience-copy">
                Built scalable backend solutions for KYC verification and Batch Solver automation
                using FastAPI, Flask, PostgreSQL, Temporal, and Elasticsearch, while optimizing
                enterprise workflows through data mapping, web scraping, and backend automation.
              </p>

              <div className="experience-tags">
                <span>FastAPI</span>
                <span>Flask</span>
                <span>PostgreSQL</span>
                <span>Temporal</span>
                <span>Elasticsearch</span>
                <span>Automation</span>
              </div>
            </div>
          </article>

          <article className="experience-card">
            <div className="experience-index experience-index-teal">02</div>
            <div className="experience-content">
              <h3>Full Stack Developer Intern</h3>
              <p className="experience-company experience-company-teal">4everCloud Technologies</p>
              <p className="experience-copy">
                Developed responsive frontend pages and dashboards for a multilingual Consent
                Management System using React. Integrated REST APIs and implemented consent
                workflows for seamless user experience, while also building a rule-based chatbot
                and supporting backend integrations for platform features.
              </p>

              <div className="experience-tags">
                <span>React.js</span>
                <span>Node.js</span>
                <span>PostgreSQL</span>
                <span>REST APIs</span>
                <span>Consent Workflows</span>
                <span>Chatbot</span>
              </div>
            </div>
          </article>

          <article className="experience-card">
            <div className="experience-index experience-index-teal">03</div>
            <div className="experience-content">
              <h3>Frontend Development Intern</h3>
              <p className="experience-company experience-company-teal">Planetcast Media Services Ltd.</p>
              <p className="experience-copy">
                Built a responsive billing management application with HTML, CSS, and JavaScript,
                implementing dark/light mode, role-based dashboards, and bill management features.
                Developed interactive UI components including a Kanban board, analytics dashboard,
                and export functionality for CSV, Excel, and PDF.
              </p>

              <div className="experience-tags">
                <span>HTML5</span>
                <span>CSS3</span>
                <span>JavaScript</span>
                <span>Kanban Board</span>
                <span>Analytics</span>
                <span>UI Design</span>
              </div>
            </div>
          </article>
        </div>

        <article className="experience-cert">
          <p className="experience-cert-label">Certifications </p>

          <div className="experience-cert-list">
            <div className="experience-cert-item">
              <div className="experience-cert-badge">1</div>
              <div className="experience-cert-copy">
                <h3>IEEE AI Symposium Participation</h3>
                <p className="experience-cert-meta-line">April 2024</p>
                <p>University of South Dakota (IEEE Sponsored) - AI Symposium</p>
                <p>
                  Participated in an international AI symposium focused on emerging AI trends and
                  research discussions.
                </p>
              </div>
            </div>

            <div className="experience-cert-item">
              <div className="experience-cert-badge">2</div>
              <div className="experience-cert-copy">
                <h3>IBM SkillsBuild Data Analytics Internship</h3>
                <p className="experience-cert-meta-line">June - Aug 2024</p>
                <p>CSRBOX x IBM SkillsBuild - Data Analytics</p>
                <p>
                  Completed a 6-week internship covering data analytics fundamentals, real-world
                  datasets, and practical insights.
                </p>
              </div>
            </div>

            <div className="experience-cert-item">
              <div className="experience-cert-badge">3</div>
              <div className="experience-cert-copy">
                <h3>Dell "Women in Data" Program</h3>
                <p className="experience-cert-meta-line">2024</p>
                <p>Dell Technologies x Learning Links Foundation - Data & Communication Skills</p>
                <p>
                  Completed training on data analytics basics, communication skills, and job
                  readiness.
                </p>
              </div>
            </div>

            <div className="experience-cert-item">
              <div className="experience-cert-badge">4</div>
              <div className="experience-cert-copy">
                <h3>Java Developer Certification</h3>
                <p className="experience-cert-meta-line">July 2025</p>
                <p>Infosys Springboard - Java Development</p>
                <p>
                  Successfully completed Java Developer Certification focusing on core Java and
                  programming concepts.
                </p>
              </div>
            </div>

            <div className="experience-cert-item">
              <div className="experience-cert-badge">5</div>
              <div className="experience-cert-copy">
                <h3>Java Full Stack Development</h3>
                <p className="experience-cert-meta-line">2025</p>
                <p>CETPA Infotech - Spring Boot, JDBC, REST APIs</p>
                <p>
                  Completed full-stack training covering backend development, database
                  integration, and API design.
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
