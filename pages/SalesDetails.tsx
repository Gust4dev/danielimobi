import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { SALES_DETAILS } from '../constants';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ProjectGallery } from '../components/ProjectGallery';
import { CheckCircle2, MapPin, Ruler, BedDouble, Car, DollarSign, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const SalesDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const salesId = id ? id.toUpperCase() : '';
  const item = SALES_DETAILS[salesId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!item) {
    return <Navigate to="/" replace />;
  }

  // Função para gerar link do Zap dinâmico
  const whatsappUrl = `https://wa.me/5562992746409?text=${encodeURIComponent(`Olá! Vi o imóvel "${item.title}" no seu Acervo Online e gostaria de saber o valor e detalhes.`)}`;

  return (
    <div className="min-h-screen bg-[#FAFAFA]"> {/* Fundo Off-White Global */}
      <Navbar />
      
      {/* HEADER / TÍTULO (Com visual de revista) */}
      <div className="relative pt-40 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Elemento Decorativo de Fundo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 relative z-10">
            <div className="space-y-6">
                <div className="flex items-center gap-3">
                   <div className="w-8 h-[1px] bg-accent"></div>
                   <span className="text-accent font-bold tracking-[0.2em] text-xs uppercase">Oportunidade Exclusiva</span>
                </div>
                
                <h1 className="font-serif text-5xl md:text-7xl text-primary leading-none">
                  {item.title}
                </h1>
                
                <div className="flex items-center gap-2 text-gray-500 font-light">
                    <MapPin size={18} className="text-accent" />
                    <span className="text-lg tracking-wide">{item.location}</span>
                </div>
            </div>
            
            <div className="text-right">
                <div className="text-3xl md:text-4xl font-serif text-primary border-l-4 border-accent pl-6 py-1">
                    {item.price || <span className="italic text-gray-400 text-2xl">Consulte</span>}
                </div>
            </div>
        </div>
      </div>

      {/* GALERIA (Full Width container) */}
      <div className="max-w-7xl mx-auto px-0 md:px-6 mb-24">
         <ProjectGallery images={item.gallery} />
      </div>

      {/* CONTEÚDO (Grid Assimétrico) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-32 grid md:grid-cols-12 gap-16">
          
          {/* Esquerda: Descrição (8 colunas) */}
          <div className="md:col-span-8 space-y-16">
              
              {/* Sobre */}
              <div className="space-y-6">
                 <h2 className="text-3xl font-serif text-primary border-b border-gray-200 pb-4 inline-block">Sobre o Imóvel</h2>
                 <div className="prose prose-lg text-gray-600 leading-loose font-light whitespace-pre-line">
                     {item.fullDescription}
                 </div>
              </div>

              {/* Características (Grid Clean) */}
              <div>
                 <h3 className="text-2xl font-serif text-primary mb-8">Diferenciais</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                     {item.features.map((feature, idx) => (
                         <div key={idx} className="flex items-center gap-4 p-4 border-b border-gray-100 hover:border-accent transition-colors group">
                             <span className="text-gray-300 group-hover:text-accent transition-colors">
                                 <CheckCircle2 size={18} />
                             </span>
                             <span className="font-medium text-gray-700 text-sm tracking-wide">{feature}</span>
                         </div>
                     ))}
                 </div>
              </div>
          </div>

          {/* Direita: Specs & CTA (Sticky Card de Luxo) */}
          <div className="md:col-span-4 relative">
              <div className="bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 sticky top-32">
                  <div className="absolute top-0 left-0 w-full h-1 bg-accent" /> {/* Linha Dourada no topo */}
                  
                  <h3 className="text-lg font-bold text-primary mb-8 uppercase tracking-[0.2em] text-center">Ficha Técnica</h3>
                  
                  <div className="space-y-6">
                      {item.specs.map((spec, idx) => (
                          <div key={idx} className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0">
                              <span className="text-gray-400 text-sm flex items-center gap-3 font-medium uppercase tracking-wider">
                                  {getIconForSpec(spec.label)}
                                  {spec.label}
                              </span>
                              <span className="font-serif text-lg text-primary">{spec.value}</span>
                          </div>
                      ))}
                  </div>

                  <div className="mt-10 space-y-4">
                      <Button 
                        onClick={() => window.open(whatsappUrl, '_blank')}
                        className="w-full bg-primary text-white hover:bg-accent py-5 uppercase font-bold text-xs tracking-[0.2em] shadow-xl transition-all duration-500 flex items-center justify-center gap-2"
                      >
                          Tenho Interesse <ArrowRight size={16} />
                      </Button>
                      <p className="text-center text-xs text-gray-400 font-light">
                        Atendimento direto via WhatsApp
                      </p>
                  </div>
              </div>
          </div>

      </div>

      <Footer />
    </div>
  );
};

// Helper para ícones (mantém o código limpo)
const getIconForSpec = (label: string) => {
    switch (label) {
        case 'Quartos':
        case 'Suítes': return <BedDouble size={16} />;
        case 'Metragem': return <Ruler size={16} />;
        case 'Valor': return <DollarSign size={16} />;
        case 'Vagas': return <Car size={16} />;
        default: return <CheckCircle2 size={16} />;
    }
};
