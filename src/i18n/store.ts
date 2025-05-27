import { atom } from 'nanostores';
import type { Language } from './translations';

export const currentLanguage = atom<Language>('es');

export function setLanguage(lang: Language) {
  currentLanguage.set(lang);
  // Save to localStorage for persistence
  if (typeof window !== 'undefined') {
    localStorage.setItem('language', lang);
  }
}

// Initialize from localStorage if available
if (typeof window !== 'undefined') {
  const savedLang = localStorage.getItem('language') as Language;
  if (savedLang) {
    currentLanguage.set(savedLang);
  }
} 