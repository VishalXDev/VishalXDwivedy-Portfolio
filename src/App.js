// src/App.jsx
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const sectionComponents = {
  home: <Hero />,
  about: <About />,
  education: <Education />,
  skills: <Skills />,
  experience: <Experience />,
  projects: <Projects />,
  contact: <Contact />
};

const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 }
};

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-dark text-white overflow-auto">
      <Navbar scrollToSection={scrollToSection} activeSection={activeSection} />
      <main className="pt-24 px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6 }}
          >
            {sectionComponents[activeSection]}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
