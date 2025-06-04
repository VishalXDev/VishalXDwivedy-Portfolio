import React, { useState, useEffect } from 'react';
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      icon: FaCode,
      color: 'from-blue-500 to-purple-600',
      glowColor: 'rgba(59, 130, 246, 0.5)',
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
      glowColor: 'rgba(34, 197, 94, 0.5)',
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
      glowColor: 'rgba(249, 115, 22, 0.5)',
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
      glowColor: 'rgba(168, 85, 247, 0.5)',
      skills: ['REST', 'GraphQL', 'WebSockets', 'Microservices', 'tRPC'],
      specialIcons: {
        'GraphQL': SiGraphql
      }
    },
    {
      title: 'Auth & Security',
      icon: FaShieldAlt,
      color: 'from-red-500 to-rose-600',
      glowColor: 'rgba(239, 68, 68, 0.5)',
      skills: ['JWT', 'OAuth 2.0', 'Clerk Auth', 'Firebase Auth', 'RBAC', 'Encryption']
    },
    {
      title: 'AI & Automation',
      icon: FaRobot,
      color: 'from-cyan-500 to-blue-600',
      glowColor: 'rgba(6, 182, 212, 0.5)',
      skills: ['OpenAI API', 'Google Gemini AI', 'LangChain', 'Puppeteer', 'Playwright', 'TensorFlow.js'],
      specialIcons: {
        'TensorFlow.js': SiTensorflow
      }
    },
    {
      title: 'Tools & Practices',
      icon: FaTools,
      color: 'from-yellow-500 to-orange-600',
      glowColor: 'rgba(245, 158, 11, 0.5)',
      skills: ['Git', 'GitHub', 'GitLab', 'Postman', 'Agile', 'ESLint', 'Lazy Loading', 'Code Splitting', 'Responsive Design']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const categoryVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    }
  };

  const getSkillIcon = (skill, category) => {
    if (category.specialIcons && category.specialIcons[skill]) {
      const IconComponent = category.specialIcons[skill];
      return <IconComponent className="w-3 h-3 mr-1" />;
    }
    return null;
  };

  return (
    <section id="skills" className="relative min-h-screen py-20 overflow-hidden">
      {/* Epic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-800">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(64, 224, 208, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(64, 224, 208, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Dynamic Floating Orbs */}
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, #40e0d0 0%, #8b5cf6 50%, transparent 70%)",
            left: mousePosition.x - 200,
            top: mousePosition.y - 200,
          }}
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating Tech Symbols */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-400/20 text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          >
            {['⚡', '🚀', '💫', '🔥', '⭐'][Math.floor(Math.random() * 5)]}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Spectacular Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-6 relative"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              backgroundSize: "300% 300%"
            }}
          >
            SKILLS
          </motion.h2>

          <motion.div
            className="h-2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto rounded-full"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "300px", opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />

          <motion.p
            className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            A comprehensive arsenal of cutting-edge technologies and frameworks
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
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
                {/* Card Container */}
                <motion.div
                  className="relative h-full bg-gradient-to-br from-slate-800/60 via-slate-900/60 to-black/60 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-6 overflow-hidden"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: `0 20px 40px ${category.glowColor}`,
                    borderColor: category.glowColor?.replace('0.5', '0.8')
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {/* Animated Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    initial={{ scale: 0, rotate: 0 }}
                    whileHover={{ scale: 1.2, rotate: 180 }}
                    transition={{ duration: 0.8 }}
                  />

                  {/* Category Header */}
                  <div className="relative z-10 mb-6">
                    <motion.div
                      className="flex items-center gap-3 mb-3"
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        className={`p-3 rounded-2xl bg-gradient-to-br ${category.color} shadow-lg`}
                        whileHover={{ 
                          rotate: 360,
                          scale: 1.1,
                          boxShadow: `0 0 20px ${category.glowColor}`
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <IconComponent className="text-white text-xl" />
                      </motion.div>
                      
                      <motion.h3 
                        className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-500"
                        whileHover={{ scale: 1.05 }}
                      >
                        {category.title}
                      </motion.h3>
                    </motion.div>
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
                          scale: 1.1,
                          y: -5,
                          boxShadow: `0 10px 20px ${category.glowColor}`
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="group/skill"
                      >
                        <span className={`
                          inline-flex items-center px-3 py-2 rounded-full text-xs font-medium
                          bg-gradient-to-r from-slate-700/80 to-slate-800/80 
                          border border-slate-600/50 text-gray-300
                          hover:from-slate-600/80 hover:to-slate-700/80 
                          hover:border-cyan-400/50 hover:text-white
                          hover:shadow-[0_0_15px_rgba(64,224,208,0.3)]
                          transition-all duration-300 cursor-pointer
                          backdrop-blur-sm
                        `}>
                          {getSkillIcon(skill, category)}
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Skill Count Badge */}
                  <motion.div
                    className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full px-3 py-1"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <span className="text-xs font-bold text-cyan-400">
                      {category.skills.length}
                    </span>
                  </motion.div>

                  {/* Hover Effect Lines */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
                    <div className="absolute left-0 top-0 w-[2px] h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent" />
                    <div className="absolute right-0 top-0 w-[2px] h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent" />
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: '50+', label: 'Technologies Mastered', color: 'from-cyan-400 to-blue-500' },
              { number: '7', label: 'Skill Categories', color: 'from-purple-400 to-pink-500' },
              { number: '100%', label: 'Passion for Learning', color: 'from-green-400 to-teal-500' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(64, 224, 208, 0.2)"
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.2 }}
              >
                <motion.h4 
                  className={`text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-2`}
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.number}
                </motion.h4>
                <p className="text-gray-400 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;