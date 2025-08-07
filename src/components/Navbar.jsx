import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = React.memo(({ scrollToSection, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mousePositionRef = useRef({ x: 0, y: 0, lastUpdate: 0 });

  const navLinks = useMemo(() => [
    { title: 'Home', id: 'home', icon: '⌂' },
    { title: 'About', id: 'about', icon: '∴' },
    { title: 'Education', id: 'education', icon: '⌘' },
    { title: 'Experience', id: 'experience', icon: '◉' },
    { title: 'Skills', id: 'skills', icon: '◈' },
    { title: 'Portfolio', id: 'projects', icon: '⚡' },
    { title: 'Contact', id: 'contact', icon: '✉' },
  ], []);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    setScrolled(scrollTop > 20);

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? scrollTop / docHeight : 0;
    setScrollProgress(progress);
  }, []);

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

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const handleNavClick = useCallback((id) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  }, [scrollToSection]);

  // Enhanced animation variants
  const logoVariants = {
    hover: { 
      scale: 1.02, 
      transition: { 
        duration: 0.2,
        ease: [0.33, 1, 0.68, 1]
      } 
    }
  };

  const navItemVariants = {
    hover: { 
      y: -1, 
      transition: { 
        type: 'spring', 
        stiffness: 400,
        damping: 30
      } 
    }
  };

  const mobileVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      transition: { 
        duration: 0.2,
        ease: [0.4, 0, 1, 1]
      }
    },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: { 
        duration: 0.25,
        ease: [0, 0, 0.2, 1]
      }
    }
  };

  return (
    <>
      {/* Subtle interactive glow effect */}
      {scrolled && (
        <motion.div
          className="fixed top-0 left-0 w-full h-20 pointer-events-none z-40"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px 0px, rgba(0, 112, 243, 0.02), transparent 60%)`
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}

      <motion.header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'py-3 nav-glass shadow-elevation-2' 
            : 'py-4'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ 
          duration: 0.6,
          ease: [0.33, 1, 0.68, 1]
        }}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Enhanced Logo */}
          <motion.div
            className="flex items-center cursor-pointer select-none"
            variants={logoVariants}
            whileHover="hover"
            onClick={() => handleNavClick('home')}
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleNavClick('home')}
          >
            <div className="glass-effect rounded-lg p-2.5 border-0">
              <span 
                className="text-lg font-bold"
                style={{ 
                  color: 'var(--text-primary)',
                  background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                VD
              </span>
            </div>
            <div className="ml-3 hidden sm:block">
              <div 
                className="font-semibold text-sm tracking-tight"
                style={{ color: 'var(--text-primary)' }}
              >
                Vishal Dwivedy
              </div>
              <div 
                className="text-xs font-medium"
                style={{ color: 'var(--text-tertiary)' }}
              >
                Software Engineer
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                  activeSection === link.id
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
                variants={navItemVariants}
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.05,
                  duration: 0.4
                }}
                style={{
                  background: activeSection === link.id 
                    ? 'var(--bg-glass-hover)'
                    : 'transparent'
                }}
              >
                {/* Active indicator */}
                {activeSection === link.id && (
                  <motion.div
                    className="absolute inset-0 rounded-lg"
                    style={{
                      background: 'var(--bg-glass-hover)',
                      border: '1px solid var(--border-secondary)'
                    }}
                    layoutId="activeTab"
                    transition={{ 
                      type: 'spring',
                      stiffness: 300,
                      damping: 30
                    }}
                  />
                )}
                
                <span className="relative flex items-center gap-2">
                  <span className="text-xs opacity-70">{link.icon}</span> 
                  {link.title}
                </span>
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-3 rounded-lg glass-effect"
            onClick={toggleMenu}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMenuOpen ? (
                <FaTimes 
                  className="text-sm" 
                  style={{ color: 'var(--accent-blue)' }} 
                />
              ) : (
                <FaBars 
                  className="text-sm" 
                  style={{ color: 'var(--text-primary)' }} 
                />
              )}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden overflow-hidden px-6 pb-4"
              variants={mobileVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <motion.div 
                className="glass-effect rounded-xl p-4 mt-3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <div className="space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.button
                      key={link.id}
                      onClick={() => handleNavClick(link.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg font-medium text-sm transition-all duration-200 ${
                        activeSection === link.id
                          ? 'text-white bg-blue-500/10 border border-blue-500/20'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: index * 0.05,
                        duration: 0.3
                      }}
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-sm opacity-70">{link.icon}</span> 
                        {link.title}
                        {activeSection === link.id && (
                          <motion.div
                            className="ml-auto w-1.5 h-1.5 rounded-full"
                            style={{ background: 'var(--accent-blue)' }}
                            layoutId="mobileActiveIndicator"
                          />
                        )}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Enhanced Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 origin-left z-[60]"
        style={{
          background: 'linear-gradient(90deg, var(--accent-blue), var(--accent-purple))',
          transform: `scaleX(${scrollProgress})`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />

      {/* Subtle bottom border when scrolled */}
      {scrolled && (
        <motion.div
          className="fixed top-16 left-0 right-0 h-px z-40"
          style={{ 
            background: 'linear-gradient(90deg, transparent, var(--border-primary), transparent)' 
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;