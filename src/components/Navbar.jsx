import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaCode, FaRocket } from 'react-icons/fa';

const Navbar = ({ scrollToSection, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { title: 'Home', id: 'home', icon: '🏠' },
    { title: 'About', id: 'about', icon: '👨‍💻' },
    { title: 'Education', id: 'education', icon: '🎓' },
    { title: 'Experience', id: 'experience', icon: '💼' },
    { title: 'Skills', id: 'skills', icon: '⚡' },
    { title: 'Portfolio', id: 'projects', icon: '🚀' },
    { title: 'Contact', id: 'contact', icon: '📧' },
  ];

  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  const logoVariants = {
    hover: {
      scale: 1.1,
      rotate: 360,
      boxShadow: "0 0 30px rgba(64, 224, 208, 0.8)",
      transition: { duration: 0.6 }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    hover: {
      scale: 1.1,
      y: -2,
      textShadow: "0 0 20px rgba(64, 224, 208, 0.8)",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        staggerChildren: 0.07,
        delayChildren: 0.1
      }
    }
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: -20, rotateY: -90 },
    open: { 
      opacity: 1, 
      x: 0, 
      rotateY: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  return (
    <>
      {/* Dynamic Background Glow */}
      <motion.div
        className="fixed top-0 left-0 w-full h-24 pointer-events-none z-40"
        style={{
          background: `radial-gradient(500px circle at ${mousePosition.x}px 0px, rgba(64, 224, 208, 0.1), transparent 40%)`
        }}
        animate={{
          opacity: scrolled ? 0.8 : 0.4
        }}
      />

      <motion.header
        className={`fixed w-full top-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'py-2 bg-slate-900/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-[0_8px_24px_rgba(0,0,0,0.3)]' 
            : 'py-4 bg-slate-900/80 backdrop-blur-md'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center relative">
          
          {/* Animated Logo */}
          <motion.div 
            className="flex items-center group cursor-pointer"
            variants={logoVariants}
            whileHover="hover"
            onClick={() => handleNavClick('home')}
          >
            <motion.div
              className="relative"
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo Background Glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg blur-md opacity-0 group-hover:opacity-60"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Main Logo */}
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/50 rounded-lg p-2 group-hover:border-cyan-400 transition-all duration-300">
                <motion.span 
                  className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    backgroundSize: "200% 200%"
                  }}
                >
                  VD
                </motion.span>
              </div>
            </motion.div>

            {/* Logo Text */}
            <motion.div 
              className="ml-2 hidden sm:block"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-white font-bold text-base group-hover:text-cyan-400 transition-colors">
                Vishal Dwivedy
              </div>
              <div className="text-xs text-gray-400 group-hover:text-purple-400 transition-colors">
                Software Engineer
              </div>
            </motion.div>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav 
            className="hidden md:flex items-center space-x-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, staggerChildren: 0.1 }}
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.id}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                transition={{ delay: index * 0.1 }}
              >
                <motion.button
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-3 py-1.5 rounded-lg font-medium transition-all duration-300 group ${
                    activeSection === link.id 
                      ? 'text-cyan-400 bg-slate-800/50 border border-cyan-500/30' 
                      : 'text-gray-300 hover:text-white hover:bg-slate-800/30'
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Active Section Glow */}
                  {activeSection === link.id && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg blur-sm"
                      layoutId="activeSection"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  
                  {/* Icon and Text */}
                  <span className="relative flex items-center gap-1.5 text-sm">
                    <span className="text-base">{link.icon}</span>
                    {link.title}
                  </span>

                  {/* Hover Effect Line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </motion.div>
            ))}
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden relative p-2 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
            onClick={toggleMenu}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.FaTimes
                  key="close"
                  className="h-5 w-5 text-cyan-400"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              ) : (
                <motion.FaBars
                  key="menu"
                  className="h-5 w-5 text-white hover:text-cyan-400 transition-colors"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </AnimatePresence>

            {/* Button Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-cyan-400/20 rounded-lg blur-md opacity-0 hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1.2 }}
            />
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <motion.div 
                className="bg-gradient-to-br from-slate-900/98 to-slate-800/98 backdrop-blur-xl border-t border-cyan-500/20 mx-3 my-1 rounded-xl shadow-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <div className="p-4">
                  <motion.div className="grid grid-cols-1 gap-1">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.id}
                        variants={mobileItemVariants}
                        custom={index}
                      >
                        <motion.button
                          onClick={() => handleNavClick(link.id)}
                          className={`w-full text-left p-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 group ${
                            activeSection === link.id 
                              ? 'text-cyan-400 bg-slate-800/50 border border-cyan-500/30 shadow-[0_0_15px_rgba(64,224,208,0.2)]' 
                              : 'text-gray-300 hover:text-white hover:bg-slate-800/30 hover:border-slate-600 border border-transparent'
                          }`}
                          whileHover={{ 
                            x: 8,
                            boxShadow: "0 4px 15px rgba(64, 224, 208, 0.15)"
                          }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <motion.span 
                            className="text-lg"
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                          >
                            {link.icon}
                          </motion.span>
                          {link.title}
                          
                          {/* Active Indicator */}
                          {activeSection === link.id && (
                            <motion.div
                              className="ml-auto w-1.5 h-1.5 bg-cyan-400 rounded-full"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              layoutId="mobileActiveIndicator"
                            />
                          )}
                        </motion.button>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Mobile Footer */}
                  <motion.div
                    className="mt-4 pt-3 border-t border-slate-700/50 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <p className="text-xs text-gray-400">
                      Made with <span className="text-red-400">❤️</span> by Vishal
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 origin-left z-50"
        style={{
          scaleX: typeof window !== 'undefined' ? 
            (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) : 0
        }}
        initial={{ scaleX: 0 }}
        animate={{ 
          scaleX: typeof window !== 'undefined' ? 
            (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) : 0
        }}
      />
    </>
  );
};

export default Navbar;