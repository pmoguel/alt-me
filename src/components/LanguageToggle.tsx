import { useEffect, useState } from 'react';
import { languages, type Language } from '../i18n/translations';
import { currentLanguage, setLanguage } from '../i18n/store';

export default function LanguageToggle() {
  const [lang, setLang] = useState<Language>('es');

  useEffect(() => {
    // Initialize from store
    const unsubscribe = currentLanguage.subscribe((value) => {
      setLang(value);
    });

    return () => unsubscribe();
  }, []);

  const handleClick = () => {
    const newLang = lang === 'es' ? 'en' : 'es';
    setLanguage(newLang);
  };

  return (
    <button
      onClick={handleClick}
      className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm ml-4 text-gray-800 dark:text-gray-200"
    >
      {languages[lang === 'es' ? 'en' : 'es']}
    </button>
  );
} 