import { useEffect, useState } from 'react';
import { translations, type Language } from '../i18n/translations';
import { currentLanguage } from '../i18n/store';

export default function NavLinks() {
  const [lang, setLang] = useState<Language>('es');
  const t = translations[lang];
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    const unsubscribe = currentLanguage.subscribe((value) => {
      setLang(value);
    });

    // Check current path
    setCurrentPath(window.location.pathname);

    return () => unsubscribe();
  }, []);

  const isRealShitPage = currentPath === '/realshit';

  return (
    <div className="flex items-center space-x-6">
      <a 
        href="/work" 
        className={`transition-colors ${
          currentPath === '/work' 
            ? isRealShitPage ? 'text-white font-semibold' : 'text-gray-800 dark:text-gray-200 font-semibold'
            : isRealShitPage ? 'text-white/80 hover:text-white' : 'text-gray-600 dark:text-gray-400 hover:text-fuchsia-700 dark:hover:text-fuchsia-400'
        }`}
      >
        {t.nav.projects}
      </a>
      <a 
        href="/realshit" 
        className={`transition-colors font-lacquer text-lg ${
          currentPath === '/realshit' 
            ? isRealShitPage ? 'text-white' : 'text-gray-800 dark:text-gray-200'
            : isRealShitPage ? 'text-white/80 hover:text-white' : 'text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400'
        }`}
      >
        {t.nav.realShit}
      </a>
    </div>
  );
} 