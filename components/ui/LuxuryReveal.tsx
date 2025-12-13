import React from 'react';
import { motion } from 'framer-motion';
import { useIsMobile, MOBILE_PERF_CONFIG } from '../../hooks/useIsMobile';

interface LuxuryRevealProps {
  children: React.ReactNode;
  delay?: number;
  width?: "fit-content" | "100%";
  className?: string;
}

export const LuxuryReveal: React.FC<LuxuryRevealProps> = ({ 
  children, 
  delay = 0, 
  width = "fit-content",
  className = "" 
}) => {
  const isMobile = useIsMobile();
  
  // Performance: Skip animation entirely on mobile
  // This removes IntersectionObserver overhead and animation calculations
  if (isMobile && MOBILE_PERF_CONFIG.disableAnimations) {
    return (
      <div style={{ position: "relative", width }} className={className}>
        {children}
      </div>
    );
  }

  return (
    <div style={{ position: "relative", width, overflow: "hidden" }} className={className}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: delay, ease: [0.25, 0.25, 0.25, 0.75] }}
      >
        {children}
      </motion.div>
    </div>
  );
};
