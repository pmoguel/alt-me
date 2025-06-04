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
      src: '/images/araucaria/photo1.jpg',
      alt: 'Araucaria 1',
      title: 'Araucaria 1',
      fullResSrc: '/images/araucaria/FOTO1.jpg'
    },
    {
      src: '/images/araucaria/photo2.jpg',
      alt: 'Araucaria 2',
      title: 'Araucaria 2',
      fullResSrc: '/images/araucaria/FOTO2.jpg'
    },
    {
      src: '/images/araucaria/photo3.jpg',
      alt: 'Araucaria 3',
      title: 'Araucaria 3',
      fullResSrc: '/images/araucaria/FOTO3.jpg'
    },
    {
      src: '/images/araucaria/photo4.jpg',
      alt: 'Araucaria 4',
      title: 'Araucaria 4',
      fullResSrc: '/images/araucaria/FOTO4.jpg'
    },
    {
      src: '/images/araucaria/photo5.jpg',
      alt: 'Araucaria 5',
      title: 'Araucaria 5',
      fullResSrc: '/images/araucaria/FOTO5.jpg'
    },
    {
      src: '/images/araucaria/photo6.jpg',
      alt: 'Araucaria 6',
      title: 'Araucaria 6',
      fullResSrc: '/images/araucaria/FOTO6.jpg'
    },
    {
      src: '/images/araucaria/photo7.jpg',
      alt: 'Araucaria 7',
      title: 'Araucaria 7',
      fullResSrc: '/images/araucaria/FOTO7.jpg'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 md:pt-24 md:pb-16">
      <h1 className="text-4xl font-bold mb-2 text-fuchsia-300 dark:text-fuchsia-400 text-center">
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
          <a 
            href="/behind-scenes-araucaria" 
            className="inline-block mt-6 px-6 py-3 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-fuchsia-700 hover:text-white"
          >
            {t.pages.work.animationProject.behindTheScenes}
          </a>
        </div>
        <div className="md:w-1/2 flex items-center justify-center">
          <PhotoCarousel images={images} />
        </div>
      </div>
    </div>
  );
} 