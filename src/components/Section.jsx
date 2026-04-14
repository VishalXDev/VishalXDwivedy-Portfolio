import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { FaRocket, FaStar, FaGem, FaFire, FaMagic, FaBolt, FaCode, FaLightbulb } from 'react-icons/fa';

const iconMap = {
  rocket: FaRocket,
  star: FaStar,
  gem: FaGem,
  fire: FaFire,
  magic: FaMagic,
  bolt: FaBolt,
  code: FaCode,
  lightbulb: FaLightbulb,
};

const themeVariants = {
  default: {
    background: 'var(--bg-primary)',
    overlay: 'transparent'
  },
  gradient: {
    background: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--surface-primary) 100%)',
    overlay: 'var(--accent-primary)/5'
  },
  dark: {
    background: 'var(--bg-secondary)',
    overlay: 'var(--accent-secondary)/5'
  },
  cosmic: {
    background: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--surface-secondary) 50%, var(--accent-primary)/10 100%)',
    overlay: 'var(--accent-primary)/10'
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      duration: 0.8,
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const Section = ({
  id,
  title,
  children,
  variant = 'default',
  showParticles = false,
  customBackground = null,
  titleIcon = null,
  subtitle = null,
  badge = null,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Smooth parallax transforms
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);

  // Select icon and theme
  const IconComponent = titleIcon ? iconMap[titleIcon] || FaStar : FaStar;
  const theme = themeVariants[variant];

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };

    const element = ref.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      return () => element.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <motion.section
      ref={ref}
      id={id}
      className="relative min-h-screen py-20 overflow-hidden"
      style={{ 
        background: customBackground || theme.background,
      }}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {/* Interactive Mouse Gradient */}
      {isInView && (
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, var(--accent-primary)/8, transparent 40%)`,
            transition: 'background 0.3s ease',
          }}
        />
      )}

      {/* Animated Background Elements */}
      {isInView && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Orbs */}
          {[...Array(3)].map((_, i) => {
            const size = Math.random() * 200 + 100;
            const color = i % 2 === 0 ? 'var(--accent-primary)' : 'var(--accent-secondary)';
            return (
              <motion.div
                key={i}
                className="absolute rounded-full blur-3xl opacity-20"
                style={{
                  background: `radial-gradient(circle, ${color}/30, transparent 70%)`,
                  width: size,
                  height: size,
                  left: `${20 + (i * 30)}%`,
                  top: `${10 + (i * 20)}%`,
                }}
                animate={{
                  x: [0, 50, 0],
                  y: [0, -30, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 2,
                }}
              />
            );
          })}

          {/* Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
                linear-gradient(var(--text-primary) 1px, transparent 1px),
                linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />
        </div>
      )}

      {/* Enhanced Particles */}
      {showParticles && isInView && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: `var(--accent-${i % 2 === 0 ? 'primary' : 'secondary'})`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -200],
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      )}

      {/* Decorative Elements */}
      <motion.div 
        className="absolute top-20 right-10 opacity-5 pointer-events-none" 
        style={{ y }}
      >
        <FaGem className="text-8xl text-[var(--accent-primary)]" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-10 opacity-5 pointer-events-none"
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '-40%']) }}
      >
        <FaRocket className="text-6xl text-[var(--accent-secondary)]" />
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header Section */}
        {title && (
          <motion.div className="text-center mb-16" variants={titleVariants}>
            {badge && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-[var(--surface-secondary)] border border-[var(--border-color)] rounded-full"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                >
                  <IconComponent className="text-[var(--accent-primary)] text-sm" />
                </motion.div>
                <span className="text-sm font-medium text-[var(--text-secondary)]">
                  {badge}
                </span>
              </motion.div>
            )}

            <motion.div className="space-y-4">
              {titleIcon && !badge && (
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-2xl shadow-lg"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: 'easeInOut' 
                  }}
                >
                  <IconComponent className="text-2xl text-white" />
                </motion.div>
              )}

              <h2 className="text-4xl lg:text-6xl font-bold text-[var(--text-primary)] leading-tight">
                {title.split(' ').map((word, index) => {
                  const isHighlight = word.toLowerCase().includes('amazing') || 
                                    word.toLowerCase().includes('innovative') || 
                                    word.toLowerCase().includes('creative') ||
                                    word.toLowerCase().includes('exceptional');
                  
                  return (
                    <motion.span
                      key={index}
                      className={isHighlight ? 
                        'text-transparent bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text' : 
                        ''
                      }
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {word}{' '}
                    </motion.span>
                  );
                })}
              </h2>

              {subtitle && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed"
                >
                  {subtitle}
                </motion.p>
              )}

              {/* Decorative Line */}
              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] mx-auto rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </motion.div>
          </motion.div>
        )}

        {/* Content Section */}
        <motion.div variants={contentVariants} className="relative">
          <motion.div
            className="relative glass-card bg-[var(--surface-primary)]/50 backdrop-blur-xl rounded-3xl border border-[var(--border-color)] p-1 overflow-hidden"
            whileInView={{ 
              boxShadow: '0 25px 50px -12px var(--accent-primary)/10',
              borderColor: 'var(--border-color)' 
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Card Shine Effect */}
            <motion.div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: `linear-gradient(135deg, transparent 40%, var(--accent-primary)/5 50%, transparent 60%)`,
              }}
              animate={{
                x: [-200, 200],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 5,
                ease: 'easeInOut',
              }}
            />

            {/* Content Container */}
            <div className="relative z-10 p-8 lg:p-12">
              {children}
            </div>

            {/* Border Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[var(--accent-primary)]/20 via-transparent to-[var(--accent-secondary)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-full opacity-30"
          style={{
            background: `linear-gradient(to top, var(--accent-primary)/10, transparent)`,
            clipPath: 'polygon(0 100%, 100% 100%, 100% 20%, 0 60%)',
          }}
          animate={{
            clipPath: [
              'polygon(0 100%, 100% 100%, 100% 20%, 0 60%)',
              'polygon(0 100%, 100% 100%, 100% 30%, 0 50%)',
              'polygon(0 100%, 100% 100%, 100% 20%, 0 60%)',
            ],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </motion.section>
  );
};

export default Section;