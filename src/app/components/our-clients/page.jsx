"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import PMGSYImage from "../../../../public/clients/PMGSY.webp";
import Nhaimage from "../../../../public/clients/Nhai.webp";
import MorthImage from "../../../../public/clients/Morth.webp";
import CidcoImage from "../../../../public/clients/Cidco.webp";
import MmrdaImage from "../../../../public/clients/Mmrda.webp";
import PwaImage from "../../../../public/clients/Pwa.webp";
import MewaraImage from "../../../../public/clients/mewara.webp";

// Clients data
const clients = [
  {
    name: "Client 1",
    logo: "https://www.media4growth.com/wp-content/uploads/2024/06/1513831974.jpg",
  },
  {
    name: "Client 2",
    logo: Nhaimage,
  },
  {
    name: "Client 3",
    logo: PMGSYImage,
  },
  {
    name: "Client 4",
    logo: MorthImage,
  },
  {
    name: "Client 5",
    logo: CidcoImage,
  },
  {
    name: "Client 6",
    logo: MmrdaImage,
  },
  {
    name: "Client 6",
    logo: PwaImage,
  },
  {
    name: "Client 6",
    logo: MewaraImage,
  },
];

const OurClients = () => {
  // Slick slider settings
  const settings = {
    dots: true, // Enable dots
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Enable arrows
    responsive: [
      {
        breakpoint: 1024, // For large tablets and desktops
        settings: {
          slidesToShow: 3,
          arrows: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // For small tablets
        settings: {
          slidesToShow: 2,
          arrows: true,
          dots: true,
        },
      },
      {
        breakpoint: 480, // For mobile devices
        settings: {
          slidesToShow: 1,
          arrows: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="py-12  ">
      <div className="container mx-auto text-center mb-8 px-4 md:px-0">
        <h2 className="text-4xl font-bold text-[#1A1A37]">Our Clients</h2>
        <p className="text-lg text-[#1A1A37]">
          Proud to have worked with some of the best in the industry ccc
        </p>
      </div>

      <div className="container mx-auto overflow-hidden">
        <Slider {...settings}>
          {clients.map((client, index) => (
            <div key={index} className="px-4">
              <div className="p-6 flex flex-col items-center justify-center transform transition-transform hover:scale-105 duration-300">
                <div className="w-full h-24 relative">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-md"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {client.name}
                </h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default OurClients;
