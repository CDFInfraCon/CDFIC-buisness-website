import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import Vadodra1Image from "../../../../public/projects/Vadodra1.jpeg";
import Vadodra2Image from "../../../../public/projects/Vadodra2.jpeg";
import Vadodra3Image from "../../../../public/projects/Vadodra3.jpeg";
import Vadodra4Image from "../../../../public/projects/Vadodra4.jpeg";
import Khed1Image from "../../../../public/projects/Khed1.jpeg";
import Khed2Image from "../../../../public/projects/Khed2.jpeg";
import Khed3Image from "../../../../public/projects/Khed3.jpeg";
import Khed4Image from "../../../../public/projects/Khed4.jpeg";

const images = [
  Vadodra1Image,
  Vadodra2Image,
  Vadodra3Image,
  Vadodra4Image,
  Khed1Image,
  Khed2Image,
  Khed3Image,
  Khed4Image,
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full  mx-auto h-[70vh] overflow-hidden rounded-xl shadow-2xl">
      <AnimatePresence initial={false} custom={currentIndex}>
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            layout="fill"
            objectFit="cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

      <button
        onClick={prevSlide}
        className="absolute cursor-pointer left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 transition-colors duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 cursor-pointer transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 transition-colors duration-300"
        aria-label="Next slide"
      >
        <ChevronRightIcon className="w-6 h-6 text-white" />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
