import React, { useEffect, useRef, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { FEATURED_PROJECTS } from '../constants';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ProjectGallery } from '../components/ProjectGallery';
import { LuxuryReveal } from '../components/ui/LuxuryReveal';
import { ArrowRight, MapPin, Download, Calendar, ShieldCheck, Smartphone, Leaf, Sofa, Heart, Share2, Maximize2, Clock, Layers, Thermometer, Zap, Eye, Lock, Target, Navigation, Building2, FileText } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

export const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? FEATURED_PROJECTS[id.toUpperCase()] : null;
  const containerRef = useRef(null);
  const [activeImage, setActiveImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 600], [1, 1.05]);
  const textY = useTransform(scrollY, [0, 400], [0, 50]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const descriptionParagraphs = project.fullDescription.split('\n\n');
  const mainConcept = descriptionParagraphs[0];
  const secondaryConcept = descriptionParagraphs.slice(1).join('\n\n');

  const galleryImages = [project.mainImage, ...project.gallery].slice(0, 6);
  
  const features = [
    { icon: <Lock />, label: 'Segurança Avançada', value: 'Monitoramento 24h com sistema integrado' },
    { icon: <Clock />, label: 'Disponibilidade', value: 'Entrega programada para 2024' },
    { icon: <Smartphone />, label: 'Automação Residencial', value: 'Controle total via dispositivos móveis' },
    { icon: <Building2 />, label: 'Estrutura', value: '3 pavimentos de arquitetura exclusiva' },
    { icon: <Leaf />, label: 'Sustentabilidade', value: 'Certificação ambiental LEED Gold' },
    { icon: <Thermometer />, label: 'Climatização', value: 'Sistema centralizado inteligente' },
    { icon: <Sofa />, label: 'Acústica Premium', value: 'Isolamento sonoro de última geração' },
    { icon: <Zap />, label: 'Eficiência Energética', value: 'Painéis solares com backup automático' },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-white via-gray-50/30 to-white selection:bg-amber-600/30">
      <Navbar />

      <div className="relative h-screen w-full overflow-hidden">
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/30 to-gray-900/80 z-10" />
          <img 
            src={project.mainImage} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div 
          style={{ y: textY }}
          className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6"
        >
          <LuxuryReveal>
            <div className="inline-flex items-center gap-6 mb-12">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-600/60" />
              <span className="text-amber-300/90 uppercase tracking-[0.3em] text-xs md:text-sm font-light">
                Exclusivo • {new Date().getFullYear()}
              </span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-600/60" />
            </div>
          </LuxuryReveal>

          <LuxuryReveal delay={0.1}>
            <h1 className="font-serif text-5xl md:text-8xl lg:text-[10rem] text-white leading-none mb-8 tracking-tighter">
              {project.title.split(' ').map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="inline-block mr-4"
                >
                  {word}
                </motion.span>
              ))}
            </h1>
          </LuxuryReveal>

          <LuxuryReveal delay={0.2}>
            <p className="text-white/90 text-xl md:text-2xl font-light max-w-3xl mx-auto mb-12">
              {project.subtitle}
            </p>
          </LuxuryReveal>

          <LuxuryReveal delay={0.3}>
            <div className="flex items-center gap-6">
              <Button
                onClick={() => window.open(`https://wa.me/5562992746409?text=${encodeURIComponent(`Olá! Gostaria de agendar uma visita ao ${project.title}.`)}`, '_blank')}
                className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-10 py-4 rounded-xl font-medium shadow-2xl"
              >
                <Calendar className="mr-3" size={20} />
                Agendar Visita Privada
              </Button>
              
              <button 
                onClick={() => setIsFavorite(!isFavorite)}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Heart className={isFavorite ? "fill-red-500 text-red-500" : "text-white"} size={20} />
              </button>
            </div>
          </LuxuryReveal>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-white/60 text-xs tracking-[0.2em] uppercase">Explore</span>
            <div className="h-8 w-px bg-gradient-to-b from-amber-500 to-transparent" />
          </motion.div>
        </motion.div>
      </div>

      <div className="relative z-30 -mt-24 md:-mt-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-100"
          >
            <div className="grid md:grid-cols-4 gap-8">
              {project.specs.slice(0, 4).map((spec, idx) => (
                <div key={idx} className="text-center group">
                  <div className="text-amber-600 mb-2 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-50">
                    {spec.label.includes('Área') ? <Maximize2 size={20} /> : 
                     spec.label.includes('Quarto') ? <Sofa size={20} /> : 
                     spec.label.includes('Vaga') ? <ArrowRight size={20} /> : 
                     <Layers size={20} />}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{spec.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{spec.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 text-gray-700">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center">
                  <Target className="w-4 h-4 text-amber-600" />
                </div>
                <span className="text-sm font-medium uppercase tracking-wider">Posicionamento Estratégico</span>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-sans text-2xl text-gray-900 mb-2">Localização Privilegiada</h3>
                    <p className="text-gray-600">{project.location}</p>
                  </div>
                </div>

                <div className="grid gap-6">
                  <div className="p-8 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:border-gray-200 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
                        <Navigation className="w-5 h-5" />
                      </div>
                      <h4 className="font-serif text-lg text-gray-900">Conectividade</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed font-light">Acesso imediato às principais vias da cidade, com distância estratégica do aeroporto e centros empresariais.</p>
                  </div>
                  
                  <div className="p-8 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:border-gray-200 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <h4 className="font-serif text-lg text-gray-900">Entorno Exclusivo</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed font-light">Situado em área de preservação ambiental, cercado por espaços verdes e distante do ruído urbano.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 text-gray-700">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center">
                  <FileText className="w-4 h-4 text-amber-600" />
                </div>
                <span className="text-sm font-medium uppercase tracking-wider">Arquitetura e Design</span>
              </div>

              <div className="space-y-6">
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 leading-tight">
                  Redefinindo <span className="text-amber-600">Padrões</span> de Excelência
                </h2>

                <div className="prose prose-lg text-gray-600 leading-relaxed space-y-4">
                  <p className="text-gray-700">
                    Cada elemento foi concebido para harmonizar forma e função, criando espaços que transcendem o convencional.
                  </p>
                  
                  <div className="border-l-2 border-amber-500/30 pl-6 py-2">
                    <p className="text-gray-700 font-light">
                      Privacidade absoluta combinada com localização estratégica, unindo sofisticação arquitetônica e conforto acústico em um conceito exclusivo.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <Button
                    onClick={() => window.open(`https://wa.me/5562992746409`, '_blank')}
                    className="bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white px-8 py-3 rounded-xl font-medium"
                  >
                    Projeto Completo
                  </Button>

                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-32 px-4 bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-amber-600 to-amber-400" />
              <span className="text-sm font-medium uppercase tracking-widest text-gray-700">Especificações Técnicas</span>
              <div className="w-1 h-8 bg-gradient-to-b from-amber-600 to-amber-400" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
              Detalhamento <span className="text-amber-600">Preciso</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cada especificação reflete o compromisso com qualidade e inovação
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group"
              >
                <div className="h-full bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center flex-shrink-0">
                      <div className="text-amber-600">
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{feature.label}</h3>
                      <p className="text-sm text-gray-600">{feature.value}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
            <div>
              <span className="inline-block text-amber-600 font-semibold text-sm uppercase tracking-wider mb-4">
                Galeria Premium
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900">
                Uma <span className="text-amber-600">Experiência Visual</span>
              </h2>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Buttons removed as requested */}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative overflow-hidden rounded-2xl cursor-pointer group ${
                  idx === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                onClick={() => {
                  setActiveImage(idx);
                  setShowGalleryModal(true);
                }}
              >
                <div className="aspect-[4/3] md:h-full">
                  <img
                    src={img}
                    alt={`${project.title} - Imagem ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                {idx === 0 && (
                  <div className="absolute bottom-6 left-6 text-white">
                    <span className="text-sm font-medium bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                      Imagem Principal
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-4 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 text-amber-300">
              <div className="w-6 h-6 rounded-full border border-amber-300 flex items-center justify-center">
                <ArrowRight className="w-3 h-3" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider">Oportunidade Única</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-6xl text-white leading-tight">
              Transforme Sua Visão <span className="text-amber-300">em Realidade</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Agende uma apresentação exclusiva e descubra como este projeto pode redefinir seu padrão de vida.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button
                onClick={() => window.open(`https://wa.me/5562992746409?text=${encodeURIComponent(`Olá! Gostaria de agendar uma apresentação exclusiva do ${project.title}.`)}`, '_blank')}
                className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-12 py-5 rounded-xl font-medium text-lg shadow-2xl"
              >
                <Calendar className="mr-3" size={20} />
                Agendar Apresentação
              </Button>
              
              <Button
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-12 py-5 rounded-xl font-medium text-lg backdrop-blur-sm"
              >
                <Download className="mr-3" size={20} />
                Solicitar Portfolio
              </Button>
            </div>
            
            <p className="text-sm text-gray-400 pt-8">
              Unidades limitadas • Resposta garantida em 24 horas
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />

      <AnimatePresence>
        {showGalleryModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setShowGalleryModal(false)}
          >
            <button
              className="absolute top-4 right-4 text-white p-2"
              onClick={() => setShowGalleryModal(false)}
            >
              <ArrowRight className="rotate-45" size={24} />
            </button>
            
            <div className="relative max-w-6xl w-full">
              <img
                src={galleryImages[activeImage]}
                alt="Gallery"
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              <div className="flex items-center justify-center gap-4 mt-8">
                {galleryImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveImage(idx);
                    }}
                    className={`w-3 h-3 rounded-full transition-all ${
                      idx === activeImage
                        ? 'bg-amber-500 scale-125'
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};