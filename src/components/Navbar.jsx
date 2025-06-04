import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

// Memoize the component to prevent unnecessary re-renders
const Navbar = React.memo(({ scrollToSection, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Throttle mouse position updates
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mousePositionRef = React.useRef({ x: 0, y: 0 });

  const navLinks = React.useMemo(() => [
    { title: 'Home', id: 'home', icon: '🏠' },
    { title: 'About', id: 'about', icon: '👨‍💻' },
    { title: 'Education', id: 'education', icon: '🎓' },
    { title: 'Experience', id: 'experience', icon: '💼' },
    { title: 'Skills', id: 'skills', icon: '⚡' },
    { title: 'Portfolio', id: 'projects', icon: '🚀' },
    { title: 'Contact', id: 'contact', icon: '📧' },
  ], []);

  // Throttled event handlers
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  const handleMouseMove = useCallback((e) => {
    // Only update state at 60fps max
    if (performance.now() - mousePositionRef.current.lastUpdate > 16) {
      mousePositionRef.current = { 
        x: e.clientX, 
        y: e.clientY,
        lastUpdate: performance.now()
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

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const handleNavClick = useCallback((id) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  }, [scrollToSection]);

  // Simplified variants
  const logoVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  const navItemVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      transition: { duration: 0.2 }
    }
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: "auto" }
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <>
      {/* Simplified background glow - only render when needed */}
      {scrolled && (
        <motion.div
          className="fixed top-0 left-0 w-full h-24 pointer-events-none z-40"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 0.4,
            background: `radial-gradient(500px circle at ${mousePosition.x}px 0px, rgba(64, 224, 208, 0.1), transparent 40%)`
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
          {/* Simplified Logo */}
          <motion.div 
            className="flex items-center cursor-pointer"
            variants={logoVariants}
            whileHover="hover"
            onClick={() => handleNavClick('home')}
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

          {/* Desktop Navigation - Simplified */}
          <nav className="hidden md:flex items-center space-x-1">
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
              >
                <span className="flex items-center gap-1.5 text-sm">
                  <span>{link.icon}</span>
                  {link.title}
                </span>
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button - Simplified */}
          <motion.button
            className="md:hidden p-2 rounded-lg bg-slate-800/50"
            onClick={toggleMenu}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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

        {/* Mobile Navigation - Simplified */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: 0.2 }}
            >
              <div className="bg-slate-900/95 backdrop-blur-xl mx-3 my-1 rounded-xl p-4">
                <div className="grid grid-cols-1 gap-1">
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
                    >
                      <span className="flex items-center gap-2">
                        <span>{link.icon}</span>
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

      {/* Simplified Scroll Indicator */}
      <div className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 origin-left z-50"
        style={{
          transform: `scaleX(${typeof window !== 'undefined' ? 
            (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) : 0})`
        }}
      />
    </>
  );
});

export default Navbar;