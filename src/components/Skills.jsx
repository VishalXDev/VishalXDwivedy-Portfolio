// Updated Skills.jsx with AI category and tabbed layout
import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaCode, FaDatabase, FaCloud, FaShieldAlt, FaTools, FaNetworkWired, FaRobot
} from 'react-icons/fa';
import {
  FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub
} from 'react-icons/fa';
import {
  SiTypescript, SiMongodb, SiRedis, SiFirebase, SiNextdotjs, SiVuedotjs,
  SiRedux, SiTailwindcss, SiExpress, SiVercel, SiRender, SiPostman, SiCloudinary
} from 'react-icons/si';

const tabVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Languages & Frontend");

  const skillCategories = useMemo(() => [
    {
      title: 'Languages & Frontend',
      icon: FaCode,
      color: 'from-blue-500 to-purple-600',
      glowColor: 'rgba(59, 130, 246, 0.3)',
      skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'React.js', 'Next.js', 'Vue.js', 'Redux', 'HTML5', 'CSS3', 'Tailwind CSS'],
      specialIcons: {
        'React.js': FaReact, 'Python': FaPython, 'TypeScript': SiTypescript, 'Next.js': SiNextdotjs,
        'Vue.js': SiVuedotjs, 'Redux': SiRedux, 'HTML5': FaHtml5, 'CSS3': FaCss3Alt, 'Tailwind CSS': SiTailwindcss
      }
    },
    {
      title: 'Backend & Databases',
      icon: FaDatabase,
      color: 'from-green-500 to-teal-600',
      glowColor: 'rgba(34, 197, 94, 0.3)',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Redis', 'REST APIs', 'WebSockets'],
      specialIcons: {
        'Node.js': FaNodeJs, 'Express.js': SiExpress, 'MongoDB': SiMongodb, 'Firebase': SiFirebase, 'Redis': SiRedis
      }
    },
    {
      title: 'AI & Integrations',
      icon: FaRobot,
      color: 'from-pink-500 to-rose-500',
      glowColor: 'rgba(236, 72, 153, 0.3)',
      skills: ['OpenAI API', 'Spotify API', 'Semantic Search', 'Embeddings', 'LangChain']
    },
    {
      title: 'Cloud & Deployment',
      icon: FaCloud,
      color: 'from-orange-500 to-red-600',
      glowColor: 'rgba(249, 115, 22, 0.3)',
      skills: ['GitHub Actions', 'Vercel', 'Render', 'Railway', 'Cloudinary'],
      specialIcons: { 'Vercel': SiVercel, 'Render': SiRender, 'Cloudinary': SiCloudinary }
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
      specialIcons: { 'Git': FaGitAlt, 'GitHub': FaGithub, 'Postman': SiPostman }
    },
    {
      title: 'Soft Skills',
      icon: FaNetworkWired,
      color: 'from-purple-500 to-pink-600',
      glowColor: 'rgba(168, 85, 247, 0.3)',
      skills: ['Team Collaboration', 'Communication', 'Problem Solving', 'Agile Workflows', 'User-Focused Design', 'UX Empathy']
    }
  ], []);

  const currentCategory = skillCategories.find(c => c.title === activeTab);

  const getSkillIcon = (skill, category) => {
    const Icon = category.specialIcons?.[skill];
    return Icon ? <Icon className="w-4 h-4 mr-1 inline-block" /> : null;
  };

  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-12">Skills</h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {skillCategories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(cat.title)}
            className={`px-4 py-2 text-sm rounded-full font-medium transition-all duration-300 border ${
              activeTab === cat.title
                ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-md'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border-slate-600'
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Active Category */}
      {currentCategory && (
        <motion.div
          key={currentCategory.title}
          variants={tabVariants}
          initial="hidden"
          animate="visible"
          className="bg-slate-800/70 border border-slate-700 rounded-xl p-6"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${currentCategory.color}`}>
              <currentCategory.icon className="text-white text-lg" />
            </div>
            <h3 className="text-xl font-semibold text-white">{currentCategory.title}</h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {currentCategory.skills.map((skill, i) => (
              <span
                key={i}
                className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-slate-700 text-slate-200 border border-slate-600 hover:border-cyan-400 hover:text-white transition"
              >
                {getSkillIcon(skill, currentCategory)}
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Skills;
