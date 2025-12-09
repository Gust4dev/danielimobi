import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { SALES_DETAILS } from '../constants';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ProjectGallery } from '../components/ProjectGallery';
import { 
  CheckCircle2, 
  MapPin, 
  Ruler, 
  BedDouble, 
  Car, 
  Share2, 
  Calendar,
  Building,
  Trees,
  ShieldCheck,
  ChevronRight,
  Heart,
  Download,
  Printer,
  Mail,
  Phone,
  Menu,
  X,
  ChevronLeft,
  ChevronDown,
  ArrowRight
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { motion } from 'framer-motion';

export const SalesDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const salesId = id ? id.toUpperCase() : '';
  const item = SALES_DETAILS[salesId];
  const [isFavorite, setIsFavorite] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSection, setActiveMobileSection] = useState<string>('info');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!item) {
    return <Navigate to="/" replace />;
  }

  const whatsappUrl = `https://wa.me/5562992746409?text=${encodeURIComponent(`Olá! Vi o imóvel "${item.title}" no seu catálogo e gostaria de obter informações detalhadas.`)}`;
  const emailSubject = `Consulta sobre: ${item.title}`;
  const emailBody = `Prezado(a),\n\nGostaria de receber mais informações sobre o imóvel:\n${item.title}\n${item.location}\n\nAtenciosamente,`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      {/* === MOBILE FLOATING ACTION BAR === */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 p-4 shadow-2xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">Valor</p>
            <p className="font-serif text-lg text-gray-900">{item.price}</p>
          </div>
          <Button
            onClick={() => window.open(whatsappUrl, '_blank')}
            className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-6 py-3 rounded-lg font-medium shadow-lg"
          >
            Tenho Interesse
          </Button>
        </div>
      </div>

      {/* === HERO SECTION - RESPONSIVE === */}
      <div className="relative h-[50vh] md:h-[70vh] w-full overflow-hidden mt-16 md:mt-0">
        <div className="absolute inset-0">
          <img 
            src={item.mainImage || item.gallery[0]} 
            alt={item.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/40 to-transparent" />
        </div>

        {/* Mobile Back Button */}
        <button
          onClick={() => window.history.back()}
          className="absolute top-4 left-4 md:hidden w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center"
        >
          <ChevronLeft size={20} className="text-white" />
        </button>

        {/* Mobile Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2 md:hidden">
          <button className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center">
            <Share2 size={18} className="text-white" />
          </button>
          <button 
            onClick={() => setIsFavorite(!isFavorite)}
            className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center"
          >
            <Heart size={18} className={isFavorite ? "fill-red-500 text-red-500" : "text-white"} />
          </button>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-4 md:p-12">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white space-y-3 md:space-y-4"
            >
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="bg-gradient-to-r from-amber-600 to-amber-800 text-white px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full">
                  {item.specs.find(s => s.label === 'Tipo')?.value || 'Exclusivo'}
                </span>
                <span className="text-xs text-amber-100 bg-black/20 px-2 py-1 rounded-full">
                  Código: {salesId}
                </span>
              </div>
              
              <h1 className="font-serif text-2xl md:text-5xl lg:text-6xl text-white leading-tight">
                {item.title}
              </h1>
              
              <div className="flex items-center gap-2 text-amber-50/90">
                <MapPin size={16} className="text-amber-300" />
                <span className="text-sm md:text-lg font-light">{item.location}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* === MOBILE NAVIGATION TABS === */}
      <div className="md:hidden sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="flex overflow-x-auto scrollbar-hide">
          {['info', 'features', 'gallery', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => {
                setActiveMobileSection(section);
                document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`flex-shrink-0 px-4 py-3 text-sm font-medium transition-colors ${
                activeMobileSection === section
                  ? 'text-amber-600 border-b-2 border-amber-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {section === 'info' && 'Informações'}
              {section === 'features' && 'Características'}
              {section === 'gallery' && 'Galeria'}
              {section === 'contact' && 'Contato'}
            </button>
          ))}
        </div>
      </div>

      {/* === MAIN CONTENT - RESPONSIVE === */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-12">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 md:gap-8">
          
          {/* LEFT COLUMN - Main Content (Mobile First) */}
          <div className="lg:col-span-8 space-y-6 md:space-y-10">
            
            {/* Quick Specs Grid - Mobile Compact */}
            <div className="md:hidden" id="info">
              <div className="grid grid-cols-2 gap-3 mb-6">
                {item.specs.slice(0, 4).map((spec, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-3 border border-gray-100">
                    <div className="flex items-center gap-2 mb-1 text-gray-500">
                      {getIcon(spec.label)}
                      <span className="text-xs font-medium">{spec.label}</span>
                    </div>
                    <p className="font-serif text-lg text-gray-900">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Property Description - Mobile Accordion */}
            <div className="bg-white rounded-xl shadow-sm p-4 md:p-8 border border-gray-100" id="info">
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <h2 className="font-serif text-xl md:text-2xl text-gray-900">Descrição Detalhada</h2>
                <ChevronDown className="md:hidden text-gray-400" />
              </div>
              <div className="prose prose-sm md:prose-lg max-w-none text-gray-600 leading-relaxed space-y-3 md:space-y-4">
                {item.fullDescription.split('\n').map((paragraph, idx) => (
                  <p key={idx} className="text-gray-700 text-sm md:text-base">{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Premium Features - Mobile Optimized */}
            <div className="bg-white rounded-xl shadow-sm p-4 md:p-8 border border-gray-100" id="features">
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="text-amber-600" size={20} />
                <h2 className="font-serif text-xl md:text-2xl text-gray-900">Características</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {item.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 hover:bg-amber-50/50 rounded-lg transition-colors">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-amber-100 flex items-center justify-center">
                      <ChevronRight size={12} className="text-amber-600" />
                    </div>
                    <span className="text-sm md:text-base text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo Gallery - Mobile Optimized */}
            <div className="bg-white rounded-xl shadow-sm p-4 md:p-8 border border-gray-100" id="gallery">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-xl md:text-2xl text-gray-900">Galeria de Imagens</h2>
                <div className="hidden md:flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    <Download size={16} className="mr-2" />
                    Baixar
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    <Printer size={16} className="mr-2" />
                    Imprimir
                  </Button>
                </div>
              </div>
              <ProjectGallery images={item.gallery} />
              <div className="md:hidden flex items-center justify-center gap-4 mt-6">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-sm"
                >
                  <Download size={16} className="mr-2" />
                  Fotos
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-sm"
                >
                  <Printer size={16} className="mr-2" />
                  Imprimir
                </Button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Sidebar (Hidden on Mobile) */}
          <div className="hidden lg:block lg:col-span-4 space-y-6">
            {/* Desktop Contact Card */}
            <div className="bg-gradient-to-b from-gray-900 to-black rounded-xl shadow-xl p-6 text-white sticky top-28">
              <h3 className="font-serif text-xl mb-6 pb-4 border-b border-gray-700">
                Contato Direto
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-amber-600/20 flex items-center justify-center">
                    <Phone size={18} className="text-amber-300" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Telefone</p>
                    <p className="font-medium">(62) 99274-6409</p>
                  </div>
                </div>
                
                <a 
                  href={`mailto:?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`}
                  className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-amber-600/20 flex items-center justify-center">
                    <Mail size={18} className="text-amber-300" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">E-mail</p>
                    <p className="font-medium">Enviar Consulta</p>
                  </div>
                </a>
              </div>

              <Button
                onClick={() => window.open(whatsappUrl, '_blank')}
                className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white py-3.5 rounded-lg font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Agendar Visita Presencial
              </Button>
              
              <p className="text-xs text-gray-400 text-center mt-4">
                Resposta em até 24 horas úteis
              </p>
            </div>

            {/* Additional Details */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="font-serif text-lg text-gray-900 mb-4">Detalhes Adicionais</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-gray-50">
                  <span className="text-sm text-gray-500">Ano de Construção</span>
                  <span className="font-medium">2023</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-50">
                  <span className="text-sm text-gray-500">Condomínio</span>
                  <span className="font-medium">R$ 1.200/mês</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-50">
                  <span className="text-sm text-gray-500">IPTU</span>
                  <span className="font-medium">R$ 800/mês</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-gray-500">Disponibilidade</span>
                  <span className="font-medium text-green-600">Imediata</span>
                </div>
              </div>
            </div>

            {/* Documents */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="font-serif text-lg text-gray-900 mb-4">Documentação</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-blue-50 flex items-center justify-center">
                      <span className="text-blue-600 text-xs font-bold">PDF</span>
                    </div>
                    <span className="text-sm text-gray-700">Planta Baixa</span>
                  </div>
                  <Download size={16} className="text-gray-400" />
                </div>
                <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-green-50 flex items-center justify-center">
                      <span className="text-green-600 text-xs font-bold">DOC</span>
                    </div>
                    <span className="text-sm text-gray-700">Registro do Imóvel</span>
                  </div>
                  <Download size={16} className="text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === MOBILE CONTACT SECTION (Expanded) === */}
      <div className="lg:hidden bg-white border-t border-gray-200 mt-8" id="contact">
        <div className="p-6 space-y-6">
          <h3 className="font-serif text-xl text-gray-900">Entre em Contato</h3>
          
          <div className="space-y-4">
            <a 
              href={`tel:+5562992746409`}
              className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg"
            >
              <div className="w-12 h-12 rounded-full bg-amber-600/20 flex items-center justify-center">
                <Phone size={20} className="text-amber-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Telefone</p>
                <p className="font-medium text-gray-900">(62) 99274-6409</p>
              </div>
            </a>
            
            <a 
              href={`mailto:?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`}
              className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg"
            >
              <div className="w-12 h-12 rounded-full bg-amber-600/20 flex items-center justify-center">
                <Mail size={20} className="text-amber-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">E-mail</p>
                <p className="font-medium text-gray-900">Enviar Consulta</p>
              </div>
            </a>
          </div>

          <Button
            onClick={() => window.open(whatsappUrl, '_blank')}
            className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-4 rounded-lg font-medium text-sm"
          >
            <Phone size={18} className="mr-2" />
            Falar no WhatsApp
          </Button>
        </div>
      </div>

      {/* Mobile Bottom Padding */}
      <div className="h-20 md:h-0" />

      <Footer />
    </div>
  );
};

// Updated icon helper
const getIcon = (label: string) => {
  const iconClass = "text-amber-600";
  
  if (label.includes('Quarto') || label.includes('Suíte')) 
    return <BedDouble size={18} className={iconClass} />;
  if (label.includes('Metragem') || label.includes('Área')) 
    return <Ruler size={18} className={iconClass} />;
  if (label.includes('Vaga')) 
    return <Car size={18} className={iconClass} />;
  if (label.includes('Tipo')) 
    return <Building size={18} className={iconClass} />;
  if (label.includes('Ano')) 
    return <Calendar size={18} className={iconClass} />;
  
  return <Trees size={18} className={iconClass} />;
};