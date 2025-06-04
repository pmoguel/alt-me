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

  const handleNavigation = (path: string) => {
    window.location.href = path;
  };

  return (
    <div className="max-w-3xl mx-auto px-6 pt-32 pb-24 md:pt-24 md:pb-16 text-center">
      <h1 className="text-5xl font-bold mb-6 text-gray-800 dark:text-gray-200">
        {t.pages.about.title}
      </h1>
      <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-8">
        {t.pages.about.description}
      </p>
      <div className="mt-6">
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
      <div className="mt-8 flex flex-col md:flex-row justify-center gap-6 max-w-2xl mx-auto">
        <button
          onClick={() => handleNavigation('/work')}
          className="w-full md:w-[calc(50%-12px)] px-8 py-4 text-xl font-semibold bg-fuchsia-300 dark:bg-fuchsia-800/40 text-gray-800 dark:text-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-fuchsia-400 dark:hover:bg-fuchsia-700/60 hover:text-gray-900 dark:hover:text-white"
        >
          {t.nav.projects}
        </button>
        <button
          onClick={() => handleNavigation('/realshit')}
          className="w-full md:w-[calc(50%-12px)] px-8 py-4 text-xl font-lacquer bg-orange-300 dark:bg-orange-800/40 text-gray-800 dark:text-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-orange-400 dark:hover:bg-orange-700/60 hover:text-gray-900 dark:hover:text-white relative group overflow-hidden"
          style={{
            clipPath: 'polygon(0% 0%, 15% 0%, 5% 15%, 15% 30%, 5% 45%, 15% 60%, 5% 75%, 15% 90%, 0% 100%, 0% 0%, 100% 0%, 100% 60%, 90% 70%, 100% 80%, 85% 90%, 70% 100%, 40% 100%, 25% 95%, 15% 85%, 5% 75%, 0% 65%, 0% 0%, 15% 0%, 30% 10%, 45% 0%, 60% 10%, 75% 0%, 90% 10%, 100% 0%)',
          }}
        >
          <div className="absolute inset-0 bg-orange-300 dark:bg-orange-800/40 opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
          <span className="relative z-10">{t.nav.realShit}</span>
        </button>
      </div>
    </div>
  );
} 