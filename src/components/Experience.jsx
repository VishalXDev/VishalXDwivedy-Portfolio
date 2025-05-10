// src/components/Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Developer Intern',
      company: 'Bitsphere Infotech Pvt Ltd',
      location: 'Ranchi',
      period: 'Apr 2024 – Sep 2024',
      description: [
        'Designed and implemented scalable full-stack applications using React.js, Next.js, and Node.js, improving performance by optimizing frontend interactions and backend response times. Worked closely with designers and QA to ensure seamless user experience across platforms.',
        'Deployed applications on AWS (EC2, S3, Lambda) and Vercel with CI/CD via GitHub Actions and AWS CodePipeline.'
      ]
    }
  ];

  const achievements = [
    'Reduced frontend load time by 30% using lazy loading and dynamic imports.',
    'Improved API performance by 40% through middleware optimization in Express.js.',
    'Shipped 5+ production-grade full-stack apps with CI/CD using GitHub Actions, AWS, and Railway—reducing deployment time by 50% and ensuring zero-downtime releases.',
    'Built and published 3+ open-source tools integrating AI (LLMs), automation scripts, and cloud deployment configs.'
  ];

  return (
    <section id="experience" className="pt-0">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-12 text-center">Experience</h2>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-12 bg-gray-900 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                  <FaBriefcase className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white">{exp.title}</h3>
                  <p className="text-primary">{exp.company}, {exp.location}</p>
                  <p className="text-light text-sm">{exp.period}</p>
                </div>
              </div>
              
              <div className="pl-16">
                {exp.description.map((desc, descIndex) => (
                  <p key={descIndex} className="text-light mb-3">
                    {desc}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}

          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-medium mb-6 text-primary">Achievements & Highlights</h3>
            <ul className="list-disc pl-5 space-y-3">
              {achievements.map((achievement, index) => (
                <li key={index} className="text-light">{achievement}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;