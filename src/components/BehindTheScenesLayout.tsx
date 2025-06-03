import { useEffect, useState } from 'react';
import { translations, type Language } from '../i18n/translations';
import { currentLanguage } from '../i18n/store';

interface BehindTheScenesLayoutProps {
  title: string;
  subtitle: string;
  images: {
    src: string;
    alt: string;
    fullResSrc?: string;
    title: string;
  }[];
}

export default function BehindTheScenesLayout({ title, subtitle, images }: BehindTheScenesLayoutProps) {
  const [lang, setLang] = useState<Language>('es');
  const t = translations[lang];

  useEffect(() => {
    const unsubscribe = currentLanguage.subscribe((value) => {
      setLang(value);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-8 pb-24 md:pb-8">
      <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-fuchsia-700 to-yellow-500 bg-clip-text text-transparent text-center">
        {title}
      </h1>
      <h2 className="text-xl text-gray-600 dark:text-gray-400 mb-8 text-center">
        {subtitle}
      </h2>
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center w-full md:w-auto"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full md:w-[250px] h-auto rounded-lg shadow-lg"
            />
            <h3 className="mt-2 text-lg font-semibold text-gray-800 dark:text-gray-200">
              {image.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
} 