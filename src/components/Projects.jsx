import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState, useMemo } from "react";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
      icon: "📱",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      glowColor: "rgba(147, 51, 234, 0.3)"
    },
    {
      title: "Boom Entertainment – Video Platform",
      description: "Full-stack video sharing platform with long/short video support, virtual gifting, and wallet system.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Cloudinary", "JWT"],
      points: [
        "Developed long/short video feed, comment system, virtual gifts, and monetization.",
        "Implemented wallet transactions, JWT Auth, and responsive cloud deployment."
      ],
      github: "https://github.com/VishalXDev/Boom-Entertainment-Video-Platform",
      demo: "https://boom-entertainment.vercel.app/",
      icon: "🎥",
      gradient: "from-pink-600 via-red-500 to-yellow-500",
      glowColor: "rgba(255, 99, 132, 0.3)"
    },
    {
      title: "Translate App",
      description: "Fast multilingual translator using LibreTranslate API with modern UI and instant updates.",
      technologies: ["React.js", "TypeScript", "Vercel", "LibreTranslate API"],
      points: [
        "Built using TypeScript with smooth UX and responsive multilingual support.",
        "Integrated LibreTranslate API for real-time translations."
      ],
      github: "https://github.com/VishalXDev/translate-app",
      demo: "https://translate-app-red.vercel.app/",
      icon: "🌐",
      gradient: "from-blue-500 via-green-400 to-teal-400",
      glowColor: "rgba(59, 130, 246, 0.3)"
    },
    {
      title: "Offline Notes App",
      description: "PWA-capable notes app with offline access, tagging, and search functionality.",
      technologies: ["React.js", "TypeScript", "LocalStorage"],
      points: [
        "Built offline-first design using local storage.",
        "Implemented tag-based filtering and search with a modern UI."
      ],
      github: "https://github.com/VishalXDev/offline-notes-app",
      demo: "https://offline-notes.vercel.app/",
      icon: "🗒️",
      gradient: "from-green-500 via-lime-500 to-yellow-400",
      glowColor: "rgba(34, 197, 94, 0.3)"
    },
    {
      title: "Pgagi Dashboard",
      description: "Admin dashboard with data management views and optimized performance UI.",
      technologies: ["React.js", "MongoDB", "Express.js", "Tailwind CSS"],
      points: [
        "Built dashboard panels and integrated backend using RESTful APIs.",
        "Used modern design components with responsive layouts."
      ],
      github: "https://github.com/VishalXDev/Pgagi-Dashboard",
      demo: "https://pgagi-dashboard.vercel.app/",
      icon: "📊",
      gradient: "from-indigo-600 via-blue-500 to-cyan-500",
      glowColor: "rgba(99, 102, 241, 0.3)"
    },
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
