import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';


const HERO_IMAGE_SETTINGS = {
  src: "/images/hero_face.jpeg",
  zoom: 1.2,         
  position: "center top",
  yOffset: "-30px",      // Ajuste vertical 
  xOffset: "0px"       // Ajuste horizontal
};

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury Building Exterior" 
          className="w-full h-full object-cover opacity-30" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-accent/20 via-white/60 to-white" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="w-16 h-[2px] bg-accent" />
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight text-primary">
            Título Principal <br />
            <span className="italic font-light">slogan da sua</span> <br />
            Marca Aqui.
          </h1>
          <p className="font-sans text-black text-lg md:text-xl max-w-lg leading-relaxed border-l-2 border-accent/50 pl-6 backdrop-blur-sm">
            Descrição curta e impactante sobre o seu negócio. Destaque seus diferenciais e valorize sua proposta única.
          </p>
          <div className="pt-4">
            <Button className="text-base px-10 py-4 shadow-lg">
              Call to Action
              <ArrowRight size={18} />
            </Button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-0 border border-accent/30 rounded-[2rem] transform translate-x-4 translate-y-4" />
            <div className="relative w-[350px] h-[450px] md:w-[450px] md:h-[550px] rounded-[2rem] overflow-hidden shadow-2xl bg-white/50 backdrop-blur-md flex items-center justify-center border border-white/50">
              {/* Imagem do Usuário com Configurações */}
              <img 
                src={HERO_IMAGE_SETTINGS.src}
                alt="Foto do Profissional"
                className="w-full h-full object-cover transition-transform"
                style={{
                  objectPosition: HERO_IMAGE_SETTINGS.position,
                  transform: `scale(${HERO_IMAGE_SETTINGS.zoom}) translate(${HERO_IMAGE_SETTINGS.xOffset}, ${HERO_IMAGE_SETTINGS.yOffset})`
                }}
              />
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="absolute -bottom-6 -left-6 bg-white shadow-xl p-6 max-w-xs border-l-4 border-accent"
            >
              <p className="font-serif text-xl italic text-primary">"Frase de efeito ou destaque"</p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};