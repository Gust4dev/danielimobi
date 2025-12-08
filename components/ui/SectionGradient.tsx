
import React from 'react';

// === CONFIGURAÇÃO DO GRADIENTE ===
const GRADIENT_HEIGHT = "h-40";      // Altura do gradiente (ex: h-24, h-32, h-40)
const GRADIENT_OPACITY = "from-accent/10"; // Opacidade/Cor (ex: from-accent/5, from-accent/10)
// ===============================

export const SectionGradient: React.FC = () => {
    return (
        <div 
            className={`absolute top-0 left-0 w-full pointer-events-none bg-gradient-to-b ${GRADIENT_OPACITY} to-transparent ${GRADIENT_HEIGHT} z-10`}
            aria-hidden="true"
        />
    );
};
