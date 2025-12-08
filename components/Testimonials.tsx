import React from 'react';
import { Section } from './ui/Section';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <div className="bg-background">
      <Section className="py-10">
        <div className="flex flex-col items-center text-center mb-12 space-y-4">
          <Quote className="text-accent w-10 h-10 opacity-50 mb-2" />
          <h2 className="font-serif text-3xl md:text-4xl text-primary">Depoimentos</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 relative group hover:-translate-y-2 transition-transform duration-300">
               <span className="absolute top-6 right-6 text-6xl font-serif text-gray-100 opacity-50 group-hover:text-accent/10 transition-colors">"</span>
               
               <p className="text-black italic font-serif leading-relaxed mb-8 relative z-10 text-lg">
                 "{testimonial.text}"
               </p>
               
               <div className="flex flex-col border-t border-gray-100 pt-6">
                 <span className="font-bold text-primary text-lg">{testimonial.author}</span>
                 <span className="text-xs text-accent font-bold uppercase tracking-widest">{testimonial.role}</span>
               </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};