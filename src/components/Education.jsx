import React from 'react';
import '../styles/components/education.css';
import { GraduationCapIcon } from './icons';

// Education and achievement highlights.
export default function Education() {
  return (
    <section className="page-section education-section" id="education">
      <div className="section-inner">
        <div className="section-heading">
          <h2 className="section-title">
            Education & <em>Achievements</em>
          </h2>
        </div>

        <div className="education-layout">
          <div className="education-list">
            <article className="education-card">
              <div className="education-icon education-icon-cap">
                <GraduationCapIcon width="20" height="20" />
              </div>
              <div className="education-copy">
                <div className="education-head">
                  <div>
                    <h3>B.Tech - Computer Science</h3>
                    <p>Dr APJ Abdul Kalam Technical University, Lucknow</p>
                  </div>
                  <div className="education-meta">
                    <span>2022 - 2026</span>
                    <strong>CGPA 8.9</strong>
                  </div>
                </div>
              </div>
            </article>

            <article className="education-card">
              <div className="education-icon">XII</div>
              <div className="education-copy">
                <div className="education-head">
                  <div>
                    <h3>Class XII - CBSE</h3>
                    <p>Kerala Education Society Sr. Secondary School, New Delhi</p>
                  </div>
                  <div className="education-meta">
                    <span>2022</span>
                    <strong>77%</strong>
                  </div>
                </div>
              </div>
            </article>

            <article className="education-card">
              <div className="education-icon">X</div>
              <div className="education-copy">
                <div className="education-head">
                  <div>
                    <h3>Class X - CBSE</h3>
                    <p>Kerala Education Society Sr. Secondary School, New Delhi</p>
                  </div>
                  <div className="education-meta">
                    <span>2020</span>
                    <strong>90.5%</strong>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div className="achievement-list">
            <article className="achievement-card">
              <span className="achievement-icon">01</span>
              <p>Secretary, Academic Council - MGM CoET (2025-2026)</p>
            </article>

            <article className="achievement-card">
              <span className="achievement-icon">02</span>
              <p>Cultural Member, MGM CoET Cultural Society (2024-2025)</p>
            </article>

            <article className="achievement-card">
              <span className="achievement-icon">03</span>
              <p>Second Position in Kho-Kho - Directorate of Education, Zonal Level (2022)</p>
            </article>

            <article className="achievement-card">
              <span className="achievement-icon">04</span>
              <p>Strong leadership and communication skills across projects and extracurricular activities</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
