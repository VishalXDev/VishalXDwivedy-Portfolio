import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaRocket, FaStar, FaCode, FaMobile, FaDatabase, FaChartLine } from "react-icons/fa";
import { useState } from "react";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "E-Commerce App",
      description:
        "A full-featured React Native app using Expo Router with product listings, cart functionality, and persistent storage.",
      technologies: ["React Native", "Expo Router", "Context API", "AsyncStorage"],
      points: [
        "Built with Expo Router and Context API for clean routing and global state management.",
        "Supports cart operations, local storage with AsyncStorage, and responsive design.",
      ],
      github: "https://github.com/VishalXDev/e-commerce-app",
      demo: "https://e-commerce-app-ten-beryl.vercel.app/",
      icon: FaMobile,
      gradient: "from-purple-600 via-pink-600 to-red-600",
      glowColor: "rgba(147, 51, 234, 0.3)",
      category: "Mobile App"
    },
    {
      title: "Restro Dashboard",
      description:
        "An admin dashboard for managing restaurant menus, orders, and user roles.",
      technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      points: [
        "Implemented dashboard views with charts, stats, and role-based access.",
        "Built APIs for menu updates, order tracking, and real-time data updates.",
      ],
      github: "https://github.com/VishalXDev/Restro-dashboard",
      demo: null,
      icon: FaChartLine,
      gradient: "from-blue-600 via-cyan-600 to-teal-600",
      glowColor: "rgba(59, 130, 246, 0.3)",
      category: "Web Dashboard"
    },
    {
      title: "FlockShop.Ai",
      description:
        "A shared wishlist platform with futuristic UI/UX, allowing collaborative shopping experiences.",
      technologies: ["Next.js", "Firebase", "MongoDB", "Tailwind CSS"],
      points: [
        "Built complete full-stack app with user authentication and wishlist sharing.",
        "Designed futuristic UI inspired by sci-fi themes using Tailwind CSS.",
      ],
      github: "https://github.com/VishalXDev/FlockShop.Ai",
      demo: null,
      icon: FaRocket,
      gradient: "from-indigo-600 via-purple-600 to-pink-600",
      glowColor: "rgba(99, 102, 241, 0.3)",
      category: "AI Platform"
    },
    {
      title: "Pgagi Dashboard",
      description:
        "A sleek analytics dashboard using charts, animations, and responsive design.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      points: [
        "Built dynamic dashboard with animated charts and custom theming.",
        "Used Framer Motion and Recharts for interactive visuals and transitions.",
      ],
      github: "https://github.com/VishalXDev/Pgagi-Dashboard",
      demo: null,
      icon: FaDatabase,
      gradient: "from-emerald-600 via-green-600 to-lime-600",
      glowColor: "rgba(16, 185, 129, 0.3)",
      category: "Analytics"
    },
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
        damping: 12
      }
    }
  };

  return (
    <section
      id="projects"
      className="min-h-screen pt-20 scroll-mt-20 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%),
          linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)
        `
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              background: `linear-gradient(45deg, #667eea, #764ba2)`,
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Epic Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaRocket className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400" />
            <h2 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-400">
              Featured Projects
            </h2>
            <FaStar className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400" />
          </motion.div>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Discover my portfolio of cutting-edge applications, each crafted with precision, 
            innovation, and a passion for creating extraordinary digital experiences.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Glow Effect */}
                <div 
                  className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-lg"
                  style={{
                    background: `linear-gradient(135deg, ${project.glowColor}, transparent)`,
                  }}
                />
                
                {/* Main Card */}
                <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-700/50 group-hover:border-gray-600/50 transition-all duration-500">
                  {/* Hero Section */}
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center`}>
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <motion.div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: `repeating-linear-gradient(
                            45deg,
                            transparent,
                            transparent 10px,
                            rgba(255,255,255,0.1) 10px,
                            rgba(255,255,255,0.1) 20px
                          )`
                        }}
                        animate={{
                          x: hoveredIndex === index ? [0, 20, 0] : 0,
                        }}
                        transition={{
                          duration: 2,
                          repeat: hoveredIndex === index ? Infinity : 0,
                          ease: "linear"
                        }}
                      />
                    </div>

                    {/* Project Icon & Title */}
                    <motion.div 
                      className="text-center z-10"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <IconComponent className="text-6xl text-white mb-3 mx-auto drop-shadow-lg" />
                      <span className="text-2xl font-bold text-white drop-shadow-lg">
                        {project.title}
                      </span>
                    </motion.div>

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <motion.h3 
                      className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300"
                    >
                      {project.title}
                    </motion.h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2 flex items-center gap-2">
                        <FaCode className="text-purple-400" />
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm"
                            whileHover={{ scale: 1.05, y: -2 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features</h4>
                      <ul className="space-y-2">
                        {project.points.map((point, pointIndex) => (
                          <motion.li 
                            key={pointIndex}
                            className="text-gray-300 text-sm flex items-start gap-2"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: pointIndex * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <FaStar className="text-yellow-400 text-xs mt-1 flex-shrink-0" />
                            {point}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 group/btn"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaGithub className="group-hover/btn:rotate-12 transition-transform duration-300" />
                          View Code
                        </motion.a>
                      )}
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 group/btn"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaExternalLinkAlt className="group-hover/btn:rotate-12 transition-transform duration-300" />
                          Live Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-block bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-300 text-lg">
              Let's collaborate and create the next groundbreaking project together!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;