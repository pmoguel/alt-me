import { useEffect, useState } from 'react';
import { translations, type Language } from '../i18n/translations';
import { currentLanguage } from '../i18n/store';
import ProductModal from './ProductModal';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

export default function StoreContent() {
  const [lang, setLang] = useState<Language>('es');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const t = translations[lang];

  useEffect(() => {
    const unsubscribe = currentLanguage.subscribe((value) => {
      setLang(value);
    });

    return () => unsubscribe();
  }, []);

  const products: Product[] = [
    {
      id: 1,
      name: t.pages.store.products.tshirt.name,
      description: t.pages.store.products.tshirt.description,
      image: '/images/store/tshirt.png'
    },
    {
      id: 2,
      name: t.pages.store.products.hoodie.name,
      description: t.pages.store.products.hoodie.description,
      image: '/images/store/hoodie.png'
    },
    {
      id: 3,
      name: t.pages.store.products.hat.name,
      description: t.pages.store.products.hat.description,
      image: '/images/store/Cap.png'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            {t.pages.store.title}
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 flex flex-col h-full cursor-pointer"
            >
              <div className="aspect-w-1 aspect-h-1 w-full flex items-center justify-center bg-gray-50 dark:bg-gray-700">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <div className="p-4 flex flex-col">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {product.name}
                </h2>
                <span className="text-xl font-bold text-fuchsia-600 dark:text-fuchsia-400 mt-2">
                  {t.pages.store.comingSoon}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProduct && (
        <ProductModal
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          product={selectedProduct}
        />
      )}
    </div>
  );
} 