import { useEffect, useState } from 'react';
import { translations, type Language } from '../i18n/translations';
import { currentLanguage } from '../i18n/store';

export default function RealShitContent() {
  const [lang, setLang] = useState<Language>('es');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const t = translations[lang];

  useEffect(() => {
    const unsubscribe = currentLanguage.subscribe((value) => {
      setLang(value);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can change this password to whatever you want
    if (password === 'chance') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError(lang === 'es' ? 'Contraseña incorrecta' : 'Incorrect password');
    }
  };

  if (isAuthenticated) {
    return (
      <div className="bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            {t.pages.realShit.title}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a
              href="/store"
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {t.nav.store}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {t.pages.realShit.storeDescription}
              </p>
            </a>
            <a
              href="/game"
              className="hidden md:block bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow relative"
            >
              <span className="absolute top-2 right-2 bg-fuchsia-600 text-white text-xs px-2 py-1 rounded">
                Desktop Only
              </span>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {t.nav.game}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {t.pages.realShit.gameDescription}
              </p>
            </a>
            <a
              href="https://www.instagram.com/pato.moguel"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {t.pages.realShit.privateInstagram.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {t.pages.realShit.privateInstagram.description}
              </p>
            </a>
            <a
              href="https://www.tiktok.com/@fanaticoperr1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {t.pages.realShit.privateTikTok.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {t.pages.realShit.privateTikTok.description}
              </p>
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            {t.pages.realShit.title}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            {t.pages.realShit.subtitle}
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="password" className="sr-only">
              {t.pages.realShit.passwordLabel}
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white dark:bg-gray-800 focus:outline-none focus:ring-fuchsia-500 focus:border-fuchsia-500 focus:z-10 sm:text-sm"
              placeholder={t.pages.realShit.passwordPlaceholder}
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-fuchsia-600 hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fuchsia-500"
            >
              {t.pages.realShit.submitButton}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 