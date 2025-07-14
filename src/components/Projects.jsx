import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState, useMemo } from "react";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = useMemo(() => [
    {
      title: "Job Pilot AI",
      description: "AI-powered job tracking app with resume insights, secure login, and smart assistant features.",
      technologies: ["React.js", "Tailwind CSS", "Node.js", "MongoDB", "OpenAI API", "JWT"],
      points: [
        "Built smart dashboard with CRUD job management and search/filter options.",
        "Integrated GPT-4 powered AI assistant for personalized job insights.",
        "Implemented secure JWT auth and reminder system."
      ],
      github: "https://github.com/VishalXDev/JobPilot-AI",
      demo: "https://job-pilot-ai.vercel.app/",
      icon: "🧠",
      gradient: "from-purple-600 via-indigo-600 to-blue-600",
      glowColor: "rgba(139, 92, 246, 0.3)"
    },
    {
      title: "Mood Time Machine",
      description: "AI companion app that reflects on your Spotify mood history using OpenAI.",
      technologies: ["React.js", "Node.js", "Tailwind CSS", "Spotify API", "OpenAI API", "Chart.js"],
      points: [
        "Analyzes listening behavior with Spotify OAuth and audio feature insights.",
        "Generates mood-based reflections using OpenAI GPT.",
        "Includes dynamic charts and animated UI with demo mode."
      ],
      github: "https://github.com/VishalXDev/Mood-Time-Machine",
      demo: "https://mood-time-machine.vercel.app/",
      icon: "🎧",
      gradient: "from-teal-500 via-blue-500 to-purple-500",
      glowColor: "rgba(56, 189, 248, 0.3)"
    },
    {
      title: "Boom Entertainment – Video Platform",
      description: "Scalable video sharing platform with uploads, comments, and wallet integration.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Cloudinary", "JWT"],
      points: [
        "Implemented long/short video feed, gifting system, and comment moderation.",
        "JWT-based authentication and cloud upload via Cloudinary.",
        "CI/CD deployment on Vercel with GitHub Actions."
      ],
      github: "https://github.com/VishalXDev/Boom-Entertainment-Video-Platform",
      demo: "https://boom-entertainment.vercel.app/",
      icon: "🎥",
      gradient: "from-pink-600 via-red-500 to-yellow-500",
      glowColor: "rgba(255, 99, 132, 0.3)"
    },
    {
      title: "NotePilot AI",
      description: "AI-powered personal knowledge base with semantic search and PDF Q&A.",
      technologies: ["Next.js", "Node.js", "OpenAI API", "MongoDB", "Tailwind CSS", "Pinecone"],
      points: [
        "Upload notes or PDFs and ask questions for AI-powered summaries.",
        "Integrated semantic vector search using OpenAI embeddings + Pinecone.",
        "Secure auth, file upload, and interactive Q&A interface."
      ],
      github: "https://github.com/VishalXDev/NotePilot-AI",
      demo: "https://notepilot-ai.vercel.app/",
      icon: "📚",
      gradient: "from-cyan-500 via-blue-400 to-purple-500",
      glowColor: "rgba(34, 211, 238, 0.3)"
    },
    {
      title: "Google Form Clone",
      description: "Real-time dynamic form builder with validation, UI logic, and response storage.",
      technologies: ["React.js", "Firebase", "Tailwind CSS"],
      points: [
        "Supports dynamic field addition, real-time updates, and form response saving.",
        "Validation rules and preview logic included.",
        "Firebase backend and fully responsive UI."
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
      <h2 className="text-4xl font-bold mb-8 text-center text-white">Projects</h2>
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
                className="text-white hover:text-gray-300"
              >
                <FaGithub size={20} />
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
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
