import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaCode, FaChartLine, FaUsers, FaServer, FaCog } from 'react-icons/fa';

// Optimized animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(0);

  // Memoized static data for better performance
  const { experiences, achievements, stats } = useMemo(() => ({
    experiences: [
      {
        title: 'Software Developer (SDE1)',
        company: 'Bitsphere Infotech Pvt Ltd',
        location: 'Ranchi, India',
        period: 'Sep 2024 – Feb 2025',
        duration: '6 months',
        type: 'Full-time',
        description: [
          'Developed responsive React.js landing pages with Tailwind CSS, increasing engagement by 25% through optimized UI/UX design and mobile-first approach.',
          'Consumed REST APIs using Axios/Fetch for seamless data flow between frontend and backend systems.',
          'Contributed to daily standups, code reviews, and Git-based team workflows in an agile development environment.',
          'Implemented performance optimizations that reduced page load times by 30% across key user flows.'
        ],
        technologies: ['React.js', 'Tailwind CSS', 'JavaScript', 'REST APIs', 'Axios', 'Git', 'Agile Methodology', 'Responsive Design'],
        color: 'from-blue-500 to-cyan-500',
        bgColor: 'from-blue-500/10 to-cyan-500/10',
        borderGlow: 'shadow-[0_0_20px_rgba(59,130,246,0.3),0_0_40px_rgba(6,182,212,0.2)]',
        icon: <FaBriefcase />
      },
      {
        title: 'Software Developer Intern',
        company: 'Bitsphere Infotech Pvt Ltd',
        location: 'Ranchi, India',
        period: 'Apr 2024 – Sep 2024',
        duration: '6 months',
        type: 'Internship',
        description: [
          'Designed and developed responsive landing pages using React.js and Tailwind CSS, improving user engagement by 25%.',
          'Integrated RESTful APIs using Axios and Fetch API for seamless frontend-backend data flow.',
          'Collaborated in an agile development environment, utilizing Git for version control and participating in code reviews.',
          'Specialized in creating high-converting landing pages with focus on performance optimization and accessibility.'
        ],
        technologies: ['React.js', 'Tailwind CSS', 'JavaScript', 'REST APIs', 'Axios', 'Git', 'Agile Methodology', 'Responsive Design'],
        color: 'from-purple-500 to-pink-500',
        bgColor: 'from-purple-500/10 to-pink-500/10',
        borderGlow: 'shadow-[0_0_20px_rgba(168,85,247,0.3),0_0_40px_rgba(236,72,153,0.2)]',
        icon: <FaCode />
      }
    ],
    achievements: [
      {
        icon: <FaChartLine />,
        title: 'User Engagement Boost',
        description: 'Improved user engagement by 25% through responsive design and optimized user interface components.',
        impact: '25% increase',
        color: 'from-emerald-400 to-teal-500'
      },
      {
        icon: <FaCode />,
        title: 'API Integration Excellence',
        description: 'Successfully integrated multiple RESTful APIs ensuring seamless data flow and real-time synchronization.',
        impact: '100% success rate',
        color: 'from-purple-400 to-pink-500'
      },
      {
        icon: <FaUsers />,
        title: 'Agile Collaboration',
        description: 'Collaborated effectively in cross-functional teams, maintaining high code quality through rigorous testing and review processes.',
        impact: 'Team efficiency',
        color: 'from-orange-400 to-red-500'
      },
      {
        icon: <FaServer />,
        title: 'Performance Optimization',
        description: 'Reduced page load times by 30% through various frontend optimizations and best practices.',
        impact: '30% faster',
        color: 'from-indigo-400 to-blue-500'
      }
    ],
    stats: [
      { label: 'User Engagement', value: '25%↑', icon: <FaChartLine /> },
      { label: 'Projects Completed', value: '5+', icon: <FaCode /> },
      { label: 'APIs Integrated', value: '10+', icon: <FaServer /> },
      { label: 'Performance Gain', value: '30%↑', icon: <FaCog /> }
    ]
  }), []);

  // Simplified floating elements for better performance
  const floatingElements = useMemo(() =>
    Array.from({ length: 4 }, (_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full"
        initial={{ opacity: 0.1 }}
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [0.5, 1.2, 0.5]
        }}
        transition={{
          duration: 4 + Math.random() * 2,
          repeat: Infinity,
          repeatType: "reverse",
          delay: Math.random() * 2
        }}
        style={{
          left: `${20 + Math.random() * 60}%`,
          top: `${20 + Math.random() * 60}%`
        }}
      />
    )), []);

  return (
    <section id="experience" className="relative min-h-screen py-20 bg-gradient-to-br from-slate-900 via-blue-900/10 to-slate-900 overflow-hidden">
      {/* Optimized background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-purple-900/5" />
        {floatingElements}
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
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
            Crafting exceptional digital experiences through innovative development and collaborative excellence
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4 text-center shadow-[0_0_15px_rgba(59,130,246,0.2),0_0_30px_rgba(168,85,247,0.1)] hover:shadow-[0_0_25px_rgba(59,130,246,0.3),0_0_50px_rgba(168,85,247,0.2)] transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div
                className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3 text-white text-lg"
                aria-label={stat.label}
              >
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-slate-300 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Selection Buttons */}
        <div className="flex justify-center mb-8 space-x-4">
          {experiences.map((exp, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedExperience(idx)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                selectedExperience === idx 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]' 
                  : 'bg-slate-700/50 text-slate-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white border border-slate-600/50'
              }`}
              aria-pressed={selectedExperience === idx}
              aria-label={`Select experience at ${exp.company}`}
            >
              {exp.title}
            </button>
          ))}
        </div>

        {/* Selected Experience Details */}
        <motion.div
          variants={itemVariants}
          key={selectedExperience}
          className="max-w-4xl mx-auto"
        >
          {experiences[selectedExperience] && (
            <div className={`relative bg-gradient-to-br ${experiences[selectedExperience].bgColor} backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 ${experiences[selectedExperience].borderGlow} hover:shadow-[0_0_30px_rgba(59,130,246,0.4),0_0_60px_rgba(6,182,212,0.3)] transition-all duration-500`}>
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${experiences[selectedExperience].color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <span className="text-white text-lg">{experiences[selectedExperience].icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{experiences[selectedExperience].title}</h3>
                  <p className={`text-lg font-semibold bg-gradient-to-r ${experiences[selectedExperience].color} bg-clip-text text-transparent mb-2`}>
                    {experiences[selectedExperience].company}
                  </p>
                  <div className="flex flex-wrap gap-4 text-slate-300 text-sm">
                    <span className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-blue-400" />
                      {experiences[selectedExperience].location}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaCalendarAlt className="text-purple-400" />
                      {experiences[selectedExperience].period}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaCog className="text-green-400" />
                      {experiences[selectedExperience].type}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                {experiences[selectedExperience].description.map((desc, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {experiences[selectedExperience].technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-slate-700/70 text-slate-300 text-xs rounded-full border border-slate-600/50 hover:bg-slate-600/70 hover:border-blue-400/50 transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mt-16"
        >
          <motion.div variants={itemVariants} className="text-center mb-10">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3">Key Achievements</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-xl p-5 shadow-[0_0_15px_rgba(147,51,234,0.2),0_0_30px_rgba(236,72,153,0.1)] hover:shadow-[0_0_25px_rgba(147,51,234,0.3),0_0_50px_rgba(236,72,153,0.2)] transition-all duration-300"
                whileHover={{ y: -3, scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-lg flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <span className="text-white text-lg">{achievement.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-2">{achievement.title}</h4>
                    <div className={`inline-block px-3 py-1 bg-gradient-to-r ${achievement.color} text-white text-xs font-semibold rounded-full mb-3`}>
                      {achievement.impact}
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">{achievement.description}</p>
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