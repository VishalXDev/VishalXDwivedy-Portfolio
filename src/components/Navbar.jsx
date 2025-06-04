import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = React.memo(({ scrollToSection, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Mouse position state with ref for throttling updates
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mousePositionRef = useRef({ x: 0, y: 0, lastUpdate: 0 });

  // Navigation links (memoized)
  const navLinks = useMemo(() => [
    { title: 'Home', id: 'home', icon: '🏠' },
    { title: 'About', id: 'about', icon: '👨‍💻' },
    { title: 'Education', id: 'education', icon: '🎓' },
    { title: 'Experience', id: 'experience', icon: '💼' },
    { title: 'Skills', id: 'skills', icon: '⚡' },
    { title: 'Portfolio', id: 'projects', icon: '🚀' },
    { title: 'Contact', id: 'contact', icon: '📧' },
  ], []);

  // Scroll event handler
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  // Mouse move handler throttled to ~60fps
  const handleMouseMove = useCallback((e) => {
    const now = performance.now();
    if (now - mousePositionRef.current.lastUpdate > 16) {
      mousePositionRef.current = {
        x: e.clientX,
        y: e.clientY,
        lastUpdate: now,
      };
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleScroll, handleMouseMove]);

  // Toggle mobile menu open/close
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  // On nav link click: scroll and close menu
  const handleNavClick = useCallback((id) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  }, [scrollToSection]);

  // Animation variants
  const logoVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const navItemVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      transition: { duration: 0.2 },
    },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: 'auto' },
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  // Scroll progress for indicator
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      if (typeof window === 'undefined') return;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress();
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <>
      {/* Background glow effect on scroll */}
      {scrolled && (
        <motion.div
          className="fixed top-0 left-0 w-full h-24 pointer-events-none z-40"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0.4,
            background: `radial-gradient(500px circle at ${mousePosition.x}px 0px, rgba(64, 224, 208, 0.1), transparent 40%)`,
          }}
          transition={{ opacity: { duration: 0.3 } }}
        />
      )}

      <motion.header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-2 bg-slate-900/95 backdrop-blur-xl border-b border-cyan-500/20'
            : 'py-4 bg-slate-900/80 backdrop-blur-md'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="flex items-center cursor-pointer select-none"
            variants={logoVariants}
            whileHover="hover"
            onClick={() => handleNavClick('home')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleNavClick('home')}
            aria-label="Go to home section"
          >
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/50 rounded-lg p-2">
              <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                VD
              </span>
            </div>
            <div className="ml-2 hidden sm:block">
              <div className="text-white font-bold text-base">Vishal Dwivedy</div>
              <div className="text-xs text-gray-400">Software Engineer</div>
            </div>
          </motion.div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-1" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative px-3 py-1.5 rounded-lg font-medium transition-colors duration-200 ${
                  activeSection === link.id
                    ? 'text-cyan-400 bg-slate-800/50'
                    : 'text-gray-300 hover:text-white'
                }`}
                variants={navItemVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                aria-current={activeSection === link.id ? 'page' : undefined}
                aria-label={`Go to ${link.title} section`}
                type="button"
              >
                <span className="flex items-center gap-1.5 text-sm">
                  <span aria-hidden="true">{link.icon}</span>
                  {link.title}
                </span>
              </motion.button>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <motion.button
            className="md:hidden p-2 rounded-lg bg-slate-800/50"
            onClick={toggleMenu}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            type="button"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <FaTimes className="h-5 w-5 text-cyan-400" />
              ) : (
                <FaBars className="h-5 w-5 text-white" />
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-menu"
              className="md:hidden overflow-hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: 0.2 }}
            >
              <div className="bg-slate-900/95 backdrop-blur-xl mx-3 my-1 rounded-xl p-4">
                <div className="grid grid-cols-1 gap-1" role="menu" aria-label="Mobile navigation menu">
                  {navLinks.map((link) => (
                    <motion.button
                      key={link.id}
                      onClick={() => handleNavClick(link.id)}
                      className={`w-full text-left p-3 rounded-lg font-medium ${
                        activeSection === link.id
                          ? 'text-cyan-400 bg-slate-800/50'
                          : 'text-gray-300 hover:text-white'
                      }`}
                      variants={mobileItemVariants}
                      transition={{ duration: 0.1 }}
                      whileHover={{ x: 5 }}
                      role="menuitem"
                      type="button"
                      aria-current={activeSection === link.id ? 'page' : undefined}
                    >
                      <span className="flex items-center gap-2">
                        <span aria-hidden="true">{link.icon}</span>
                        {link.title}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Scroll progress indicator */}
      <div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 origin-left z-50"
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden="true"
      />
    </>
  );
});

export default Navbar;
