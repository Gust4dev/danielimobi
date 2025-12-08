import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { SALES_DETAILS, WHATSAPP_LINK } from '../constants';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ProjectGallery } from '../components/ProjectGallery';
import { CheckCircle2, MapPin, Ruler, BedDouble, Calendar, Car, DollarSign } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const SalesDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  // Normalize ID to upper case to match constants keys if needed, 
  // but here I used keys 'OPCAO1', 'OPCAO2', 'OPCAO3' in constants.ts
  // The route params will likely be 'opcao1', so I should probably normalize to uppercase for lookup
  const salesId = id ? id.toUpperCase() : '';
  const item = SALES_DETAILS[salesId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!item) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header / Title Section */}
      <div className="pt-32 pb-12 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
                <span className="text-yellow-600 font-bold tracking-widest text-sm uppercase">Oportunidade Exclusiva</span>
                <h1 className="font-serif text-5xl md:text-6xl text-gray-900">{item.title}</h1>
                <div className="flex items-center gap-2 text-gray-500">
                    <MapPin size={18} />
                    <span className="text-lg">{item.location}</span>
                </div>
            </div>
            
            <div className="text-right">
                <div className="text-2xl md:text-4xl font-serif text-gray-900 border-l-4 border-yellow-600 pl-4 py-2">
                    {item.price || item.subtitle}
                </div>
            </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-4 md:px-0 mb-20">
         <ProjectGallery images={item.gallery} />
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 pb-24 grid md:grid-cols-12 gap-16">
          
          {/* Left: Description */}
          <div className="md:col-span-8 space-y-12">
             <div>
                <h2 className="text-3xl font-serif text-gray-900 mb-6">Sobre o Imóvel</h2>
                <div className="prose prose-lg text-gray-600 leading-relaxed whitespace-pre-line">
                    {item.fullDescription}
                </div>
             </div>

             <div>
                <h3 className="text-2xl font-serif text-gray-900 mb-6">Características</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {item.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg group hover:bg-yellow-50 transition-colors">
                            <span className="bg-white p-2 rounded-full shadow-sm text-yellow-600 group-hover:scale-110 transition-transform">
                                <CheckCircle2 size={20} />
                            </span>
                            <span className="font-medium text-gray-800">{feature}</span>
                        </div>
                    ))}
                </div>
             </div>
          </div>

          {/* Right: Specs & CTA */}
          <div className="md:col-span-4 space-y-8">
              <div className="bg-zinc-50 p-8 rounded-xl shadow-sm border border-zinc-100 sticky top-32">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 uppercase tracking-wider">Detalhes</h3>
                  
                  <div className="space-y-6">
                      {item.specs.map((spec, idx) => (
                          <div key={idx} className="flex items-center justify-between border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                              <span className="text-gray-500 flex items-center gap-2">
                                  {(spec.label === 'Quartos' || spec.label === 'Suítes') && <BedDouble size={18} />}
                                  {spec.label === 'Metragem' && <Ruler size={18} />}
                                  {spec.label === 'Valor' && <DollarSign size={18} />}
                                  {spec.label === 'Vagas' && <Car size={18} />}
                                  {spec.label !== 'Quartos' && spec.label !== 'Suítes' && spec.label !== 'Metragem' && spec.label !== 'Valor' && spec.label !== 'Vagas' && <CheckCircle2 size={18} />}
                                  {spec.label}
                              </span>
                              <span className="font-bold text-gray-900 text-right">{spec.value}</span>
                          </div>
                      ))}
                  </div>

                  <div className="mt-8 space-y-4">
                  <div className="mt-8 space-y-4">
                      <Button 
                        onClick={() => window.open(WHATSAPP_LINK, '_blank')}
                        className="w-full bg-gray-900 text-white hover:bg-yellow-600 py-4 uppercase font-bold text-sm tracking-widest"
                      >
                          Tenho Interesse
                      </Button>
                  </div>
                  </div>
              </div>
          </div>

      </div>

      <Footer />
    </div>
  );
};
