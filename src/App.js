import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';

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

// Page transition animations
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: 'easeIn' } }
};

// Loading screen fade out
const loadingVariants = {
  initial: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: 0.6 } }
};

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 }); // start center

  const { scrollYProgress } = useScroll();
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  // Loading screen timeout
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  // Throttled mouse move handler
  useEffect(() => {
    let lastTime = 0;
    const throttleDelay = 50;

    const onMouseMove = (e) => {
      const now = Date.now();
      if (now - lastTime >= throttleDelay) {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100
        });
        lastTime = now;
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  // Listen for custom navigation events (if any)
  useEffect(() => {
    const handleNavigate = (e) => {
      const section = e.detail;
      if (section && sectionComponents[section]) {
        scrollToSection(section);
      }
    };
    document.addEventListener('navigate', handleNavigate);
    return () => document.removeEventListener('navigate', handleNavigate);
  }, []);

  // Scroll and set active section
  const scrollToSection = (sectionId) => {
    if (sectionId === activeSection) return;
    setActiveSection(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Loading screen component
  const LoadingScreen = () => (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800"
      variants={loadingVariants}
      initial="initial"
      exit="exit"
    >
      <div className="text-center z-10">
        <motion.div
          className="mb-8 mx-auto w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        />
        <motion.h1
          className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-4"
        >
          Welcome
        </motion.h1>
        <motion.p
          className="text-lg text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Loading portfolio...
        </motion.p>
      </div>
    </motion.div>
  );

  if (isLoading) {
    return (
      <AnimatePresence mode="wait">
        <LoadingScreen />
      </AnimatePresence>
    );
  }

  return (
    <motion.div
      className="min-h-screen text-white overflow-hidden relative bg-slate-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background with dynamic radial gradient */}
      <motion.div
        className="fixed inset-0 z-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
        style={{
          opacity: backgroundOpacity,
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(147, 51, 234, 0.05) 0%, transparent 50%)`
        }}
      />

      {/* Floating orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-overlay opacity-10 blur-xl"
            style={{
              background: i === 0 ? '#667eea' : i === 1 ? '#764ba2' : '#f093fb',
              width: 300,
              height: 300,
              left: `${20 + i * 30}%`,
              top: `${10 + i * 20}%`,
            }}
            animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      {/* Navbar */}
      <motion.div
        className="relative z-40"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        <Navbar scrollToSection={scrollToSection} activeSection={activeSection} />
      </motion.div>

      {/* Main content */}
      <main className="relative z-10 pt-20 min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="min-h-[calc(100vh-80px)]"
          >
            {sectionComponents[activeSection]}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <motion.div
        className="relative z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <Footer />
      </motion.div>

      {/* Section navigation dots */}
      <motion.div
        className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        aria-label="Section navigation"
      >
        {Object.keys(sectionComponents).map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`w-2 h-2 rounded-full transition-all ${
              activeSection === section
                ? 'bg-purple-500 scale-150'
                : 'bg-gray-500 hover:bg-purple-400'
            }`}
            aria-label={`Go to ${section}`}
            type="button"
          />
        ))}
      </motion.div>

      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Custom cursor */}
      <motion.div
        className="fixed w-4 h-4 bg-purple-400/80 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: `calc(${mousePosition.x}% - 8px)`,
          top: `calc(${mousePosition.y}% - 8px)`,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </motion.div>
  );
}

export default App;
