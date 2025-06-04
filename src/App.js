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

// Epic page transition variants
const pageVariants = {
  initial: { 
    opacity: 0, 
    scale: 0.8,
    rotateX: -10,
    y: 100
  },
  animate: { 
    opacity: 1, 
    scale: 1,
    rotateX: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.8
    }
  },
  exit: { 
    opacity: 0, 
    scale: 1.1,
    rotateX: 10,
    y: -100,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

// Loading screen variants
const loadingVariants = {
  initial: { opacity: 1 },
  exit: { 
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.8, ease: "easeInOut" }
  }
};

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const appRef = useRef(null);
  
  const { scrollYProgress } = useScroll();
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  // Loading screen effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    if (sectionId === activeSection) return;
    
    setIsTransitioning(true);
    setActiveSection(sectionId);
    
    // Smooth scroll to top with transition
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Reset transition state
    setTimeout(() => setIsTransitioning(false), 800);
  };
  
  // Listen for navigation events from components
  useEffect(() => {
    const handleNavigate = (e) => {
      scrollToSection(e.detail);
    };
    
    document.addEventListener('navigate', handleNavigate);
    return () => {
      document.removeEventListener('navigate', handleNavigate);
    };
  }, []);

  // Loading Screen Component
  const LoadingScreen = () => (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        background: `
          radial-gradient(circle at 30% 40%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 70% 60%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
          linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)
        `
      }}
      variants={loadingVariants}
      initial="initial"
      exit="exit"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Loading Content */}
      <div className="text-center z-10">
        <motion.div
          className="mb-8"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-20 h-20 border-4 border-purple-500/30 border-t-purple-500 rounded-full mx-auto"></div>
        </motion.div>
        
        <motion.h1
          className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mb-4"
          animate={{ 
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Welcome
        </motion.h1>
        
        <motion.p
          className="text-xl text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Preparing an extraordinary experience...
        </motion.p>
        
        {/* Loading Bar */}
        <motion.div 
          className="w-64 h-1 bg-gray-800 rounded-full mx-auto mt-8 overflow-hidden"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );

  if (isLoading) {
    return (
      <AnimatePresence>
        <LoadingScreen />
      </AnimatePresence>
    );
  }

  return (
    <motion.div 
      ref={appRef}
      className="min-h-screen text-white overflow-hidden relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Dynamic Background */}
      <motion.div
        className="fixed inset-0 z-0"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
            radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.05) 0%, transparent 70%),
            linear-gradient(135deg, #0f0f23 0%, #1a1a2e 30%, #16213e 60%, #0f0f23 100%)
          `,
          opacity: backgroundOpacity
        }}
      />

      {/* Animated Grid Pattern */}
      <div className="fixed inset-0 z-0 opacity-5">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-20"
            style={{
              background: `linear-gradient(45deg, 
                ${i % 3 === 0 ? '#667eea' : i % 3 === 1 ? '#764ba2' : '#f093fb'}, 
                ${i % 3 === 0 ? '#764ba2' : i % 3 === 1 ? '#f093fb' : '#f5576c'})`,
              width: Math.random() * 300 + 200,
              height: Math.random() * 300 + 200,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 300 - 150],
              y: [0, Math.random() * 300 - 150],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: Math.random() * 15 + 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Navbar */}
      <motion.div
        className="relative z-40"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Navbar 
          scrollToSection={scrollToSection} 
          activeSection={activeSection}
        />
      </motion.div>

      {/* Main Content */}
      <main className="relative z-10 pt-20 min-h-screen">
        {/* Transition Overlay */}
        <AnimatePresence>
          {isTransitioning && (
            <motion.div
              className="fixed inset-0 z-30 bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>

        {/* Page Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="min-h-[calc(100vh-80px)] relative"
            style={{ perspective: "1000px" }}
          >
            {/* Content Wrapper with Glassmorphism */}
            <motion.div
              className="relative backdrop-blur-sm bg-white/2 border-t border-white/5"
              whileInView={{ 
                boxShadow: [
                  "0 0 0 rgba(147, 51, 234, 0)",
                  "0 0 100px rgba(147, 51, 234, 0.1)",
                  "0 0 0 rgba(147, 51, 234, 0)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              viewport={{ once: false }}
            >
              {sectionComponents[activeSection]}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <motion.div
        className="relative z-20"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <Footer />
      </motion.div>

      {/* Section Indicator */}
      <motion.div 
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="flex flex-col space-y-3">
          {Object.keys(sectionComponents).map((section, index) => (
            <motion.button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                activeSection === section 
                  ? 'bg-purple-500 border-purple-500 shadow-lg shadow-purple-500/50 scale-125' 
                  : 'bg-transparent border-gray-500 hover:border-purple-400 hover:scale-110'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </motion.div>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Custom Cursor Effect */}
      <motion.div
        className="fixed w-6 h-6 bg-purple-500/30 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x * (window.innerWidth / 100) - 12,
          top: mousePosition.y * (window.innerHeight / 100) - 12,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
}

export default App;