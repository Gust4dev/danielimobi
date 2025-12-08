import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Lançamentos', href: '#lancamentos' },
    { name: 'Investimento', href: '#investimento' },
    { name: 'Venda', href: '#venda' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        <div className="font-serif text-2xl font-bold tracking-tighter text-primary">
          BRAND<span className="text-accent">.</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-primary hover:text-accent transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <Button>Fale Conosco</Button>
        </div>

        <button 
          className="md:hidden text-primary"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg p-6 flex flex-col gap-6 items-center">
           {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-lg font-serif text-primary hover:text-accent"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button className="w-full">Fale Conosco</Button>
        </div>
      )}
    </nav>
  );
};