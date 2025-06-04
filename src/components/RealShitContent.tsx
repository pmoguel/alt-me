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
      <div className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-real-shit">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
        <div className="relative min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col">
          <h1 className="text-5xl font-lacquer text-white mb-8 drop-shadow-lg tracking-wider text-center">
            {t.pages.realShit.title}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1 overflow-y-auto max-w-4xl mx-auto">
            <a
              href="/store"
              className="group bg-white/5 backdrop-blur-sm shadow-lg p-3 hover:shadow-xl transition-all duration-300 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-[2rem_0_2rem_0] hover:rounded-[0_2rem_0_2rem]"
            >
              <h2 className="text-xl font-lacquer text-white mb-1 drop-shadow-lg group-hover:scale-105 transition-transform">
                {t.nav.store}
              </h2>
              <p className="text-white/80 group-hover:text-white transition-colors text-sm">
                {t.pages.realShit.storeDescription}
              </p>
            </a>
            <a
              href="/game"
              className="hidden md:block group bg-white/5 backdrop-blur-sm shadow-lg p-3 hover:shadow-xl transition-all duration-300 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-[0_2rem_0_2rem] hover:rounded-[2rem_0_2rem_0] relative"
            >
              <span className="absolute top-2 right-2 bg-orange-500/80 text-white text-xs px-2 py-1 rounded-full">
                Desktop Only
              </span>
              <h2 className="text-xl font-lacquer text-white mb-1 drop-shadow-lg group-hover:scale-105 transition-transform">
                {t.nav.game}
              </h2>
              <p className="text-white/80 group-hover:text-white transition-colors text-sm">
                {t.pages.realShit.gameDescription}
              </p>
            </a>
            <a
              href="https://www.instagram.com/pato.moguel"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 backdrop-blur-sm shadow-lg p-3 hover:shadow-xl transition-all duration-300 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-[2rem_0_0_2rem] hover:rounded-[0_2rem_2rem_0]"
            >
              <h2 className="text-xl font-lacquer text-white mb-1 drop-shadow-lg group-hover:scale-105 transition-transform">
                {t.pages.realShit.privateInstagram.title}
              </h2>
              <p className="text-white/80 group-hover:text-white transition-colors text-sm">
                {t.pages.realShit.privateInstagram.description}
              </p>
            </a>
            <a
              href="https://www.tiktok.com/@fanaticoperr1"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 backdrop-blur-sm shadow-lg p-3 hover:shadow-xl transition-all duration-300 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-[0_2rem_2rem_0] hover:rounded-[2rem_0_0_2rem]"
            >
              <h2 className="text-xl font-lacquer text-white mb-1 drop-shadow-lg group-hover:scale-105 transition-transform">
                {t.pages.realShit.privateTikTok.title}
              </h2>
              <p className="text-white/80 group-hover:text-white transition-colors text-sm">
                {t.pages.realShit.privateTikTok.description}
              </p>
            </a>
            <a
              href="https://music.apple.com/library/playlist/p.06aWA56hO5bNXR"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 backdrop-blur-sm shadow-lg p-3 hover:shadow-xl transition-all duration-300 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-[2rem_0_2rem_0] hover:rounded-[0_2rem_0_2rem]"
            >
              <h2 className="text-xl font-lacquer text-white mb-1 drop-shadow-lg group-hover:scale-105 transition-transform">
                {lang === 'es' ? 'Playlist de Rap' : 'Rap Playlist'}
              </h2>
              <p className="text-white/80 group-hover:text-white transition-colors text-sm">
                {lang === 'es' ? 'Playlist curada de hip-hop' : 'Curated hip-hop playlist'}
              </p>
            </a>
            <a
              href="https://music.apple.com/library/playlist/p.06aWA56hO5bNXR"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 backdrop-blur-sm shadow-lg p-3 hover:shadow-xl transition-all duration-300 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-[2rem_0_2rem_0] hover:rounded-[0_2rem_0_2rem]"
            >
              <h2 className="text-xl font-lacquer text-white mb-1 drop-shadow-lg group-hover:scale-105 transition-transform">
                {lang === 'es' ? 'Apple Music' : 'Apple Music'}
              </h2>
              <p className="text-white/80 group-hover:text-white transition-colors text-sm">
                {lang === 'es' ? 'Mira lo que estoy escuchando' : 'Check out what I\'m listening to'}
              </p>
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-real-shit">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
      <div className="relative min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white/5 backdrop-blur-sm p-8 rounded-[2rem_0_2rem_0] border border-white/10">
          <div>
            <h2 className="mt-6 text-center text-4xl font-lacquer text-white drop-shadow-lg tracking-wider">
              {t.pages.realShit.title}
            </h2>
            <p className="mt-4 text-center text-lg text-white/80">
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
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-white/10 bg-white/5 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm transition-all duration-300"
                placeholder={lang === 'es' ? "el mejor rapero" : "the goat"}
              />
            </div>

            {error && (
              <div className="text-orange-200 text-sm text-center">{error}</div>
            )}

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-lacquer rounded-md text-white bg-orange-500/80 hover:bg-orange-600/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-300 hover:scale-105"
              >
                {t.pages.realShit.submitButton}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 