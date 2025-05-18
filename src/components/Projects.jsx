import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
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
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen pt-0 scroll-mt-20 bg-dark text-white"
    >
      <div className="container mx-auto px-2">
        <h2 className="text-3xl font-semibold mb-12 text-center">Projects</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-dark rounded-lg overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index % 2) * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="h-32 bg-gray-800 flex items-center justify-center">
                <span className="text-lg text-primary font-semibold text-center px-2">
                  {project.title}
                </span>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-light mb-3">
                  {project.description}
                </p>
                <div className="mb-3 flex flex-wrap gap-1">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-primary/20 text-primary px-2 py-0.5 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="list-disc pl-4 mb-3 space-y-1 text-light text-sm">
                  {project.points.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-primary hover:underline text-sm"
                    >
                      <FaGithub className="mr-1" /> GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-secondary hover:underline text-sm"
                    >
                      <FaExternalLinkAlt className="mr-1" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
