import React from 'react';
import { Section } from './ui/Section';
import { SectionGradient } from './ui/SectionGradient';
import { PROPERTIES } from '../constants';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const ListingsGrid: React.FC = () => {
  return (
    <div className="bg-white relative">
      <SectionGradient />
      <Section id="venda" className="py-10">
        <div className="text-center mb-12 space-y-6">
          <h2 className="font-serif text-4xl md:text-5xl text-primary">Seu Portfólio</h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
          <p className="text-black max-w-xl mx-auto pt-2">
             Explore oportunidades selecionadas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PROPERTIES.map((property, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={property.id}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border border-gray-100 flex flex-col"
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                
                {property.tag && (
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-primary text-[10px] font-bold px-3 py-1 uppercase tracking-widest shadow-sm">
                    {property.tag}
                  </span>
                )}
                
                <div className="absolute bottom-6 left-6 text-white space-y-2 pr-4">
                  <p className="text-xs font-sans tracking-widest uppercase text-accent">{property.type === 'invest' ? 'Categoria A' : 'Categoria B'}</p>
                  <p className="text-2xl font-serif leading-none">{property.title}</p>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1 bg-gray-50/50">
                <div className="space-y-4 mb-8 flex-1">
                  <p className="text-2xl font-serif text-primary">{property.price}</p>
                  <div className="h-[1px] w-12 bg-accent" />
                  <p className="text-black text-sm font-sans font-light">{property.features}</p>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider group-hover:text-accent transition-colors">Ver Detalhes</span>
                    <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all">
                        <ArrowRight size={14} />
                    </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};