// src/components/Section.jsx
import React from 'react';

// This is an optional wrapper component you can use to standardize section styling
const Section = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-3xl font-bold mb-10 text-center">
            <span className="text-primary">{title}</span>
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;