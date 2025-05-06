// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'React.js', 'Next.js', 'Vue.js', 'Angular', 'Node.js', 'Express.js']
    },
    {
      title: 'Databases & ORMs',
      skills: ['MongoDB', 'Firebase', 'Redis', 'Prisma', 'Drizzle ORM']
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS (EC2, S3, Lambda)', 'Docker', 'GitHub Actions', 'AWS CodePipeline', 'Railway', 'Vercel', 'Nginx', 'PM2']
    },
    {
      title: 'Architecture & APIs',
      skills: ['REST', 'GraphQL', 'WebSockets', 'Microservices', 'tRPC']
    },
    {
      title: 'Auth & Security',
      skills: ['JWT', 'OAuth 2.0', 'Clerk Auth', 'Firebase Auth', 'RBAC', 'Encryption']
    },
    {
      title: 'AI & Automation',
      skills: ['OpenAI API', 'Google Gemini AI', 'LangChain', 'Puppeteer', 'Playwright', 'TensorFlow.js']
    },
    {
      title: 'Tools & Practices',
      skills: ['Git', 'GitHub', 'GitLab', 'Postman', 'Agile', 'ESLint', 'Lazy Loading', 'Code Splitting', 'Responsive Design']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="skills" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-12 text-center">Skills</h2>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-dark p-6 rounded-lg shadow-md"
              variants={itemVariants}
            >
              <h3 className="text-xl font-medium mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-gray-800 text-light px-3 py-1 rounded text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;