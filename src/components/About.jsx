import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope, FaCode, FaCloud, FaRocket } from "react-icons/fa";

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const floatingIcons = [
    { icon: FaCode, delay: 0, x: 20, y: 30 },
    { icon: FaCloud, delay: 0.5, x: 80, y: 20 },
    { icon: FaRocket, delay: 1, x: 60, y: 70 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const glowVariants = {
    initial: { boxShadow: "0 0 20px rgba(64, 224, 208, 0.3)" },
    hover: {
      boxShadow: "0 0 40px rgba(64, 224, 208, 0.6), 0 0 80px rgba(64, 224, 208, 0.3)",
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="about" className="relative min-h-screen pt-20 pb-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(64,224,208,0.1)_0%,transparent_50%)]"></div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}

        {/* Dynamic Gradient Orbs */}
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #40e0d0 0%, transparent 70%)",
            left: mousePosition.x - 200,
            top: mousePosition.y - 200,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Main Title with Spectacular Effect */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2
              className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-4 relative"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundSize: "200% 200%"
              }}
            >
              About Me
            </motion.h2>

            {/* Animated underline */}
            <motion.div
              className="h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: "200px" }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Left Column - Profile Info */}
              <motion.div variants={itemVariants} className="space-y-8">

                {/* Role & Skills Card */}
                <motion.div
                  className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-8 rounded-3xl border border-cyan-500/30"
                  variants={glowVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  {/* Floating Icons */}
                  {floatingIcons.map(({ icon: Icon, delay, x, y }, index) => (
                    <motion.div
                      key={index}
                      className="absolute text-cyan-400/30 text-2xl"
                      style={{ left: `${x}%`, top: `${y}%` }}
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, -5, 0],
                        opacity: [0.3, 0.7, 0.3]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: delay
                      }}
                    >
                      <Icon />
                    </motion.div>
                  ))}

                  <motion.h3
                    className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    Software Engineer
                  </motion.h3>

                  <div className="flex flex-wrap gap-3 mb-6">
                    {["MERN Stack", "Full-Stack", "Cloud & DevOps"].map((skill, index) => (
                      <motion.span
                        key={skill}
                        className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium"
                        whileHover={{
                          scale: 1.1,
                          boxShadow: "0 0 20px rgba(64, 224, 208, 0.5)"
                        }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  {/* Contact Links with Hover Effects */}
                  <div className="space-y-4">
                    {[
                      { icon: FaPhone, text: "7004212369", href: "tel:7004212369", color: "text-green-400" },
                      { icon: FaEnvelope, text: "Vishaldwidy@gmail.com", href: "mailto:Vishaldwidy@gmail.com", color: "text-red-400" },
                      { icon: FaLinkedin, text: "LinkedIn Profile", href: "https://www.linkedin.com/in/vishal-dwivedy", color: "text-blue-400" },
                      { icon: FaGithub, text: "GitHub Profile", href: "https://github.com/VishalXDev", color: "text-purple-400" }
                    ].map(({ icon: Icon, text, href, color }, index) => (
                      <motion.div
                        key={index}
                        className="group"
                        whileHover={{ x: 10 }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                      >
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="flex items-center gap-4 p-3 rounded-xl bg-slate-800/30 border border-transparent group-hover:border-cyan-500/50 group-hover:bg-slate-700/50 transition-all duration-300"
                        >
                          <motion.div
                            className={`${color} text-xl`}
                            whileHover={{ rotate: 360, scale: 1.2 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Icon />
                          </motion.div>
                          <span className="text-gray-300 group-hover:text-white transition-colors">
                            {text}
                          </span>
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Column - Summary */}
              <motion.div variants={itemVariants}>
                <motion.div
                  className="relative bg-gradient-to-br from-slate-800/40 via-slate-900/40 to-black/40 backdrop-blur-2xl p-10 rounded-3xl border border-gradient-to-r border-cyan-500/30"
                  variants={glowVariants}
                  initial="initial"
                  whileHover="hover"
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                >
                  {/* Animated Corner Decorations */}
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-3xl"></div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-purple-400/50 rounded-br-3xl"></div>

                  <motion.h3
                    className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6 text-center"
                    animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
                  >
                    🚀 PROFESSIONAL SUMMARY
                  </motion.h3>

                  <motion.p
                    className="text-gray-300 leading-relaxed text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.span
                      className="text-cyan-400 font-semibold"
                      whileHover={{ textShadow: "0 0 10px rgba(64, 224, 208, 0.8)" }}
                    >
                      Software Engineer (SDE-1)
                    </motion.span>{" "}
                    with hands-on experience building{" "}
                    <motion.span
                      className="text-purple-400 font-semibold"
                      whileHover={{ textShadow: "0 0 10px rgba(168, 85, 247, 0.8)" }}
                    >
                      scalable, secure, and maintainable
                    </motion.span>{" "}
                    web applications using{" "}
                    <motion.span
                      className="text-pink-400 font-semibold"
                      whileHover={{ textShadow: "0 0 10px rgba(236, 72, 153, 0.8)" }}
                    >
                      React.js, Node.js, and AWS
                    </motion.span>
                    . Adept in microservices, REST APIs, serverless (AWS Lambda), and CI/CD.
                    Proven ability to optimize performance and ship features in agile,
                    cloud-native environments using AI and automation tools.
                  </motion.p>

                  {/* Animated Progress Bars */}
                  <div className="mt-8 space-y-4">
                    {[
                      { skill: "Full-Stack Development", level: 90 },
                      { skill: "Cloud & DevOps", level: 85 },
                      { skill: "Problem Solving", level: 95 }
                    ].map(({ skill, level }, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.2 }}
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
                            transition={{ duration: 1.5, delay: 1 + index * 0.2 }}
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