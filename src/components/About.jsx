// About.jsx - Vercel Inspired Theme
import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaEnvelope,
  FaCode,
  FaCloud,
  FaRocket,
  FaExternalLinkAlt, // ✅ Replacement for FaArrowUpRight
} from "react-icons/fa";

const contactLinks = [
  {
    icon: FaPhone,
    text: "7004212369",
    href: "tel:7004212369",
    label: "Phone",
    gradient: "from-emerald-500 to-green-500",
  },
  {
    icon: FaEnvelope,
    text: "Vishaldwidy@gmail.com",
    href: "mailto:Vishaldwidy@gmail.com",
    label: "Email",
    gradient: "from-rose-500 to-pink-500",
  },
  {
    icon: FaLinkedin,
    text: "LinkedIn Profile",
    href: "https://www.linkedin.com/in/vishal-dwivedy",
    label: "LinkedIn",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: FaGithub,
    text: "GitHub Profile",
    href: "https://github.com/VishalXDev",
    label: "GitHub",
    gradient: "from-purple-500 to-violet-500",
  },
];

const skillsData = [
  { skill: "Frontend (React, Next.js, TypeScript)", level: 95, color: "from-blue-500 to-cyan-500" },
  { skill: "Backend (Node.js, Express, REST APIs)", level: 90, color: "from-green-500 to-emerald-500" },
  { skill: "Cloud & DevOps (Vercel, CI/CD, Cloudinary)", level: 85, color: "from-purple-500 to-violet-500" },
  { skill: "Databases (MongoDB, Firebase)", level: 80, color: "from-orange-500 to-amber-500" },
  { skill: "Auth & Testing (JWT, OAuth2.0)", level: 75, color: "from-pink-500 to-rose-500" },
];

const About = () => {
  return (
    <section id="about" className="relative min-h-screen py-24 overflow-hidden bg-background text-text font-poppins">
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background opacity-80" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23ffffff' fill-opacity='1'%3e%3ccircle cx='7' cy='7' r='1'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`,
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start max-w-7xl mx-auto">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Role */}
            <div className="glass-card p-6 lg:p-8 group hover:glass-card-hover transition-all duration-300">
              <div className="relative">
                <div className="absolute -top-2 -right-2 flex space-x-2 opacity-30 group-hover:opacity-50 transition-opacity">
                  <FaCode className="text-blue-400 text-lg animate-float" />
                  <FaCloud className="text-purple-400 text-base animate-float-delayed" />
                  <FaRocket className="text-cyan-400 text-sm animate-float-slow" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-3">Software Engineer</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Full-Stack", "AI-Integrated", "Cloud Deployed"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm font-medium bg-surface/50 border border-border rounded-full text-foreground/80 hover:bg-surface transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-muted leading-relaxed">
                  Full-Stack Software Engineer skilled in building scalable, production-ready web applications using modern technologies and best practices.
                </p>
              </div>
            </div>

            {/* Contact Links */}
            <div className="glass-card p-6">
              <h4 className="text-lg font-semibold mb-4">Let's Connect</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {contactLinks.map(({ icon: Icon, text, href, label, gradient }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group relative p-4 rounded-xl bg-surface/30 border border-border hover:border-border-hover hover:bg-surface/50 transition-all duration-200 overflow-hidden"
                    aria-label={label}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
                    <div className="relative flex items-center gap-3">
                      <Icon className={`text-lg bg-gradient-to-r ${gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform`} />
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-medium truncate">{text}</div>
                        <div className="text-xs text-muted">{label}</div>
                      </div>
                      <FaExternalLinkAlt className="text-xs text-muted group-hover:text-foreground/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Summary */}
            <div className="glass-card p-6 lg:p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-500/20 rounded-tl-xl" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-500/20 rounded-br-xl" />
              <div className="relative">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-2xl">🚀</span>
                  Professional Summary
                </h3>
                <p className="text-muted leading-relaxed">
                  Full-Stack Software Engineer with expertise in building scalable, production-ready web applications using React.js, Node.js, Express.js, and MongoDB.
                  Experienced in secure authentication systems, AI integrations, and real-time user experiences.
                  Proven track record of optimizing API performance by 40% and delivering cloud-deployed applications.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="glass-card p-6 lg:p-8">
              <h3 className="text-xl font-bold mb-6">Technical Skills</h3>
              <div className="space-y-5">
                {skillsData.map(({ skill, level, color }, index) => (
                  <div key={skill} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill}</span>
                      <span className={`text-sm font-semibold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
                        {level}%
                      </span>
                    </div>
                    <div className="relative h-2 bg-surface rounded-full overflow-hidden">
                      <div className="absolute inset-0 bg-border/50" />
                      <div
                        className={`absolute inset-y-0 left-0 bg-gradient-to-r ${color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${level}%`, animationDelay: `${index * 200}ms` }}
                      />
                      <div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:animate-shine"
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
    </section>
  );
};

export default About;
