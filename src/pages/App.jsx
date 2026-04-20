import React, { useLayoutEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Education from '../components/Education';
import About from '../components/About';
import Contact from '../components/Contact';

export default function App() {
  // Always start the page at the top after a refresh.
  useLayoutEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);

    // Enable the gentle scroll-reveal animation system.
    document.documentElement.classList.add('reveal-ready');

    const immediateVisibleSelectors = [
      '#home .hero-copy',
      '#home .hero-photo-card',
      '#home .hero-contact-grid',
    ];

    immediateVisibleSelectors.forEach((selector) => {
      document.querySelector(selector)?.classList.add('is-visible');
    });

    const revealSelectors = [
      '.page-section',
      '.hero-contact-card',
      '.experience-card',
      '.experience-stat',
      '.experience-cert',
      '.project-card',
      '.skill-group',
      '.education-card',
      '.achievement-card',
      '.about-card',
    ];

    const revealItems = Array.from(document.querySelectorAll(revealSelectors.join(', ')));

    revealItems.forEach((element) => {
      element.classList.add('reveal-item');
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    revealItems.forEach((element) => {
      if (!element.classList.contains('is-visible')) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('reveal-ready');
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  return (
    <main className="site-shell">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <About />
      <Contact />
    </main>
  );
}
