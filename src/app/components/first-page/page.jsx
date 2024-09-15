import React from "react";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-900">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/videos/khedCrop.mp4"
        type="video/mp4"
        autoPlay
        muted
        loop
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

      {/* Hero Content */}
      <div
        className="relative z-20 text-center text-white px-4"
        data-aos="zoom-in-up"
        data-aos-offset="300"
        data-aos-duration="500"
      >
        <h1
          className="text-white animate__animated animate__bounce"
          style={{ fontSize: "3rem", fontWeight: "bolder" }}
        >
          Engineering for
        </h1>

        <h1
          className="text-white"
          style={{ fontSize: "3rem", fontWeight: "bolder" }}
        >
          sustainable
        </h1>
        <h1
          className="text-white"
          style={{ fontSize: "3rem", fontWeight: "bolder" }}
        >
          development
        </h1>
        <h1 className="text-gray-300" data-aos="fade-up">
          We engineer infrastructure keeping in mind about the future. We build
          today thinking about tomorrow.
        </h1>
      </div>
    </section>
  );
};

export default Hero;

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";

// const Hero = () => {
//   return (
//     <Swiper spaceBetween={50} slidesPerView={1}>
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//     </Swiper>
//   );
// };

// export default Hero;
