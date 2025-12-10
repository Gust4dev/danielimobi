import React from 'react';
import { Section } from './ui/Section';
import { LuxuryReveal } from './ui/LuxuryReveal';
import { ShieldCheck, TrendingUp, Key } from 'lucide-react';

export const Authority: React.FC = () => {
  return (
    // WRAPPER FULL WIDTH - Remove o "quadrado no meio"
    <section className="relative w-full bg-[#0a0a0a] text-white py-32 overflow-hidden border-y border-accent/30">
      
      {/* Background Ambience - Deep Luxury */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-900 via-[#0a0a0a] to-[#0a0a0a] opacity-80" />
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
      
      {/* Golden Glow - Sophistication */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Border Lines Decorativas (O "Algo em volta") */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      {/* Conteúdo Centralizado */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* LADO ESQUERDO: A FILOSOFIA */}
          <div className="lg:col-span-7 space-y-10">
            <LuxuryReveal>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-[1px] bg-gradient-to-r from-accent to-transparent"></div>
                <span className="text-accent uppercase tracking-[0.25em] text-[10px] sm:text-xs font-bold font-sans">
                  Private Broker
                </span>
              </div>
            </LuxuryReveal>

            <LuxuryReveal delay={0.1}>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tight">
                "Não apresentamos <br className="hidden md:block"/>
                apenas imóveis. <br />
                Entregamos <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-200 to-accent italic">inteligência <br className="hidden md:block"/> de mercado</span>."
              </h2>
            </LuxuryReveal>

            <LuxuryReveal delay={0.2}>
              <div className="relative pl-6 border-l border-white/10">
                <p className="text-gray-400 font-sans text-lg leading-relaxed max-w-xl font-light">
                  No mercado de luxo, o seu tempo é o ativo mais valioso. Nossa curadoria filtra o ruído e traz apenas o que oferece <strong className="text-gray-200 font-medium">segurança jurídica</strong> e <strong className="text-gray-200 font-medium">potencial real de valorização</strong>.
                </p>
              </div>
            </LuxuryReveal>
          </div>

          {/* LADO DIREITO: OS PILARES */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8 lg:space-y-12 pl-0 lg:pl-8 border-l-0 lg:border-l border-white/5 py-8">
             <StatCard 
               icon={ShieldCheck}
               title="Segurança Jurídica"
               desc="Análise documental rigorosa antes de qualquer visita. Zero risco para o seu patrimônio."
               delay={0.3}
             />
             <div className="w-full h-[1px] bg-white/5 lg:hidden" />
             <StatCard 
               icon={TrendingUp}
               title="Visão de Investidor"
               desc="Identificamos oportunidades com potencial de valorização acima da média do mercado."
               delay={0.4}
             />
             <div className="w-full h-[1px] bg-white/5 lg:hidden" />
             <StatCard 
               icon={Key}
               title="Acesso Off-Market"
               desc="Acesso a propriedades exclusivas que não chegam aos portais comuns."
               delay={0.5}
             />
          </div>

        </div>
      </div>
    </section>
  );
};

// Componente Cartão Sofisticado Minimalista
const StatCard = ({ icon: Icon, title, desc, delay }: any) => (
  <LuxuryReveal delay={delay}>
    <div className="group flex gap-6 items-start transition-all duration-500 hover:translate-x-2">
      <div className="shrink-0 mt-1">
        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all duration-500">
          <Icon className="w-4 h-4 text-accent/80 group-hover:text-accent" strokeWidth={1.5} />
        </div>
      </div>
      <div>
        <h4 className="font-serif text-xl mb-3 text-white group-hover:text-accent transition-colors duration-300">
          {title}
        </h4>
        <p className="text-sm text-gray-500 group-hover:text-gray-400 font-light leading-relaxed transition-colors duration-300">
          {desc}
        </p>
      </div>
    </div>
  </LuxuryReveal>
);