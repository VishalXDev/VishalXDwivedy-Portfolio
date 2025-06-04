import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaRocket, FaTrophy, FaChartLine, FaCode, FaCloud, FaGithub } from 'react-icons/fa';

// Reduced animation complexity
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Reduced stagger time
      delayChildren: 0.1    // Reduced initial delay
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 }, // Removed scale animation
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4, // Faster animation
      ease: "easeOut"
    }
  }
};

const Experience = () => {
  const [selectedExperience] = useState(0);

  // Memoize static data
  const { experiences, achievements, stats } = useMemo(() => ({
    experiences: [
      {
        title: 'Software Developer Intern',
        company: 'Bitsphere Infotech Pvt Ltd',
        location: 'Ranchi',
        period: 'Apr 2024 – Sep 2024',
        duration: '6 months',
        type: 'Full-time Internship',
        description: [
          'Designed and implemented scalable full-stack applications using React.js, Next.js, and Node.js, improving performance by optimizing frontend interactions and backend response times. Worked closely with designers and QA to ensure seamless user experience across platforms.',
          'Deployed applications on AWS (EC2, S3, Lambda) and Vercel with CI/CD via GitHub Actions and AWS CodePipeline.'
        ],
        technologies: ['React.js', 'Next.js', 'Node.js', 'AWS', 'Express.js', 'GitHub Actions'],
        color: 'from-blue-500 to-cyan-500',
        bgColor: 'from-blue-500/10 to-cyan-500/10',
        icon: <FaBriefcase />
      }
    ],
    achievements: [
      {
        icon: <FaChartLine />,
        title: 'Performance Optimization',
        description: 'Reduced frontend load time by 30% using lazy loading and dynamic imports.',
        impact: '30% faster',
        color: 'from-emerald-400 to-teal-500'
      },
      // ... other achievements
    ],
    stats: [
      { label: 'Projects Delivered', value: '5+', icon: <FaCode /> },
      // ... other stats
    ]
  }), []);

  // Simplified floating elements (reduced count and complexity)
  const floatingElements = useMemo(() => 
    Array.from({ length: 6 }, (_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full"
        initial={{
          x: 0,
          y: 0,
          opacity: 0.1,
          scale: 0.5
        }}
        animate={{
          x: Math.random() * 100 - 50,
          y: Math.random() * 100 - 50,
          opacity: [0.1, 0.4, 0.1],
          scale: [0.5, 1.5, 0.5]
        }}
        transition={{
          duration: Math.random() * 6 + 4, // Slower movement
          repeat: Infinity,
          repeatType: "reverse",
          delay: Math.random() * 2
        }}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`
        }}
      />
    )), []);

  return (
    <section id="experience" className="relative min-h-screen py-20 bg-gradient-to-br from-slate-900 via-blue-900/10 to-slate-900 overflow-hidden">
      {/* Simplified Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-purple-900/5" />
        {floatingElements}
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        {/* Header Section - Simplified Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }} // Reduced margin
          className="text-center mb-16" // Reduced margin
        >
          <motion.h2 
            className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6"
            variants={itemVariants}
          >
            Professional Journey
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Transforming ideas into impactful solutions through innovative development and strategic thinking
          </motion.p>
        </motion.div>

        {/* Stats Section - Simplified Hover Effects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16" // Reduced gap and margin
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4 text-center" // Simplified styling
              whileHover={{ y: -5 }} // Simplified hover effect
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3 text-white text-lg">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-slate-300 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Timeline - Reduced Motion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-16"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-center text-white mb-2">Professional Experience</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform lg:-translate-x-1/2" />
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative mb-8 lg:mb-0"
              >
                <div className={`ml-12 lg:ml-0 lg:w-5/12 ${index % 2 === 0 ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'}`}>
                  <div className={`relative bg-gradient-to-br ${exp.bgColor} backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6`}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${exp.color} rounded-xl flex items-center justify-center shadow-md`}>
                        <span className="text-white text-lg">{exp.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                        <p className={`text-base font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent mb-1`}>
                          {exp.company}
                        </p>
                        <div className="flex flex-wrap gap-2 text-slate-300 text-xs">
                          <span className="flex items-center gap-1">
                            <FaMapMarkerAlt className="text-blue-400 text-xs" />
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <FaCalendarAlt className="text-purple-400 text-xs" />
                            {exp.period}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      {exp.description.map((desc, descIndex) => (
                        <p key={descIndex} className="text-slate-300 text-sm leading-relaxed">
                          {desc}
                        </p>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded border border-slate-600/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section - Simplified */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">Key Achievements</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-xl p-4"
              >
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 bg-gradient-to-r ${achievement.color} rounded-lg flex items-center justify-center shadow-md`}>
                    <span className="text-white text-sm">{achievement.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{achievement.title}</h4>
                    <div className={`inline-block px-2 py-0.5 bg-gradient-to-r ${achievement.color} text-white text-xs font-semibold rounded-full mb-2`}>
                      {achievement.impact}
                    </div>
                    <p className="text-slate-300 text-sm">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;