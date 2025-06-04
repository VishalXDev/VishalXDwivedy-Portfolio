import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaRocket, FaTrophy, FaChartLine, FaCode, FaCloud, FaGithub } from 'react-icons/fa';

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(0);

  const experiences = [
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
  ];

  const achievements = [
    {
      icon: <FaChartLine />,
      title: 'Performance Optimization',
      description: 'Reduced frontend load time by 30% using lazy loading and dynamic imports.',
      impact: '30% faster',
      color: 'from-emerald-400 to-teal-500'
    },
    {
      icon: <FaRocket />,
      title: 'API Enhancement',
      description: 'Improved API performance by 40% through middleware optimization in Express.js.',
      impact: '40% improvement',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: <FaCloud />,
      title: 'Production Deployment',
      description: 'Shipped 5+ production-grade full-stack apps with CI/CD using GitHub Actions, AWS, and Railway—reducing deployment time by 50% and ensuring zero-downtime releases.',
      impact: '5+ apps deployed',
      color: 'from-orange-400 to-red-500'
    },
    {
      icon: <FaGithub />,
      title: 'Open Source Contribution',
      description: 'Built and published 3+ open-source tools integrating AI (LLMs), automation scripts, and cloud deployment configs.',
      impact: '3+ tools published',
      color: 'from-indigo-400 to-blue-500'
    }
  ];

  const stats = [
    { label: 'Projects Delivered', value: '5+', icon: <FaCode /> },
    { label: 'Performance Boost', value: '40%', icon: <FaChartLine /> },
    { label: 'Deployment Speed', value: '50%', icon: <FaRocket /> },
    { label: 'Open Source Tools', value: '3+', icon: <FaGithub /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  // Floating particles for background
  const floatingElements = Array.from({ length: 12 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-1 h-1 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full"
      animate={{
        x: [0, Math.random() * 200 - 100],
        y: [0, Math.random() * 200 - 100],
        opacity: [0.1, 0.6, 0.1],
        scale: [0.5, 2, 0.5]
      }}
      transition={{
        duration: Math.random() * 4 + 3,
        repeat: Infinity,
        repeatType: "reverse",
        delay: Math.random() * 2
      }}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }}
    />
  ));

  return (
    <section id="experience" className="relative min-h-screen py-20 bg-gradient-to-br from-slate-900 via-blue-900/10 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-purple-900/5" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent" />
        {floatingElements}
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants}>
            <motion.h2 
              className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: "200% 200%"
              }}
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
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 text-white text-xl">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-300 text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-20"
        >
          <motion.div variants={itemVariants} className="mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-center text-white mb-4">Professional Experience</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform lg:-translate-x-1/2" />
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative mb-12 lg:mb-0"
              >
                {/* Timeline dot */}
                <motion.div 
                  className="absolute left-0 lg:left-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center transform lg:-translate-x-1/2 z-10"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-3 h-3 bg-white rounded-full" />
                </motion.div>

                {/* Experience Card */}
                <div className={`ml-12 lg:ml-0 lg:w-5/12 ${index % 2 === 0 ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'}`}>
                  <motion.div
                    className="group relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                    <div className={`relative bg-gradient-to-br ${exp.bgColor} backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl`}>
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
                      />
                      
                      <div className="relative z-10">
                        {/* Header */}
                        <div className="flex items-start gap-4 mb-6">
                          <div className={`w-14 h-14 bg-gradient-to-r ${exp.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                            <span className="text-white text-xl">{exp.icon}</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                            <p className={`text-lg font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent mb-1`}>
                              {exp.company}
                            </p>
                            <div className="flex flex-wrap gap-4 text-slate-300 text-sm">
                              <span className="flex items-center gap-1">
                                <FaMapMarkerAlt className="text-blue-400" />
                                {exp.location}
                              </span>
                              <span className="flex items-center gap-1">
                                <FaCalendarAlt className="text-purple-400" />
                                {exp.period}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <div className="space-y-4 mb-6">
                          {exp.description.map((desc, descIndex) => (
                            <p key={descIndex} className="text-slate-300 leading-relaxed">
                              {desc}
                            </p>
                          ))}
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              className="px-3 py-1 bg-slate-700/50 backdrop-blur-sm text-slate-300 text-sm rounded-lg border border-slate-600/50"
                              whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">Key Achievements</h3>
            <p className="text-xl text-slate-300 mb-8">Impactful results that drive success</p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 h-full">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
                  />
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <span className="text-white text-lg">{achievement.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white mb-2">{achievement.title}</h4>
                        <div className={`inline-block px-3 py-1 bg-gradient-to-r ${achievement.color} text-white text-sm font-semibold rounded-full mb-3`}>
                          {achievement.impact}
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-300 leading-relaxed">{achievement.description}</p>
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