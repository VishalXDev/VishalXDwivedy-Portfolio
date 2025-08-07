import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      institution: 'Chandigarh University',
      degree: 'B.Tech in Computer Science',
      period: 'Expected 2026',
      icon: '🎓',
      gradient: 'from-purple-500/10 via-blue-500/10 to-cyan-500/10',
      status: 'In Progress',
      highlight: 'Specializing in AI & Full-Stack Development',
    },
    {
      institution: 'S.S.J.S.N College',
      degree: 'B.A. in Psychology',
      period: 'Graduated: 2022',
      score: '74.9%',
      icon: '🧠',
      gradient: 'from-pink-500/10 via-rose-500/10 to-orange-500/10',
      status: 'Completed',
      note: 'Psychology background enhances UX design thinking and human-computer interaction understanding.',
      highlight: 'User-Focused Design Perspective',
    },
  ];

  const certifications = [
    {
      title: 'Full-Stack Web Development',
      subtitle: 'React.js & Node.js Specialization',
      issuer: 'IBM',
      icon: '💻',
      color: 'text-blue-400',
    },
    {
      title: 'AI & Machine Learning',
      subtitle: 'Applied AI Concepts',
      issuer: 'Chandigarh University',
      icon: '🤖',
      color: 'text-green-400',
    },
  ];

  return (
    <section
      id="education"
      className="relative min-h-screen pt-20 pb-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/30"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl opacity-30" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Education
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full mb-4" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            Combining technical expertise with psychological insights for holistic digital solutions
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative group bg-gradient-to-br ${item.gradient} backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-lg transition-all duration-300 h-full`}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex flex-col h-full">
                <div>
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
                    item.status === 'Completed' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {item.status}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{item.institution}</h3>
                  <p className="text-lg text-gray-300 mb-3">{item.degree}</p>
                  <p className="text-base text-purple-300 font-medium mb-4">{item.highlight}</p>

                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="text-sm text-gray-300 bg-white/5 px-3 py-1 rounded-full">
                      {item.period}
                    </span>
                    {item.score && (
                      <span className="text-sm text-green-400 bg-green-500/10 px-3 py-1 rounded-full font-semibold">
                        {item.score}
                      </span>
                    )}
                  </div>
                </div>

                {item.note && (
                  <div className="mt-auto bg-white/5 rounded-lg p-4 border-l-4 border-purple-500/50">
                    <p className="text-sm text-gray-300 italic">💡 {item.note}</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-4">
              Certifications
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3, scale: 1.02 }}
                className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">
                    {cert.icon}
                  </div>
                  <div>
                    <h4 className={`text-xl font-bold mb-1 ${cert.color}`}>{cert.title}</h4>
                    <p className="text-gray-300 text-sm mb-2">{cert.subtitle}</p>
                    <span className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded-full">
                      {cert.issuer}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;