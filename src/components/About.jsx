import React from 'react';
import '../styles/components/about.css';

// Personal introduction cards with a more readable structure.
export default function About() {
  return (
    <section className="page-section about-section" id="about">
      <div className="section-inner">
        <div className="section-heading about-heading">
          <h2 className="section-title">
            Hey, I am Harshita. You can call me <span className="about-nick"><em>Harshi</em></span>
          </h2>
        </div>

        <div className="about-grid">
          <article className="about-card">
            <p className="about-card-label">By day</p>
            <p className="about-card-copy">
              I build full-stack web apps that actually solve real problems. Not just todo apps.
            </p>
          </article>

          <article className="about-card">
            <p className="about-card-label">By personality</p>
            <p className="about-card-copy">
              A mix of logic and creativity. I can code APIs one moment and dance or cook the next.
            </p>
          </article>

          <article className="about-card">
            <p className="about-card-label">Current focus</p>
            <p className="about-card-copy">
              Building projects like SmartGroCart and NextHire AI, exploring Java and MERN, and
              using AI tools to work smarter.
            </p>
          </article>

          <article className="about-card">
            <p className="about-card-label">Side quests</p>
            <p className="about-card-copy">
              Creating content on Instagram and YouTube, joining events and fests, and trying new
              things while learning from the misses.
            </p>
          </article>

          <article className="about-card">
            <p className="about-card-label">Mindset</p>
            <p className="about-card-copy">Learn fast. Build faster. Improve constantly.</p>
          </article>

          <article className="about-card">
            <p className="about-card-label">Fun fact</p>
            <p className="about-card-copy">
              If I am not coding, I am probably dancing, cooking, or planning the next idea.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
