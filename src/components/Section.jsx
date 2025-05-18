// src/pages/section.jsx
import React, { useEffect } from 'react';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Section from '../components/Section';

const SectionPage = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Delay ensures DOM is ready
      }
    }
  }, []);

  return (
    <main className="pt-24 bg-dark text-white min-h-screen">
      <Section id="education" title="Education">
        <Education />
      </Section>

      <Section id="skills" title="Skills">
        <Skills />
      </Section>

      <Section id="projects" title="Projects">
        <Projects />
      </Section>

      <Section id="experience" title="Experience">
        <Experience />
      </Section>

      <Section id="contact" title="Contact">
        <Contact />
      </Section>
    </main>
  );
};

export default SectionPage;
