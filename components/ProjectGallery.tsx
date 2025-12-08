import React, { useState } from 'react';
import { Lightbox } from './Lightbox';
import { Maximize2, PlayCircle } from 'lucide-react';

interface ProjectGalleryProps {
  images: string[];
}

const isVideo = (url: string) => url.toLowerCase().endsWith('.mp4');

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // We show up to 5 items in the grid
  const displayItems = images.slice(0, 5);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const renderItem = (url: string, index: number, className: string = "") => {
    const isVid = isVideo(url);
    
    return (
      <div 
        key={index} 
        className={`relative overflow-hidden cursor-pointer group rounded-sm ${className}`} 
        onClick={() => openLightbox(index)}
      >
          {isVid ? (
             <div className="w-full h-full bg-black relative">
                 <video 
                   src={`${url}#t=0.1`} 
                   className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity" 
                   preload="metadata"
                 />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <PlayCircle size={48} className="text-white opacity-90 group-hover:scale-110 transition-transform" />
                 </div>
             </div>
          ) : (
             <img 
               src={url} 
               alt={`Gallery ${index}`} 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
             />
          )}

          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-col gap-2">
          {/* Top Row: 2 Large Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-[400px]">
             {images.slice(0, 2).map((img, idx) => renderItem(img, idx))}
          </div>

          {/* Bottom Row: 3 Small Items */}
          <div className="grid grid-cols-3 gap-2 h-[200px]">
              {images.slice(2, 5).map((img, idx) => {
                  const actualIndex = idx + 2;
                  const isLast = idx === 2; // Last of the 3 small ones
                  const remainingCount = Math.max(0, images.length - 5);

                  return (
                    <div 
                        key={actualIndex} 
                        className="relative h-full"
                    >
                        {renderItem(img, actualIndex, "h-full w-full")}
                        
                        {/* Overlay for the last item if there are more */}
                        {isLast && remainingCount > 0 && (
                             <div 
                                className="absolute inset-0 bg-black/50 flex items-center justify-center text-white backdrop-blur-[2px] group-hover:bg-black/60 transition-colors cursor-pointer z-10"
                                onClick={(e) => { e.stopPropagation(); openLightbox(actualIndex); }}
                             >
                                <div className="text-center">
                                    <span className="text-2xl font-bold block">+{remainingCount}</span>
                                    <span className="text-xs uppercase tracking-widest">Mídias</span>
                                </div>
                             </div>
                        )}
                        
                        {/* If last item but no remaining, icon hint */}
                        {isLast && remainingCount === 0 && (
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
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
