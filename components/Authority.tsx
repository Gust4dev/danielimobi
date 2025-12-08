import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: "VGV Negociado", value: "+R$ 80 Mi" },
  { label: "Especialidade", value: "Lançamentos de Luxo" },
  { label: "Jurídico", value: "100% Seguro" },
];

export const Authority: React.FC = () => {
  return (
    <div className="bg-grey-dark py-16 text-white relative overflow-hidden">
        {/* Subtle texture overlay could go here */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
                {stats.map((stat, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2, duration: 0.6 }}
                      className="flex flex-col items-center justify-center p-4"
                    >
                        <span className="text-3xl md:text-4xl font-serif text-accent mb-2">{stat.value}</span>
                        <span className="text-sm uppercase tracking-widest text-gray-400 font-sans">{stat.label}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    </div>
  );
};