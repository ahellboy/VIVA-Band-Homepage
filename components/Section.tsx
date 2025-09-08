
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  bgClassName?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '', bgClassName = 'bg-gray-900' }) => {
  return (
    <section id={id} className={`py-20 md:py-28 ${bgClassName}`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
        <h2 className="text-4xl md:text-5xl font-anton text-center uppercase tracking-wider mb-12 md:mb-16 text-white" style={{ textShadow: '0 0 10px rgba(0,0,255,0.3)' }}>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
