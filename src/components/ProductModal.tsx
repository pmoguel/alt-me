import { useEffect } from 'react';
import { translations, type Language } from '../i18n/translations';
import { currentLanguage } from '../i18n/store';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

export default function ProductModal({ isOpen, onClose, product }: ProductModalProps) {
  const lang = currentLanguage.get();
  const t = translations[lang];

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem_0_2rem_0] p-8 max-w-2xl w-full transform transition-all duration-300 hover:bg-white/10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="aspect-square mb-6 overflow-hidden rounded-[1rem_0_1rem_0]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain p-4"
          />
        </div>
        <h2 className="text-3xl font-lacquer text-white mb-4 drop-shadow-lg">
          {product.name}
        </h2>
        <p className="text-white/80 mb-6">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-orange-200 font-lacquer">
            {t.pages.store.comingSoon}
          </span>
          <a
            href="https://www.instagram.com/fanatico.perr1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange-200 transition-colors font-lacquer"
          >
            {t.pages.store.followUs}
          </a>
        </div>
      </div>
    </div>
  );
} 