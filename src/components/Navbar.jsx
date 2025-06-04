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
    { title: 'Home', id: 'home', icon: '🏠' },
    { title: 'About', id: 'about', icon: '👨‍💻' },
    { title: 'Education', id: 'education', icon: '🎓' },
    { title: 'Experience', id: 'experience', icon: '💼' },
    { title: 'Skills', id: 'skills', icon: '⚡' },
    { title: 'Portfolio', id: 'projects', icon: '🚀' },
    { title: 'Contact', id: 'contact', icon: '📧' },
  ], []);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);

    const scrollTop = window.scrollY;
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

  const logoVariants = {
    hover: { scale: 1.1, transition: { duration: 0.3 } }
  };

  const navItemVariants = {
    hover: { scale: 1.05, y: -1, transition: { type: 'spring', stiffness: 300 } }
  };

  const mobileVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto' }
  };

  return (
    <>
      {/* Glow effect on scroll */}
      {scrolled && (
        <motion.div
          className="fixed top-0 left-0 w-full h-24 pointer-events-none z-40"
          style={{
            background: `radial-gradient(500px circle at ${mousePosition.x}px 0px, rgba(64, 224, 208, 0.08), transparent 50%)`
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}

      <motion.header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-2 bg-slate-900/90 backdrop-blur-lg shadow-md border-b border-cyan-500/10' : 'py-4 bg-slate-900/70'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="flex items-center cursor-pointer select-none"
            variants={logoVariants}
            whileHover="hover"
            onClick={() => handleNavClick('home')}
            tabIndex={0}
          >
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/50 rounded-lg p-2">
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
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3 py-2 rounded-lg font-medium ${
                  activeSection === link.id
                    ? 'text-cyan-400 bg-slate-800/50'
                    : 'text-gray-300 hover:text-white'
                }`}
                variants={navItemVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-1 text-sm">
                  <span>{link.icon}</span> {link.title}
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
          >
            {isMenuOpen ? <FaTimes className="text-cyan-400" /> : <FaBars className="text-white" />}
          </motion.button>
        </div>

        {/* Mobile nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden overflow-hidden px-4 pt-2 pb-3"
              variants={mobileVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.2 }}
            >
              <div className="bg-slate-900/95 backdrop-blur-xl rounded-xl p-4">
                {navLinks.map((link) => (
                  <motion.button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg font-medium ${
                      activeSection === link.id
                        ? 'text-cyan-400 bg-slate-800/50'
                        : 'text-gray-300 hover:text-white'
                    }`}
                    whileHover={{ x: 5 }}
                  >
                    <span className="flex items-center gap-2">
                      <span>{link.icon}</span> {link.title}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Scroll progress */}
      <div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 origin-left z-[60]"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />
    </>
  );
});

export default Navbar;
