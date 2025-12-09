import React from 'react';
import { Instagram, MessageCircle, Mail, MapPin, ArrowUp } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigation = (hash: string) => {
    if (location.pathname === '/') {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/${hash}`);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    // Updated Background: Light Gray base with Golden Gradient coming from bottom
    <footer className="bg-gradient-to-t from-yellow-50 via-zinc-50 to-zinc-50 pt-24 pb-12 relative overflow-hidden text-zinc-800">
      
      {/* Structural Lines (Top) */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-zinc-200" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-12 mb-20 relative">
          
          {/* Vertical Separator Lines (Hidden on Mobile) */}
          <div className="hidden md:block absolute top-0 bottom-0 left-[33%] w-[1px] bg-zinc-200" />
          <div className="hidden md:block absolute top-0 bottom-0 left-[66%] w-[1px] bg-zinc-200" />

          {/* Column 1: Brand & About (4 cols) */}
          <div className="md:col-span-4 space-y-8 pr-8">
            <h2 className="font-serif text-3xl text-gray-900">
              Daniel Feitosa
              <span className="text-yellow-600">.</span>
            </h2>
            <p className="text-zinc-500 font-light leading-relaxed">
              Especialista em propriedades de alto padrão e investimentos estratégicos. Conectando pessoas a estilos de vida exclusivos em Anápolis e região.
            </p>
            <div className="flex items-center gap-4">
               {/* Social Icons */}
               <a 
                 href="https://wa.me/556292746409" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-white hover:border-yellow-600 hover:bg-yellow-600 transition-all duration-300"
               >
                 <MessageCircle size={18} />
               </a>
               <a 
                 href="https://www.instagram.com/daniel_feitosadd" 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-white hover:border-yellow-600 hover:bg-yellow-600 transition-all duration-300"
               >
                 <Instagram size={18} />
               </a>
            </div>
          </div>

          {/* Column 2: Navigation (4 cols - Adjusted for spacing) */}
          <div className="md:col-span-4 md:px-12 space-y-8">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">
              Navegação
            </h3>
            <ul className="space-y-4">
              <li>
                <button onClick={() => handleNavigation('#lancamentos')} className="text-zinc-500 hover:text-yellow-600 transition-colors text-sm tracking-wide block py-1 border-b border-transparent hover:border-zinc-200 w-fit text-left">
                    Lançamentos
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('#venda')} className="text-zinc-500 hover:text-yellow-600 transition-colors text-sm tracking-wide block py-1 border-b border-transparent hover:border-zinc-200 w-fit text-left">
                    Acervo
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('#depoimentos')} className="text-zinc-500 hover:text-yellow-600 transition-colors text-sm tracking-wide block py-1 border-b border-transparent hover:border-zinc-200 w-fit text-left">
                    Relatos
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact (4 cols) */}
          <div className="md:col-span-4 md:pl-12 space-y-8">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">
              Contato
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-zinc-500 group">
                <span className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-zinc-400 group-hover:text-yellow-600 transition-colors shrink-0">
                   <MapPin size={18} />
                </span>
                <div>
                   <span className="block text-gray-900 text-sm font-medium">Anápolis - GO</span>
                   <span className="text-xs">Atendimento Presencial & Remoto</span>
                </div>
              </li>
              
              <li className="flex items-start gap-4 text-zinc-500 group">
                <span className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-zinc-400 group-hover:text-yellow-600 transition-colors shrink-0">
                   <MessageCircle size={18} />
                </span>
                <div>
                   <span className="block text-gray-900 text-sm font-medium">+55 (62) 9 9274-6409</span>
                   <span className="text-xs">WhatsApp & Fone</span>
                </div>
              </li>

              <li className="flex items-start gap-4 text-zinc-500 group">
                <span className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-zinc-400 group-hover:text-yellow-600 transition-colors shrink-0">
                   <Mail size={18} />
                </span>
                <div className="break-all">
                   <span className="block text-gray-900 text-sm font-medium">danmendes20101@gmail.com</span>
                   <span className="text-xs">Email Corporativo</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-zinc-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left order-2 md:order-1">
              <p className="text-zinc-400 text-xs tracking-wider font-light">
                © {currentYear} Daniel Feitosa Consultoria.
              </p>
          </div>
          
           {/* Developer Credit - Centered & Refined */}
           <div className="order-1 md:order-2">
               <a 
                href="https://wa.me/556198031185?text=Ola,%20Gostaria%20de%20fazer%20um%20orcamento!" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black text-[10px] font-normal tracking-[0.2em] hover:text-yellow-600 transition-colors uppercase"
              >
                  Desenvolvido por Gusta
              </a>
           </div>

          <button 
             onClick={scrollToTop}
             className="flex items-center gap-2 text-zinc-400 hover:text-yellow-600 transition-colors text-xs font-bold uppercase tracking-widest group order-3"
          >
             Voltar ao Topo
             <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};