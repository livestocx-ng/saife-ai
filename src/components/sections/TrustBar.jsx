import React from 'react';
import { motion } from 'framer-motion';

const TrustBar = () => {
  const images = [
    '/media/sponsor_1.png',
    '/media/sponsor_2.png',
    '/media/sponsor_3.png',
    '/media/sponsor_4.png',
    '/media/sponsor_5.jpg',
    '/media/sponsor_6.png',
  ];

  return (
    <section className="py-12 bg-gray-50 border-y border-gray-200 overflow-hidden">
      <div className="container-custom mb-8">
        <div className="text-center">
          <h3 className="text-sm font-bold tracking-wider uppercase text-gray500">
            Supported By
          </h3>
        </div>
      </div>
        
      <div className="flex w-full">
        <motion.div 
          className="flex items-center gap-12 md:gap-20 pr-12 md:pr-20"
          animate={{ x: "-50%" }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 20 
          }}
          initial={{ x: 0 }}
          style={{ width: "fit-content" }}
        >
          {/* Repeat images 4 times to ensure smooth infinite scroll on wide screens */}
          {[...images, ...images, ...images, ...images].map((img, index) => (
             <div key={index} className="relative h-12 md:h-16 flex-shrink-0">
               <img 
                 src={img} 
                 alt="Partner Logo" 
                 className="h-full w-auto object-contain opacity80 hover:opacity-100 transition-opacity"
               />
             </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBar;
