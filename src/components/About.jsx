// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="pt-8 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center text-white mb-8">About Me</h2>

          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Software Engineer
            </h3>
            <p className="text-light mb-6">
              MERN Stack Developer • Full-Stack Development • Cloud & DevOps
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-10 text-left">
              <div className="flex items-center gap-2">
                <FaPhone className="text-primary" />
                <span className="text-light">7004212369</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-primary" />
                <a
                  href="mailto:Vishaldwidy@gmail.com"
                  className="text-secondary hover:underline"
                >
                  Vishaldwidy@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaLinkedin className="text-blue-600" />
                <a
                  href="https://www.linkedin.com/in/vishal-dwivedy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline"
                >
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaGithub className="text-white" />
                <a
                  href="https://github.com/VishalXDev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Summary Box */}
            <div className="bg-dark p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-primary mb-4">SUMMARY</h3>
              <p className="text-light leading-relaxed">
                Software Engineer (SDE-1) with hands-on experience building scalable, secure, and maintainable web applications using React.js, Node.js, and AWS. Adept in microservices, REST APIs, serverless (AWS Lambda), and CI/CD. Proven ability to optimize performance and ship features in agile, cloud-native environments using AI and automation tools.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
