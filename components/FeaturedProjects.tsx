import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Button } from './ui/Button';
import { Section } from './ui/Section';

export const FeaturedProjects: React.FC = () => {
  return (
    <div id="lancamentos" className="bg-background overflow-hidden relative">
      <Section className="py-10">
        <div className="text-center mb-12 space-y-4">
          <h2 className="font-serif text-4xl text-primary">Destaques</h2>
          <div className="w-16 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 relative">
          
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "circOut" }}
            className="flex flex-col group"
          >
            <div className="relative h-[500px] w-full overflow-hidden shadow-2xl rounded-sm mb-8">
               <img 
                    src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                    alt="Project 1" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute top-0 right-0 bg-white/90 backdrop-blur-sm px-6 py-2">
                    <span className="text-primary font-bold tracking-widest text-xs uppercase">Categoria do Projeto</span>
                </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-4 pr-4 border-l-2 border-accent pl-6"
            >
               <h3 className="text-3xl font-serif text-primary">Nome do Projeto 1</h3>
               <p className="text-accent font-medium italic">
                    "Slogan ou frase de impacto do projeto"
               </p>
               <p className="text-black leading-relaxed text-sm">
                    Descrição detalhada do projeto, focando nos benefícios e diferenciais. Lembre-se de destacar o que torna este empreendimento único.
               </p>

               <div className="pt-2">
                 <Button variant="ghost" className="px-0 justify-start hover:bg-transparent hover:translate-x-2">
                    Baixar Apresentação <ArrowUpRight size={16} />
                 </Button>
               </div>
            </motion.div>
          </motion.div>


          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "circOut" }}
            className="flex flex-col group"
          >
             <div className="relative h-[500px] w-full overflow-hidden shadow-2xl rounded-sm mb-8">
               <img 
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1453&q=80" 
                    alt="Project 2" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute top-0 right-0 bg-primary/90 backdrop-blur-sm px-6 py-2">
                    <span className="text-white font-bold tracking-widest text-xs uppercase">Categoria do Projeto</span>
                </div>
            </div>
            
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.5 }}
               className="space-y-4 pl-4 border-l-2 border-primary pl-6"
            >
               <h3 className="text-3xl font-serif text-primary">Nome do Projeto 2</h3>
               
               <p className="text-accent font-medium italic">
                    "Slogan ou frase de impacto do projeto"
               </p>
               
               <p className="text-black leading-relaxed text-sm">
                    Descrição detalhada do projeto, focando nos benefícios e diferenciais. Lembre-se de destacar o que torna este empreendimento único.
               </p>

               <div className="pt-2">
                 <Button variant="ghost" className="px-0 justify-start hover:bg-transparent hover:translate-x-2">
                    Ver Plantas <ArrowUpRight size={16} />
                 </Button>
               </div>
            </motion.div>
          </motion.div>

        </div>
      </Section>
    </div>
  );
};