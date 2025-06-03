import { useEffect, useState } from 'react';
import { translations, type Language } from '../i18n/translations';
import { currentLanguage } from '../i18n/store';
import { addToCart } from '../i18n/store';
import CartIcon from './CartIcon';
import CartSidebar from './CartSidebar';

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

export default function StoreContent() {
  const [lang, setLang] = useState<Language>('es');
  const [isCartOpen, setIsCartOpen] = useState(false);
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
      price: t.pages.store.products.tshirt.price,
      image: '/images/store/tshirt.png'
    },
    {
      id: 2,
      name: t.pages.store.products.hoodie.name,
      description: t.pages.store.products.hoodie.description,
      price: t.pages.store.products.hoodie.price,
      image: '/images/store/hoodie.png'
    },
    {
      id: 3,
      name: t.pages.store.products.hat.name,
      description: t.pages.store.products.hat.description,
      price: t.pages.store.products.hat.price,
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
          <button
            onClick={() => setIsCartOpen(true)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <CartIcon />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <div className="aspect-w-1 aspect-h-1 w-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {product.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    {product.price}
                  </span>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-4 py-2 rounded-md transition-colors"
                  >
                    {t.pages.store.addToCart}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
} 