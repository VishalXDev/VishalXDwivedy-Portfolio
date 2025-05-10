import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      institution: 'Chandigarh University',
      degree: 'B. Tech in Computer Science Engineering',
      period: 'Expected Graduation: 2026',
    },
    {
      institution: 'S.S.J.S.N College',
      degree: 'B.A. in Psychology',
      period: 'Graduated: 2022',
      score: 'Score: 74.9%',
      note: 'Psychology background enhances user-focused design thinking and UI/UX empathy.',
    },
  ];

  const certifications = [
    'Full-Stack Web Development – Advanced React.js & Node.js (IBM)',
    'Data Science with R – Applied AI & Visualization (Chandigarh University)',
  ];

  return (
    <section id="education" className="pt-6 pb-10 bg-dark text-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-8 text-center">Education</h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-4 rounded-md shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-medium text-primary">{item.institution}</h3>
              <p className="text-sm mt-1">{item.degree}</p>
              <p className="text-sm text-light">{item.period}</p>
              {item.score && <p className="text-sm text-light">{item.score}</p>}
              {item.note && (
                <p className="text-xs text-gray-400 mt-1 italic">* {item.note}</p>
              )}
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-medium mb-3 text-primary">Certifications</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-light">
              {certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
