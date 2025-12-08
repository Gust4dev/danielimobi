import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from './ui/Button';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-10 pb-10">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
        
        <div className="space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl text-primary">
            Vamos tomar um café e definir sua estratégia imobiliária?
          </h2>
          <p className="text-black max-w-lg mx-auto">
            Entre em contato para agendar uma reunião exclusiva.
          </p>
          <div className="flex justify-center">
             <Button 
               onClick={() => window.open('https://wa.me/556292746409?text=Ol%C3%A1%20Daniel!%20Acessei%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20sua%20consultoria%20imobili%C3%A1ria.', '_blank')}
               className="gap-3 shadow-xl hover:shadow-2xl px-8 py-4 text-base"
             >
                <MessageCircle size={20} />
                INICIAR CONVERSA NO WHATSAPP
             </Button>
          </div>
        </div>

        <div className="border-t border-gray-100 w-full" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-black gap-4">
          <div className="text-center md:text-left">
            <p>CRECI: 123456 | Anápolis - GO</p>
          </div>
          <div className="font-serif font-bold text-lg text-primary">
            <img src="/images/logo.png" alt="Brand Logo" className="h-10 w-auto object-contain" />
          </div>
          <div className="text-center md:text-right">
             <p>contato@exemplo.com.br</p>
             <p>© 2025 Daniel Imóveis. Todos os direitos reservados.</p>
          </div>
        </div>

      </div>
    </footer>
  );
};