import { useEffect, useState } from 'react';
import { translations, type Language } from '../i18n/translations';
import { currentLanguage } from '../i18n/store';
import PhotoCarousel from './PhotoCarousel';

export default function AraucariaContent() {
  const [lang, setLang] = useState<Language>('es');
  const t = translations[lang];

  useEffect(() => {
    const unsubscribe = currentLanguage.subscribe((value) => {
      setLang(value);
    });

    return () => unsubscribe();
  }, []);

  const images = [
    {
      src: "/images/araucaria/photo1.jpg",
      alt: "Araucaria Photo 1",
      fullResSrc: "/images/araucaria/FOTO1.jpg"
    },
    {
      src: "/images/araucaria/photo2.jpg",
      alt: "Araucaria Photo 2",
      fullResSrc: "/images/araucaria/FOTO2.jpg"
    },
    {
      src: "/images/araucaria/photo3.jpg",
      alt: "Araucaria Photo 3",
      fullResSrc: "/images/araucaria/FOTO3.jpg"
    },
    {
      src: "/images/araucaria/photo4.jpg",
      alt: "Araucaria Photo 4",
      fullResSrc: "/images/araucaria/FOTO4.jpg"
    },
    {
      src: "/images/araucaria/photo5.jpg",
      alt: "Araucaria Photo 5",
      fullResSrc: "/images/araucaria/FOTO5.jpg"
    },
    {
      src: "/images/araucaria/photo6.jpg",
      alt: "Araucaria Photo 6",
      fullResSrc: "/images/araucaria/FOTO6.jpg"
    },
    {
      src: "/images/araucaria/photo7.jpg",
      alt: "Araucaria Photo 7",
      fullResSrc: "/images/araucaria/FOTO7.jpg"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-4">
      <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-fuchsia-700 to-yellow-500 bg-clip-text text-transparent text-center">
        {t.pages.work.animationProject.title}
      </h1>
      <h2 className="text-xl text-gray-600 dark:text-gray-400 mb-6 text-center">
        {t.pages.work.animationProject.subtitle}
      </h2>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2 text-lg text-gray-800 dark:text-gray-200 leading-relaxed space-y-4">
          <p>
            {t.pages.work.animationProject.content.paragraph1}
          </p>
          <p>
            {t.pages.work.animationProject.content.paragraph2}
          </p>
          <p>
            {t.pages.work.animationProject.content.paragraph3}
          </p>
          <div className="text-sm text-gray-600 dark:text-gray-400 italic border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
            <p>{t.pages.work.animationProject.technicalDetails.capturedWith}:</p>
            <p className="font-mono">{t.pages.work.animationProject.technicalDetails.camera}: Canon EOS 80D</p>
            <p className="font-mono">{t.pages.work.animationProject.technicalDetails.lens}: Canon EF-S 18-55mm f/3.5-5.6</p>
          </div>
        </div>
        <div className="md:w-1/2 flex items-center justify-center">
          <PhotoCarousel images={images} />
        </div>
      </div>
    </div>
  );
} 