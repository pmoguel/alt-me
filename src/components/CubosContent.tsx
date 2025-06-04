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
      images: ['/images/cubos/1-1.jpg', '/images/cubos/1-2.jpg', '/images/cubos/1-3.jpg']
    },
    image2: {
      title: t.pages.work.objectProject.images.image2.title,
      description: t.pages.work.objectProject.images.image2.description,
      images: ['/images/cubos/2-1.jpg', '/images/cubos/2-2.jpg', '/images/cubos/2-3.jpg']
    },
    image3: {
      title: t.pages.work.objectProject.images.image3.title,
      description: t.pages.work.objectProject.images.image3.description,
      images: ['/images/cubos/3-1.jpg', '/images/cubos/3-2.jpg', '/images/cubos/3-3.jpg']
    },
    image4: {
      title: t.pages.work.objectProject.images.image4.title,
      description: t.pages.work.objectProject.images.image4.description,
      images: ['/images/cubos/4-1.jpg', '/images/cubos/4-2.jpg', '/images/cubos/4-3.jpg']
    },
    image5: {
      title: t.pages.work.objectProject.images.image5.title,
      description: t.pages.work.objectProject.images.image5.description,
      images: ['/images/cubos/5-1.jpg', '/images/cubos/5-2.jpg', '/images/cubos/5-3.jpg']
    },
    image6: {
      title: t.pages.work.objectProject.images.image6.title,
      description: t.pages.work.objectProject.images.image6.description,
      images: ['/images/cubos/6-1.jpg', '/images/cubos/6-2.jpg', '/images/cubos/6-3.jpg']
    },
    image7: {
      title: t.pages.work.objectProject.images.image7.title,
      description: t.pages.work.objectProject.images.image7.description,
      images: ['/images/cubos/7-1.jpg', '/images/cubos/7-2.jpg', '/images/cubos/7-3.jpg']
    },
    image8: {
      title: t.pages.work.objectProject.images.image8.title,
      description: t.pages.work.objectProject.images.image8.description,
      images: ['/images/cubos/8-1.jpg', '/images/cubos/8-2.jpg', '/images/cubos/8-3.jpg']
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
        <h1 className="text-4xl font-bold mb-2 text-fuchsia-300 dark:text-fuchsia-400">{t.pages.work.objectProject.title}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">{t.pages.work.objectProject.description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.keys(imageData).map((key) => (
          <motion.div
            key={key}
            className="cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleImageClick(key)}
          >
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <img
                src={imageData[key].images[0]}
                alt={imageData[key].title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-2 text-lg font-semibold">{imageData[key].title}</h3>
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
              className="bg-white rounded-lg p-6 max-w-4xl w-full"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-4">{selectedImage.title}</h2>
              <p className="mb-6">{selectedImage.description}</p>
              <Carousel
                showArrows={true}
                showStatus={false}
                showThumbs={false}
                infiniteLoop={true}
                className="w-full"
              >
                {selectedImage.images.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      alt={`${selectedImage.title} - Image ${index + 1}`}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </Carousel>
              <button
                onClick={closeModal}
                className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CubosContent; 