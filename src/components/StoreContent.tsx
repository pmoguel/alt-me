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
    <div className="h-full flex flex-col">
      <h1 className="text-5xl font-lacquer text-white mb-8 drop-shadow-lg tracking-wider text-center">
        {t.pages.store.title}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-1">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => setSelectedProduct(product)}
            className="group bg-white/5 backdrop-blur-sm shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-[2rem_0_2rem_0] hover:rounded-[0_2rem_0_2rem] cursor-pointer"
          >
            <div className="aspect-square mb-4 overflow-hidden rounded-[1rem_0_1rem_0]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain p-4 transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl font-lacquer text-white mb-2 drop-shadow-lg group-hover:scale-105 transition-transform">
                {product.name}
              </h2>
              <p className="text-white/80 group-hover:text-white transition-colors">
                {product.description}
              </p>
              <span className="text-orange-200 mt-4 font-lacquer">
                {t.pages.store.comingSoon}
              </span>
            </div>
          </div>
        ))}
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