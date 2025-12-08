import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Zap, Shield, MapPin, Star, Gem, Layout } from 'lucide-react'; // Adicionei ícones novos para variar
import { Button } from './ui/Button';
import { Section } from './ui/Section';

export const FeaturedProjects: React.FC = () => {
  const navigate = useNavigate();

  // Função placeholder para navegação futura
  const handleProjectClick = (project: string) => {
    navigate(`/empreendimento/${project.toLowerCase()}`);
  };

  return (
    <div id="lancamentos" className="relative bg-zinc-50 overflow-hidden">
      
      {/* BACKGROUND SUTIL (Mármore Abstrato) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-yellow-600/5 blur-[150px]" />
        <div className="absolute top-[40%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gray-300/20 blur-[120px]" />
      </div>

      <Section className="py-24 relative z-10">
        
        {/* HEADER DA SEÇÃO */}
        <div className="text-center mb-24 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className="font-serif text-5xl md:text-6xl text-gray-900 tracking-tight">
              Destaques Exclusivos
            </h2>
            <div className="h-[2px] w-24 bg-yellow-600 mx-auto mt-6" />
          </motion.div>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
            Oportunidades únicas de investimento e moradia com a garantia de excelência.
          </p>
        </div>

        <div className="flex flex-col gap-32">
          
          {/* === PROJETO 1: HIT (O Investimento Tech) === */}
          <div className="grid md:grid-cols-12 gap-8 items-center">
             
             {/* IMAGEM INTERATIVA */}
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               whileHover={{ scale: 1.02 }}
               transition={{ duration: 0.4 }}
               onClick={() => handleProjectClick('HIT')}
               className="md:col-span-7 relative group cursor-pointer"
             >
                {/* Glow Dourado */}
                <div className="absolute -inset-1 bg-yellow-600/0 group-hover:bg-yellow-600/20 blur-xl transition-all duration-500 -z-10" />

                <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden shadow-2xl bg-white">
                   <div className="absolute inset-4 border border-white/30 z-20 pointer-events-none" />
                   
                   <img 
                       src="/images/HIT/HITzigzag_main.jpg" 
                       alt="HIT Smart Living" 
                       className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                   />
                   
                   <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-700" />
                   
                   <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <span className="bg-white/90 backdrop-blur text-gray-900 px-6 py-3 text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg">
                        Ver Detalhes <ArrowRight size={14} />
                      </span>
                   </div>
                </div>
             </motion.div>

             {/* TEXTO - HIT */}
             <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="md:col-span-5 md:pl-8 space-y-8"
             >
                <div>
                    <span className="text-yellow-600 font-bold tracking-widest text-xs uppercase mb-2 block">Lançamento</span>
                    <h3 className="text-5xl font-serif text-gray-900 mb-4">HIT</h3>
                    <p className="text-xl text-gray-500 italic font-light border-l-2 border-yellow-600 pl-4">
                        "É Moderno. É Prático. É Rentável."
                    </p>
                </div>

                <p className="text-gray-600 leading-relaxed text-base font-light">
                    Localizado na <strong>Cidade Universitária</strong>, o HIT une a tendência mundial dos compactos com tecnologia de ponta. O metro quadrado mais desejado de Anápolis, pensado para o investidor que busca valorização e liquidez.
                </p>

                <ul className="space-y-4 pt-4 border-t border-gray-200">
                    <li className="flex items-center gap-3 text-gray-800 font-medium">
                        <Zap className="text-yellow-600 w-5 h-5" /> 
                        <span>Smart Living (Locker & Automação)</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-800 font-medium">
                        <Shield className="text-yellow-600 w-5 h-5" /> 
                        <span>Segurança (Guarita Blindada)</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-800 font-medium">
                        <MapPin className="text-yellow-600 w-5 h-5" /> 
                        <span>Localização Universitária</span>
                    </li>
                </ul>

                <Button 
                  onClick={() => handleProjectClick('HIT')}
                  className="w-full md:w-auto bg-gray-900 text-white hover:bg-yellow-600 px-10 py-4 uppercase tracking-widest text-xs font-bold transition-all duration-300"
                >
                    Conhecer HIT
                </Button>
             </motion.div>
          </div>

          {/* === PROJETO 2: DOMUS BLACK (A Grife) === */}
          <div className="grid md:grid-cols-12 gap-8 items-center">
             
             {/* TEXTO - DOMUS (Esquerda) */}
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="md:col-span-5 md:pr-8 space-y-8 order-2 md:order-1"
             >
                <div className="md:text-right">
                    <span className="text-gray-900 bg-gray-200 px-3 py-1 font-bold tracking-widest text-xs uppercase mb-2 inline-block">Black Edition</span>
                    <h3 className="text-5xl font-serif text-gray-900 mb-4">DOMUS</h3>
                    <p className="text-xl text-gray-500 italic font-light border-r-2 border-yellow-600 pr-4 inline-block">
                        "Um novo conceito de sofisticação urbana."
                    </p>
                </div>

                <p className="text-gray-600 leading-relaxed text-base font-light md:text-right">
                    Uma obra-prima assinada pelo <strong>Estúdio LF</strong>. Idealizado para o novo viver, o Domus une beleza, conforto e hiperconexão na região de maior demanda da cidade.
                </p>

                <ul className="space-y-4 pt-4 border-t border-gray-200 md:flex md:flex-col md:items-end">
                    <li className="flex items-center gap-3 text-gray-800 font-medium">
                        Exclusividade (Apenas 38 Unidades) <Star className="text-yellow-600 w-5 h-5" />
                    </li>
                    <li className="flex items-center gap-3 text-gray-800 font-medium">
                        Design Assinado (Estúdio LF) <Gem className="text-yellow-600 w-5 h-5" />
                    </li>
                    <li className="flex items-center gap-3 text-gray-800 font-medium">
                        Plantas Inteligentes (22 a 37m²) <Layout className="text-yellow-600 w-5 h-5" />
                    </li>
                </ul>

                <div className="md:flex md:justify-end">
                    <Button 
                      onClick={() => handleProjectClick('DOMUS')}
                      className="w-full md:w-auto bg-gray-900 text-white hover:bg-yellow-600 px-10 py-4 uppercase tracking-widest text-xs font-bold transition-all duration-300"
                    >
                        Conhecer Domus
                    </Button>
                </div>
             </motion.div>

             {/* IMAGEM INTERATIVA (Direita) */}
             <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               whileHover={{ scale: 1.02 }}
               transition={{ duration: 0.4 }}
               onClick={() => handleProjectClick('DOMUS')}
               className="md:col-span-7 relative group cursor-pointer order-1 md:order-2"
             >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-yellow-600/0 group-hover:bg-yellow-600/20 blur-xl transition-all duration-500 -z-10" />

                <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden shadow-2xl bg-white">
                   <div className="absolute inset-4 border border-white/30 z-20 pointer-events-none" />
                   
                   <img 
                       src="/images/DOMUS/domuszigzag_main.png" 
                       alt="DOMUS Empreendimento" 
                       className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                   />
                   
                   <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-700" />

                   <div className="absolute bottom-8 left-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <span className="bg-white/90 backdrop-blur text-gray-900 px-6 py-3 text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg">
                        Ver Detalhes <ArrowRight size={14} />
                      </span>
                   </div>
                </div>
             </motion.div>
          </div>

        </div>
      </Section>
    </div>
  );
};