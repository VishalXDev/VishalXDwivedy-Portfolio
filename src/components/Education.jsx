import React from 'react';

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

  return (
    <section
      id="education"
      className="relative min-h-screen pt-20 pb-20 bg-gray-900 text-white"
    >
      {/* Simplified background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/10 to-blue-900/10" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-5xl mb-4">🎓</div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Educational Journey
          </h2>
          <div className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 w-20 mx-auto rounded-full mb-4" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            Building expertise through continuous learning and academic excellence
          </p>
        </div>

        {/* Education Cards */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
          {educationData.map((item, index) => (
            <div
              key={index}
              className={`relative group bg-gradient-to-br ${item.gradient} backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 h-80 flex flex-col justify-between`}
              style={{
                background: `linear-gradient(135deg, ${item.gradient.includes('purple') ? 'rgba(168, 85, 247, 0.1)' : 'rgba(236, 72, 153, 0.1)'} 0%, ${item.gradient.includes('blue') ? 'rgba(59, 130, 246, 0.1)' : 'rgba(251, 146, 60, 0.1)'} 100%)`,
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: `0 0 20px ${item.gradient.includes('purple') ? 'rgba(168, 85, 247, 0.3)' : 'rgba(236, 72, 153, 0.3)'}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 30px ${item.gradient.includes('purple') ? 'rgba(168, 85, 247, 0.5)' : 'rgba(236, 72, 153, 0.5)'}`;
                e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 0 20px ${item.gradient.includes('purple') ? 'rgba(168, 85, 247, 0.3)' : 'rgba(236, 72, 153, 0.3)'}`;
                e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
              }}
            >
              <div>
                {/* Status Badge */}
                <div
                  className={`inline-block px-4 py-2 rounded-full text-sm font-bold mb-4 ${
                    item.status === 'Completed'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-blue-500/20 text-blue-400'
                  }`}
                >
                  <strong>{item.status}</strong>
                </div>

                {/* Institution */}
                <h3 className="text-2xl font-bold text-white mb-2">
                  <strong>{item.institution}</strong>
                </h3>

                {/* Degree */}
                <p className="text-lg text-gray-300 mb-3">{item.degree}</p>

                {/* Highlight */}
                <p className="text-base text-purple-300 mb-4 font-semibold">
                  <strong>{item.highlight}</strong>
                </p>

                {/* Period & Score */}
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full">
                    {item.period}
                  </span>
                  {item.score && (
                    <span className="text-sm text-green-400 bg-green-500/10 px-3 py-1 rounded-full font-semibold">
                      {item.score}
                    </span>
                  )}
                </div>
              </div>

              {/* Note */}
              {item.note && (
                <div className="bg-white/5 rounded-lg p-4 border-l-4 border-purple-500/50 mt-auto">
                  <p className="text-sm text-gray-300 italic">💡 {item.note}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-4">
              Professional Certifications
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 transition-all duration-300"
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 0 15px rgba(59, 130, 246, 0.2)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 25px rgba(59, 130, 246, 0.4)';
                  e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(59, 130, 246, 0.2)';
                  e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;