// src/App.js
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  
  // Create refs for each section
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    education: useRef(null),
    skills: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
    contact: useRef(null)
  };

  // Function to scroll to a specific section
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    
    // Scroll to section with smooth behavior
    if (sectionRefs[sectionId] && sectionRefs[sectionId].current) {
      sectionRefs[sectionId].current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar scrollToSection={scrollToSection} activeSection={activeSection} />
      <main>
        <div ref={sectionRefs.home}>
          <Hero />
        </div>
        <div ref={sectionRefs.about}>
          <About />
        </div>
        <div ref={sectionRefs.education}>
          <Education />
        </div>
        <div ref={sectionRefs.skills}>
          <Skills />
        </div>
        <div ref={sectionRefs.experience}>
          <Experience />
        </div>
        <div ref={sectionRefs.projects}>
          <Projects />
        </div>
        <div ref={sectionRefs.contact}>
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;