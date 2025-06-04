import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  FaCode, FaDatabase, FaCloud, FaNetworkWired,
  FaShieldAlt, FaTools, FaReact,
  FaNodeJs, FaPython, FaHtml5, FaCss3Alt,
  FaGitAlt, FaGithub
} from 'react-icons/fa';
import {
  SiTypescript, SiMongodb, SiRedis, SiFirebase,
  SiNextdotjs, SiVuedotjs, SiRedux, SiTailwindcss,
  SiExpress, SiVercel, SiRender, SiPostman,
  SiCloudinary
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = useMemo(() => [
    {
      title: 'Languages & Frontend',
      icon: FaCode,
      color: 'from-blue-500 to-purple-600',
      glowColor: 'rgba(59, 130, 246, 0.3)',
      skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'React.js', 'Next.js', 'Vue.js', 'Redux', 'HTML5', 'CSS3', 'Tailwind CSS'],
      specialIcons: {
        'React.js': FaReact,
        'Python': FaPython,
        'TypeScript': SiTypescript,
        'Next.js': SiNextdotjs,
        'Vue.js': SiVuedotjs,
        'Redux': SiRedux,
        'HTML5': FaHtml5,
        'CSS3': FaCss3Alt,
        'Tailwind CSS': SiTailwindcss
      }
    },
    {
      title: 'Backend & Databases',
      icon: FaDatabase,
      color: 'from-green-500 to-teal-600',
      glowColor: 'rgba(34, 197, 94, 0.3)',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Redis', 'REST APIs', 'WebSockets'],
      specialIcons: {
        'Node.js': FaNodeJs,
        'Express.js': SiExpress,
        'MongoDB': SiMongodb,
        'Firebase': SiFirebase,
        'Redis': SiRedis
      }
    },
    {
      title: 'Cloud & Deployment',
      icon: FaCloud,
      color: 'from-orange-500 to-red-600',
      glowColor: 'rgba(249, 115, 22, 0.3)',
      skills: ['GitHub Actions', 'Vercel', 'Render', 'Railway', 'Cloudinary'],
      specialIcons: {
        'Vercel': SiVercel,
        'Render': SiRender,
        'Cloudinary': SiCloudinary
      }
    },
    {
      title: 'Authentication & Security',
      icon: FaShieldAlt,
      color: 'from-red-500 to-rose-600',
      glowColor: 'rgba(239, 68, 68, 0.3)',
      skills: ['JWT', 'OAuth 2.0', 'Authentication Systems', 'Security Best Practices']
    },
    {
      title: 'Tools & Practices',
      icon: FaTools,
      color: 'from-yellow-500 to-orange-600',
      glowColor: 'rgba(245, 158, 11, 0.3)',
      skills: ['Git', 'GitHub', 'Postman', 'Agile Methodologies', 'Unit Testing', 'Version Control', 'Performance Optimization'],
      specialIcons: {
        'Git': FaGitAlt,
        'GitHub': FaGithub,
        'Postman': SiPostman
      }
    },
    {
      title: 'Soft Skills',
      icon: FaNetworkWired,
      color: 'from-purple-500 to-pink-600',
      glowColor: 'rgba(168, 85, 247, 0.3)',
      skills: ['Team Collaboration', 'Communication', 'Problem Solving', 'Agile Workflows', 'User-Focused Design', 'UX Empathy']
    }
  ], []);

  const getSkillIcon = (skill, category) => {
    const Icon = category.specialIcons?.[skill];
    return Icon ? <Icon className="w-4 h-4 mr-1 inline-block" /> : null;
  };

  return (
    <section id="skills" className="relative min-h-screen py-20 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-800">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(64, 224, 208, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(64, 224, 208, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
            SKILLS
          </h2>
          <motion.div
            className="h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto rounded-full"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "200px", opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          <motion.p
            className="text-lg text-gray-400 mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Full-Stack Software Engineer with expertise in modern web technologies and cloud solutions
          </motion.p>
        </motion.div>

        {/* Skill Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-slate-800/60 via-slate-900/60 to-black/60 backdrop-blur-lg rounded-2xl border border-slate-700/50 p-5 relative"
                whileHover={{
                  scale: 1.02,
                  boxShadow: `0 10px 25px ${category.glowColor}`,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-md`}>
                    <IconComponent className="text-white text-lg" />
                  </div>
                  <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium
                      bg-gradient-to-r from-slate-700/80 to-slate-800/80 border border-slate-600/50 text-gray-300
                      hover:border-cyan-400/50 hover:text-white transition-all duration-200 cursor-pointer backdrop-blur-sm"
                    >
                      {getSkillIcon(skill, category)}
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="absolute top-3 right-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full px-2 py-0.5">
                  <span className="text-xs font-bold text-cyan-400">{category.skills.length}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Highlights */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">Professional Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              { number: '30%', label: 'Frontend Load Time Reduction', color: 'from-cyan-400 to-blue-500' },
              { number: '40%', label: 'API Performance Improvement', color: 'from-purple-400 to-pink-500' },
              { number: '25%', label: 'User Engagement Increase', color: 'from-green-400 to-teal-500' },
              { number: '5+', label: 'Full-Stack Applications', color: 'from-yellow-400 to-orange-500' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-lg rounded-xl p-4 border border-slate-700/50 text-center"
                whileHover={{ scale: 1.03 }}
              >
                <h4 className={`text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-2`}>
                  {stat.number}
                </h4>
                <p className="text-gray-400 font-medium text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Summary */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">Current Focus</h3>
            <p className="text-gray-300 leading-relaxed">
              <span className="text-cyan-400 font-semibold">Software Developer (SDE 1)</span> with hands-on experience in building 
              scalable, production-ready web applications. Specialized in <span className="text-purple-400 font-semibold">React.js, Node.js</span>, 
              and modern cloud tools. Passionate about <span className="text-green-400 font-semibold">performance optimization</span>, 
              real-time collaboration, and delivering user-centric solutions in agile teams.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
