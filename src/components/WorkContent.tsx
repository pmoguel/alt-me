import { useEffect, useState } from 'react';
import { translations, type Language } from '../i18n/translations';
import { currentLanguage } from '../i18n/store';

export default function WorkContent() {
  const [lang, setLang] = useState<Language>('es');
  const t = translations[lang];

  useEffect(() => {
    const unsubscribe = currentLanguage.subscribe((value) => {
      setLang(value);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">{t.pages.work.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <a href="/different-realities" className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105">
          <div className="aspect-w-16">
            <img
              src="/images/photo-preview.jpg"
              alt={t.pages.work.photoProject.title}
              className="w-full h-full"
            />
          </div>
          <div className="absolute inset-0 flex items-end p-6">
            <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/95 via-black/80 via-black/60 via-black/40 to-transparent backdrop-blur-[12px]"></div>
            <div className="relative text-white">
              <h2 className="text-2xl font-bold mb-2">{t.pages.work.photoProject.title}</h2>
              <p className="text-sm opacity-90">{t.pages.work.photoProject.description}</p>
            </div>
          </div>
        </a>

        <a href="/araucaria" className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105">
          <div className="aspect-w-16">
            <img
              src="/images/game-preview.jpg"
              alt={t.pages.work.animationProject.title}
              className="w-full h-full"
            />
          </div>
          <div className="absolute inset-0 flex items-end p-6">
            <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/95 via-black/80 via-black/60 via-black/40 to-transparent backdrop-blur-[12px]"></div>
            <div className="relative text-white">
              <h2 className="text-2xl font-bold mb-2">{t.pages.work.animationProject.title}</h2>
              <p className="text-sm opacity-90">{t.pages.work.animationProject.description}</p>
            </div>
          </div>
        </a>

        <a href="#" className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105">
          <div className="aspect-w-16">
            <img
              src="/images/project3-preview.jpg"
              alt={t.pages.work.objectProject.title}
              className="w-full h-full"
            />
          </div>
          <div className="absolute inset-0 flex items-end p-6">
            <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/95 via-black/80 via-black/60 via-black/40 to-transparent backdrop-blur-[12px]"></div>
            <div className="relative text-white">
              <h2 className="text-2xl font-bold mb-2">{t.pages.work.objectProject.title}</h2>
              <p className="text-sm opacity-90">{t.pages.work.objectProject.description}</p>
            </div>
          </div>
        </a>

        <a href="#" className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105">
          <div className="aspect-w-16">
            <img
              src="/images/project4-preview.jpg"
              alt={t.pages.work.webProject.title}
              className="w-full h-full"
            />
          </div>
          <div className="absolute inset-0 flex items-end p-6">
            <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/95 via-black/80 via-black/60 via-black/40 to-transparent backdrop-blur-[12px]"></div>
            <div className="relative text-white">
              <h2 className="text-2xl font-bold mb-2">{t.pages.work.webProject.title}</h2>
              <p className="text-sm opacity-90">{t.pages.work.webProject.description}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
} 