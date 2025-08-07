// Hero.jsx - Updated with Electronic Bill Style and Improved UI
import React, { useState, useRef, useCallback, useMemo, useEffect } from 'react';
import {
  FaGithub,
  FaLinkedinIn,
  FaVolumeUp,
  FaVolumeMute,
  FaRocket,
  FaCode,
  FaBolt,
  FaEnvelope,
  FaArrowRight,
  FaPlay,
  FaPause,
  FaDownload,
  FaHandshake
} from 'react-icons/fa';
import { motion as m, useMotionValue, useTransform } from 'framer-motion';

// Typewriter Component
const TypewriterText = ({ texts, speed = 100, deleteSpeed = 50, delayBetween = 1500 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        
        if (displayText === currentText) {
          setTimeout(() => setIsDeleting(true), delayBetween);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, texts, speed, deleteSpeed, delayBetween]);

  return <span>{displayText}</span>;
};

const Hero = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const heroRef = useRef(null);
  const introduction = "Hi, I'm Vishal Dwivedy, a Full-Stack Software Engineer building scalable, production-ready web apps using React.js, Node.js, and modern cloud tools.";

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
  }, [isSpeaking, introduction]);

  const socialLinks = useMemo(() => [
    {
      icon: FaGithub,
      href: "https://github.com/VishalXDev",
      label: "GitHub",
      gradient: "from-gray-600 to-gray-800"
    },
    {
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/in/vishal-dwivedy",
      label: "LinkedIn",
      gradient: "from-blue-600 to-blue-800"
    },
    {
      icon: FaEnvelope,
      href: "mailto:Vishaldwidy@gmail.com",
      label: "Email",
      gradient: "from-emerald-600 to-green-800"
    }
  ], []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [-8, 8]);

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.1);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.1);
  }, [x, y]);

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background with Vercel-style gradients */}
      <div className="absolute inset-0 bg-background">
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background opacity-80" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23ffffff' fill-opacity='1'%3e%3ccircle cx='7' cy='7' r='1'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`,
          }}
        />

        {/* Subtle glow effects */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-16">

          {/* Text Section */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 lg:max-w-2xl space-y-8"
          >
            {/* Status Badge with Blinking Dot */}
            <m.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-3 glass-badge px-4 py-2 text-sm font-medium"
            >
              <m.div
                animate={{
                  opacity: [1, 0.3, 1],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-2 h-2 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/50"
              />
              <span className="text-foreground/80">Available for exciting projects</span>
            </m.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <m.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight"
              >
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                  Vishal Dwivedy
                </span>
              </m.h1>

              {/* Typing Animation - Transparent */}
              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="relative"
              >
                {/* Transparent Typing Animation */}
                <div className="flex items-center">
                  <m.div
                    key="typing-container"
                    className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground/80 font-mono"
                  >
                    <m.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <TypewriterText 
                        texts={[
                          "Full-Stack Engineer",
                          "AI Integration", 
                          "Cloud Solutions"
                        ]}
                        speed={50}
                        deleteSpeed={30}
                        delayBetween={2000}
                      />
                    </m.span>
                    <m.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ 
                        duration: 1.2, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="text-blue-400 ml-1"
                    >
                      |
                    </m.span>
                  </m.div>
                </div>
              </m.div>
            </div>

            {/* Description */}
            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg text-muted leading-relaxed max-w-xl"
            >
              Designing intelligent, cloud-native web applications using React.js, Node.js, and modern DevOps workflows. I specialize in real-time systems, AI-driven features, and performance-first architecture — delivering scalable products that feel fast, smart, and seamless across devices.
            </m.p>

            {/* Action Buttons - Enhanced UI */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              {/* Let's Collaborate Button */}
              <button
                onClick={() => document.dispatchEvent(new CustomEvent('navigate', { detail: 'contact' }))}
                className="btn-primary group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-3">
                  <FaHandshake className="text-lg group-hover:rotate-12 transition-transform duration-300" />
                  Let's Collaborate
                  <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>

              {/* Download CV Button */}
              <a
                href="https://drive.google.com/file/d/1fVTpm2GUms8XP4X934aQ5s_RRWNepzYJ/view"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-3">
                  <FaDownload className="text-lg group-hover:animate-bounce transition-transform duration-300" />
                  Download CV
                </span>
              </a>

              {/* Voice Button */}
              <button
                onClick={toggleSpeech}
                title={isSpeaking ? "Stop Voice" : "Hear Introduction"}
                className={`btn-icon ${isSpeaking ? 'btn-icon-active' : ''} group relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative">
                  {isSpeaking ? (
                    <FaPause className="text-lg group-hover:scale-110 transition-transform duration-300" />
                  ) : (
                    <FaPlay className="text-lg group-hover:scale-110 transition-transform duration-300" />
                  )}
                </span>
              </button>
            </m.div>

            {/* Social Links - Enhanced */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              {socialLinks.map(({ icon: Icon, href, label, gradient }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link group"
                  aria-label={label}
                >
                  <Icon className="text-lg group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm font-medium">{label}</span>
                </a>
              ))}
            </m.div>
          </m.div>

          {/* Profile Card */}
          <m.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            style={{ rotateX, rotateY }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-80 h-96 lg:w-96 lg:h-[28rem] cursor-pointer flex-shrink-0 perspective-1000"
          >
            <div className="profile-card group">
              {/* Card Background */}
              <div className="absolute inset-0 glass-card rounded-2xl overflow-hidden">
                {/* Subtle grid overlay */}
                <div
                  className="absolute inset-0 opacity-[0.02]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23ffffff' fill-opacity='1'%3e%3ccircle cx='2' cy='2' r='1'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`,
                  }}
                />
              </div>

              {/* Card Content */}
              <div className="relative h-full flex flex-col items-center justify-center text-center p-6 z-10">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-xl group-hover:shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-300">
                    <img
                      src="/profile.jpg"
                      alt="Vishal Dwivedy"
                      className="w-full h-full object-cover rounded-[calc(0.75rem-1px)] grayscale group-hover:grayscale-0 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>

                  {/* Status indicator */}
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full border-4 border-background flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  </div>
                </div>

                {/* Name and Title */}
                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2">
                  VISHAL DWIVEDY
                </h3>
                <p className="text-sm lg:text-base font-medium text-muted mb-4">
                  Software Engineer
                </p>

                {/* Decorative line */}
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 group-hover:w-24 transition-all duration-300" />

                {/* Tech stack badges */}
                <div className="flex flex-wrap justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {['React', 'Node.js', 'AI'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium bg-surface/50 border border-border rounded-full text-foreground/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Corner decorations */}
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-blue-500/30 rounded-tr-lg group-hover:border-blue-500/60 transition-colors" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-purple-500/30 rounded-bl-lg group-hover:border-purple-500/60 transition-colors" />

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </m.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;