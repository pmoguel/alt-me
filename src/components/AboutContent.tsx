import { useEffect, useState } from 'react';
import { translations, type Language } from '../i18n/translations';
import { currentLanguage } from '../i18n/store';

export default function AboutContent() {
  const [lang, setLang] = useState<Language>('es');
  const t = translations[lang];

  useEffect(() => {
    const unsubscribe = currentLanguage.subscribe((value) => {
      setLang(value);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 pb-48 text-center">
      <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-fuchsia-700 to-yellow-500 bg-clip-text text-transparent">
        {t.pages.about.title}
      </h1>
      <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-12">
        {t.pages.about.description}
      </p>
      <div className="mt-8">
        {/* Desktop image - hidden on mobile */}
        <img
          src="/images/about-image-landscape.jpg"
          alt="About me"
          className="hidden md:block w-full max-w-2xl mx-auto rounded-lg shadow-lg"
        />
        {/* Mobile image - hidden on desktop */}
        <img
          src="/images/about-image-portrait.jpg"
          alt="About me"
          className="md:hidden w-full max-w-2xl mx-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
} 