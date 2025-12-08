import React, { useState, useEffect } from 'react';
import { Section } from './ui/Section';
import { TESTIMONIALS } from '../constants';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play logic
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4000); // 4 seconds per slide as requested

    return () => clearInterval(timer);
  }, [isPaused]);

  const paginate = (newDirection: number) => {
    setCurrentIndex((prev) => (prev + newDirection + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    // Updated Background: Gradient from subtle gold (amber-50/50 is roughly light gold) to white
    <div className="bg-gradient-to-b from-[#fffaf0] to-white relative overflow-hidden">
      
      {/* Decorative Background Elements - Adjusted opacity for blend */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/40 rounded-full blur-3xl -z-0 pointer-events-none mix-blend-soft-light" />
      
      <Section id="depoimentos" className="py-24 relative z-10">
        
        {/* Header - Subtle & Elegant */}
        <div className="text-center mb-16">
           <span className="text-yellow-600 font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
              Confidence & Trust
           </span>
           <h2 className="font-serif text-4xl text-gray-900">A Palavra de Quem Investe</h2>
        </div>

        {/* Carousel Container */}
        <div 
          className="max-w-4xl mx-auto relative px-12 md:px-20"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
            {/* Navigation Arrows (Desktop) */}
            <button 
                onClick={() => paginate(-1)}
                className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300 hover:text-yellow-600 transition-colors p-2 hidden md:block z-20"
            >
                <ChevronLeft size={32} strokeWidth={1} />
            </button>

            <button 
                onClick={() => paginate(1)}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-300 hover:text-yellow-600 transition-colors p-2 hidden md:block z-20"
            >
                <ChevronRight size={32} strokeWidth={1} />
            </button>

            {/* Testimonial Content - Grid Stack for Crossfade */}
            <div className="min-h-[300px] grid grid-cols-1 grid-rows-1 items-center justify-items-center">
                <AnimatePresence initial={false}>
                    <motion.div
                        key={currentIndex}
                        // This allows them to stack on top of each other
                        className="col-start-1 row-start-1 text-center space-y-8 w-full"
                        initial={{ opacity: 0, filter: "blur(10px)", scale: 0.98 }}
                        animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                        exit={{ opacity: 0, filter: "blur(10px)", scale: 1.02 }}
                        // Smooth, overlapping transition
                        transition={{ 
                            duration: 1.2, 
                            ease: [0.16, 1, 0.3, 1] 
                        }} 
                    >
                        {/* Quote Icon */}
                        <div className="flex justify-center">
                            <Quote className="text-yellow-600/30 w-12 h-12" />
                        </div>

                        {/* The Quote */}
                        <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-gray-900 leading-snug md:leading-relaxed italic">
                            "{currentTestimonial.text}"
                        </p>

                        {/* Author Info */}
                        <div className="space-y-1">
                            <div className="w-12 h-[1px] bg-yellow-600 mx-auto mb-4" />
                            <h4 className="font-bold text-gray-900 tracking-wide text-lg">
                                {currentTestimonial.author}
                            </h4>
                            <p className="text-gray-400 text-xs uppercase tracking-[0.2em] font-medium">
                                {currentTestimonial.role}
                            </p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-12 relative z-20">
                {TESTIMONIALS.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`transition-all duration-500 rounded-full ${
                            idx === currentIndex 
                                ? 'w-8 h-1 bg-yellow-600' 
                                : 'w-2 h-1 bg-gray-200 hover:bg-gray-300'
                        }`}
                        aria-label={`Go to testimonial ${idx + 1}`}
                    />
                ))}
            </div>

        </div>
      </Section>
    </div>
  );
};