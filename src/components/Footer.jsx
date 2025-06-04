import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  FaInstagram, FaGithub, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt,
  FaHeart, FaCode, FaRocket, FaArrowUp, FaCoffee, FaMagic
} from 'react-icons/fa';

const Footer = () => {
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

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/30 text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 180] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-40 h-40 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl top-0 right-0"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Brand */}
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-2">Vishal Dwivedy</h2>
            <div className="h-1 w-2/3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4" />
            <p className="text-gray-300 mb-4">Crafting digital experiences that inspire and innovate. Passionate about turning ideas into reality through code.</p>
            <div className="space-y-2 text-gray-300 text-sm">
              <div className="flex items-center gap-2"><FaEnvelope /> Vishaldwidy@gmail.com</div>
              <div className="flex items-center gap-2"><FaPhone /> +91 7004212369</div>
              <div className="flex items-center gap-2"><FaMapMarkerAlt /> Chandigarh, India</div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2"><FaRocket className="text-purple-400" /> Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ name, href }, i) => (
                <li key={i}>
                  <a href={href} className="text-gray-300 hover:text-purple-400 transition-all">{name}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tech Stack */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2"><FaCode className="text-blue-400" /> Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Node.js', 'Python', 'JavaScript', 'MongoDB', 'Express'].map((tech, i) => (
                <span key={i} className="text-xs px-3 py-1 border rounded-full border-purple-500/30 text-purple-300 bg-purple-500/10 hover:scale-105 transition-all">{tech}</span>
              ))}
            </div>
            <div className="mt-4 text-gray-400 text-sm space-y-2">
              <div className="flex items-center gap-2"><FaCoffee className="text-yellow-400" /> Powered by ∞ cups of coffee</div>
              <div className="flex items-center gap-2"><FaMagic className="text-purple-400" /> Turning bugs into features since 2022</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Social + Scroll */}
        <motion.div variants={fadeInUp} className="mt-12 text-center">
          <h3 className="text-lg font-semibold mb-4">Let's Connect & Create Amazing Things Together</h3>
          <div className="flex justify-center gap-4 mb-6">
            {socialLinks.map(({ icon: Icon, href, color, hoverColor }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className={`group w-12 h-12 rounded-full flex items-center justify-center border border-gray-600 hover:border-white/50 ${hoverColor} transition-all relative`}
              >
                <Icon className="text-white text-lg z-10" />
                <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br ${color}`} />
              </motion.a>
            ))}
          </div>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white flex items-center justify-center hover:shadow-lg transition-all"
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </button>
        </motion.div>
      </div>

      <div className="border-t border-gray-700/50 py-4 text-sm text-gray-400 text-center">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span>© 2025 Made with</span>
            <FaHeart className="text-red-500" />
            <span>by Vishal Dwivedy</span>
          </div>
          <div className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Designed to Inspire • Built to Perform
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
