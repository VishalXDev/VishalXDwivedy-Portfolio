import React, { useState, useEffect, useRef } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const sectionComponents = {
  home: <Hero />,
  about: <About />,
  education: <Education />,
  skills: <Skills />,
  experience: <Experience />,
  projects: <Projects />,
  contact: <Contact />,
};

// Enhanced page transition animations with Vercel-style easing
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    filter: "blur(4px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.33, 1, 0.68, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    filter: "blur(2px)",
    transition: {
      duration: 0.4,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

// Enhanced loading screen animations
const loadingVariants = {
  initial: { opacity: 1 },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const { scrollYProgress } = useScroll();
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  // Loading screen timeout
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Throttled mouse move handler for interactive background
  useEffect(() => {
    let lastTime = 0;
    const throttleDelay = 32; // 60fps

    const onMouseMove = (e) => {
      const now = Date.now();
      if (now - lastTime >= throttleDelay) {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100,
        });
        lastTime = now;
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  // Listen for custom navigation events
  useEffect(() => {
    const handleNavigate = (e) => {
      const section = e.detail;
      if (section && sectionComponents[section]) {
        scrollToSection(section);
      }
    };
    document.addEventListener("navigate", handleNavigate);
    return () => document.removeEventListener("navigate", handleNavigate);
  }, []);

  // Enhanced scroll and set active section
  const scrollToSection = (sectionId) => {
    if (sectionId === activeSection) return;
    setActiveSection(sectionId);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Vercel-style loading screen
  const LoadingScreen = () => (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        background: "var(--bg-primary)",
      }}
      variants={loadingVariants}
      initial="initial"
      exit="exit"
    >
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(0, 112, 243, 0.05) 0%, transparent 50%)`,
        }}
      />

      <div className="text-center z-10 relative">
        {/* Modern spinner */}
        <motion.div
          className="mb-8 mx-auto w-12 h-12 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="absolute inset-0 border-2 border-gray-800 rounded-full"></div>
          <motion.div
            className="absolute inset-0 border-2 border-transparent border-t-blue-500 rounded-full"
            animate={{ rotate: 360 }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>

        {/* Loading text */}
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h1 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
            Loading Portfolio
          </h1>
          <p className="text-sm text-gray-400 font-medium">
            Preparing experience...
          </p>
        </motion.div>

        {/* Loading dots */}
        <motion.div
          className="flex justify-center items-center space-x-1 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 bg-gray-500 rounded-full"
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: [0.4, 0, 0.6, 1],
              }}
            />
          ))}
        </motion.div>
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
      className="min-h-screen text-white overflow-hidden relative"
      style={{ background: "var(--bg-primary)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Enhanced background with interactive gradient */}
      <motion.div
        className="fixed inset-0 z-0"
        style={{
          opacity: backgroundOpacity,
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${
            mousePosition.y
          }%, rgba(0, 112, 243, 0.04) 0%, transparent 40%),
            radial-gradient(circle at ${100 - mousePosition.x}% ${
            100 - mousePosition.y
          }%, rgba(124, 58, 237, 0.03) 0%, transparent 40%),
            var(--bg-primary)
          `,
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="fixed inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Floating gradient orbs - more subtle */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-soft-light opacity-5 blur-3xl"
            style={{
              background:
                i === 0
                  ? "linear-gradient(45deg, #0070f3, #7c3aed)"
                  : "linear-gradient(45deg, #7c3aed, #ec4899)",
              width: i === 0 ? 400 : 300,
              height: i === 0 ? 400 : 300,
              left: `${10 + i * 70}%`,
              top: `${20 + i * 30}%`,
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, 40, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 25 + i * 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: [0.4, 0, 0.6, 1],
            }}
          />
        ))}
      </div>

      {/* Navbar with glass effect */}
      <motion.div
        className="relative z-40"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.1,
          duration: 0.8,
          ease: [0.33, 1, 0.68, 1],
        }}
      >
        <Navbar
          scrollToSection={scrollToSection}
          activeSection={activeSection}
        />
      </motion.div>

      {/* Main content with enhanced transitions */}
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
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: [0.33, 1, 0.68, 1],
        }}
      >
        <Footer />
      </motion.div>

      {/* Enhanced section navigation dots */}
      <motion.div
        className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-3"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 1,
          duration: 0.6,
          ease: [0.33, 1, 0.68, 1],
        }}
        aria-label="Section navigation"
      >
        {Object.keys(sectionComponents).map((section, index) => (
          <motion.button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`relative w-2 h-2 rounded-full transition-all duration-300 ${
              activeSection === section
                ? "bg-blue-500 scale-125 shadow-glow"
                : "bg-gray-600 hover:bg-gray-400"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 1 + index * 0.05,
              duration: 0.4,
            }}
            aria-label={`Go to ${section}`}
            type="button"
          >
            {activeSection === section && (
              <motion.div
                className="absolute inset-0 bg-blue-500/20 rounded-full"
                layoutId="activeDot"
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>
        ))}
      </motion.div>

      {/* Refined scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 z-50 origin-left"
        style={{
          scaleX: scrollYProgress,
          background:
            "linear-gradient(90deg, var(--accent-blue), var(--accent-purple))",
        }}
      />

      {/* Subtle custom cursor effect */}
      <motion.div
        className="fixed w-3 h-3 rounded-full pointer-events-none z-50 mix-blend-difference hidden lg:block"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          background: "rgba(255, 255, 255, 0.6)",
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: [0.4, 0, 0.6, 1],
        }}
      />

      {/* Ambient noise texture overlay */}
      <div
        className="fixed inset-0 z-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </motion.div>
  );
}

export default App;
