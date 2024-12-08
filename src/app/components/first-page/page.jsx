"use client";

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const videos = [
    "/videos/khedCrop.mp4",
    "/videos/Vmpack.mp4",
    "/videos/Vmpack2.mp4",
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false, // Hiding arrows for better mobile experience
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false, // Hiding dots on mobile for cleaner look
        },
      },
    ],
  };

  const contentClass = `
    relative z-20 
    text-center text-white 
    px-4 
    max-w-4xl 
    mx-auto
    flex 
    flex-col 
    items-center
  `;

  const headingClass = `
    font-bold 
    text-4xl sm:text-5xl md:text-6xl 
    mb-2 
    tracking-tight
  `;

  const paragraphClass = `
    text-gray-300 
    text-base sm:text-lg md:text-xl 
    max-w-2xl 
    mt-4
  `;

  const videoContainerClass = `
    absolute 
    top-0 left-0 
    w-full h-full 
    overflow-hidden
  `;

  if (!mounted) {
    return (
      <section className="relative h-[100svh] w-full overflow-hidden">
        <div className={videoContainerClass}>
          <video
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover"
            src={videos[0]}
            type="video/mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={contentClass}>
            <h1 className={`${headingClass} animate__animated animate__bounce`}>
              Engineering for
            </h1>
            <h1 className={headingClass}>sustainable</h1>
            <h1 className={headingClass}>development</h1>
            <p className={paragraphClass}>
              We engineer infrastructure keeping in mind about the future. We
              build today thinking about tomorrow.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      <div className={videoContainerClass}>
        <Slider {...sliderSettings} className="h-full">
          {videos.map((video, index) => (
            <div key={index} className="h-full">
              <video
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover"
                src={video}
                type="video/mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="absolute inset-0 bg-black/50 z-10"></div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className={contentClass}>
          <h1 className={`${headingClass} animate__animated animate__bounce`}>
            Engineering for
          </h1>
          <h1 className={headingClass}>sustainable</h1>
          <h1 className={headingClass}>development</h1>
          <p className={paragraphClass}>
            We engineer infrastructure keeping in mind about the future. We
            build today thinking about tomorrow.
          </p>
        </div>
      </div>

      <style jsx global>{`
        .slick-slider,
        .slick-list,
        .slick-track {
          height: 100%;
        }
        .slick-slide > div {
          height: 100%;
        }
        .slick-dots {
          bottom: 25px;
          z-index: 30;
        }
        .slick-dots li button:before {
          color: white;
          font-size: 8px;
          opacity: 0.5;
        }
        .slick-dots li.slick-active button:before {
          opacity: 1;
        }
        @media (max-width: 768px) {
          .slick-dots {
            bottom: 10px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
