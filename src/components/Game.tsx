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
    <div className="w-full">
      <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8 items-center">
        {images.map((image) => (
          <div
            key={image.id}
            className="cursor-pointer transform transition-transform hover:scale-105 flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-[2rem_0_2rem_0] hover:rounded-[0_2rem_0_2rem] p-4 border border-white/10 hover:border-white/20"
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
  );
} 