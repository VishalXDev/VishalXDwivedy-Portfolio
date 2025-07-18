import React, { useState, useRef, useCallback, useMemo, useEffect } from 'react';
import {
  FaInstagram, FaGithub, FaLinkedinIn,
  FaVolumeUp, FaVolumeMute, FaRocket, FaCode, FaBolt,
  FaSun, FaMoon, FaDesktop, FaPalette
} from 'react-icons/fa';
import { motion as m, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [showThemePanel, setShowThemePanel] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  
  const introduction = "Hi, I'm Vishal Dwivedy, a Full-Stack Software Engineer building scalable, production-ready web apps using React.js, Node.js, and modern cloud tools.";

  // Theme configurations
  const themes = {
    dark: {
      name: 'Dark',
      icon: FaMoon,
      background: 'bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/30',
      cardBg: 'from-gray-800/50 to-gray-900/50',
      textPrimary: 'text-white',
      textSecondary: 'text-gray-300',
      accent: 'from-purple-400 via-pink-400 to-blue-400',
      buttonPrimary: 'from-purple-600 to-blue-600',
      blobs: {
        primary: 'from-purple-500/10 to-pink-500/10',
        secondary: 'from-blue-500/10 to-cyan-500/10'
      }
    },
    light: {
      name: 'Light',
      icon: FaSun,
      background: 'bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/40',
      cardBg: 'from-white/80 to-gray-50/80',
      textPrimary: 'text-gray-900',
      textSecondary: 'text-gray-600',
      accent: 'from-purple-600 via-pink-600 to-blue-600',
      buttonPrimary: 'from-purple-500 to-blue-500',
      blobs: {
        primary: 'from-purple-200/20 to-pink-200/20',
        secondary: 'from-blue-200/20 to-cyan-200/20'
      }
    },
    cyberpunk: {
      name: 'Cyberpunk',
      icon: FaBolt,
      background: 'bg-gradient-to-br from-black via-purple-900/40 to-cyan-900/30',
      cardBg: 'from-gray-900/80 to-black/80',
      textPrimary: 'text-cyan-100',
      textSecondary: 'text-cyan-300/80',
      accent: 'from-cyan-400 via-purple-400 to-pink-400',
      buttonPrimary: 'from-cyan-500 to-purple-500',
      blobs: {
        primary: 'from-cyan-500/15 to-purple-500/15',
        secondary: 'from-pink-500/15 to-blue-500/15'
      }
    },
    ocean: {
      name: 'Ocean',
      icon: FaDesktop,
      background: 'bg-gradient-to-br from-slate-900 via-blue-900/30 to-teal-900/30',
      cardBg: 'from-slate-800/60 to-blue-900/60',
      textPrimary: 'text-blue-50',
      textSecondary: 'text-blue-200',
      accent: 'from-blue-400 via-teal-400 to-cyan-400',
      buttonPrimary: 'from-blue-600 to-teal-600',
      blobs: {
        primary: 'from-blue-500/12 to-teal-500/12',
        secondary: 'from-cyan-500/12 to-blue-500/12'
      }
    }
  };

  const currentTheme = themes[theme];

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleSpeech = useCallback(() => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const speech = new SpeechSynthesisUtterance(introduction);
      speech.onend = () => setIsSpeaking(false);
      window.speechSynthesis.speak(speech);
      setIsSpeaking(true);
    }
  }, [isSpeaking]);

  const socialLinks = useMemo(() => [
    { icon: FaInstagram, href: "https://www.instagram.com/", color: "hover:text-pink-400" },
    { icon: FaGithub, href: "https://github.com/VishalXDev", color: "hover:text-gray-300" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/vishal-dwivedy", color: "hover:text-blue-400" }
  ], []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }, [x, y]);

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  const ThemeSelector = () => (
    <AnimatePresence>
      {showThemePanel && (
        <m.div
          initial={{ opacity: 0, scale: 0.9, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: -10 }}
          className="absolute top-16 right-0 bg-gray-800/95 backdrop-blur-lg border border-gray-600/50 rounded-2xl p-4 shadow-2xl z-50 min-w-48"
        >
          <div className="space-y-2">
            {Object.entries(themes).map(([key, themeConfig]) => {
              const IconComponent = themeConfig.icon;
              return (
                <button
                  key={key}
                  onClick={() => {
                    setTheme(key);
                    setShowThemePanel(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-gray-700/50 ${
                    theme === key ? 'bg-purple-600/30 text-purple-300' : 'text-gray-300'
                  }`}
                >
                  <IconComponent className="text-sm" />
                  <span className="text-sm font-medium">{themeConfig.name}</span>
                </button>
              );
            })}
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );

  return (
    <m.section
      key={theme}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="home"
      ref={heroRef}
      className={`relative min-h-screen flex items-center ${currentTheme.background} overflow-hidden transition-all duration-700`}
    >
      {/* Interactive mouse follower */}
      <div 
        className="fixed w-6 h-6 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 pointer-events-none z-50 mix-blend-screen transition-transform duration-200 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: 'translate3d(0, 0, 0)'
        }}
      />

      {/* Theme Control Panel */}
      <div className="fixed top-6 right-6 z-40">
        <div className="relative">
          <m.button
            onClick={() => setShowThemePanel(!showThemePanel)}
            className="w-12 h-12 bg-gray-800/80 backdrop-blur-lg border border-gray-600/50 rounded-full flex items-center justify-center text-purple-400 hover:text-purple-300 transition-all duration-200 hover:scale-105 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPalette className="text-lg" />
          </m.button>
          <ThemeSelector />
        </div>
      </div>

      {/* Enhanced Background Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <m.div 
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className={`absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br ${currentTheme.blobs.primary} rounded-full blur-3xl opacity-40`} 
        />
        <m.div 
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className={`absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr ${currentTheme.blobs.secondary} rounded-full blur-3xl opacity-40`} 
        />
        <m.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br ${currentTheme.blobs.primary} rounded-full blur-2xl opacity-20`} 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-start gap-8">
          {/* Enhanced Text Section */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-2/3 space-y-8"
          >
            {/* Status Badge with enhanced animation */}
            <m.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full px-5 py-3 text-sm backdrop-blur-sm"
            >
              <m.div
                animate={{ 
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaRocket className="text-purple-400" />
              </m.div>
              <span className="text-purple-300 font-medium">Available for exciting projects</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </m.div>

            {/* Enhanced Typography */}
            <div className="space-y-4">
              <m.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                <span className={currentTheme.textPrimary}>Hi, I'm </span>
                <span className={`bg-gradient-to-r ${currentTheme.accent} bg-clip-text text-transparent`}>Vishal</span>
                <br />
                <span className={`bg-gradient-to-r ${currentTheme.accent} bg-clip-text text-transparent`}>Dwivedy</span>
              </m.h1>

              <m.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex items-center gap-3"
              >
                <m.div
                  animate={{ 
                    rotate: [0, 360],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <FaBolt className="text-yellow-400 text-xl" />
                </m.div>
                <h2 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Full-Stack Engineer | AI-Powered Web Solutions
                </h2>
              </m.div>
            </div>

            {/* Enhanced Description */}
            <m.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className={`text-base md:text-lg ${currentTheme.textSecondary} max-w-2xl leading-relaxed`}
            >
              Full-Stack Software Engineer skilled in crafting production-grade web applications using React.js, Node.js, and modern cloud tools. 
              I specialize in real-time UX, AI integrations, and performance-optimized architectures that create lasting user impact.
            </m.p>

            {/* Enhanced Action Buttons */}
            <m.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-wrap gap-4"
            >
              <m.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.dispatchEvent(new CustomEvent('navigate', { detail: 'contact' }))}
                className={`bg-gradient-to-r ${currentTheme.buttonPrimary} text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 relative overflow-hidden group`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <FaRocket />
                  Let's Collaborate
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </m.button>

              <m.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://drive.google.com/file/d/11ExXm9qSkJ7yhzkW6H1oU3PAsXqBh9DU/view"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-purple-500/50 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/15 hover:bg-purple-500/10 backdrop-blur-sm"
              >
                <span className="flex items-center gap-2">
                  <FaCode />
                  Download CV
                </span>
              </m.a>

              <m.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleSpeech}
                title={isSpeaking ? "Stop Voice" : "Hear Introduction"}
                className={`w-14 h-14 border border-purple-500/50 rounded-full flex items-center justify-center text-purple-400 hover:border-purple-400 hover:text-purple-300 transition-all duration-300 hover:bg-purple-500/10 backdrop-blur-sm ${isSpeaking ? 'animate-pulse shadow-lg shadow-purple-500/30' : ''}`}
              >
                {isSpeaking ? <FaVolumeMute /> : <FaVolumeUp />}
              </m.button>
            </m.div>

            {/* Enhanced Social Links */}
            <m.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex gap-4"
            >
              {socialLinks.map(({ icon: Icon, href, color }, index) => (
                <m.a
                  key={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:border-white/50 backdrop-blur-sm hover:bg-white/5 ${color}`}
                >
                  <Icon className="text-lg" />
                </m.a>
              ))}
            </m.div>
          </m.div>

          {/* Enhanced 3D Tilt Card */}
          <m.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            style={{ rotateX, rotateY }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative w-80 h-96 cursor-pointer flex-shrink-0 perspective-1000"
          >
            <m.div
              whileHover={{ scale: 1.05 }}
              className={`relative w-full h-full bg-gradient-to-br ${currentTheme.cardBg} backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden shadow-2xl`}
            >
              {/* Animated grid background */}
              <div className="absolute inset-0 opacity-10">
                {[...Array(12)].map((_, i) => (
                  <m.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="border-t border-purple-500/20 h-8"
                    style={{ top: `${i * 8.33}%` }}
                  />
                ))}
              </div>

              {/* Profile Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 p-6">
                <m.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                  className="relative"
                >
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 p-1 shadow-2xl shadow-purple-500/30">
                    <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/20">
                      <img
                        src="/profile.jpg"
                        alt="Vishal Dwivedy"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  {/* Animated ring */}
                  <m.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border-2 border-dashed border-purple-400/30"
                  />
                </m.div>

                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                  className="mt-6 space-y-3"
                >
                  <h3 className={`text-xl font-bold ${currentTheme.textPrimary} tracking-wide`}>VISHAL DWIVEDY</h3>
                  <p className="text-purple-300 font-medium text-sm">Software Engineer</p>
                  <m.div 
                    initial={{ width: 0 }}
                    animate={{ width: "60%" }}
                    transition={{ delay: 1.6, duration: 0.8 }}
                    className={`h-1 bg-gradient-to-r ${currentTheme.accent} rounded-full mx-auto`} 
                  />
                </m.div>
              </div>

              {/* Corner decorations */}
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-purple-500/50 rounded-tr-xl"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-blue-500/50 rounded-bl-xl"></div>
              
              {/* Floating particles */}
              {[...Array(3)].map((_, i) => (
                <m.div
                  key={i}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 1,
                    ease: "easeInOut"
                  }}
                  className="absolute w-1 h-1 bg-purple-400 rounded-full"
                  style={{
                    left: `${20 + i * 30}%`,
                    top: `${80 + i * 5}%`,
                  }}
                />
              ))}
            </m.div>
          </m.div>
        </div>
      </div>

      {/* Enhanced gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none" />
    </m.section>
  );
};

export default Hero;