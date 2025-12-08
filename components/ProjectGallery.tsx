import React, { useState } from 'react';
import { Lightbox } from './Lightbox';
import { Maximize2, MoveDiagonal } from 'lucide-react';

interface ProjectGalleryProps {
  images: string[];
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // We show up to 5 images in the grid
  // 0, 1: Large (50% each)
  // 2, 3, 4: Small (33% each)
  const displayImages = images.slice(0, 5);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <div className="flex flex-col gap-2">
          {/* Top Row: 2 Large Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-[400px]">
             {images.slice(0, 2).map((img, idx) => (
                <div key={idx} className="relative overflow-hidden cursor-pointer group rounded-sm" onClick={() => openLightbox(idx)}>
                    <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>
             ))}
          </div>

          {/* Bottom Row: 3 Small Images */}
          <div className="grid grid-cols-3 gap-2 h-[200px]">
              {images.slice(2, 5).map((img, idx) => {
                  const actualIndex = idx + 2;
                  const isLast = idx === 2; // Last of the 3 small ones
                  const remainingCount = Math.max(0, images.length - 5);

                  return (
                    <div 
                        key={actualIndex} 
                        className="relative overflow-hidden cursor-pointer group rounded-sm"
                        onClick={() => openLightbox(actualIndex)}
                    >
                        <img src={img} alt={`Gallery ${actualIndex}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                        
                        {/* Overlay for the last image if there are more */}
                        {isLast && remainingCount > 0 && (
                             <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white backdrop-blur-[2px] group-hover:bg-black/60 transition-colors">
                                <div className="text-center">
                                    <span className="text-2xl font-bold block">+{remainingCount}</span>
                                    <span className="text-xs uppercase tracking-widest">Fotos</span>
                                </div>
                             </div>
                        )}
                        
                        {/* If last image but no remaining, maybe show expand icon */}
                        {isLast && remainingCount === 0 && (
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="bg-white/90 p-3 rounded-full text-black shadow-lg">
                                    <Maximize2 size={20} />
                                </span>
                            </div>
                        )}
                    </div>
                  );
              })}
          </div>
      </div>

      <Lightbox 
        images={images} 
        selectedIndex={currentIndex} 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        onNavigate={setCurrentIndex}
      />
    </>
  );
};
