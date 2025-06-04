import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface ImageData {
  title: string;
  description: string;
  images: string[];
}

const CubosPage: React.FC = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  // This would be replaced with your actual image data
  const imageData: Record<string, ImageData> = {
    image1: {
      title: t('pages.work.objectProject.images.image1.title'),
      description: t('pages.work.objectProject.images.image1.description'),
      images: ['/path/to/image1-1.jpg', '/path/to/image1-2.jpg', '/path/to/image1-3.jpg']
    },
    // Add similar data for images 2-8
  };

  const handleImageClick = (imageKey: string) => {
    setSelectedImage(imageData[imageKey]);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">{t('pages.work.objectProject.title')}</h1>
      <p className="text-lg mb-12">{t('pages.work.objectProject.description')}</p>

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

export default CubosPage; 