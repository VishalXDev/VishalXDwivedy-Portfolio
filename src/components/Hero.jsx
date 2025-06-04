import React, { useEffect, useState, useRef } from 'react';
import { FaInstagram, FaGithub, FaLinkedinIn, FaVolumeUp, FaVolumeMute, FaRocket, FaCode, FaBolt } from 'react-icons/fa';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const Hero = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef(null);

  const introduction = "Hi, I'm Vishal Dwivedy, a Software Engineer specializing in cutting-edge web development and innovative solutions.";

  // Mouse tracking for interactive effects
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]));
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]));

  const handleMouseMove = (event) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((event.clientX - centerX) / rect.width);
    y.set((event.clientY - centerY) / rect.height);

    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    });
  };

  const toggleSpeech = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const speech = new SpeechSynthesisUtterance(introduction);
      speech.lang = 'en-US';
      speech.rate = 0.9;
      speech.pitch = 1.1;
      speech.onend = () => setIsSpeaking(false);
      window.speechSynthesis.speak(speech);
      setIsSpeaking(true);
    }
  };

  useEffect(() => {
    return () => {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isSpeaking]);

  const codeSnippets = [
    "const passion = 'coding' + 'innovation';",
    "function createMagic() { return dreams; }",
    "let vision = await buildFuture();",
    "const skills = [...frontend, ...backend];",
    "export default Excellence;",
    "import { Creativity } from 'imagination';",
    "const solution = problem.solve();",
    "async function innovate() { return breakthrough; }",
    "const portfolio = new MasterPiece();",
    "let impact = code.transform(world);"
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/30 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
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
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
        />

        {/* Interactive Mouse Follower */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-radial from-purple-500/10 to-transparent rounded-full blur-2xl pointer-events-none"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
          animate={{
            scale: isHovered ? 1.5 : 1,
            opacity: isHovered ? 0.6 : 0.3,
          }}
        />

        {/* Floating Code Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-xs text-purple-300/30 font-mono"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -50, null],
              x: [null, Math.random() * 100 - 50, null],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            {codeSnippets[Math.floor(Math.random() * codeSnippets.length)]}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          {/* Left Content */}
          <motion.div
            variants={itemVariants}
            className="lg:w-1/2 space-y-8"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            {/* Animated Greeting */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full px-4 py-2 text-sm"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <FaRocket className="text-purple-400" />
                </motion.div>
                <span className="text-purple-300">Available for exciting projects</span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                <span className="text-white">Hi, I'm </span>
                <motion.span
                  className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Vishal
                </motion.span>
                <br />
                <motion.span
                  className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Dwivedy
                </motion.span>
              </motion.h1>

              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="text-yellow-400"
                >
                  <FaBolt />
                </motion.div>
                <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Software Engineer & Innovation Catalyst
                </h2>
              </motion.div>
            </div>

            {/* Enhanced Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 max-w-2xl leading-relaxed"
            >
              Crafting digital experiences that push boundaries and redefine possibilities.
              With a passion for cutting-edge technologies and a drive for innovation,
              I transform complex challenges into elegant, scalable solutions that make an impact.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                onClick={() => document.dispatchEvent(new CustomEvent('navigate', { detail: 'contact' }))}
                className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <FaRocket />
                  Let's Collaborate
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
                  initial={{ x: "100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.a
                href="https://drive.google.com/file/d/11ExXm9qSkJ7yhzkW6H1oU3PAsXqBh9DU/view"
                className="group relative overflow-hidden border-2 border-purple-500/50 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/30"
                target="_blank"
                rel="noopener noreferrer"
                download="Vishal_Dwivedy_Resume.pdf"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <FaCode />
                  Download CV
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              <motion.button
                onClick={toggleSpeech}
                className="group relative w-14 h-14 border-2 border-purple-500/50 rounded-full flex items-center justify-center text-purple-400 hover:border-purple-400 hover:text-purple-300 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                animate={isSpeaking ? {
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(147, 51, 234, 0.7)",
                    "0 0 0 10px rgba(147, 51, 234, 0)",
                  ]
                } : {}}
                transition={isSpeaking ? { duration: 1, repeat: Infinity } : {}}
              >
                {isSpeaking ? <FaVolumeMute /> : <FaVolumeUp />}
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4"
            >
              {[
                { icon: FaInstagram, href: "https://www.instagram.com/", color: "from-pink-500 to-purple-500" },
                { icon: FaGithub, href: "https://github.com/VishalXDev", color: "from-gray-500 to-gray-700" },
                { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/vishal-dwivedy", color: "from-blue-500 to-blue-600" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 hover:border-white/50"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="relative z-10 text-white group-hover:text-white transition-colors" />
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Interactive 3D Card */}
          <motion.div
            variants={itemVariants}
            className="lg:w-1/2 flex justify-center"
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          >
            <div className="relative w-full max-w-lg">
              <motion.div
                className="relative aspect-square bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Animated Background Grid */}
                <div className="absolute inset-0 opacity-20">
                  <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                    {[...Array(64)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="border border-purple-500/20"
                        animate={{
                          backgroundColor: [
                            "rgba(147, 51, 234, 0)",
                            "rgba(147, 51, 234, 0.1)",
                            "rgba(147, 51, 234, 0)"
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.1
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Floating Code Animation */}
                <div className="absolute inset-0 p-8 overflow-hidden">
                  {codeSnippets.slice(0, 8).map((code, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-xs font-mono text-purple-300/40"
                      initial={{
                        x: Math.random() * 300,
                        y: Math.random() * 300,
                        opacity: 0
                      }}
                      animate={{
                        y: [null, -50, null],
                        opacity: [0, 0.6, 0],
                      }}
                      transition={{
                        duration: 4 + Math.random() * 2,
                        repeat: Infinity,
                        delay: i * 0.5
                      }}
                    >
                      {code}
                    </motion.div>
                  ))}
                </div>

                {/* Central Profile */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
                    className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-6 shadow-xl overflow-hidden"
                  >
                    <img
                      src="/profile.jpg"
                      alt="Vishal Dwivedy"
                      className="w-32 h-32 object-cover rounded-full"
                    />
                  </motion.div>





                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2 }}
                    className="text-2xl font-bold text-white mb-2"
                  >
                    VISHAL DWIVEDY
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.2 }}
                    className="text-purple-300 font-medium"
                  >
                    Software Engineer
                  </motion.p>

                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "60%" }}
                    transition={{ delay: 2.5, duration: 1 }}
                    className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-4"
                  />
                </div>

                {/* Corner Decorations */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-purple-500/50 rounded-tr-lg"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-blue-500/50 rounded-bl-lg"></div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;