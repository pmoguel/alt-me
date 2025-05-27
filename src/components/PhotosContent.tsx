import { useEffect, useState } from 'react';
import { translations, type Language } from '../i18n/translations';
import { currentLanguage } from '../i18n/store';
import PhotoCarousel from './PhotoCarousel.astro';

export default function PhotosContent() {
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
      src: "/images/photo1.jpg",
      alt: t.pages.photos.imageDescriptions.photo1
    },
    {
      src: "/images/photo2.jpg",
      alt: t.pages.photos.imageDescriptions.photo2
    },
    {
      src: "/images/photo3.jpg",
      alt: t.pages.photos.imageDescriptions.photo3
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">{t.pages.photos.title}</h1>
      <PhotoCarousel images={images} />
    </div>
  );
} 