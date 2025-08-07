// Education.jsx - Vercel Inspired Theme
import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      institution: 'Chandigarh University',
      degree: 'B.Tech in Computer Science',
      period: 'Expected 2026',
      icon: '🎓',
      status: 'In Progress',
      highlight: 'Specializing in AI & Full-Stack Development',
      gradient: 'from-blue-500/10 to-purple-500/10',
      statusColor: 'blue',
    },
    {
      institution: 'S.S.J.S.N College',
      degree: 'B.A. in Psychology',
      period: 'Graduated: 2022',
      score: '74.9%',
      icon: '🧠',
      status: 'Completed',
      note: 'Psychology background enhances UX design thinking and human-computer interaction understanding.',
      highlight: 'User-Focused Design Perspective',
      gradient: 'from-emerald-500/10 to-teal-500/10',
      statusColor: 'emerald',
    },
  ];

  const certifications = [
    {
      title: 'Full-Stack Web Development',
      subtitle: 'React.js & Node.js Specialization',
      issuer: 'IBM',
      icon: '💻',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'AI & Machine Learning',
      subtitle: 'Applied AI Concepts',
      issuer: 'Chandigarh University',
      icon: '🤖',
      gradient: 'from-emerald-500 to-green-500',
    },
  ];

  const statusStyles = {
    blue: {
      bg: 'bg-blue-500/10',
      text: 'text-blue-400',
      border: 'border-blue-500/20',
    },
    emerald: {
      bg: 'bg-emerald-500/10',
      text: 'text-emerald-400',
      border: 'border-emerald-500/20',
    },
  };

  return (
    <section
      id="education"
      className="relative min-h-screen py-24 overflow-hidden"
    >
      {/* Background with Vercel-style gradients */}
      <div className="absolute inset-0 bg-background">
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background opacity-80" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23ffffff' fill-opacity='1'%3e%3ccircle cx='7' cy='7' r='1'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`,
          }}
        />
        
        {/* Subtle glow effects */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Edu
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              cation
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4" />
          <p className="text-muted max-w-2xl mx-auto text-lg">
            Combining technical expertise with psychological insights for holistic digital solutions
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-20">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="glass-card group h-full relative overflow-hidden"
            >
              {/* Subtle gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-50`} />
              
              {/* Card content */}
              <div className="relative p-6 lg:p-8 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="text-4xl lg:text-5xl opacity-80 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div className={`px-3 py-1.5 rounded-full text-sm font-medium border ${statusStyles[item.statusColor].bg} ${statusStyles[item.statusColor].text} ${statusStyles[item.statusColor].border}`}>
                    {item.status}
                  </div>
                </div>

                {/* Institution & Degree */}
                <div className="mb-4">
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2 group-hover:text-blue-400 transition-colors">
                    {item.institution}
                  </h3>
                  <p className="text-lg text-foreground/80 mb-2">{item.degree}</p>
                  <p className="text-sm font-medium text-muted bg-surface/30 inline-block px-3 py-1 rounded-full">
                    {item.highlight}
                  </p>
                </div>

                {/* Period & Score */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="text-sm text-foreground/70 bg-surface/50 border border-border px-3 py-1.5 rounded-full font-medium">
                    📅 {item.period}
                  </span>
                  {item.score && (
                    <span className="text-sm text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full font-semibold">
                      🎯 {item.score}
                    </span>
                  )}
                </div>

                {/* Note */}
                {item.note && (
                  <div className="mt-auto p-4 rounded-xl bg-surface/30 border border-border group-hover:border-border-hover transition-colors">
                    <div className="flex items-start gap-3">
                      <span className="text-lg opacity-60">💡</span>
                      <p className="text-sm text-muted leading-relaxed">
                        {item.note}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Certifications Header */}
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Certi
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                fications
              </span>
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full" />
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -3, scale: 1.02 }}
                viewport={{ once: true }}
                className="glass-card p-6 group relative overflow-hidden"
              >
                {/* Content */}
                <div className="relative flex items-start gap-4">
                  <div className="text-3xl lg:text-4xl opacity-80 group-hover:scale-110 transition-transform duration-300">
                    {cert.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className={`text-lg lg:text-xl font-bold mb-1 bg-gradient-to-r ${cert.gradient} bg-clip-text text-transparent`}>
                      {cert.title}
                    </h4>
                    <p className="text-muted text-sm lg:text-base mb-3 leading-relaxed">
                      {cert.subtitle}
                    </p>
                    <span className="inline-block text-xs font-medium text-foreground/60 bg-surface/50 border border-border px-3 py-1 rounded-full">
                      🏢 {cert.issuer}
                    </span>
                  </div>
                </div>

                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient.replace('from-', 'from-').replace('to-', 'to-')}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </motion.div>
            ))}
          </div>

          {/* Additional note */}
          <div className="mt-12 text-center">
            <div className="glass-card p-6 inline-block">
              <p className="text-muted text-sm">
                🚀 Continuously learning and expanding knowledge in emerging technologies
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;