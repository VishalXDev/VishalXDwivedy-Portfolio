// src/components/Hero.jsx
import React from 'react';
import { FaInstagram, FaGithub, FaLinkedinIn, FaVolumeUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="pt-0 pb-16 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left content */}
          <motion.div 
            className="md:w-1/2 mb-12 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
              Hi, I'm <span className="text-primary">Vishal </span>
              {/* <br /> */}
              <span className="text-secondary">Dwivedy</span>
            </h1>

            <h2 className="text-primary text-2xl md:text-3xl mb-6">Software Engineer</h2>

            <p className="text-light mb-8 max-w-lg">
              As a dedicated Software Engineer, I'm passionate about the art of coding
              and the science of problem-solving. With a strong foundation in computer
              science and a creative approach to development, I thrive on turning
              complex ideas into elegant, functional software solutions. Welcome to my
              portfolio, where you can explore my journey in transforming ideas into
              digital reality.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#contact"
                className="bg-primary text-white px-8 py-3 rounded hover:bg-purple-700 transition-colors duration-300"
              >
                Hire Me
              </a>
              <a
                href="/resume.pdf"
                className="border-2 border-primary text-white px-8 py-3 rounded hover:bg-primary/10 transition-colors duration-300"
              >
                MY CV
              </a>
              <button
                className="border-2 border-primary text-white w-12 h-12 rounded flex items-center justify-center hover:bg-primary/10 transition-colors duration-300"
              >
                <FaVolumeUp />
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-colors duration-300"
              >
                <FaInstagram className="text-white" />
              </a>
              <a
                href="https://github.com/VishalXDev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-colors duration-300"
              >
                <FaGithub className="text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/vishal-dwivedy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-colors duration-300"
              >
                <FaLinkedinIn className="text-white" />
              </a>
            </div>
          </motion.div>

          {/* Right content (image or stylized text) */}
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="w-full max-w-md opacity-80">
              {/* Placeholder for your image or stylized content */}
              <div className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center text-xs overflow-hidden">
                {/* You will replace this with your actual image */}
                <div className="text-xs opacity-30 text-center p-8">
                  {Array(100).fill("SOFTWARE ENGINEER CODE DEVELOPER REACT NODE AWS JAVASCRIPT").join(" ")}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;