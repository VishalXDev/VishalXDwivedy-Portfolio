import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaRocket,
  FaStar,
  FaCode,
  FaArrowRight,
} from "react-icons/fa";
import { useMemo } from "react";

const Projects = () => {
  const projects = useMemo(
    () => [
      {
        title: "AI Playground Platform (169Pi)",
        description:
          "Interactive AI playground for testing prompts, LLM responses, and real-time workflows.",
        longDescription:
          "Built a production-grade AI playground platform enabling users to experiment with prompts, analyze responses, and interact with LLM-powered workflows in real-time.",
        technologies: [
          "React",
          "Next.js",
          "Node.js",
          "WebSockets",
          "OpenAI API",
        ],
        keyFeatures: [
          "Real-time prompt testing and response streaming",
          "LLM integration with dynamic workflows",
          "Optimized UI for fast interaction and feedback",
          "Production-level reliability and debugging",
        ],
        github: "",
        demo: "",
        links: [
          {
            label: "Playground",
            url: "https://playground.169pi.ai/dashboard/playground",
          },
        ],
        icon: "⚡",
        category: "Production System",
        status: "Live",
        gradient: "from-yellow-500 via-orange-500 to-red-500",
        shadowColor: "shadow-orange-500/25",
      },
      {
        title: "API Platform (169Pi)",
        description:
          "Scalable API platform powering AI features and real-time applications.",
        longDescription:
          "Developed and optimized backend/API systems supporting AI-driven features, real-time data flow, and seamless frontend integrations.",
        technologies: [
          "Node.js",
          "Express.js",
          "REST APIs",
          "WebSockets",
          "MongoDB",
        ],
        keyFeatures: [
          "Designed scalable API architecture",
          "Handled real-time streaming and integrations",
          "Improved response reliability and performance",
          "Debugged edge cases in production systems",
        ],
        github: "",
        demo: "",
        icon: "🛠️",
        links: [
          { label: "Dashboard", url: "https://playground.169pi.ai/dashboard" },
        ],
        category: "Backend & Systems",
        status: "Production",
        gradient: "from-blue-500 via-indigo-500 to-purple-500",
        shadowColor: "shadow-blue-500/25",
      },
      {
        title: "PDF AI Analyzer",
        description:
          "Upload PDFs and ask anything — AI answers based on document context.",
        longDescription:
          "Built an intelligent document analysis system where users can upload PDFs and interact with them using AI-powered Q&A.",
        technologies: ["Next.js", "Node.js", "OpenAI", "Vector Search"],
        keyFeatures: [
          "PDF upload and parsing",
          "Context-aware AI question answering",
          "Semantic search with embeddings",
          "Interactive chat-based UI",
        ],
        github: "https://github.com/VishalXDev",
        demo: "",
        icon: "📄",
        category: "AI Application",
        status: "Completed",
        gradient: "from-cyan-500 via-blue-500 to-indigo-500",
        shadowColor: "shadow-cyan-500/25",
      },
      {
        title: "Boom Entertainment (YouTube Clone)",
        description:
          "Full-featured video platform with uploads, engagement, and monetization features.",
        longDescription:
          "Developed a YouTube-like platform supporting video uploads, interactions, and scalable media handling.",
        technologies: ["Next.js", "Node.js", "MongoDB", "Cloudinary", "JWT"],
        keyFeatures: [
          "Video upload and streaming",
          "Authentication and user roles",
          "Comment and engagement system",
          "Cloud-based media handling",
        ],
        github:
          "https://github.com/VishalXDev/Boom-Entertainment-Video-Platform",
        demo: "https://boom-entertainment-video-platform.vercel.app/",
        icon: "🎥",
        category: "Full-Stack Platform",
        status: "Production",
        gradient: "from-pink-500 via-red-500 to-orange-500",
        shadowColor: "shadow-red-500/25",
      },
      {
        title: "Job Pilot AI",
        description:
          "AI-powered job tracking system with smart insights and automation.",
        longDescription:
          "A full-stack AI application that helps users manage job applications with intelligent insights and recommendations.",
        technologies: ["React", "Node.js", "MongoDB", "OpenAI API"],
        keyFeatures: [
          "AI-powered resume insights",
          "Smart job tracking dashboard",
          "Role-based authentication",
          "Automated recommendations",
        ],
        github: "https://github.com/VishalXDev/Job-Pilot-AI",
        demo: "https://job-pilot-ai.vercel.app/",
        icon: "🧠",
        category: "AI Product",
        status: "Production",
        gradient: "from-purple-500 via-indigo-500 to-blue-500",
        shadowColor: "shadow-purple-500/25",
      },
      {
        title: "AI Chatbot System",
        description:
          "Real-time conversational AI with streaming responses and context awareness.",
        longDescription:
          "Built a scalable chatbot system with real-time streaming responses and context-aware interactions.",
        technologies: ["React", "Node.js", "OpenAI API", "WebSockets"],
        keyFeatures: [
          "Streaming responses",
          "Context-aware conversations",
          "Optimized response handling",
          "Real-time UI updates",
        ],
        github: "https://github.com/VishalXDev",
        demo: "",
        icon: "💬",
        category: "AI System",
        status: "Completed",
        gradient: "from-green-500 via-emerald-500 to-teal-500",
        shadowColor: "shadow-green-500/25",
      },
    ],
    [],
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-6">
            Projects That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              Make Impact
            </span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
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
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
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

                <p className="text-[var(--text-secondary)] group-hover:text-white/90 text-sm sm:text-base mb-4 transition-colors leading-relaxed">
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
                  <div className="flex items-center gap-3 flex-wrap">
                    {project.github && (
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
                    )}

                    {project.demo && (
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
                    )}

                    {project.links &&
                      project.links.map((link, li) => (
                        <motion.a
                          key={li}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-[var(--surface-secondary)] group-hover:bg-white/10 text-[var(--text-secondary)] group-hover:text-white border border-[var(--border-color)] group-hover:border-white/20 rounded-xl transition-all duration-200"
                          aria-label={`Open ${link.label} for ${project.title}`}
                        >
                          <FaExternalLinkAlt className="text-[10px]" />
                          {link.label}
                        </motion.a>
                      ))}
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
