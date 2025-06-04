import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      institution: 'Chandigarh University',
      degree: 'B. Tech in Computer Science Engineering',
      period: 'Expected Graduation: 2026',
      icon: '🎓',
      gradient: 'from-purple-500/10 via-blue-500/10 to-cyan-500/10',
      status: 'In Progress',
      highlight: 'Advanced Programming & AI Focus',
    },
    {
      institution: 'S.S.J.S.N College',
      degree: 'B.A. in Psychology',
      period: 'Graduated: 2022',
      score: '74.9%',
      icon: '🧠',
      gradient: 'from-pink-500/10 via-rose-500/10 to-orange-500/10',
      status: 'Completed',
      note: 'Psychology background enhances user-focused design thinking and UI/UX empathy.',
      highlight: 'Human-Computer Interaction Expertise',
    },
  ];

  const certifications = [
    {
      title: 'Full-Stack Web Development',
      subtitle: 'Advanced React.js & Node.js',
      issuer: 'IBM',
      icon: '💻',
      color: 'text-blue-400',
    },
    {
      title: 'Data Science with R',
      subtitle: 'Applied AI & Visualization',
      issuer: 'Chandigarh University',
      icon: '📊',
      color: 'text-green-400',
    },
  ];

  // Animation variants for container and cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section
      id="education"
      className="relative min-h-screen pt-20 pb-20 bg-gray-900 text-white overflow-hidden"
      aria-label="Education and Certifications"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16 select-none"
          aria-hidden="true"
        >
          <div className="text-6xl mb-4">🎓</div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Educational Journey
          </h2>
          <div className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 w-24 mx-auto rounded-full mb-4" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Building expertise through continuous learning and academic excellence
          </p>
        </motion.div>

        {/* Education Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-8 mb-16"
        >
          {educationData.map((item, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              className={`group relative bg-gradient-to-br ${item.gradient} backdrop-blur-sm border border-white/10 rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:border-white/20`}
              tabIndex={0}
              aria-label={`${item.institution} - ${item.degree}`}
            >
              <div className="relative z-10">
                {/* Status Badge */}
                <div
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                    item.status === 'Completed'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-blue-500/20 text-blue-400'
                  }`}
                  aria-live="polite"
                >
                  {item.status}
                </div>

                {/* Institution */}
                <h3 className="text-2xl font-bold text-white mb-2">{item.institution}</h3>

                {/* Degree */}
                <p className="text-lg text-gray-300 mb-2">{item.degree}</p>

                {/* Highlight */}
                <p className="text-sm text-purple-300 mb-3 font-medium">{item.highlight}</p>

                {/* Period & Score */}
                <div className="flex flex-wrap gap-4 mb-4">
                  <span className="text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full">
                    {item.period}
                  </span>
                  {item.score && (
                    <span className="text-sm text-green-400 bg-green-500/10 px-3 py-1 rounded-full">
                      {item.score}
                    </span>
                  )}
                </div>

                {/* Note */}
                {item.note && (
                  <div className="bg-white/5 rounded-lg p-4 border-l-4 border-purple-500/50">
                    <p className="text-sm text-gray-300 italic">💡 {item.note}</p>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Certifications */}
        <section aria-labelledby="certifications-title" className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3
              id="certifications-title"
              className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-4"
            >
              Professional Certifications
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                tabIndex={0}
                className="group bg-gray-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all hover:border-white/20"
                aria-label={`${cert.title} certification issued by ${cert.issuer}`}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl" aria-hidden="true">
                    {cert.icon}
                  </div>

                  <div className="flex-1">
                    <h4 className={`font-bold text-lg mb-1 ${cert.color}`}>{cert.title}</h4>
                    <p className="text-gray-300 text-sm mb-2">{cert.subtitle}</p>
                    <p className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded-full inline-block">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Education;
