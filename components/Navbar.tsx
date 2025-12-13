import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useIsMobile, MOBILE_PERF_CONFIG } from '../hooks/useIsMobile';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  // Performance: Use passive scroll listener
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Lançamentos', href: '#lancamentos' },
    { name: 'Acervo', href: '#venda' },
    { name: 'Relatos', href: '#depoimentos' },
  ];

  const handleNavigation = (href: string) => {
    setMenuOpen(false);
    
    // If we are already on home, just scroll
    if (location.pathname === '/') {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        // If not on home, navigate to home with the hash
        navigate(`/${href}`);
    }
  };

  const handleLogoClick = () => {
      setMenuOpen(false);
      if (location.pathname === '/') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
          navigate('/');
      }
  };

  // Performance: No backdrop-blur on mobile (saves scroll recomposition cost)
  const shouldDisableBlur = isMobile && MOBILE_PERF_CONFIG.disableBlur;
  const scrolledClasses = shouldDisableBlur 
    ? 'bg-white shadow-sm py-4 border-b border-yellow-600' // Solid background for mobile
    : 'bg-white/95 backdrop-blur-md shadow-sm py-4 border-b border-yellow-600'; // Blur for desktop

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[10001] transition-[background-color,padding] duration-700 ease-in-out ${
        scrolled ? scrolledClasses : 'bg-transparent py-4 md:py-8'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* LOGO */}
          <div 
              className="font-serif text-2xl font-bold tracking-tighter text-primary z-50 cursor-pointer"
              onClick={handleLogoClick}
          >
              <img src="/images/logo.webp" alt="Daniel Feitosa" className="h-10 w-auto object-contain" />
          </div>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => handleNavigation(link.href)}
                className="text-[11px] font-bold text-gray-600 hover:text-accent transition-colors uppercase tracking-[0.2em] relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            
            <button 
              onClick={() => window.open('https://wa.me/556292746409?text=Ol%C3%A1%20Daniel!%20Acessei%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20sua%20consultoria%20imobili%C3%A1ria.', '_blank')}
              className="px-6 py-3 border border-accent text-accent text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-accent hover:text-white transition-all duration-500"
            >
              Fale Comigo
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <button 
            className="md:hidden text-primary hover:text-accent transition-colors z-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU - MOVED OUTSIDE NAV TO AVOID CLIPPING */}
      <div className={`md:hidden fixed inset-0 bg-white z-[10000] flex flex-col justify-center items-center gap-8 transition-all duration-500 ${
        menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}>
           {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleNavigation(link.href)}
              // MATCHING DESKTOP STYLE: Uppercase, spacing, bold, smaller font
              className="text-lg font-bold text-gray-800 hover:text-accent uppercase tracking-[0.2em] transition-colors"
            >
              {link.name}
            </button>
          ))}
          
          {/* MATCHING DESKTOP BUTTON STYLE & TEXT */}
          <button 
            onClick={() => window.open('https://wa.me/556292746409?text=Ol%C3%A1%20Daniel!%20Acessei%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20sua%20consultoria%20imobili%C3%A1ria.', '_blank')}
            className="mt-4 px-8 py-4 border border-accent text-accent text-xs font-bold uppercase tracking-[0.2em] hover:bg-accent hover:text-white transition-all duration-500"
          >
            Fale Comigo
          </button>
      </div>
    </>
  );
};