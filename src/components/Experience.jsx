// Experience.jsx - Vercel Inspired Theme
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  FaBriefcase, 
  FaMapMarkerAlt, 
  FaCalendarAlt, 
  FaCode, 
  FaChartLine, 
  FaUsers, 
  FaServer, 
  FaCog,
  FaArrowRight,
  FaCheckCircle
} from 'react-icons/fa';

// Optimized animation variants
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
        gradient: 'from-blue-500 to-cyan-500',
        bgGradient: 'from-blue-500/5 to-cyan-500/5',
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
        gradient: 'from-purple-500 to-pink-500',
        bgGradient: 'from-purple-500/5 to-pink-500/5',
        icon: <FaCode />
      }
    ],
    achievements: [
      {
        icon: <FaChartLine />,
        title: 'User Engagement Boost',
        description: 'Improved user engagement by 25% through responsive design and optimized user interface components.',
        impact: '25% increase',
        gradient: 'from-emerald-500 to-teal-500'
      },
      {
        icon: <FaCode />,
        title: 'API Integration Excellence',
        description: 'Successfully integrated multiple RESTful APIs ensuring seamless data flow and real-time synchronization.',
        impact: '100% success rate',
        gradient: 'from-purple-500 to-pink-500'
      },
      {
        icon: <FaUsers />,
        title: 'Agile Collaboration',
        description: 'Collaborated effectively in cross-functional teams, maintaining high code quality through rigorous testing and review processes.',
        impact: 'Team efficiency',
        gradient: 'from-orange-500 to-red-500'
      },
      {
        icon: <FaServer />,
        title: 'Performance Optimization',
        description: 'Reduced page load times by 30% through various frontend optimizations and best practices.',
        impact: '30% faster',
        gradient: 'from-indigo-500 to-blue-500'
      }
    ],
    stats: [
      { label: 'User Engagement', value: '25%↑', icon: <FaChartLine />, gradient: 'from-blue-500 to-cyan-500' },
      { label: 'Projects Completed', value: '5+', icon: <FaCode />, gradient: 'from-emerald-500 to-green-500' },
      { label: 'APIs Integrated', value: '10+', icon: <FaServer />, gradient: 'from-purple-500 to-violet-500' },
      { label: 'Performance Gain', value: '30%↑', icon: <FaCog />, gradient: 'from-orange-500 to-amber-500' }
    ]
  }), []);

  return (
    <section id="experience" className="relative min-h-screen py-24 overflow-hidden">
      {/* Background with Vercel-style gradients */}
      <div className="absolute inset-0 bg-background">
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background opacity-80" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23ffffff' fill-opacity='1'%3e%3ccircle cx='7' cy='7' r='1'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`,
          }}
        />
        
        {/* Subtle glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
            variants={itemVariants}
          >
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              Journey
            </span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"
          />
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted max-w-3xl mx-auto leading-relaxed"
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
              className="glass-card p-4 text-center group hover:glass-card-hover transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div
                className={`w-12 h-12 bg-gradient-to-r ${stat.gradient} rounded-xl flex items-center justify-center mx-auto mb-3 text-white shadow-lg group-hover:scale-110 transition-transform`}
                aria-label={stat.label}
              >
                {stat.icon}
              </div>
              <div className="text-xl lg:text-2xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-muted text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Selection */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-12">
          <span className="text-sm text-muted mb-2 sm:mb-0">Select experience:</span>
          <div className="flex flex-wrap justify-center gap-3">
            {experiences.map((exp, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedExperience(idx)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  selectedExperience === idx 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white border-transparent shadow-lg' 
                    : 'bg-surface/50 text-foreground/80 border-border hover:bg-surface hover:border-border-hover'
                }`}
                aria-pressed={selectedExperience === idx}
                aria-label={`Select experience at ${exp.company}`}
              >
                {exp.type}
                <FaArrowRight className={`inline ml-2 text-xs transition-transform ${selectedExperience === idx ? 'rotate-90' : ''}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Selected Experience Details */}
        <motion.div
          variants={itemVariants}
          key={selectedExperience}
          className="max-w-4xl mx-auto mb-20"
        >
          {experiences[selectedExperience] && (
            <div className="glass-card p-6 lg:p-8 relative overflow-hidden group">
              {/* Subtle background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${experiences[selectedExperience].bgGradient} opacity-50`} />
              
              <div className="relative">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${experiences[selectedExperience].gradient} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <span className="text-white text-xl">{experiences[selectedExperience].icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                      {experiences[selectedExperience].title}
                    </h3>
                    <p className={`text-lg font-semibold bg-gradient-to-r ${experiences[selectedExperience].gradient} bg-clip-text text-transparent mb-3`}>
                      {experiences[selectedExperience].company}
                    </p>
                    <div className="flex flex-wrap gap-4 text-muted text-sm">
                      <span className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-blue-400" />
                        {experiences[selectedExperience].location}
                      </span>
                      <span className="flex items-center gap-2">
                        <FaCalendarAlt className="text-purple-400" />
                        {experiences[selectedExperience].period}
                      </span>
                      <span className="flex items-center gap-2 px-2 py-1 bg-surface/50 rounded-full">
                        <FaCog className="text-emerald-400" />
                        {experiences[selectedExperience].type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-3 mb-6">
                  {experiences[selectedExperience].description.map((desc, idx) => (
                    <div key={idx} className="flex items-start gap-3 group/item">
                      <FaCheckCircle className="text-emerald-400 mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                      <p className="text-muted text-sm lg:text-base leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground/80 mb-3">Technologies & Tools:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experiences[selectedExperience].technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-surface/70 border border-border text-foreground/80 text-xs font-medium rounded-full hover:bg-surface hover:border-border-hover transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
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
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Key{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
                Achievements
              </span>
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card p-6 group hover:glass-card-hover transition-all duration-300 relative overflow-hidden"
                whileHover={{ y: -3, scale: 1.02 }}
              >
                <div className="relative flex items-start gap-4">
                  <div className={`w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r ${achievement.gradient} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <span className="text-white text-lg lg:text-xl">{achievement.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg lg:text-xl font-bold text-foreground mb-2">
                      {achievement.title}
                    </h4>
                    <div className={`inline-block px-3 py-1 bg-gradient-to-r ${achievement.gradient} text-white text-xs font-semibold rounded-full mb-3 shadow-sm`}>
                      {achievement.impact}
                    </div>
                    <p className="text-muted text-sm lg:text-base leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>

                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-12"
          >
            <div className="glass-card p-6 inline-block">
              <p className="text-muted text-sm lg:text-base">
                🚀 Ready to bring innovation and excellence to your next project
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;