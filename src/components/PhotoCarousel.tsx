import { useEffect, useRef, useState } from 'react';

interface Image {
  src: string;
  alt: string;
  fullResSrc: string;
}

interface PhotoCarouselProps {
  images: Image[];
}

export default function PhotoCarousel({ images }: PhotoCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const slide = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    } else {
      setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    }
  };

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isFullscreen) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          slide('prev');
          break;
        case 'ArrowRight':
          slide('next');
          break;
        case 'Escape':
          setIsFullscreen(false);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, currentIndex]);

  return (
    <div className="relative w-full max-w-4xl mx-auto mb-8">
      <div className="carousel-container overflow-hidden shadow-lg">
        <div 
          ref={trackRef}
          className="carousel-track flex transition-transform duration-500 ease-in-out"
        >
          {images.map((image, index) => (
            <div key={index} className="carousel-slide min-w-full">
              <img
                src={isFullscreen ? image.fullResSrc : image.src}
                alt={image.alt}
                className="w-full h-[60vh] object-contain cursor-pointer"
                onClick={toggleFullscreen}
              />
            </div>
          ))}
        </div>
      </div>
      
      <button
        onClick={() => slide('prev')}
        className="carousel-button prev absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
        aria-label="Previous image"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </button>
      
      <button
        onClick={() => slide('next')}
        className="carousel-button next absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
        aria-label="Next image"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </button>

      {isFullscreen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              toggleFullscreen();
            }
          }}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={images[currentIndex].fullResSrc}
              alt={images[currentIndex].alt}
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
            
            <button
              onClick={() => slide('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-4 rounded-full hover:bg-black/70 transition-colors"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            
            <button
              onClick={() => slide('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-4 rounded-full hover:bg-black/70 transition-colors"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>

            <button
              onClick={toggleFullscreen}
              className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              aria-label="Close fullscreen"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 