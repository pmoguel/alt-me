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
    <div className="max-w-3xl mx-auto px-6 py-16 text-center">
      <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-fuchsia-700 to-yellow-500 bg-clip-text text-transparent">
        {t.pages.about.title}
      </h1>
      <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
        {t.pages.about.description}
      </p>
    </div>
  );
} 