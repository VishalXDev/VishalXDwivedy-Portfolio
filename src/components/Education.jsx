import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const educationData = [
    {
      institution: 'Chandigarh University',
      degree: 'B. Tech in Computer Science Engineering',
      period: 'Expected Graduation: 2026',
      icon: '🎓',
      gradient: 'from-purple-500/10 via-blue-500/10 to-cyan-500/10',
      borderGlow: 'shadow-purple-500/20',
      status: 'In Progress',
      highlight: 'Advanced Programming & AI Focus'
    },
    {
      institution: 'S.S.J.S.N College',
      degree: 'B.A. in Psychology',
      period: 'Graduated: 2022',
      score: '74.9%',
      icon: '🧠',
      gradient: 'from-pink-500/10 via-rose-500/10 to-orange-500/10',
      borderGlow: 'shadow-pink-500/20',
      status: 'Completed',
      note: 'Psychology background enhances user-focused design thinking and UI/UX empathy.',
      highlight: 'Human-Computer Interaction Expertise'
    },
  ];

  const certifications = [
    {
      title: 'Full-Stack Web Development',
      subtitle: 'Advanced React.js & Node.js',
      issuer: 'IBM',
      icon: '💻',
      color: 'text-blue-400'
    },
    {
      title: 'Data Science with R',
      subtitle: 'Applied AI & Visualization',
      issuer: 'Chandigarh University',
      icon: '📊',
      color: 'text-green-400'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const glowVariants = {
    initial: { 
      boxShadow: "0 0 0 rgba(147, 51, 234, 0)" 
    },
    hover: { 
      boxShadow: [
        "0 0 20px rgba(147, 51, 234, 0.3)",
        "0 0 40px rgba(147, 51, 234, 0.4)",
        "0 0 20px rgba(147, 51, 234, 0.3)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <section id="education" className="relative min-h-screen pt-20 pb-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-spin-slow"></div>
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -100, null],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-4"
          >
            <div className="text-6xl mb-4">🎓</div>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Educational Journey
          </h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"
          />
          
          <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto">
            Building expertise through continuous learning and academic excellence
          </p>
        </motion.div>

        {/* Education Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-8 mb-16"
        >
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative"
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <motion.div
                variants={glowVariants}
                initial="initial"
                whileHover="hover"
                className={`relative bg-gradient-to-br ${item.gradient} backdrop-blur-xl border border-white/10 rounded-2xl p-8 overflow-hidden ${item.borderGlow} transition-all duration-500 hover:border-white/20`}
              >
                {/* Card Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                
                {/* Floating Icon */}
                <motion.div
                  animate={hoveredCard === index ? { 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  } : {}}
                  transition={{ duration: 0.5 }}
                  className="absolute top-6 right-6 text-4xl opacity-20 group-hover:opacity-40 transition-opacity"
                >
                  {item.icon}
                </motion.div>

                <div className="relative z-10">
                  {/* Status Badge */}
                  <motion.div
                    initial={{ scale: 0, x: 20 }}
                    whileInView={{ scale: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                      item.status === 'Completed' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    }`}
                  >
                    {item.status}
                  </motion.div>

                  {/* Institution */}
                  <motion.h3
                    whileHover={{ x: 10 }}
                    className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all"
                  >
                    {item.institution}
                  </motion.h3>

                  {/* Degree */}
                  <p className="text-lg text-gray-300 mb-2 group-hover:text-white transition-colors">
                    {item.degree}
                  </p>

                  {/* Highlight */}
                  <p className="text-sm text-purple-300 mb-3 font-medium">
                    {item.highlight}
                  </p>

                  {/* Period & Score */}
                  <div className="flex flex-wrap gap-4 mb-4">
                    <span className="text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full">
                      {item.period}
                    </span>
                    {item.score && (
                      <span className="text-sm text-green-400 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
                        {item.score}
                      </span>
                    )}
                  </div>

                  {/* Note */}
                  {item.note && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      whileInView={{ opacity: 1, height: "auto" }}
                      transition={{ delay: 0.5 }}
                      className="bg-white/5 rounded-lg p-4 border-l-4 border-purple-500/50"
                    >
                      <p className="text-sm text-gray-300 italic">
                        💡 {item.note}
                      </p>
                    </motion.div>
                  )}
                </div>

                {/* Hover Effect Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl pointer-events-none"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-4">
              Professional Certifications
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  z: 50
                }}
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all hover:shadow-xl hover:shadow-purple-500/20"
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl"
                  >
                    {cert.icon}
                  </motion.div>
                  
                  <div className="flex-1">
                    <h4 className={`font-bold text-lg mb-1 ${cert.color} group-hover:text-white transition-colors`}>
                      {cert.title}
                    </h4>
                    <p className="text-gray-300 text-sm mb-2 group-hover:text-white transition-colors">
                      {cert.subtitle}
                    </p>
                    <p className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded-full inline-block">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-xl pointer-events-none"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Education;