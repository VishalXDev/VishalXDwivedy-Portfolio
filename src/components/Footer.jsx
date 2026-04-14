import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  FaInstagram, FaGithub, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt,
  FaHeart, FaCode, FaRocket, FaArrowUp, FaCoffee, FaMagic, FaExternalLinkAlt,
  FaStar, FaFire, FaLightbulb
} from 'react-icons/fa';

const Footer = () => {
  const { quickLinks, socialLinks, techStack } = useMemo(() => ({
    quickLinks: [
      { name: 'About', href: '#about' },
      { name: 'Skills', href: '#skills' },
      { name: 'Projects', href: '#projects' },
      { name: 'Education', href: '#education' },
      { name: 'Resume', href: 'https://drive.google.com/file/d/11ExXm9qSkJ7yhzkW6H1oU3PAsXqBh9DU/view', external: true },
      { name: 'Contact', href: '#contact' }
    ],
    socialLinks: [
      {
        icon: FaInstagram,
        href: "https://www.instagram.com/",
        label: "Instagram",
        gradient: "from-pink-500/20 to-purple-500/20"
      },
      {
        icon: FaGithub,
        href: "https://github.com/VishalXDev",
        label: "GitHub",
        gradient: "from-gray-400/20 to-gray-600/20"
      },
      {
        icon: FaLinkedinIn,
        href: "https://www.linkedin.com/in/vishal-dwivedy",
        label: "LinkedIn",
        gradient: "from-blue-500/20 to-blue-600/20"
      }
    ],
    techStack: [
      { name: 'React', color: 'from-blue-500/10 to-blue-600/10', icon: '⚛️' },
      { name: 'Node.js', color: 'from-green-500/10 to-emerald-600/10', icon: '🚀' },
      { name: 'Python', color: 'from-yellow-500/10 to-orange-500/10', icon: '🐍' },
      { name: 'JavaScript', color: 'from-yellow-400/10 to-yellow-500/10', icon: '⚡' },
      { name: 'MongoDB', color: 'from-green-500/10 to-green-600/10', icon: '🍃' },
      { name: 'Express', color: 'from-gray-500/10 to-gray-600/10', icon: '🔧' }
    ]
  }), []);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <footer className="relative overflow-hidden bg-background">
      {/* Background matching Hero theme */}
      <div className="absolute inset-0">
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background opacity-80" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23ffffff' fill-opacity='1'%3e%3ccircle cx='7' cy='7' r='1'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`,
          }}
        />

        {/* Subtle glow effects */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <motion.div 
                  className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaCode className="text-white text-xl" />
                </motion.div>
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                    Vishal Dwivedy
                  </h2>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full shadow-sm" />
                    <span className="text-sm text-muted font-medium">Full-Stack Developer</span>
                  </div>
                </div>
              </div>
              <div className="h-0.5 w-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            </div>
            
            <p className="text-muted text-base leading-relaxed max-w-md">
              Crafting exceptional digital experiences through innovative code and thoughtful design. 
              Passionate about building solutions that make a difference in the digital world.
            </p>
            
            <div className="space-y-4">
              {[
                { icon: FaEnvelope, text: 'Vishaldwidy@gmail.com', href: 'mailto:Vishaldwidy@gmail.com' },
                { icon: FaPhone, text: '+91 7004212369', href: 'tel:+917004212369' },
                { icon: FaMapMarkerAlt, text: 'Chandigarh, India', href: null }
              ].map(({ icon: Icon, text, href }, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-4 text-muted group cursor-pointer"
                  whileHover={{ x: 10 }}
                >
                  <div className="glass-card w-10 h-10 rounded-xl flex items-center justify-center">
                    <Icon className="text-foreground/60 text-sm" />
                  </div>
                  {href ? (
                    <a href={href} className="hover:text-foreground transition-colors font-medium">{text}</a>
                  ) : (
                    <span className="group-hover:text-foreground transition-colors font-medium">{text}</span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="glass-card w-10 h-10 rounded-xl flex items-center justify-center">
                <FaRocket className="text-foreground/60 text-sm" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Quick Links</h3>
            </div>
            
            <ul className="space-y-3">
              {quickLinks.map(({ name, href, external }, index) => (
                <motion.li key={index} whileHover={{ x: 10 }}>
                  <a
                    href={href}
                    target={external ? "_blank" : "_self"}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-3 text-muted hover:text-foreground transition-all duration-300 py-2 px-3 rounded-lg hover:bg-surface/50"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-150 transition-all"></div>
                    <span className="font-medium">{name}</span>
                    {external && (
                      <FaExternalLinkAlt className="text-xs opacity-0 group-hover:opacity-100 transition-all ml-auto" />
                    )}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Tech Stack */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="glass-card w-10 h-10 rounded-xl flex items-center justify-center">
                <FaCode className="text-foreground/60 text-sm" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Technologies</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {techStack.map(({ name, color, icon }, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-card p-3 rounded-xl hover:bg-surface/80 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-foreground">{name}</span>
                    <span className="text-lg opacity-60 group-hover:opacity-100 transition-opacity">{icon}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="space-y-3 pt-4">
              <motion.div 
                className="glass-badge px-3 py-2 text-sm text-foreground/80 rounded-lg border border-border/50"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center gap-2">
                  <FaCoffee className="text-amber-400" />
                  <span className="font-medium">Powered by endless coffee</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="glass-badge px-3 py-2 text-sm text-foreground/80 rounded-lg border border-border/50"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="font-medium">Always learning & building</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Social Links & Scroll to Top */}
        <motion.div
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-border/50"
        >
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Let's Connect & Create Together
              </h3>
              <p className="text-muted max-w-md mx-auto text-lg">
                Always open to discussing new opportunities and collaborations
              </p>
            </div>
            
            <div className="flex justify-center items-center gap-6">
              {socialLinks.map(({ icon: Icon, href, label, gradient }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-card w-16 h-16 rounded-2xl flex items-center justify-center group transition-all duration-300 hover:bg-surface/80"
                >
                  <Icon className="text-foreground/60 text-2xl group-hover:text-foreground transition-colors" />
                </motion.a>
              ))}
              
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="ml-6 btn-primary w-16 h-16 rounded-2xl flex items-center justify-center group"
                aria-label="Scroll to top"
              >
                <FaArrowUp className="text-xl" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Copyright */}
      <div className="border-t border-border/50 bg-surface/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-muted">
              <span>© {new Date().getFullYear()} Made with</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaHeart className="text-red-400 text-lg" />
              </motion.div>
              <span>by <strong className="text-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text">Vishal Dwivedy</strong></span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-muted font-medium">
                Designed to Inspire • Built to Perform
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent pointer-events-none" />
    </footer>
  );
};

export default Footer;