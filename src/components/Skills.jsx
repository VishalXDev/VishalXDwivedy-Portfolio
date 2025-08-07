// Skills.jsx - Vercel Inspired Theme (All Cards Display)
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  FaCode, FaDatabase, FaCloud, FaTools, FaNetworkWired
} from 'react-icons/fa';
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub
} from 'react-icons/fa';
import {
  SiTypescript, SiMongodb, SiRedis, SiFirebase, SiNextdotjs, SiVuedotjs,
  SiTailwindcss, SiExpress, SiVercel, SiRender, SiPostman, SiCloudinary
} from 'react-icons/si';

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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Skills = () => {
  const skillCategories = useMemo(() => [
    {
      title: 'Frontend Development',
      icon: FaCode,
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/5 to-cyan-500/5',
      skills: ['React.js', 'Next.js', 'Vue.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
      specialIcons: {
        'React.js': FaReact, 
        'TypeScript': SiTypescript, 
        'Next.js': SiNextdotjs,
        'Vue.js': SiVuedotjs, 
        'HTML5': FaHtml5, 
        'CSS3': FaCss3Alt, 
        'Tailwind CSS': SiTailwindcss
      }
    },
    {
      title: 'Backend Development',
      icon: FaDatabase,
      gradient: 'from-emerald-500 to-green-500',
      bgGradient: 'from-emerald-500/5 to-green-500/5',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'MongoDB', 'Firebase', 'Redis', 'WebSockets'],
      specialIcons: {
        'Node.js': FaNodeJs, 
        'Express.js': SiExpress, 
        'MongoDB': SiMongodb,
        'Firebase': SiFirebase, 
        'Redis': SiRedis
      }
    },
    {
      title: 'Cloud & DevOps',
      icon: FaCloud,
      gradient: 'from-purple-500 to-violet-500',
      bgGradient: 'from-purple-500/5 to-violet-500/5',
      skills: ['Vercel', 'Render', 'Railway', 'GitHub Actions', 'Cloudinary', 'CI/CD Pipelines'],
      specialIcons: { 
        'Vercel': SiVercel, 
        'Render': SiRender, 
        'Cloudinary': SiCloudinary 
      }
    },
    {
      title: 'Development Tools',
      icon: FaTools,
      gradient: 'from-orange-500 to-amber-500',
      bgGradient: 'from-orange-500/5 to-amber-500/5',
      skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Chrome DevTools', 'NPM/Yarn'],
      specialIcons: { 
        'Git': FaGitAlt, 
        'GitHub': FaGithub, 
        'Postman': SiPostman 
      }
    },
    {
      title: 'Professional Skills',
      icon: FaNetworkWired,
      gradient: 'from-pink-500 to-rose-500',
      bgGradient: 'from-pink-500/5 to-rose-500/5',
      skills: ['Problem Solving', 'Team Collaboration', 'Agile/Scrum', 'Code Review', 'Technical Communication', 'Project Management']
    }
  ], []);

  const getSkillIcon = (skill, category) => {
    const Icon = category.specialIcons?.[skill];
    return Icon ? <Icon className="w-4 h-4 mr-2 opacity-80" /> : null;
  };

  return (
    <section id="skills" className="relative min-h-screen py-24 overflow-hidden">
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
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              Skills
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            A comprehensive toolkit for building modern, scalable, and performant web applications
          </p>
        </motion.div>

        {/* Skills Grid - All Cards Displayed */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="glass-card p-6 lg:p-8 group hover:glass-card-hover transition-all duration-300 relative overflow-hidden"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Subtle background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-50`} />
                
                <div className="relative">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r ${category.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="text-white text-lg lg:text-xl" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg lg:text-xl font-bold text-foreground group-hover:text-blue-400 transition-colors">
                        {category.title}
                      </h3>
                      <div className="text-sm text-muted">
                        {category.skills.length} technologies
                      </div>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: skillIndex * 0.05,
                          ease: "easeOut" 
                        }}
                        viewport={{ once: true }}
                        className="flex items-center p-2 rounded-lg bg-surface/30 border border-border hover:bg-surface/50 hover:border-border-hover transition-all duration-200 group/skill"
                      >
                        {getSkillIcon(skill, category)}
                        <span className="text-sm font-medium text-foreground/90 group-hover/skill:text-foreground transition-colors">
                          {skill}
                        </span>
                        
                        {/* Skill level indicator (optional visual enhancement) */}
                        <div className="ml-auto">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-green-500 opacity-60 group-hover/skill:opacity-100 transition-opacity" />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Footer with skill count */}
                  <div className="mt-6 pt-4 border-t border-border">
                    <div className="flex items-center justify-between text-xs text-muted">
                      <span>Proficiency Level</span>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full ${
                              i < 4 
                                ? `bg-gradient-to-r ${category.gradient}` 
                                : 'bg-border'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </motion.div>
            ))}
          </div>

          {/* Additional Info Card */}
          <motion.div
            variants={cardVariants}
            className="mt-12 text-center"
          >
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Continuous Learning
              </h3>
              <p className="text-muted leading-relaxed mb-4">
                Always exploring new technologies and staying updated with industry best practices. 
                Currently diving deeper into AI integration, advanced React patterns, and cloud architecture.
              </p>
              <div className="flex justify-center gap-2">
                {['Learning', 'Growing', 'Innovating'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm font-medium bg-surface/50 border border-border rounded-full text-foreground/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;