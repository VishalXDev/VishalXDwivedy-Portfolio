import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaRocket, FaStar, FaCode, FaMobile, FaDatabase, FaChartLine } from "react-icons/fa";
import { useState, useMemo } from "react";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Memoize static data to prevent unnecessary recalculations
  const projects = useMemo(() => [
    {
      title: "E-Commerce App",
      description: "A full-featured React Native app using Expo Router with product listings, cart functionality, and persistent storage.",
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
    // ... other projects
  ], []);

  // Simplified animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Reduced stagger time
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 }, // Removed scale animation
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4, // Faster animation
        ease: "easeOut"
      }
    }
  };

  // Memoized background elements to prevent recreation on every render
  const backgroundElements = useMemo(() => (
    [...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full opacity-10"
        style={{
          background: `linear-gradient(45deg, #667eea, #764ba2)`,
          width: Math.random() * 200 + 100,
          height: Math.random() * 200 + 100,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          x: [0, Math.random() * 50 - 25],
          y: [0, Math.random() * 50 - 25],
        }}
        transition={{
          duration: Math.random() * 15 + 15, // Slower movement
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
      />
    ))
  ), []);

  // Simplified floating particles
  const floatingParticles = useMemo(() => (
    [...Array(10)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-0.5 h-0.5 bg-white rounded-full opacity-40"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -50, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: Math.random() * 5 + 5,
          repeat: Infinity,
          delay: Math.random() * 2,
          ease: "easeInOut"
        }}
      />
    ))
  ), []);

  return (
    <section
      id="projects"
      className="min-h-screen pt-20 scroll-mt-20 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
          linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)
        `
      }}
    >
      {/* Simplified Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {backgroundElements}
        {floatingParticles}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Optimized Header */}
        <motion.div 
          className="text-center mb-16" // Reduced margin
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <FaRocket className="text-4xl text-purple-400" />
            <h2 className="text-5xl font-bold text-white">
              Featured Projects
            </h2>
            <FaStar className="text-4xl text-yellow-400" />
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover my portfolio of cutting-edge applications, each crafted with precision, 
            innovation, and a passion for creating extraordinary digital experiences.
          </p>
        </motion.div>

        {/* Optimized Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto" // Reduced gap
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
                whileHover={{ y: -5 }} // Reduced hover effect
              >
                {/* Simplified Glow Effect */}
                {hoveredIndex === index && (
                  <div 
                    className="absolute -inset-1 rounded-2xl opacity-70 blur-md transition-opacity duration-300"
                    style={{ background: project.glowColor }}
                  />
                )}
                
                {/* Main Card */}
                <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 group-hover:border-gray-600/50 transition-all duration-300">
                  {/* Hero Section */}
                  <div className={`h-40 bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center`}>
                    {/* Project Icon & Title */}
                    <div className="text-center z-10">
                      <IconComponent className="text-5xl text-white mb-2 mx-auto" />
                      <span className="text-xl font-bold text-white">
                        {project.title}
                      </span>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="bg-white/10 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-3 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-3">
                      <h4 className="text-xs font-semibold text-gray-400 mb-1 flex items-center gap-1">
                        <FaCode className="text-purple-400" />
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-gray-800 border border-gray-700 text-gray-300 px-2 py-0.5 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-gray-400 mb-1">Key Features</h4>
                      <ul className="space-y-1">
                        {project.points.map((point, pointIndex) => (
                          <li 
                            key={pointIndex}
                            className="text-gray-300 text-xs flex items-start gap-1"
                          >
                            <FaStar className="text-yellow-400 text-xs mt-0.5 flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 bg-gray-700 hover:bg-gray-600 text-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors"
                        >
                          <FaGithub />
                          Code
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 bg-purple-600 hover:bg-purple-500 text-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors"
                        >
                          <FaExternalLinkAlt />
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Simplified Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-white mb-2">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-300">
              Let's collaborate and create the next groundbreaking project together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;