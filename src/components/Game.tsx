import { useState, useEffect } from 'react';

interface ImageState {
  id: number;
  normalImage: string;
  hoverImage: string;
  audio: string;
}

export default function Game() {
  const [images, setImages] = useState<ImageState[]>([
    {
      id: 1,
      normalImage: '/images/face1.png',
      hoverImage: '/images/face1-hover.png',
      audio: '/audio/fanatico.mp3'
    },
    {
      id: 2,
      normalImage: '/images/face1.png',
      hoverImage: '/images/face2-hover.png',
      audio: '/audio/perr.mp3'
    },
    {
      id: 3,
      normalImage: '/images/face1.png',
      hoverImage: '/images/face3-hover.png',
      audio: '/audio/uno.mp3'
    }
  ]);

  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [audioElements, setAudioElements] = useState<{ [key: number]: HTMLAudioElement }>({});

  useEffect(() => {
    // Preload audio elements
    const audioMap: { [key: number]: HTMLAudioElement } = {};
    images.forEach((image) => {
      const audio = new Audio(image.audio);
      audioMap[image.id] = audio;
    });
    setAudioElements(audioMap);

    return () => {
      // Cleanup audio elements
      Object.values(audioMap).forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
      });
    };
  }, []);

  const handleMouseEnter = (id: number) => {
    setHoveredId(id);
    if (audioElements[id]) {
      audioElements[id].currentTime = 0;
      audioElements[id].play();
    }
  };

  const handleMouseLeave = (id: number) => {
    setHoveredId(null);
    if (audioElements[id]) {
      audioElements[id].pause();
      audioElements[id].currentTime = 0;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image) => (
            <div
              key={image.id}
              className="cursor-pointer transform transition-transform hover:scale-105"
              onMouseEnter={() => handleMouseEnter(image.id)}
              onMouseLeave={() => handleMouseLeave(image.id)}
            >
              <img
                src={hoveredId === image.id ? image.hoverImage : image.normalImage}
                alt=""
                className="w-full h-auto transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 