// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-8 text-center">About Me</h2>
          
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-medium mb-4 text-primary">Software Engineer | Full-Stack Development • Cloud & DevOps • Microservices • CI/CD</h3>
            
            <div className="mb-6">
              <div className="flex items-center mb-3">
                <span className="mr-2">📞</span>
                <span>7004212369</span>
              </div>
              <div className="flex items-center mb-3">
                <span className="mr-2">📧</span>
                <a href="mailto:Vishaldwidy@gmail.com" className="text-secondary hover:underline">Vishaldwidy@gmail.com</a>
              </div>
              <div className="flex items-center mb-3">
                <span className="mr-2">🔗</span>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">LinkedIn</a>
              </div>
              <div className="flex items-center">
                <span className="mr-2">🔗</span>
                <a href="https://github.com/VishalXDev" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">GitHub</a>
              </div>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-4 text-primary">SUMMARY</h3>
              <p className="text-light">
                Software Engineer (SDE-1) with hands-on experience building scalable, secure, and maintainable 
                web applications using React.js, Node.js, and AWS. Adept in microservices, REST APIs, serverless 
                (AWS Lambda), and CI/CD. Proven ability to optimize performance and ship features in agile, 
                cloud-native environments using AI and automation tools.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;