import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaInstagram, 
  FaGithub, 
  FaLinkedinIn, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaHeart,
  FaCode,
  FaRocket,
  FaArrowUp,
  FaCoffee,
  FaMagic
} from 'react-icons/fa';

const Footer = () => {
  const [emailHovered, setEmailHovered] = useState(false);
  const [heartBeating, setHeartBeating] = useState(false);

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { 
      icon: FaInstagram, 
      href: "https://www.instagram.com/", 
      color: "from-pink-500 to-purple-500",
      hoverColor: "hover:shadow-pink-500/50"
    },
    { 
      icon: FaGithub, 
      href: "https://github.com/VishalXDev", 
      color: "from-gray-500 to-gray-700",
      hoverColor: "hover:shadow-gray-500/50"
    },
    { 
      icon: FaLinkedinIn, 
      href: "https://www.linkedin.com/in/vishal-dwivedy", 
      color: "from-blue-500 to-blue-600",
      hoverColor: "hover:shadow-blue-500/50"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/30 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-20 -left-20 w-48 h-48 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl"
        />

        {/* Floating Code Elements */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-xs text-purple-300/20 font-mono"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * 200,
            }}
            animate={{
              y: [null, -30, null],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 8 + 5,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            {['{ }', '< />', '( )', '[ ]', '=> ', 'fn()', 'var', 'let', 'const', 'async'][Math.floor(Math.random() * 10)]}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-6 py-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="mb-6"
              >
                <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
                  Vishal Dwivedy
                </h2>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "60%" }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4"
                />
              </motion.div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
                Crafting digital experiences that inspire and innovate. 
                Passionate about turning ideas into reality through code.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <motion.div
                  className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors cursor-pointer"
                  whileHover={{ x: 5 }}
                  onHoverStart={() => setEmailHovered(true)}
                  onHoverEnd={() => setEmailHovered(false)}
                >
                  <motion.div
                    animate={emailHovered ? { rotate: [0, 10, -10, 0] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <FaEnvelope />
                  </motion.div>
                  <span>Vishaldwidy@gmail.com</span>
                </motion.div>
                
                <motion.div
                  className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <FaPhone />
                  <span>+91 7004212369</span>
                </motion.div>
                
                <motion.div
                  className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <FaMapMarkerAlt />
                  <span>Chandigarh, India</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
                <FaRocket className="text-purple-400" />
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li key={index}>
                    <motion.a
                      href={link.href}
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group"
                      whileHover={{ x: 8 }}
                    >
                      <motion.span
                        className="w-0 h-0.5 bg-purple-400 group-hover:w-4 transition-all duration-300"
                      />
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Skills Highlight */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
                <FaCode className="text-blue-400" />
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'Python', 'JavaScript', 'MongoDB', 'Express'].map((tech, index) => (
                  <motion.span
                    key={index}
                    className="text-xs bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full px-3 py-1 text-purple-300"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "rgba(147, 51, 234, 0.3)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Fun Stats */}
              <div className="mt-8 space-y-3">
                <motion.div
                  className="flex items-center gap-2 text-sm text-gray-400"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaCoffee className="text-yellow-400" />
                  <span>Powered by ∞ cups of coffee</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2 text-sm text-gray-400"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaMagic className="text-purple-400" />
                  <span>Turning bugs into features since 2022</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Social Links Section */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center mt-16 pt-8 border-t border-gray-700/50"
          >
            <h3 className="text-xl font-semibold mb-6 text-center text-white">
              Let's Connect & Create Amazing Things Together
            </h3>
            
            <div className="flex gap-6 mb-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative w-14 h-14 border border-gray-600 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 hover:border-white/50 ${social.hoverColor} hover:shadow-lg`}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 5,
                    y: -5
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="relative z-10 text-white text-xl transition-all duration-300 group-hover:text-white" />
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                  
                  {/* Ripple effect */}
                  <motion.div
                    className="absolute inset-0 bg-white/20 rounded-full"
                    initial={{ scale: 0, opacity: 1 }}
                    whileHover={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="group relative bg-gradient-to-r from-purple-600 to-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaArrowUp />
              </motion.div>
              
              {/* Tooltip */}
              <motion.div
                className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                initial={{ y: 10 }}
                whileHover={{ y: 0 }}
              >
                Back to top
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Bottom Copyright Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-700/50 py-6"
        >
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.div
                className="flex items-center gap-2 text-gray-400 text-sm"
                whileHover={{ scale: 1.05 }}
              >
                <span>© 2025 Made with</span>
                <motion.div
                  animate={heartBeating ? { scale: [1, 1.3, 1] } : {}}
                  transition={{ duration: 0.6 }}
                  onHoverStart={() => setHeartBeating(true)}
                  onHoverEnd={() => setHeartBeating(false)}
                >
                  <FaHeart className="text-red-500" />
                </motion.div>
                <span>by Vishal Dwivedy</span>
              </motion.div>
              
              <motion.div
                className="text-gray-400 text-sm"
                whileHover={{ scale: 1.05 }}
              >
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Designed to Inspire • Built to Perform
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;