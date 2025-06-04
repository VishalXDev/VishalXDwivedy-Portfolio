import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { FaRocket, FaStar, FaGem, FaFire, FaMagic, FaBolt } from 'react-icons/fa';

const Section = ({ 
  id, 
  title, 
  children, 
  variant = 'default',
  showParticles = true,
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

  // Transform values for parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Icon mapping for different variants
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
    default: `
      radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
      linear-gradient(135deg, rgba(15, 15, 35, 0.9) 0%, rgba(26, 26, 46, 0.9) 100%)
    `,
    gradient: `
      radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.2) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.2) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%),
      linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)
    `,
    dark: `
      radial-gradient(circle at 50% 50%, rgba(30, 30, 60, 0.3) 0%, transparent 70%),
      linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)
    `,
    cosmic: `
      radial-gradient(circle at 30% 30%, rgba(147, 51, 234, 0.2) 0%, transparent 50%),
      radial-gradient(circle at 70% 70%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
      radial-gradient(circle at 50% 90%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
      linear-gradient(135deg, #0c0c1a 0%, #1a1a2e 50%, #2d1b69 100%)
    `
  };

  // Handle mouse movement for interactive effects
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: -50,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        duration: 0.8
      }
    }
  };

  const contentVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
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
      {/* Interactive Mouse Follower Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(147, 51, 234, 0.06), transparent 40%)`
        }}
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-30"
            style={{
              background: `linear-gradient(45deg, 
                ${i % 3 === 0 ? '#667eea' : i % 3 === 1 ? '#764ba2' : '#f093fb'}, 
                ${i % 3 === 0 ? '#764ba2' : i % 3 === 1 ? '#f093fb' : '#f5576c'})`,
              width: Math.random() * 400 + 100,
              height: Math.random() * 400 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              scale: [1, 1.2, 0.8, 1],
              rotate: [0, Math.random() * 360]
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Floating Particles */}
      {showParticles && (
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.8 + 0.2
              }}
              animate={{
                y: [0, -150, 0],
                x: [0, Math.random() * 100 - 50, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      )}

      {/* Parallax Decorative Elements */}
      <motion.div 
        className="absolute top-10 right-10 opacity-10"
        style={{ y }}
      >
        <FaGem className="text-8xl text-purple-300" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-10 left-10 opacity-10"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]) }}
      >
        <FaRocket className="text-6xl text-blue-300" />
      </motion.div>

      {/* Main Content Container */}
      <div className="container mx-auto px-6 relative z-10">
        {/* Epic Title Section */}
        {title && (
          <motion.div 
            className="text-center mb-16"
            variants={titleVariants}
          >
            {/* Title with Icon */}
            <motion.div
              className="inline-flex items-center gap-4 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.1, 1] 
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <IconComponent className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400" />
              </motion.div>
              
              <h2 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-400 drop-shadow-2xl">
                {title}
              </h2>
              
              <motion.div
                animate={{ 
                  rotate: [0, -5, 5, 0],
                  scale: [1, 1.1, 1] 
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
              >
                <FaStar className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400" />
              </motion.div>
            </motion.div>

            {/* Decorative Line */}
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>
        )}

        {/* Content Section */}
        <motion.div
          variants={contentVariants}
          className="relative"
        >
          {/* Glassmorphism Container */}
          <motion.div
            className="relative backdrop-blur-sm bg-white/5 rounded-3xl border border-white/10 p-1"
            whileInView={{ 
              boxShadow: [
                "0 0 0 rgba(147, 51, 234, 0)",
                "0 0 50px rgba(147, 51, 234, 0.1)",
                "0 0 0 rgba(147, 51, 234, 0)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            viewport={{ once: false }}
          >
            {/* Inner Glow Effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10" />
            
            {/* Content */}
            <div className="relative z-10 p-8">
              {children}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-full"
          style={{
            background: `linear-gradient(to top, rgba(147, 51, 234, 0.1), transparent)`,
            clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 50%)"
          }}
          animate={{
            clipPath: [
              "polygon(0 100%, 100% 100%, 100% 0, 0 50%)",
              "polygon(0 100%, 100% 100%, 100% 20%, 0 70%)",
              "polygon(0 100%, 100% 100%, 100% 0, 0 50%)"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.section>
  );
};

export default Section;