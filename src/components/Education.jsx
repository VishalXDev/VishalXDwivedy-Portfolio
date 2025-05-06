// src/components/Education.jsx
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
      note: 'Psychology background enhances user-focused design thinking and UI/UX empathy.'
    }
  ];

  const certifications = [
    'Full-Stack Web Development – Advanced React.js & Node.js (IBM)',
    'Data Science with R – Applied AI & Visualization (Chandigarh University)'
  ];

  return (
    <section id="education" className="py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-12 text-center">Education</h2>

        <div className="max-w-3xl mx-auto">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              className="mb-8 bg-gray-900 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-medium text-primary">{item.institution}</h3>
              <p className="text-lg mt-1">{item.degree}</p>
              <p className="text-light mt-1">{item.period}</p>
              {item.score && <p className="text-light mt-1">{item.score}</p>}
              {item.note && (
                <p className="text-sm text-gray-400 mt-2 italic">
                  *{item.note}
                </p>
              )}
            </motion.div>
          ))}

          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-medium mb-4 text-primary">Certifications</h3>
            <ul className="list-disc pl-5 space-y-2">
              {certifications.map((cert, index) => (
                <li key={index} className="text-light">{cert}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;