import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaCode, FaDatabase, FaCloud, FaNetworkWired,
  FaShieldAlt, FaRobot, FaTools, FaReact,
  FaNodeJs, FaPython, FaDocker, FaAws
} from 'react-icons/fa';
import {
  SiTypescript, SiMongodb, SiRedis, SiGraphql,
  SiTensorflow, SiNextdotjs, SiVuedotjs
} from 'react-icons/si';

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      icon: FaCode,
      color: 'from-blue-500 to-purple-600',
      glowColor: 'rgba(59, 130, 246, 0.3)',
      skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'React.js', 'Next.js', 'Vue.js', 'Angular', 'Node.js', 'Express.js'],
      specialIcons: {
        'React.js': FaReact,
        'Node.js': FaNodeJs,
        'Python': FaPython,
        'TypeScript': SiTypescript,
        'Next.js': SiNextdotjs,
        'Vue.js': SiVuedotjs
      }
    },
    {
      title: 'Databases & ORMs',
      icon: FaDatabase,
      color: 'from-green-500 to-teal-600',
      glowColor: 'rgba(34, 197, 94, 0.3)',
      skills: ['MongoDB', 'Firebase', 'Redis', 'Prisma', 'Drizzle ORM'],
      specialIcons: {
        'MongoDB': SiMongodb,
        'Redis': SiRedis
      }
    },
    {
      title: 'Cloud & DevOps',
      icon: FaCloud,
      color: 'from-orange-500 to-red-600',
      glowColor: 'rgba(249, 115, 22, 0.3)',
      skills: ['AWS (EC2, S3, Lambda)', 'Docker', 'GitHub Actions', 'AWS CodePipeline', 'Railway', 'Vercel', 'Nginx', 'PM2'],
      specialIcons: {
        'Docker': FaDocker,
        'AWS (EC2, S3, Lambda)': FaAws
      }
    },
    {
      title: 'Architecture & APIs',
      icon: FaNetworkWired,
      color: 'from-purple-500 to-pink-600',
      glowColor: 'rgba(168, 85, 247, 0.3)',
      skills: ['REST', 'GraphQL', 'WebSockets', 'Microservices', 'tRPC'],
      specialIcons: {
        'GraphQL': SiGraphql
      }
    },
    {
      title: 'Auth & Security',
      icon: FaShieldAlt,
      color: 'from-red-500 to-rose-600',
      glowColor: 'rgba(239, 68, 68, 0.3)',
      skills: ['JWT', 'OAuth 2.0', 'Clerk Auth', 'Firebase Auth', 'RBAC', 'Encryption']
    },
    {
      title: 'AI & Automation',
      icon: FaRobot,
      color: 'from-cyan-500 to-blue-600',
      glowColor: 'rgba(6, 182, 212, 0.3)',
      skills: ['OpenAI API', 'Google Gemini AI', 'LangChain', 'Puppeteer', 'Playwright', 'TensorFlow.js'],
      specialIcons: {
        'TensorFlow.js': SiTensorflow
      }
    },
    {
      title: 'Tools & Practices',
      icon: FaTools,
      color: 'from-yellow-500 to-orange-600',
      glowColor: 'rgba(245, 158, 11, 0.3)',
      skills: ['Git', 'GitHub', 'GitLab', 'Postman', 'Agile', 'ESLint', 'Lazy Loading', 'Code Splitting', 'Responsive Design']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 10,
      }
    }
  };

  const getSkillIcon = (skill, category) => {
    if (category.specialIcons && category.specialIcons[skill]) {
      const IconComponent = category.specialIcons[skill];
      return <IconComponent className="w-4 h-4 mr-1 inline-block" />;
    }
    return null;
  };

  return (
    <section id="skills" className="relative min-h-screen py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-800">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            linear-gradient(rgba(64, 224, 208, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(64, 224, 208, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
        {[...Array(7)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-400/20 text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 2
            }}
          >
            {['⚡', '🚀', '💫', '🔥', '⭐'][Math.floor(Math.random() * 5)]}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
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
            A comprehensive arsenal of cutting-edge technologies and frameworks
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={index}
                className="group relative"
                variants={categoryVariants}
                onHoverStart={() => setHoveredCategory(index)}
                onHoverEnd={() => setHoveredCategory(null)}
              >
                <motion.div
                  className="relative h-full bg-gradient-to-br from-slate-800/60 via-slate-900/60 to-black/60 backdrop-blur-lg rounded-2xl border border-slate-700/50 p-5 overflow-hidden"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: `0 10px 25px ${category.glowColor}`,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Category Header */}
                  <div className="relative z-10 mb-5 flex items-center gap-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-md`}>
                      <IconComponent className="text-white text-lg" />
                    </div>

                    <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Tags */}
                  <motion.div
                    className="flex flex-wrap gap-2 relative z-10"
                    variants={containerVariants}
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        variants={skillVariants}
                        whileHover={{
                          scale: 1.05,
                          y: -2,
                        }}
                        className="group/skill"
                      >
                        <span className="
                          inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium
                          bg-gradient-to-r from-slate-700/80 to-slate-800/80
                          border border-slate-600/50 text-gray-300
                          hover:border-cyan-400/50 hover:text-white
                          transition-all duration-200 cursor-pointer
                          backdrop-blur-sm
                        ">
                          {getSkillIcon(skill, category)}
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Skill Count Badge */}
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full px-2 py-0.5">
                    <span className="text-xs font-bold text-cyan-400">
                      {category.skills.length}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { number: '50+', label: 'Technologies Mastered', color: 'from-cyan-400 to-blue-500' },
              { number: '7', label: 'Skill Categories', color: 'from-purple-400 to-pink-500' },
              { number: '100%', label: 'Passion for Learning', color: 'from-green-400 to-teal-500' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-lg rounded-xl p-5 border border-slate-700/50"
                whileHover={{
                  scale: 1.03,
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <h4 className={`text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-2`}>
                  {stat.number}
                </h4>
                <p className="text-gray-400 font-medium text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
