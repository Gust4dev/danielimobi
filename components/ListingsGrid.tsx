import React from 'react';
import { PROPERTIES } from '../constants';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export const ListingsGrid: React.FC = () => {
  return (
    <section id="venda" className="max-w-7xl mx-auto px-6 md:px-12 py-32 bg-white relative overflow-hidden">
       {/* Decorative Background Element */}
       <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

       <div className="text-center mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="text-yellow-600 font-medium tracking-[0.2em] text-xs uppercase block mb-4">
                Curadoria Exclusiva
            </span>
            <h2 className="font-serif text-5xl md:text-6xl text-gray-900 leading-tight">
                Acervo Disponível
            </h2>
            <div className="w-24 h-[1px] bg-yellow-600/50 mx-auto mt-8" />
          </motion.div>
       </div>

       <div className="grid md:grid-cols-3 gap-10">
          {PROPERTIES.map((item, index) => (
             <Link to={`/vendas/opcao${item.id}`} key={item.id} className="block h-full">
                 <motion.div 
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
                   whileHover="hover"
                   className="group relative h-full flex flex-col"
                 >
                    {/* "Procedural" Border Effect - Animate 4 lines or just a container
                        For 'procedural' feel, let's have a border that fades in and scales slightly 
                        to match the card growth, giving a 'focus' effect.
                    */}
                    <div className="absolute -inset-4 bg-transparent transition-all duration-500 rounded-xl" />

                    <motion.div
                        variants={{
                            hover: { 
                                scale: 1.03,
                                y: -5,
                                transition: { duration: 0.4, ease: "easeOut" }
                            }
                        }}
                        className="relative bg-white h-full flex flex-col shadow-sm hover:shadow-2xl transition-shadow duration-500 overflow-hidden border border-transparent"
                    >
                        {/* The Procedural Golden Border - We simulate it appearing by animating opacity on a border div */}
                        <motion.div 
                            variants={{
                                hover: { opacity: 1 }
                            }}
                            initial={{ opacity: 0 }}
                            className="absolute inset-0 border-[1px] border-yellow-600/60 z-20 pointer-events-none"
                            transition={{ duration: 0.3 }}
                        />

                        {/* Image Container - NO Zoom on Image, only on parent */}
                        <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                           <img 
                              src={item.image} 
                              alt={item.title}
                              className="w-full h-full object-cover" 
                              // Removed scale hover effect here as requested
                           />
                           
                           <div className="absolute top-0 left-0 p-6 w-full flex justify-between items-start">
                                <span className="bg-white/95 backdrop-blur-md px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-900 border-l-2 border-yellow-600 shadow-sm">
                                    {item.tag}
                                </span>
                           </div>
                           
                           {/* Overlay Gradient for nicer text contrast if needed, but keeping it clean for now */}
                           <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        
                        {/* Content */}
                        <div className="p-8 flex flex-col flex-grow bg-white relative z-10">
                           <div className="mb-6">
                              <h3 className="font-serif text-2xl text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                                 {item.title}
                              </h3>
                              <p className="text-xs text-gray-500 font-medium flex items-center gap-2 uppercase tracking-widest">
                                 <MapPin size={12} className="text-yellow-600"/>
                                 Anápolis
                              </p>
                           </div>
                           
                           <div className="mt-auto space-y-6">
                               <div className="w-full h-[1px] bg-gray-100 group-hover:bg-yellow-600/20 transition-colors duration-500" />
                               
                               <div className="flex items-center justify-between">
                                  <span className="font-serif text-xl text-gray-900">{item.price}</span>
                                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-yellow-600 transition-colors">
                                     Ver Detalhes 
                                     <ArrowRight size={14} className="-ml-1 group-hover:translate-x-1 transition-transform" />
                                  </div>
                               </div>
                           </div>
                        </div>
                    </motion.div>
                 </motion.div>
             </Link>
          ))}
       </div>
    </section>
  );
};