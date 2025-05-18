// src/components/Section.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, title, children }) => {
  return (
    <section id={id} className="pt-8 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title && <h2 className="text-4xl font-bold text-center text-white mb-8">{title}</h2>}
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;