import React, { useEffect, useRef, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { FEATURED_PROJECTS } from '../constants';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { LuxuryReveal } from '../components/ui/LuxuryReveal';
import { 
  ArrowRight, MapPin, Leaf, Sofa, 
  Zap, ShieldCheck, Building2, 
  Maximize2, Car, Layers, X, ChevronLeft, ChevronRight
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'framer-motion';

export const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? FEATURED_PROJECTS[id.toUpperCase()] : null;
  const [activeImage, setActiveImage] = useState<number | null>(null);
  
  // Scroll & Parallax
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, 400]);
  const heroScale = useTransform(scrollY, [0, 1000], [1.1, 1]);
  const heroOpacity = useTransform(scrollY, [0, 800], [1, 0]);
  
  const smoothY = useSpring(heroY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const galleryImages = [project.mainImage, ...project.gallery];

  return (
    <div className="bg-black text-white selection:bg-amber-500/30">
      <Navbar />


      <div className="relative h-[110vh] w-full overflow-hidden">

        <motion.div 
          style={{ y: smoothY, scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black z-10" />
          <img 
            src={project.mainImage} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </motion.div>


        <div className="relative z-20 h-full flex flex-col justify-end pb-32 px-6 md:px-20 max-w-[1920px] mx-auto">
          <LuxuryReveal>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-amber-400/90 tracking-[0.3em] text-sm font-light uppercase">
                <div className="h-px w-10 bg-amber-400/50" />
                <span>Collection {new Date().getFullYear()}</span>
              </div>
              
              <h1 className="font-serif text-6xl md:text-8xl lg:text-[10rem] leading-[0.9] tracking-tighter mix-blend-overlay text-white opacity-90">
                {project.title}
              </h1>
              
              <p className="max-w-xl text-xl md:text-2xl font-light text-white/80 leading-relaxed backdrop-blur-sm">
                {project.subtitle}
              </p>
            </div>
          </LuxuryReveal>


          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-12 left-6 md:left-20 flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center animate-bounce">
              <ArrowRight className="rotate-90 text-white/50" size={20} />
            </div>
            <span className="text-xs uppercase tracking-widest text-white/40">Descubra</span>
          </motion.div>
        </div>
      </div>


      <section className="relative z-30 -mt-20 px-4 md:px-10 max-w-[1920px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {project.specs.slice(0, 4).map((spec, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-none md:first:rounded-l-2xl md:last:rounded-r-2xl hover:bg-white/10 transition-colors duration-500"
            >
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity duration-500 text-amber-500">
                {spec.label.includes('Área') ? <Maximize2 size={24} /> : 
                 spec.label.includes('Quarto') ? <Sofa size={24} /> : 
                 spec.label.includes('Vaga') ? <Car size={24} /> : 
                 <Layers size={24} />}
              </div>
              <p className="text-4xl md:text-5xl font-serif text-white mb-2">{spec.value}</p>
              <p className="text-sm uppercase tracking-widest text-white/40 group-hover:text-amber-400 transition-colors">{spec.label}</p>
            </motion.div>
          ))}
        </div>
      </section>


      <section className="py-32 md:py-48 px-6 md:px-20 max-w-[1920px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <LuxuryReveal>
              <h2 className="font-serif text-5xl md:text-6xl text-white leading-tight">
                A Arte de <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">Viver Bem</span>
              </h2>
            </LuxuryReveal>
            
            <div className="space-y-8 text-lg font-light leading-relaxed text-gray-400">
              <p>
                {project.fullDescription.split('\n\n')[0]}
              </p>
              <p className="pl-6 border-l w-full border-amber-500/30 italic text-white/80">
                "Não é apenas sobre morar, é sobre sentir cada detalhe, cada textura e cada momento."
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-500/10 rounded-lg text-amber-500">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Segurança Total</h4>
                  <p className="text-sm text-gray-500">Monitoramento 24/7 e controle biométrico.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-500/10 rounded-lg text-amber-500">
                  <Leaf size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Natureza Integrada</h4>
                  <p className="text-sm text-gray-500">Paisagismo assinado e áreas verdes.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative h-[800px] w-full hidden lg:block">
            <div className="sticky top-20 w-full h-full">
               <div className="grid grid-cols-2 gap-4 h-full">
                 <div className="space-y-4 pt-20">
                   <img src={project.gallery[0]} alt="Detail 1" className="w-full h-64 object-cover rounded-lg opacity-80" />
                   <img src={project.gallery[1]} alt="Detail 2" className="w-full h-96 object-cover rounded-lg" />
                 </div>
                 <div className="space-y-4">
                   <img src={project.gallery[2]} alt="Detail 3" className="w-full h-96 object-cover rounded-lg" />
                   <img src={project.gallery[3] || project.mainImage} alt="Detail 4" className="w-full h-64 object-cover rounded-lg opacity-80" />
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>


      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={project.gallery[4] || project.mainImage} 
            alt="Feature Background" 
            className="w-full h-full object-cover opacity-20 invert"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h3 className="text-amber-500 uppercase tracking-widest text-sm font-semibold mb-4">Features Exclusivas</h3>
            <h2 className="font-serif text-4xl md:text-5xl text-white">O Padrão {project.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { icon: <Building2 className="w-8 h-8"/>, title: "Design Autoral", desc: "Arquitetura assinada que define o skyline da região." },
              { icon: <MapPin className="w-8 h-8"/>, title: "Localização", desc: project.location },
              { icon: <Zap className="w-8 h-8"/>, title: "Tecnologia", desc: "Infraestrutura preparada para automação total." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white/5 border border-white/5 p-8 md:p-12 hover:bg-white/10 transition-all duration-300 group cursor-default"
              >
                <div className="text-amber-500 mb-6 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h4 className="text-2xl font-serif text-white mb-4">{item.title}</h4>
                <p className="text-gray-400 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-20 bg-black">
        <div className="px-6 md:px-12 mb-12 flex justify-between items-end">
          <div>
            <h2 className="font-serif text-4xl md:text-6xl text-white mb-2">Galeria</h2>
            <p className="text-gray-500">Uma visão detalhada do extraordinário</p>
          </div>
        </div>
        
        <div className="flex overflow-x-auto pb-8 scrollbar-hide snap-x">
          <div className="flex gap-4 px-6 md:px-12 min-w-full">
            {galleryImages.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ margin: "-100px" }}
                className="relative flex-none w-[85vw] md:w-[600px] aspect-[16/9] snap-center cursor-pointer group rounded-lg overflow-hidden"
                onClick={() => setActiveImage(idx)}
              >
                <img 
                  src={img} 
                  alt={`Gallery ${idx}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 p-2 bg-black/50 backdrop-blur rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={20} className="text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <section className="h-[80vh] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-amber-900">
           <img 
            src={project.mainImage} 
            alt="CTA Background" 
            className="w-full h-full object-cover mix-blend-overlay opacity-30 blur-sm scale-105"
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-bg-black/80" />
        </div>

        <div className="relative z-10 text-center px-4 space-y-8 max-w-4xl mx-auto">
          <span className="text-amber-400 font-medium tracking-[0.5em] text-sm uppercase">Make it yours</span>
          <h2 className="font-serif text-5xl md:text-7xl text-white">
            O Próximo Capítulo da <br/> Sua História
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
             <Button
                onClick={() => window.open(`https://wa.me/5562992746409?text=${encodeURIComponent(`Olá! Gostaria de agendar uma visita ao ${project.title}.`)}`, '_blank')}
                className="bg-amber-600 hover:bg-amber-700 text-white px-12 py-6 rounded-none text-lg tracking-wider"
              >
                AGENDAR VISITA PRIVADA
              </Button>
              <button 
                onClick={() => window.open(`https://wa.me/5562992746409`, '_blank')}
                className="text-white hover:text-amber-400 transition-colors uppercase tracking-widest text-sm font-medium border-b border-white/20 hover:border-amber-400 pb-1"
              >
                Solicitar Apresentação PDF
              </button>
          </div>
        </div>
      </section>

      <Footer />


      <AnimatePresence>
        {activeImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black backdrop-blur-3xl flex items-center justify-center"
          >
            <button 
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50"
            >
              <X size={32} />
            </button>

             <button 
              onClick={(e) => {
                e.stopPropagation();
                setActiveImage(prev => prev !== null && prev > 0 ? prev - 1 : galleryImages.length - 1);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4 z-50 hidden md:block"
            >
              <ChevronLeft size={40} />
            </button>

            <button 
              onClick={(e) => {
                e.stopPropagation();
                setActiveImage(prev => prev !== null && prev < galleryImages.length - 1 ? prev + 1 : 0);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4 z-50 hidden md:block"
            >
              <ChevronRight size={40} />
            </button>

            <motion.img
              key={activeImage}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              src={galleryImages[activeImage]}
              alt="Gallery Fullscreen"
              className="max-h-[90vh] max-w-[95vw] object-contain shadow-2xl"
            />
            
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {galleryImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${idx === activeImage ? 'bg-white w-6' : 'bg-white/20'}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
