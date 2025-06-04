import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { FaRocket, FaStar, FaGem, FaFire, FaMagic, FaBolt } from 'react-icons/fa';

const Section = ({ 
  id, 
  title, 
  children, 
  variant = 'default',
  showParticles = false, // Default to false for performance
  customBackground = null,
  titleIcon = null 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Simplified transform values
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  // Icon mapping
  const iconMap = {
    rocket: FaRocket,
    star: FaStar,
    gem: FaGem,
    fire: FaFire,
    magic: FaMagic,
    bolt: FaBolt
  };

  const IconComponent = titleIcon ? iconMap[titleIcon] || FaStar : FaStar;

  // Background variants
  const backgroundVariants = {
    default: `linear-gradient(135deg, rgba(15, 15, 35, 0.95) 0%, rgba(26, 26, 46, 0.95) 100%)`,
    gradient: `linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)`,
    dark: `linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)`,
    cosmic: `linear-gradient(135deg, #0c0c1a 0%, #1a1a2e 50%, #2d1b69 100%)`
  };

  // Simplified mouse movement effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    const element = ref.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      return () => element.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Simplified animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      ref={ref}
      id={id} 
      className="relative min-h-screen pt-16 pb-20 overflow-hidden"
      style={{
        background: customBackground || backgroundVariants[variant]
      }}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Simplified Mouse Follower Effect */}
      {isInView && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(147, 51, 234, 0.05), transparent 40%)`,
            transition: 'background 0.1s linear'
          }}
        />
      )}

      {/* Reduced Background Elements */}
      {isInView && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full mix-blend-overlay opacity-20 blur-lg"
              style={{
                background: `linear-gradient(45deg, 
                  ${i % 2 === 0 ? '#667eea' : '#764ba2'}, 
                  ${i % 2 === 0 ? '#764ba2' : '#f093fb'})`,
                width: Math.random() * 300 + 100,
                height: Math.random() * 300 + 100,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
              }}
              transition={{
                duration: Math.random() * 15 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      )}

      {/* Reduced Floating Particles */}
      {showParticles && isInView && (
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.1
              }}
              animate={{
                y: [0, -100],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      )}

      {/* Simplified Decorative Elements */}
      <motion.div 
        className="absolute top-10 right-10 opacity-5"
        style={{ y }}
      >
        <FaGem className="text-6xl text-purple-300" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-10 left-10 opacity-5"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]) }}
      >
        <FaRocket className="text-5xl text-blue-300" />
      </motion.div>

      {/* Main Content Container */}
      <div className="container mx-auto px-6 relative z-10">
        {/* Simplified Title Section */}
        {title && (
          <motion.div 
            className="text-center mb-12"
            variants={titleVariants}
          >
            <motion.div
              className="inline-flex items-center gap-4 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                animate={{ 
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <IconComponent className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400" />
              </motion.div>
              
              <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
                {title}
              </h2>
            </motion.div>

            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>
        )}

        {/* Content Section */}
        <motion.div
          variants={contentVariants}
          className="relative"
        >
          <motion.div
            className="relative backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 p-1"
            whileInView={{ 
              boxShadow: "0 0 30px rgba(147, 51, 234, 0.1)"
            }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10" />
            
            <div className="relative z-10 p-6 md:p-8">
              {children}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Simplified Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-full"
          style={{
            background: `linear-gradient(to top, rgba(147, 51, 234, 0.1), transparent)`,
            clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 50%)"
          }}
        />
      </div>
    </motion.section>
  );
};

export default Section;