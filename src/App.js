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
    // Scroll to top when changing sections
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Listen for navigation events from components
  React.useEffect(() => {
    const handleNavigate = (e) => {
      scrollToSection(e.detail);
    };
    
    document.addEventListener('navigate', handleNavigate);
    return () => {
      document.removeEventListener('navigate', handleNavigate);
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark text-white overflow-auto">
      <Navbar scrollToSection={scrollToSection} activeSection={activeSection} />
      <main className="pt-24 px-4 min-h-screen"> {/* Added min-h-screen to ensure full height */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6 }}
            className="min-h-[calc(100vh-96px)]" /* This ensures content fills the viewport minus header/footer */
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