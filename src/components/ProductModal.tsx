import { useEffect, useState } from 'react';
import { translations, type Language } from '../i18n/translations';
import { currentLanguage } from '../i18n/store';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: number;
    name: string;
    description: string;
    image: string;
  };
}

export default function ProductModal({ isOpen, onClose, product }: ProductModalProps) {
  const [lang, setLang] = useState<Language>('es');
  const t = translations[lang];

  useEffect(() => {
    const unsubscribe = currentLanguage.subscribe((value) => {
      setLang(value);
    });

    return () => unsubscribe();
  }, []);

  if (!isOpen) return null;

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {product.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {product.description}
                </p>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {lang === 'es' ? 'Tallas Disponibles' : 'Available Sizes'}
                  </h3>
                  <div className="grid grid-cols-3 gap-2">
                    {sizes.map((size) => (
                      <div
                        key={size}
                        className="border border-gray-300 dark:border-gray-600 rounded-md p-2 text-center cursor-not-allowed opacity-50"
                      >
                        {size}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <span className="text-xl font-bold text-fuchsia-600 dark:text-fuchsia-400">
                    {t.pages.store.comingSoon}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 