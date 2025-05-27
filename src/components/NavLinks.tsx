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
      <a href="/work" className="hover:text-gray-600 transition-colors">
        {t.nav.projects}
      </a>
      <a
        href="https://pmoguel.github.io/Mis-links/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-600 transition-colors mr-4"
      >
        {t.nav.myLinks}
      </a>
    </div>
  );
} 