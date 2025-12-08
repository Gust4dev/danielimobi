import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id, delay = 0 }) => {
  return (
    <section id={id} className={`px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
};