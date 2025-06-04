import React, { useState, useRef, useCallback, useMemo } from 'react';
import {
  FaInstagram, FaGithub, FaLinkedinIn,
  FaVolumeUp, FaVolumeMute, FaRocket, FaCode, FaBolt
} from 'react-icons/fa';
import { LazyMotion, domAnimation, m } from 'framer-motion';

const Hero = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const heroRef = useRef(null);

  const introduction = "Hi, I'm Vishal Dwivedy, a Software Engineer specializing in cutting-edge web development.";

  const toggleSpeech = useCallback(() => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const speech = new SpeechSynthesisUtterance(introduction);
      speech.onend = () => setIsSpeaking(false);
      window.speechSynthesis.speak(speech);
      setIsSpeaking(true);
    }
  }, [isSpeaking, introduction]);

  const socialLinks = useMemo(() => [
    { icon: FaInstagram, href: "https://www.instagram.com/", color: "hover:text-pink-400" },
    { icon: FaGithub, href: "https://github.com/VishalXDev", color: "hover:text-gray-300" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/vishal-dwivedy", color: "hover:text-blue-400" }
  ], []);

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="home"
        ref={heroRef}
        className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/30 overflow-hidden"
      >
        {/* Simplified Background Blobs - removed motion */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl opacity-30"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl opacity-30"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Content */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              className="lg:w-1/2 space-y-6"
            >
              {/* Badge - simplified animation */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full px-4 py-2 text-sm">
                <FaRocket className="text-purple-400" />
                <span className="text-purple-300">Available for exciting projects</span>
              </div>

              {/* Heading - combined animations */}
              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-white">Hi, I'm </span>
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                    Vishal
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Dwivedy
                  </span>
                </h1>

                <div className="flex items-center gap-2">
                  <FaBolt className="text-yellow-400" />
                  <h2 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    Software Engineer & Innovation Catalyst
                  </h2>
                </div>
              </div>

              {/* Description - removed motion */}
              <p className="text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed">
                Crafting digital experiences that push boundaries and redefine possibilities. With a passion for cutting-edge technologies, I transform complex challenges into elegant, scalable solutions that make an impact.
              </p>

              {/* Buttons - simplified animations */}
              <div className="flex flex-wrap gap-3">
                <m.button
                  onClick={() => document.dispatchEvent(new CustomEvent('navigate', { detail: 'contact' }))}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 hover:shadow-md hover:shadow-purple-500/30 hover:scale-[1.03]"
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-2">
                    <FaRocket />
                    Let's Collaborate
                  </span>
                </m.button>

                <m.a
                  href="https://drive.google.com/file/d/11ExXm9qSkJ7yhzkW6H1oU3PAsXqBh9DU/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-purple-500/50 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 hover:border-purple-400 hover:shadow-md hover:shadow-purple-500/20 hover:scale-[1.03]"
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-2">
                    <FaCode />
                    Download CV
                  </span>
                </m.a>

                <m.button
                  onClick={toggleSpeech}
                  className={`w-12 h-12 border border-purple-500/50 rounded-full flex items-center justify-center text-purple-400 hover:border-purple-400 hover:text-purple-300 transition-all duration-200 hover:scale-[1.03] ${isSpeaking ? 'animate-pulse shadow-md shadow-purple-500/30' : ''}`}
                  whileTap={{ scale: 0.9 }}
                >
                  {isSpeaking ? <FaVolumeMute /> : <FaVolumeUp />}
                </m.button>
              </div>

              {/* Social Links - simplified */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <m.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:border-white/50 hover:scale-105 ${social.color}`}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="text-lg" />
                  </m.a>
                ))}
              </div>
            </m.div>

            {/* Right Card - optimized animations */}
            <div className="lg:w-1/2 flex justify-center">
              <m.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative w-full max-w-md"
              >
                <div className="relative aspect-square bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden shadow-xl">
                  {/* Simplified Grid Background */}
                  <div className="absolute inset-0 opacity-5 grid grid-cols-8 grid-rows-8">
                    {[...Array(8)].map((_, i) => (
                      <React.Fragment key={i}>
                        <div className="border-t border-purple-500/10" />
                        <div className="border-l border-purple-500/10" />
                      </React.Fragment>
                    ))}
                  </div>

                  {/* Profile - simplified animations */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 p-4">
                    <div className="w-28 h-28 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-4 shadow-lg">
                      <div className="w-[6.5rem] h-[6.5rem] bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                       <img
                      src="/profile.jpg"
                      alt="Vishal Dwivedy"
                      className="w-32 h-32 object-cover rounded-3xl"
                    />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">
                      VISHAL DWIVEDY
                    </h3>

                    <p className="text-purple-300 font-medium text-sm">
                      Software Engineer
                    </p>

                    <div className="h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-3 w-3/5" />
                  </div>

                  {/* Corners */}
                  <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-purple-500/50 rounded-tr-lg"></div>
                  <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-blue-500/50 rounded-bl-lg"></div>
                </div>
              </m.div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"></div>
      </section>
    </LazyMotion>
  );
};

export default Hero;