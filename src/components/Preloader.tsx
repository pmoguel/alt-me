import { useEffect, useState } from 'react';
import { translations, type Language } from '../i18n/translations';
import { currentLanguage } from '../i18n/store';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [lang, setLang] = useState<Language>('es');
  const t = translations[lang];

  useEffect(() => {
    const unsubscribe = currentLanguage.subscribe((value) => {
      setLang(value);
    });

    // Check if this is the first visit
    const hasVisited = localStorage.getItem('hasVisited');
    
    if (hasVisited) {
      // If not first visit, don't show loader
      setIsLoading(false);
    } else {
      // If first visit, show loader and set visited flag
      localStorage.setItem('hasVisited', 'true');
      
      // Simulate loading time
      const timer = setTimeout(() => {
        setIsFading(true);
        // Wait for fade out animation to complete before removing the loader
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }, 2000);
      
      return () => {
        clearTimeout(timer);
      };
    }

    return () => {
      unsubscribe();
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      className={`fixed inset-0 bg-white dark:bg-gray-900 z-50 flex items-center justify-center transition-opacity duration-500 ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="w-8 h-8 bg-blue-500 dark:bg-blue-400 rounded-full animate-bounce" 
           style={{ 
             animationDuration: '1.5s',
             animationTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
           }}
      />
    </div>
  );
} 