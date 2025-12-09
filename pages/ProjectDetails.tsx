import React, { useEffect, useRef } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { FEATURED_PROJECTS } from '../constants';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ProjectGallery } from '../components/ProjectGallery';
import { LuxuryReveal } from '../components/ui/LuxuryReveal';
import { ParallaxImage } from '../components/ui/ParallaxImage'; // Certifique-se de ter esse componente ou use img normal com motion
import { ArrowRight, MapPin, Download, Calendar, ShieldCheck, Smartphone, Leaf, Sofa } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { motion, useScroll, useTransform } from 'framer-motion';

// CONFIGURAÇÃO DE POSICIONAMENTO DA IMAGEM E BORDA
// "md:-mt-XX" = Sobe a imagem (sobrepõe). "md:mt-XX" = Desce a imagem (separa).
// "md:top-XX" / "md:left-XX" = Move o quadrado (top/left negativos sobem/esquerda, positivos descem/direita).
const POSITION_SETTINGS = {
  imageOffset: "md:mt-10",  // Ex: "md:-mt-20" (Sobe), "md:mt-10" (Desce)
  borderTop: "-top-6",       // Ex: "-top-10" (Sobe), "top-4" (Desce)
  borderLeft: "-left-6"      // Ex: "-left-10" (Esquerda), "left-4" (Direita)
};

export const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? FEATURED_PROJECTS[id.toUpperCase()] : null;
  const containerRef = useRef(null);
  
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 800], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 800], [1, 1.1]); // Zoom suave ao rolar
  const textY = useTransform(scrollY, [0, 500], [0, 100]); // Parallax no texto

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  // Divide a descrição em parágrafos para layout editorial
  const descriptionParagraphs = project.fullDescription.split('\n\n');
  const mainConcept = descriptionParagraphs[0];
  const secondaryConcept = descriptionParagraphs.slice(1).join('\n\n');

  return (
    <div ref={containerRef} className="bg-white min-h-screen selection:bg-yellow-600/30">
      <Navbar />

      {/* === HERO CINEMATIC === */}
      <div className="relative h-screen w-full overflow-hidden">
        <motion.div 
            style={{ scale: heroScale, opacity: heroOpacity }} 
            className="absolute inset-0 w-full h-full"
        >
             <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80 z-10" />
             <img 
               src={project.mainImage} 
               alt={project.title} 
               className="w-full h-full object-cover"
             />
        </motion.div>

        <motion.div 
            style={{ y: textY }}
            className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center p-6"
        >
            <LuxuryReveal>
                <div className="inline-flex items-center gap-4 mb-8">
                    <span className="h-[1px] w-8 md:w-16 bg-white/60" />
                    <span className="text-white/80 uppercase tracking-[0.4em] text-xs md:text-sm font-light">
                        Collection 2025
                    </span>
                    <span className="h-[1px] w-8 md:w-16 bg-white/60" />
                </div>
            </LuxuryReveal>

            <LuxuryReveal delay={0.1}>
                <h1 className="font-serif text-7xl md:text-[10rem] text-white leading-none mb-6 tracking-tight drop-shadow-2xl">
                    {project.title}
                </h1>
            </LuxuryReveal>

            <LuxuryReveal delay={0.2}>
                <p className="text-white/90 text-xl md:text-3xl font-light italic max-w-3xl mx-auto">
                    {project.subtitle}
                </p>
            </LuxuryReveal>
            
            <motion.div 
                animate={{ y: [0, 10, 0] }} 
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-[0.2em] uppercase"
            >
                Scroll to Explore
            </motion.div>
        </motion.div>
      </div>

      {/* === INTRODUCTORY STATEMENT (DARK MODE) === */}
      <div className="relative z-30 bg-zinc-900 text-white pt-40 pb-20 px-6 md:px-12">
          {/* Textura sutil */}
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
              <LuxuryReveal width="100%">
                  <div className="flex flex-col items-center">
                    <div className="p-4 rounded-full border border-yellow-600/30 mb-8">
                        <MapPin className="w-6 h-6 text-yellow-600" />
                    </div>
                    <span className="block text-gray-400 text-xs uppercase tracking-[0.4em] mb-12 border-b border-gray-800 pb-4">
                        {project.location}
                    </span>
                  </div>
              </LuxuryReveal>
              
              <LuxuryReveal delay={0.1} width="100%">
                  <p className="font-serif text-3xl md:text-6xl leading-tight text-white mx-auto max-w-4xl italic font-light">
                      "{mainConcept}"
                  </p>
              </LuxuryReveal>
          </div>
      </div>

      {/* === EDITORIAL CONCEPT === */}
      <div className="relative bg-white pb-32 pt-0 md:pt-0">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
              <div className="grid md:grid-cols-12 gap-16 items-center">
                  
                  {/* Imagem Flutuante */}
                  <div className={`md:col-span-6 relative -mt-0 ${POSITION_SETTINGS.imageOffset} z-40 flex justify-center transition-all duration-300`}>
                      <div className={`absolute ${POSITION_SETTINGS.borderTop} ${POSITION_SETTINGS.borderLeft} w-full h-full border border-gray-200 -z-10 hidden md:block transition-all duration-300`}></div>
                      <div className="relative h-[600px] w-full max-w-lg shadow-2xl overflow-hidden rounded-sm">
                           {/* Se não tiver ParallaxImage, use img normal com object-cover */}
                           <img src={project.gallery[0] || project.mainImage} alt="Detail" className="w-full h-full object-cover" />
                      </div>
                  </div>

                  {/* Texto Editorial */}
                  <div className="md:col-span-6 md:pl-12">
                      <LuxuryReveal>
                          <span className="text-yellow-600 font-bold tracking-widest text-xs uppercase mb-4 block">Conceito</span>
                          <h3 className="font-serif text-5xl text-gray-900 mb-8 leading-none">
                              Design & <br/><span className="italic text-gray-400">Essência.</span>
                          </h3>
                      </LuxuryReveal>
                      
                      <LuxuryReveal delay={0.1}>
                          <div className="prose prose-lg text-gray-500 font-light leading-relaxed whitespace-pre-line border-l-2 border-yellow-600/50 pl-6">
                              {secondaryConcept}
                          </div>
                      </LuxuryReveal>
                      
                      {/* Specs Minimalistas */}
                      <div className="mt-16 grid grid-cols-2 gap-y-8 gap-x-4">
                           {project.specs.map((spec, i) => (
                               <LuxuryReveal key={i} delay={0.2 + (i * 0.1)}>
                                   <div>
                                       <div className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">{spec.label}</div>
                                       <div className="font-serif text-2xl text-gray-900 border-b border-gray-100 pb-2 inline-block">{spec.value}</div>
                                   </div>
                               </LuxuryReveal>
                           ))}
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* === FEATURES GRID (GLASSMORPHISM) === */}
      <div className="relative py-40 overflow-hidden">


          <div className="container mx-auto px-6 md:px-12 relative z-10">
              <div className="text-center mb-24">
                  <h3 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">O Projeto em Detalhes</h3>
                  <div className="w-16 h-1 bg-yellow-600 mx-auto" />
              </div>

              {project.featureCategories && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      {project.featureCategories.map((category, idx) => {
                          const Icon = category.icon === 'Smartphone' ? Smartphone : 
                                       category.icon === 'Leaf' ? Leaf :       
                                       category.icon === 'ShieldCheck' ? ShieldCheck :
                                       category.icon === 'Sofa' ? Sofa : ArrowRight; 
                          
                          return (
                            <LuxuryReveal key={idx} delay={idx * 0.1}>
                                <div className="bg-white/80 backdrop-blur-md p-10 rounded-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50 group h-full">
                                    <div className="mb-8 text-yellow-600 group-hover:scale-110 transition-transform duration-500">
                                        <Icon className="w-10 h-10 stroke-1" />
                                    </div>
                                    <h4 className="font-serif text-2xl text-gray-900 mb-6">{category.title}</h4>
                                    <ul className="space-y-4">
                                        {category.items.map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm text-gray-600 font-light">
                                                <span className="w-1.5 h-1.5 rounded-full bg-yellow-600/50 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </LuxuryReveal>
                          );
                      })}
                  </div>
              )}
          </div>
      </div>

      {/* === GALLERY SHOWCASE (DARK) === */}
      <div className="bg-zinc-900 text-white pt-8 pb-32 px-6 md:px-0 overflow-hidden">
          <div className="max-w-7xl mx-auto mb-8 md:px-12 text-center">
              <LuxuryReveal width="100%">
                  <h3 className="font-serif text-4xl md:text-6xl text-white">Visual Tour</h3>
              </LuxuryReveal>
          </div>
          <div className="w-full">
             <ProjectGallery images={project.gallery} />
          </div>
      </div>

      {/* === CTA FINAL === */}
      <div className="py-40 bg-white relative overflow-hidden flex items-center justify-center">
          <div className="max-w-4xl w-full mx-auto px-6 text-center relative z-10 flex flex-col items-center">
              <p className="text-yellow-600 uppercase tracking-[0.4em] text-xs font-bold mb-6">Oportunidade Limitada</p>
              <h2 className="font-serif text-5xl md:text-7xl text-gray-900 mb-12">Comece seu Legado.</h2>
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center w-full">
                  <Button 
                    onClick={() => window.open(`https://wa.me/5562992746409?text=${encodeURIComponent(`Olá! Gostaria de agendar uma apresentação exclusiva do ${project.title}.`)}`, '_blank')}
                    className="bg-gray-900 text-white hover:bg-yellow-600 px-12 py-6 min-w-[280px] uppercase font-bold text-xs tracking-[0.2em] transition-all duration-500 shadow-xl"
                  >
                      <span className="flex items-center justify-center gap-3">Agendar Visita <Calendar size={14} /></span>
                  </Button>
                  <button 
                      onClick={() => window.open(`https://wa.me/5562992746409?text=${encodeURIComponent(`Olá! Poderia me enviar o Book Digital do ${project.title}?`)}`, '_blank')}
                      className="px-12 py-6 min-w-[280px] border border-gray-200 hover:border-gray-900 text-gray-500 hover:text-gray-900 uppercase font-bold text-xs tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-3"
                  >
                      <span>Download Book</span> <Download size={14} />
                  </button>
              </div>
          </div>
      </div>

      <Footer />
    </div>
  );
};