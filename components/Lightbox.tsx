import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: string[];
  selectedIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

const isVideo = (url: string) => url.toLowerCase().endsWith('.mp4');

export const Lightbox: React.FC<LightboxProps> = ({ 
  images, 
  selectedIndex, 
  isOpen, 
  onClose, 
  onNavigate 
}) => {
  
  // Keyboard Navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape': onClose(); break;
        case 'ArrowLeft': 
          onNavigate((selectedIndex - 1 + images.length) % images.length); 
          break;
        case 'ArrowRight': 
          onNavigate((selectedIndex + 1) % images.length); 
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, images.length, onClose, onNavigate]);

  // Swipe logic
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    onNavigate((selectedIndex + newDirection + images.length) % images.length);
  };

  if (!isOpen) return null;

  const currentUrl = images[selectedIndex];
  const isCurrentVideo = isVideo(currentUrl);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100000] bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={onClose} // Close on background click
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
             className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-[100010] p-2"
          >
            <X size={32} />
          </button>

          {/* Left Arrow (Desktop) */}
          <button
            onClick={(e) => { e.stopPropagation(); paginate(-1); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center text-white/50 hover:text-white transition-colors z-[100010] p-4 group"
          >
            <ChevronLeft size={48} className="group-hover:scale-110 transition-transform" />
          </button>

          {/* Right Arrow (Desktop) */}
          <button
            onClick={(e) => { e.stopPropagation(); paginate(1); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center text-white/50 hover:text-white transition-colors z-[100010] p-4 group"
          >
            <ChevronRight size={48} className="group-hover:scale-110 transition-transform" />
          </button>

          {/* Media Container */}
          <div 
             className="relative w-full h-full max-w-7xl mx-auto flex items-center justify-center p-4"
             onClick={(e) => e.stopPropagation()} // Prevent close when clicking content
          >
             {/* Note: We use a key to trigger animation on index change */}
             <motion.div
                key={selectedIndex}
                className="w-full h-full flex items-center justify-center"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.7}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
             >
                 {isCurrentVideo ? (
                    <video 
                        src={currentUrl} 
                        controls 
                        autoPlay 
                        className="max-h-[85vh] max-w-full outline-none shadow-2xl"
                    />
                 ) : (
                    <img
                        src={currentUrl}
                        alt={`Gallery ${selectedIndex}`}
                        className="max-h-[85vh] max-w-full object-contain select-none shadow-2xl"
                        draggable={false}
                    />
                 )}
             </motion.div>
             
             {/* Counter */}
             <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 font-mono text-sm pointer-events-none">
                {selectedIndex + 1} / {images.length}
             </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
