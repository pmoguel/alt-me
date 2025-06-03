import { useEffect, useState } from 'react';
import { translations, type Language } from '../i18n/translations';
import { currentLanguage } from '../i18n/store';

export default function NavLinks() {
  const [lang, setLang] = useState<Language>('es');
  const t = translations[lang];

  useEffect(() => {
    const unsubscribe = currentLanguage.subscribe((value) => {
      setLang(value);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex items-center space-x-6">
      <a href="/work" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
        {t.nav.projects}
      </a>
      <a href="/realshit" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
        {t.nav.realShit}
      </a>
    </div>
  );
} 