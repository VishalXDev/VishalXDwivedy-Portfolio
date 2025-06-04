import React from "react";
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope, FaCode, FaCloud, FaRocket } from "react-icons/fa";

const contactLinks = [
  { icon: FaPhone, text: "7004212369", href: "tel:7004212369", color: "text-green-400" },
  { icon: FaEnvelope, text: "Vishaldwidy@gmail.com", href: "mailto:Vishaldwidy@gmail.com", color: "text-red-400" },
  { icon: FaLinkedin, text: "LinkedIn Profile", href: "https://www.linkedin.com/in/vishal-dwivedy", color: "text-blue-400" },
  { icon: FaGithub, text: "GitHub Profile", href: "https://github.com/VishalXDev", color: "text-purple-400" }
];

const skillsData = [
  { skill: "Frontend Development", level: 92 },
  { skill: "Backend Development", level: 88 },
  { skill: "Database & Cloud", level: 85 }
];

const About = () => {
  return (
    <section id="about" className="relative min-h-screen pt-20 pb-20">
      {/* Simple background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(64,224,208,0.05)_0%,transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="opacity-100">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-4">
              About Me
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-stretch">
              
              {/* Left Column - Contact Info */}
              <div className="relative h-full min-h-[500px] flex flex-col">
                <div 
                  className="flex-1 bg-slate-800/40 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
                >
                  {/* Floating icons - static positioning */}
                  <div className="relative mb-6">
                    <FaCode className="absolute top-0 right-12 text-cyan-400/20 text-xl" />
                    <FaCloud className="absolute top-4 right-4 text-cyan-400/20 text-lg" />
                    <FaRocket className="absolute top-8 right-20 text-cyan-400/20 text-sm" />
                    
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-3">
                      Software Engineer
                    </h3>
                  </div>
                  
                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["MERN Stack", "Full-Stack", "Cloud & DevOps"].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-300 text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  {/* Contact links */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {contactLinks.map(({ icon: Icon, text, href, color }, index) => (
                      <a
                        key={index}
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex flex-col items-center gap-2 p-4 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 border border-transparent hover:border-purple-500/30 transition-all duration-200 group text-center"
                      >
                        <Icon className={`${color} text-2xl group-hover:scale-110 transition-transform duration-200`} />
                        <span className="text-gray-300 group-hover:text-white transition-colors text-sm">
                          {text}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Summary & Skills */}
              <div className="relative h-full min-h-[500px] flex flex-col">
                <div className="flex-1 bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 relative">
                  {/* Corner decorations - simplified */}
                  <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-cyan-400/30 rounded-tl-2xl"></div>
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-purple-400/30 rounded-br-2xl"></div>
                  
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4 text-center">
                    🚀 SUMMARY
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">
                    <span className="text-cyan-400 font-semibold">
                      Full-Stack Software Engineer (SDE 1)
                    </span>{" "}
                    with hands-on experience in building{" "}
                    <span className="text-purple-400 font-semibold">
                      scalable, production-ready
                    </span>{" "}
                    web applications using{" "}
                    <span className="text-pink-400 font-semibold">
                      React.js, Node.js, and modern cloud tools
                    </span>
                    . Passionate about performance optimization, real-time collaboration, and delivering user-centric solutions in agile teams. Strong communicator with proven team collaboration and problem-solving ability.
                  </p>
                  
                  {/* Skills bars */}
                  <div className="space-y-4">
                    {skillsData.map(({ skill, level }) => (
                      <div key={skill}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-400">{skill}</span>
                          <span className="text-cyan-400">{level}%</span>
                        </div>
                        <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-cyan-400 to-purple-400"
                            style={{ width: `${level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;