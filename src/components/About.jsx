import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope, FaCode, FaCloud, FaRocket } from "react-icons/fa";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);

  const floatingIcons = useMemo(() => [
    { icon: FaCode, delay: 0, x: 20, y: 30 },
    { icon: FaCloud, delay: 0.5, x: 80, y: 20 },
    { icon: FaRocket, delay: 1, x: 60, y: 70 },
  ], []);

  const contactLinks = useMemo(() => [
    { icon: FaPhone, text: "7004212369", href: "tel:7004212369", color: "text-green-400" },
    { icon: FaEnvelope, text: "Vishaldwidy@gmail.com", href: "mailto:Vishaldwidy@gmail.com", color: "text-red-400" },
    { icon: FaLinkedin, text: "LinkedIn Profile", href: "https://www.linkedin.com/in/vishal-dwivedy", color: "text-blue-400" },
    { icon: FaGithub, text: "GitHub Profile", href: "https://github.com/VishalXDev", color: "text-purple-400" }
  ], []);

  const skillsData = useMemo(() => [
    { skill: "Full-Stack Development", level: 90 },
    { skill: "Cloud & DevOps", level: 85 },
    { skill: "Problem Solving", level: 95 }
  ], []);

  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }), []);

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15
      }
    }
  }), []);

  const glowVariants = useMemo(() => ({
    initial: { boxShadow: "0 0 20px rgba(64, 224, 208, 0.2)" },
    hover: {
      boxShadow: "0 0 30px rgba(64, 224, 208, 0.4)",
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  }), []);

  return (
    <section id="about" className="relative min-h-screen pt-20 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(64,224,208,0.1)_0%,transparent_50%)]"></div>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              opacity: 0
            }}
            animate={{ y: [0, -15, 0], opacity: [0, 0.8, 0], scale: [0, 1.2, 0] }}
            transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 3, ease: "easeInOut" }}
          />
        ))}
        <div
          className="absolute w-64 h-64 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #40e0d0 0%, transparent 70%)", left: "20%", top: "30%" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-4">
              About Me
            </motion.h2>
            <motion.div
              className="h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: "200px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={itemVariants} className="space-y-8">
                <motion.div
                  className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-8 rounded-3xl border border-cyan-500/30"
                  variants={glowVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  {floatingIcons.map(({ icon: Icon, delay, x, y }, index) => (
                    <motion.div
                      key={index}
                      className="absolute text-cyan-400/30 text-2xl"
                      style={{ left: `${x}%`, top: `${y}%` }}
                      animate={{ y: [0, -8, 0], opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 4, repeat: Infinity, delay: delay, ease: "easeInOut" }}
                    >
                      <Icon />
                    </motion.div>
                  ))}
                  <motion.h3
                    className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                  >
                    Software Engineer
                  </motion.h3>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {["MERN Stack", "Full-Stack", "Cloud & DevOps"].map((skill, index) => (
                      <motion.span
                        key={skill}
                        className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(64, 224, 208, 0.4)" }}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.3 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                  <div className="space-y-4">
                    {contactLinks.map(({ icon: Icon, text, href, color }, index) => (
                      <motion.div
                        key={index}
                        className="group"
                        whileHover={{ x: 8 }}
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.3 }}
                      >
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="flex items-center gap-4 p-3 rounded-xl bg-slate-800/30 border border-transparent group-hover:border-cyan-500/50 group-hover:bg-slate-700/50 transition-all duration-200"
                        >
                          <motion.div
                            className={`${color} text-xl`}
                            whileHover={{ rotate: 15, scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Icon />
                          </motion.div>
                          <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                            {text}
                          </span>
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.div
                  className="relative bg-gradient-to-br from-slate-800/40 via-slate-900/40 to-black/40 backdrop-blur-2xl p-10 rounded-3xl border border-cyan-500/30"
                  variants={glowVariants}
                  initial="initial"
                  whileHover="hover"
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                >
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-3xl"></div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-purple-400/50 rounded-br-3xl"></div>
                  <motion.h3
                    className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6 text-center"
                    animate={isHovered ? { scale: 1.02 } : { scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    🚀 PROFESSIONAL SUMMARY
                  </motion.h3>
                  <motion.p
                    className="text-gray-300 leading-relaxed text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <span className="text-cyan-400 font-semibold">
                      Software Engineer (SDE-1)
                    </span>{" "}
                    with hands-on experience building{" "}
                    <span className="text-purple-400 font-semibold">
                      scalable, secure, and maintainable
                    </span>{" "}
                    web applications using{" "}
                    <span className="text-pink-400 font-semibold">
                      React.js, Node.js, and AWS
                    </span>
                    . Adept in microservices, REST APIs, serverless (AWS Lambda), and CI/CD.
                    Proven ability to optimize performance and ship features in agile,
                    cloud-native environments using AI and automation tools.
                  </motion.p>
                  <div className="mt-8 space-y-4">
                    {skillsData.map(({ skill, level }, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.15 }}
                      >
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-400">{skill}</span>
                          <span className="text-cyan-400">{level}%</span>
                        </div>
                        <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-cyan-400 to-purple-400"
                            initial={{ width: 0 }}
                            animate={{ width: `${level}%` }}
                            transition={{ duration: 1, delay: 0.8 + index * 0.15 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;