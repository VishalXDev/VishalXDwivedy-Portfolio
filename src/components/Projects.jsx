import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaRocket,
  FaStar,
  FaCode,
  FaArrowRight,
} from "react-icons/fa";
import { useState, useMemo } from "react";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = useMemo(
    () => [
      {
        title: "Job Pilot AI",
        description:
          "Full-stack job tracking app with AI-powered resume insights and GPT-4 assistant.",
        longDescription:
          "An intelligent job tracking platform that helps users manage their job applications with AI-powered insights and personalized recommendations.",
        technologies: [
          "React",
          "Tailwind",
          "Node.js",
          "MongoDB",
          "JWT",
          "OpenAI",
        ],
        keyFeatures: [
          "Smart dashboard with CRUD job management",
          "GPT-4 powered AI assistant for personalized insights",
          "Secure JWT authentication and reminder system",
          "Advanced search and filter capabilities",
        ],
        github: "https://github.com/VishalXDev/Job-Pilot-AI",
        demo: "https://job-pilot-ai.vercel.app/",
        icon: "🧠",
        category: "AI & Machine Learning",
        status: "Production",
        gradient: "from-purple-500 via-indigo-500 to-blue-500",
        shadowColor: "shadow-purple-500/25",
      },
      {
        title: "Mood Time Machine",
        description:
          "AI companion that analyzes your Spotify mood history using OpenAI.",
        longDescription:
          "A unique application that connects to your Spotify account to analyze your listening patterns and provide AI-powered mood insights.",
        technologies: ["React", "Node.js", "Tailwind", "Spotify API", "OpenAI"],
        keyFeatures: [
          "Spotify OAuth integration for listening analysis",
          "AI-generated mood-based reflections",
          "Dynamic charts and animated UI",
          "Demo mode for exploration",
        ],
        github: "https://github.com/VishalXDev/Mood-Time-Machine",
        demo: "https://mood-time-machine.vercel.app/",
        icon: "🎧",
        category: "AI & Entertainment",
        status: "Production",
        gradient: "from-teal-500 via-blue-500 to-purple-500",
        shadowColor: "shadow-blue-500/25",
      },
      {
        title: "Boom Entertainment",
        description:
          "Video sharing platform with uploads, comments, and wallet integration.",
        longDescription:
          "A comprehensive video sharing platform featuring content creation tools, social interactions, and monetization features.",
        technologies: ["Next.js", "Node.js", "MongoDB", "Cloudinary", "JWT"],
        keyFeatures: [
          "Long/short video feed with gifting system",
          "JWT-based authentication and cloud uploads",
          "CI/CD deployment with GitHub Actions",
          "Interactive comment and engagement system",
        ],
        github:
          "https://github.com/VishalXDev/Boom-Entertainment-Video-Platform",
        demo: "https://boom-entertainment.vercel.app/",
        icon: "🎥",
        category: "Social Media",
        status: "Production",
        gradient: "from-pink-500 via-red-500 to-orange-500",
        shadowColor: "shadow-red-500/25",
      },
      {
        title: "NotePilot AI",
        description:
          "AI-powered knowledge base with semantic search and PDF Q&A.",
        longDescription:
          "An intelligent note-taking and knowledge management system powered by AI for enhanced productivity and information retrieval.",
        technologies: ["Next.js", "Node.js", "OpenAI", "MongoDB", "Pinecone"],
        keyFeatures: [
          "Upload notes/PDFs for AI-powered summaries",
          "Semantic vector search using OpenAI embeddings",
          "Interactive Q&A with documents",
          "Secure authentication and file management",
        ],
        github: "https://github.com/VishalXDev/NotePilot-AI",
        demo: "https://note-pilot-ai.vercel.app/login",
        icon: "📚",
        category: "Productivity",
        status: "Production",
        gradient: "from-cyan-500 via-blue-400 to-indigo-500",
        shadowColor: "shadow-cyan-500/25",
      },
      {
        title: "HabotConnect",
        description:
          "AI-powered habit tracking app with personalized recommendations.",
        longDescription:
          "A smart habit tracking application that uses AI to provide personalized recommendations and insights for better habit formation.",
        technologies: ["React", "Firebase", "Tailwind", "OpenAI"],
        keyFeatures: [
          "Visual progress analytics and tracking",
          "AI-powered habit recommendations",
          "Firebase backend with real-time updates",
          "Personalized insights and streak tracking",
        ],
        github: "https://github.com/VishalXDev/HabotConnect-Provider-Directory",
        demo: "https://habot-connect-provider-directory.vercel.app/",
        icon: "🌱",
        category: "Health & Fitness",
        status: "Production",
        gradient: "from-green-500 via-emerald-500 to-teal-500",
        shadowColor: "shadow-green-500/25",
      },
      {
        title: "Google Form Clone",
        description:
          "Dynamic form builder with validation and response storage.",
        longDescription:
          "A comprehensive form builder application that replicates Google Forms functionality with advanced customization options.",
        technologies: ["React", "Firebase", "Tailwind"],
        keyFeatures: [
          "Dynamic field addition and real-time updates",
          "Advanced validation rules and logic",
          "Firebase backend with response storage",
          "Form preview and sharing capabilities",
        ],
        github: "https://github.com/VishalXDev/Google-Form-Clone",
        demo: "Coming Soon",
        icon: "📝",
        category: "Productivity",
        status: "Working On it",
        gradient: "from-indigo-500 via-purple-500 to-pink-500",
        shadowColor: "shadow-indigo-500/25",
      },
    ],
    []
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="py-20 bg-[var(--bg-primary)]" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface-secondary)] border border-[var(--border-color)] mb-6">
            <FaRocket className="text-[var(--accent-primary)] text-sm animate-bounce" />
            <span className="text-sm font-medium text-[var(--text-secondary)]">
              Featured Work
            </span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-[var(--text-primary)] mb-6">
            Projects That
            <br />
            <span className="text-transparent bg-gradient-to-r from-[var(--accent-primary)] via-[var(--accent-secondary)] to-[var(--accent-primary)] bg-clip-text">
              Make Impact
            </span>
          </h2>

          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            A collection of applications I've built, each solving real-world
            problems with modern technologies and thoughtful design.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative bg-[var(--surface-primary)]/50 backdrop-blur-xl border border-[var(--border-color)] rounded-3xl p-8 transition-all duration-300 hover:border-transparent hover:${project.shadowColor} hover:shadow-2xl`}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br ${project.gradient} -z-10`}
              />

              {/* Status Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="text-3xl">{project.icon}</div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-xs font-medium">
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="text-xs text-[var(--text-secondary)] bg-[var(--surface-secondary)] px-3 py-1 rounded-full border border-[var(--border-color)]">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-white mb-3 transition-colors">
                  {project.title}
                </h3>

                <p className="text-[var(--text-secondary)] group-hover:text-white/90 text-sm mb-4 transition-colors leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 text-xs font-medium bg-[var(--surface-secondary)] group-hover:bg-white/10 text-[var(--text-secondary)] group-hover:text-white border border-[var(--border-color)] group-hover:border-white/20 rounded-lg transition-all duration-200"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Key Features */}
                <div className="space-y-2 mb-6">
                  {project.keyFeatures.slice(0, 3).map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <FaStar className="text-[var(--accent-primary)] group-hover:text-white/80 text-xs mt-1 flex-shrink-0" />
                      <span className="text-[var(--text-secondary)] group-hover:text-white/80 transition-colors">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center justify-between pt-4 border-t border-[var(--border-color)] group-hover:border-white/20">
                  <div className="flex items-center gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center w-10 h-10 bg-[var(--surface-secondary)] group-hover:bg-white/10 text-[var(--text-secondary)] group-hover:text-white border border-[var(--border-color)] group-hover:border-white/20 rounded-xl transition-all duration-200"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <FaGithub className="text-lg" />
                    </motion.a>

                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center w-10 h-10 bg-[var(--surface-secondary)] group-hover:bg-white/10 text-[var(--text-secondary)] group-hover:text-white border border-[var(--border-color)] group-hover:border-white/20 rounded-xl transition-all duration-200"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <FaExternalLinkAlt className="text-lg" />
                    </motion.a>
                  </div>

                  <motion.div
                    className="flex items-center gap-2 text-sm font-medium text-[var(--accent-primary)] group-hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <span>Explore</span>
                    <FaArrowRight className="text-xs" />
                  </motion.div>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-[var(--surface-primary)]/50 backdrop-blur-xl border border-[var(--border-color)] rounded-3xl">
            <div className="flex items-center gap-3">
              <FaCode className="text-[var(--accent-primary)] text-xl" />
              <h3 className="text-xl font-bold text-[var(--text-primary)]">
                More Projects Coming Soon
              </h3>
            </div>
            <p className="text-[var(--text-secondary)] text-center max-w-md">
              I'm constantly working on new projects and experiments. Follow my
              GitHub to stay updated with the latest work!
            </p>
            <motion.a
              href="https://github.com/VishalXDev"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white font-semibold rounded-2xl shadow-lg hover:shadow-[var(--accent-primary)]/25 transition-all duration-200"
            >
              <FaGithub />
              <span>View All Projects</span>
              <FaArrowRight className="text-sm" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
