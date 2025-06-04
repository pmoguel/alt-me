import React, { useState, useEffect } from 'react';
import { translations, type Language } from '../i18n/translations';
import { currentLanguage } from '../i18n/store';
import { motion, AnimatePresence } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface ImageData {
  title: string;
  description: string;
  images: string[];
}

const CubosContent: React.FC = () => {
  const [lang, setLang] = useState<Language>(currentLanguage.get());
  const t = translations[lang];
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  useEffect(() => {
    // Set initial language
    setLang(currentLanguage.get());

    // Subscribe to language changes
    const unsubscribe = currentLanguage.subscribe((value) => {
      setLang(value);
    });

    return () => unsubscribe();
  }, []);

  // This would be replaced with your actual image data
  const imageData: Record<string, ImageData> = {
    image1: {
      title: t.pages.work.objectProject.images.image1.title,
      description: t.pages.work.objectProject.images.image1.description,
      images: ['/images/cubos/1.jpg']
    },
    image2: {
      title: t.pages.work.objectProject.images.image2.title,
      description: t.pages.work.objectProject.images.image2.description,
      images: ['/images/cubos/2.jpg']
    },
    image3: {
      title: t.pages.work.objectProject.images.image3.title,
      description: t.pages.work.objectProject.images.image3.description,
      images: ['/images/cubos/3.jpg']
    },
    image4: {
      title: t.pages.work.objectProject.images.image4.title,
      description: t.pages.work.objectProject.images.image4.description,
      images: ['/images/cubos/4.jpg']
    },
    image5: {
      title: t.pages.work.objectProject.images.image5.title,
      description: t.pages.work.objectProject.images.image5.description,
      images: ['/images/cubos/5.jpg']
    },
    image6: {
      title: t.pages.work.objectProject.images.image6.title,
      description: t.pages.work.objectProject.images.image6.description,
      images: ['/images/cubos/6.jpg']
    },
    image7: {
      title: t.pages.work.objectProject.images.image7.title,
      description: t.pages.work.objectProject.images.image7.description,
      images: ['/images/cubos/7.jpg']
    },
    image8: {
      title: t.pages.work.objectProject.images.image8.title,
      description: t.pages.work.objectProject.images.image8.description,
      images: ['/images/cubos/8.jpg']
    }
  };

  const handleImageClick = (imageKey: string) => {
    setSelectedImage(imageData[imageKey]);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 md:pt-24 md:pb-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-2 text-gray-800 dark:text-gray-200">{t.pages.work.objectProject.title}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">{t.pages.work.objectProject.description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.keys(imageData).map((key) => (
          <motion.div
            key={key}
            className="cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleImageClick(key)}
          >
            <div className="aspect-square bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
              <img
                src={imageData[key].images[0]}
                alt={imageData[key].title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-2 text-lg font-semibold text-gray-800 dark:text-gray-200">{imageData[key].title}</h3>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 max-w-[95vw] sm:max-w-2xl w-full"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <div className="bg-white dark:bg-gray-800">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800 dark:text-gray-200">{selectedImage.title}</h2>
                <p className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-600 dark:text-gray-400 whitespace-pre-line">{selectedImage.description}</p>
              </div>
              <div className="w-full flex justify-center">
                <img
                  src={selectedImage.images[0]}
                  alt={selectedImage.title}
                  className="w-full max-w-[85vw] sm:max-w-xl h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="bg-white dark:bg-gray-800 pt-3 sm:pt-4 mt-3 sm:mt-4 flex justify-center">
                <button
                  onClick={closeModal}
                  className="px-4 sm:px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-sm sm:text-base"
                >
                  {lang === 'es' ? 'Cerrar' : 'Close'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CubosContent; 