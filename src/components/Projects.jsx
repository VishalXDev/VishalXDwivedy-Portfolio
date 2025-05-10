import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Resume Analyzer",
      description:
        "Built an AI-powered web app that matches resumes with job descriptions using OpenAI & Gemini.",
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Drizzle ORM",
        "OpenAI",
        "Clerk Auth",
        "Vercel",
      ],
      points: [
        "Integrated Clerk Auth and OAuth 2.0 for secure access, used PostgreSQL and Drizzle ORM for data modeling.",
        "Deployed on Vercel with CI/CD, improving match accuracy by 60% through prompt tuning and structured embeddings.",
      ],
      github: "https://github.com/VishalXDev",
      demo: null,
    },
    {
      title: "Segwise – Interactive Table UI",
      description:
        "Developed a high-performance table UI with Zustand, TypeScript, and Tailwind CSS.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Zustand"],
      points: [
        "Included filters, modals, and pagination with <200ms load time.",
        "Enhanced UX across devices with mobile-first responsive design from Figma.",
      ],
      github: "https://github.com/VishalXDev",
      demo: "https://demo-link.com/",
    },
    {
      title: "Hospital Food-Management System",
      description:
        "A comprehensive system for managing hospital food services and dietary requirements.",
      technologies: ["React", "Express.js", "MongoDB", "Docker"],
      points: [
        "Implemented role-based access control for different stakeholders.",
        "Built a real-time notification system for dietary updates and meal deliveries.",
      ],
      github: "https://github.com/VishalXDev",
      demo: null,
    },
    {
      title: "Shopify-Shop",
      description:
        "E-commerce platform with product management, cart functionality, and payment integration.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      points: [
        "Built with Next.js for improved SEO and performance.",
        "Integrated Stripe payment gateway for secure transactions.",
      ],
      github: "https://github.com/VishalXDev",
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
              className="bg-dark rounded-lg overflow-hidden shadow-md" // reduced shadow size
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index % 2) * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Project Title Placeholder */}
              <div className="h-32 bg-gray-800 flex items-center justify-center">
                {" "}
                {/* reduced height */}
                <span className="text-lg text-primary font-semibold text-center px-2">
                  {project.title}
                </span>
              </div>

              <div className="p-4">
                {" "}
                {/* reduced padding */}
                <h3 className="text-lg font-semibold mb-1">
                  {project.title}
                </h3>{" "}
                {/* reduced text size */}
                <p className="text-sm text-light mb-3">
                  {project.description}
                </p>{" "}
                {/* smaller description */}
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
