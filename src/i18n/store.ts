import { atom } from 'nanostores';
import type { Language } from './translations';

export const currentLanguage = atom<Language>('es');

export interface CartItem {
  id: number;
  name: string;
  price: string;
  quantity: number;
  image: string;
}

export const cart = atom<CartItem[]>([]);

export function setLanguage(lang: Language) {
  currentLanguage.set(lang);
  localStorage.setItem('language', lang);
}

export function initializeLanguage() {
  const savedLang = localStorage.getItem('language') as Language;
  if (savedLang) {
    currentLanguage.set(savedLang);
  }
}

export function addToCart(item: Omit<CartItem, 'quantity'>) {
  const currentItems = cart.get();
  const existingItem = currentItems.find(i => i.id === item.id);
  
  if (existingItem) {
    cart.set(currentItems.map(i => 
      i.id === item.id 
        ? { ...i, quantity: i.quantity + 1 }
        : i
    ));
  } else {
    cart.set([...currentItems, { ...item, quantity: 1 }]);
  }
}

export function removeFromCart(itemId: number) {
  const currentItems = cart.get();
  cart.set(currentItems.filter(item => item.id !== itemId));
}

export function updateQuantity(itemId: number, quantity: number) {
  if (quantity < 1) {
    removeFromCart(itemId);
    return;
  }
  const currentItems = cart.get();
  cart.set(currentItems.map(item =>
    item.id === itemId ? { ...item, quantity } : item
  ));
} 