import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from './ui/Button';

// Ajustes da foto do Daniel
const HERO_IMAGE_SETTINGS = {
  src: "/images/hero_face.jpeg",
  zoom: 1.1,         
  position: "center 20%", 
};

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      
      {/* 1. LAYER DE FUNDO: A "Alma" do Site (Imagem de Luxo) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop" 
          alt="Luxury Interior Background" 
          className="w-full h-full object-cover opacity-100" 
        />
        {/* 2. LAYER DE LEITURA: Gradiente Branco/Creme para o Texto aparecer */}
        {/* Vai do Branco Sólido na esquerda (texto) para Transparente na direita (imagem) */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-white/90 to-white/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-16 items-center">
        
        {/* COLUNA ESQUERDA: TEXTO */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Tagline de Autoridade */}
          <div className="flex items-center gap-3 bg-white/80 backdrop-blur-md w-fit px-4 py-2 rounded-full border border-gray-200 shadow-sm">
             <Star className="w-4 h-4 text-accent fill-accent" />
             <span className="text-gray-900 uppercase tracking-widest text-[10px] font-bold">Especialista em Alto Padrão</span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] text-gray-900 drop-shadow-sm">
            A Inteligência por trás do seu <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-700 italic pr-2">
              Patrimônio.
            </span>
          </h1>
          
          <p className="font-sans text-gray-700 text-lg md:text-xl max-w-lg leading-relaxed font-medium">
            Consultoria imobiliária que une dados de mercado, segurança jurídica e acesso exclusivo aos melhores lançamentos de Anápolis.
          </p>
          
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <Button className="text-sm px-10 py-5 bg-gray-900 text-white hover:bg-accent hover:text-white transition-all duration-300 shadow-2xl uppercase tracking-widest">
              Iniciar Consultoria <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <button 
              onClick={() => document.getElementById('venda')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white/50 backdrop-blur border border-gray-300 text-gray-800 hover:bg-white hover:border-accent hover:text-accent transition-all uppercase tracking-widest text-xs font-bold"
            >
              Explorar Acervo
            </button>
          </div>
        </motion.div>

        {/* COLUNA DIREITA: FOTO + MOLDURA ELEGANTE */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative">
            {/* Fundo Decorativo Atrás da Foto (Vidro Fosco) */}
            <div className="absolute -top-6 -right-6 w-full h-full border-2 border-white/50 bg-white/20 backdrop-blur-sm rounded-sm -z-10" />
            
            {/* Container da Foto */}
            <div className="relative w-[300px] h-[450px] md:w-[380px] md:h-[550px] bg-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.2)] overflow-hidden group">
              {/* Borda Dourada Interna */}
              <div className="absolute inset-4 border border-white/20 z-20 pointer-events-none" />
              
              <img 
                src={HERO_IMAGE_SETTINGS.src}
                alt="Daniel Feitosa"
                className="w-full h-full object-cover filter sepia-[0.1] contrast-110 group-hover:scale-105 transition-transform duration-1000"
                style={{
                  objectPosition: HERO_IMAGE_SETTINGS.position,
                  transform: `scale(${HERO_IMAGE_SETTINGS.zoom})`
                }}
              />
              
              {/* Card de Nome Flutuante (Estilo Arquitetura) */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur p-6 border-t border-accent/20">
                <p className="font-serif text-2xl text-gray-900">Daniel Feitosa</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="h-[1px] w-8 bg-accent" />
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Private Broker</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};