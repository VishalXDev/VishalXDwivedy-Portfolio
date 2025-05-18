// src/components/Hero.jsx
import React, { useEffect, useState } from 'react';
import { FaInstagram, FaGithub, FaLinkedinIn, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const introduction = "Hi, I'm Vishal Dwivedy, a Software Engineer specializing in web development.";
  
  const toggleSpeech = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      // Text-to-speech functionality
      const speech = new SpeechSynthesisUtterance(introduction);
      speech.lang = 'en-US';
      speech.onend = () => setIsSpeaking(false);
      window.speechSynthesis.speak(speech);
      setIsSpeaking(true);
    }
  };
  
  // Clean up speech synthesis if component unmounts while speaking
  useEffect(() => {
    return () => {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isSpeaking]);

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
              <span className="text-secondary">Dwivedy</span>
            </h1>

            <h2 className="text-primary text-2xl md:text-3xl mb-6">Software Engineer</h2>

            <p className="text-light mb-8 max-w-lg">
              As a dedicated Software Engineer, I'm passionate about the art of coding
              and the science of problem-solving. With a strong foundation in computer
              science and a creative approach to development, I thrive on turning
              complex ideas into elegant, functional software solutions.
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
                href="https://drive.google.com/uc?export=download&id=YOUR_GOOGLE_DRIVE_FILE_ID"
                className="border-2 border-primary text-white px-8 py-3 rounded hover:bg-primary/10 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                download="Vishal_Dwivedy_Resume.pdf"
              >
                MY CV
              </a>
              <button
                onClick={toggleSpeech}
                aria-label={isSpeaking ? "Stop speaking" : "Speak introduction"}
                className="border-2 border-primary text-white w-12 h-12 rounded flex items-center justify-center hover:bg-primary/10 transition-colors duration-300"
              >
                {isSpeaking ? <FaVolumeMute /> : <FaVolumeUp />}
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-colors duration-300"
              >
                <FaInstagram className="text-white" />
              </a>
              <a
                href="https://github.com/VishalXDev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-colors duration-300"
              >
                <FaGithub className="text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/vishal-dwivedy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-colors duration-300"
              >
                <FaLinkedinIn className="text-white" />
              </a>
            </div>
          </motion.div>

          {/* Right content - improved dynamic animation */}
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="w-full max-w-md">
              <div className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden relative">
                {/* Dynamic code animation background */}
                <motion.div 
                  className="absolute inset-0 w-full h-full text-xs opacity-30 p-8 leading-relaxed"
                  initial={{ backgroundPosition: "0% 0%" }}
                  animate={{ 
                    backgroundPosition: ["0% 0%", "100% 100%"],
                    transition: { 
                      repeat: Infinity, 
                      duration: 20,
                      repeatType: "reverse"
                    }
                  }}
                >
                  {Array(15).fill().map((_, i) => (
                    <div key={i} className="mb-2 opacity-50">
                      <span className="text-primary">const</span> develop = <span className="text-secondary">{"{"}</span> code, solve, create <span className="text-secondary">{"}"}</span>;
                    </div>
                  ))}
                </motion.div>
                
                {/* Central highlighted text */}
                <div className="relative z-10 text-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="text-2xl font-bold text-primary"
                  >
                    VISHAL DWIVEDY
                  </motion.div>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.3, duration: 0.8 }}
                    className="text-light mt-2"
                  >
                    Software Engineer
                  </motion.div>
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