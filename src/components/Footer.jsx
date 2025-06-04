import React, { useState, useMemo } from 'react';
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

  // Memoize static data to prevent unnecessary recalculations
  const { quickLinks, socialLinks } = useMemo(() => ({
    quickLinks: [
      { name: 'About', href: '#about' },
      { name: 'Skills', href: '#skills' },
      { name: 'Projects', href: '#projects' },
      { name: 'Education', href: '#education' },
      { name: 'Contact', href: '#contact' }
    ],
    socialLinks: [
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
    ]
  }), []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Animation variants for container and items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        mass: 0.5
      }
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/30 text-white overflow-hidden">
      {/* Background floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl"
        />
        <div className="group">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-xs text-purple-300/20 font-mono pointer-events-none"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: Math.random() * 200,
              }}
              animate={{
                y: [null, -20, null],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            >
              {['{ }', '< />', '=> '][Math.floor(Math.random() * 3)]}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="container mx-auto px-6 py-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="mb-4">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  Vishal Dwivedy
                </h2>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "60%" }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4"
                />
              </div>
              <p className="text-gray-300 text-base leading-relaxed mb-4 max-w-md">
                Crafting digital experiences that inspire and innovate. 
                Passionate about turning ideas into reality through code.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors cursor-pointer">
                  <FaEnvelope />
                  <span>Vishaldwidy@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors">
                  <FaPhone />
                  <span>+91 7004212369</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors">
                  <FaMapMarkerAlt />
                  <span>Chandigarh, India</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
                <FaRocket className="text-purple-400" />
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-200 flex items-center gap-2"
                    >
                      <span className="w-0 h-0.5 bg-purple-400 group-hover:w-3 transition-all duration-200" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Technologies */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
                <FaCode className="text-blue-400" />
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'Python', 'JavaScript', 'MongoDB', 'Express'].map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full px-3 py-1 text-purple-300 hover:scale-105 hover:bg-purple-500/30 transition-transform duration-150"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <FaCoffee className="text-yellow-400" />
                  <span>Powered by ∞ cups of coffee</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <FaMagic className="text-purple-400" />
                  <span>Turning bugs into features since 2022</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Social Links and Scroll to Top */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center mt-12 pt-6 border-t border-gray-700/50"
          >
            <h3 className="text-lg font-semibold mb-4 text-center text-white">
              Let's Connect & Create Amazing Things Together
            </h3>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center overflow-hidden transition-all duration-200 hover:border-white/50 ${social.hoverColor} hover:shadow-md`}
                  whileHover={{ 
                    scale: 1.1,
                    y: -3
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="relative z-10 text-white text-lg transition-all duration-200 group-hover:text-white" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-100 transition-opacity duration-200`} />
                </motion.a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="group relative bg-gradient-to-r from-purple-600 to-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:shadow-md hover:shadow-purple-500/30 transition-all duration-200"
              aria-label="Scroll to top"
            >
              <FaArrowUp />
            </button>
          </motion.div>
        </motion.div>

        {/* Bottom copyright */}
        <div className="border-t border-gray-700/50 py-4">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <span>© 2025 Made with</span>
                <FaHeart className="text-red-500" />
                <span>by Vishal Dwivedy</span>
              </div>
              <div className="text-gray-400">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Designed to Inspire • Built to Perform
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
