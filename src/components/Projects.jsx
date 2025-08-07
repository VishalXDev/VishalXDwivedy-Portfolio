import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState, useMemo } from "react";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = useMemo(() => [
    {
      title: "Job Pilot AI",
      description: "Full-stack job tracking app with AI-powered resume insights and GPT-4 assistant.",
      technologies: ["React", "Tailwind", "Node", "MongoDB", "JWT", "OpenAI"],
      points: [
        "Built smart dashboard with CRUD job management and search/filter options",
        "Integrated GPT-4 powered AI assistant for personalized job insights",
        "Implemented secure JWT auth and reminder system"
      ],
      github: "https://github.com/VishalXDev/Job-Pilot-AI",
      demo: "https://job-pilot-ai.vercel.app/",
      icon: "🧠",
      gradient: "from-purple-600 via-indigo-600 to-blue-600",
      glowColor: "rgba(139, 92, 246, 0.3)"
    },
    {
      title: "Mood Time Machine",
      description: "AI companion that analyzes your Spotify mood history using OpenAI.",
      technologies: ["React", "Node", "Tailwind", "Spotify API", "OpenAI"],
      points: [
        "Analyzes listening behavior with Spotify OAuth integration",
        "Generates mood-based reflections using OpenAI GPT",
        "Features dynamic charts and animated UI with demo mode"
      ],
      github: "https://github.com/VishalXDev/Mood-Time-Machine",
      demo: "https://mood-time-machine.vercel.app/",
      icon: "🎧",
      gradient: "from-teal-500 via-blue-500 to-purple-500",
      glowColor: "rgba(56, 189, 248, 0.3)"
    },
    {
      title: "Boom Entertainment",
      description: "Video sharing platform with uploads, comments, and wallet integration.",
      technologies: ["Next.js", "Node", "MongoDB", "Cloudinary", "JWT"],
      points: [
        "Implemented long/short video feed with gifting system",
        "JWT-based authentication and cloud upload via Cloudinary",
        "CI/CD deployment on Vercel with GitHub Actions"
      ],
      github: "https://github.com/VishalXDev/Boom-Entertainment-Video-Platform",
      demo: "https://boom-entertainment.vercel.app/",
      icon: "🎥",
      gradient: "from-pink-600 via-red-500 to-yellow-500",
      glowColor: "rgba(255, 99, 132, 0.3)"
    },
    {
      title: "NotePilot AI",
      description: "AI-powered knowledge base with semantic search and PDF Q&A.",
      technologies: ["Next.js", "Node", "OpenAI", "MongoDB", "Pinecone"],
      points: [
        "Upload notes/PDFs for AI-powered summaries and Q&A",
        "Semantic vector search using OpenAI embeddings",
        "Secure auth with file upload and interactive interface"
      ],
      github: "https://github.com/VishalXDev/NotePilot-AI",
      demo: "https://notepilot-ai.vercel.app/",
      icon: "📚",
      gradient: "from-cyan-500 via-blue-400 to-purple-500",
      glowColor: "rgba(34, 211, 238, 0.3)"
    },
    {
      title: "HabotConnect",
      description: "AI-powered habit tracking app with personalized recommendations.",
      technologies: ["React", "Firebase", "Tailwind", "OpenAI"],
      points: [
        "Track habits with visual progress analytics",
        "AI-powered recommendations based on user patterns",
        "Firebase backend with real-time updates"
      ],
      github: "https://github.com/VishalXDev/HabotConnect",
      demo: "https://habot-connect.vercel.app/",
      icon: "🌱",
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      glowColor: "rgba(16, 185, 129, 0.3)"
    },
    {
      title: "Google Form Clone",
      description: "Dynamic form builder with validation and response storage.",
      technologies: ["React", "Firebase", "Tailwind"],
      points: [
        "Supports dynamic field addition and real-time updates",
        "Includes validation rules and preview logic",
        "Firebase backend with response storage"
      ],
      github: "https://github.com/VishalXDev/Google-Form-Clone",
      demo: "https://google-form-clone.vercel.app/",
      icon: "📝",
      gradient: "from-indigo-600 via-blue-500 to-cyan-400",
      glowColor: "rgba(99, 102, 241, 0.3)"
    }
  ], []);

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto" id="projects">
      <h2 className="text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Featured Projects</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`relative bg-gradient-to-br ${project.gradient} rounded-2xl p-6 text-white shadow-lg transition-transform duration-300 hover:scale-105`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{ boxShadow: `0 0 20px ${project.glowColor}` }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl mb-4">{project.icon}</div>
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span key={i} className="px-2 py-1 text-xs bg-black/20 rounded-full border border-white/10">
                  {tech}
                </span>
              ))}
            </div>
            <ul className="list-disc list-inside text-sm mb-4 space-y-1">
              {project.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="flex gap-4 mt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <FaGithub size={20} />
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <FaExternalLinkAlt size={20} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;