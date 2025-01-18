"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Import Slick carousel styles
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the CSS file for AOS
import Link from "next/link";
import Image from "next/image";
import Atcc1 from "../../../../public/equipment/Atcc1.webp";
import Atcc2 from "../../../../public/equipment/Atcc2.webp";
import Atcc3 from "../../../../public/equipment/Atcc3.webp";
import Fwd1 from "../../../../public/equipment/Fwd1.png";
import Fwd2 from "../../../../public/equipment/Fwd2.png";
import Mbiu1 from "../../../../public/equipment/Mbiu1.jpeg";
import Mbiu2 from "../../../../public/equipment/Mbiu2.jpeg";
import Mbiu3 from "../../../../public/equipment/Mbiu3.jpeg";
import Rrt1 from "../../../../public/equipment/Rrt1.jpeg";
import Rrt2 from "../../../../public/equipment/Rrt2.webp";
import Nsv1 from "../../../../public/equipment/Nsv1.jpeg";
import Nsv2 from "../../../../public/equipment/Nsv2.jpeg";

const ourEquipment = [
  {
    title: "ATCC (Automatic Traffic Counter Classifer)",
    description:
      "An Automatic Traffic Counter and Classifier (ATCC) is a system used to monitor and analyze vehicle traffic on roads. It typically consists of sensors and software that can detect, count, and categorize vehicles passing a certain point. Here are the main components and functionalities:",
    images: [Atcc1, Atcc2, Atcc3],
  },
  {
    title: "NSV (Netrwork Survey Vehicle)",
    description:
      "A Network Survey Vehicle (NSV) is a specialized vehicle equipped with various sensors and technologies designed to collect data about road networks, infrastructure, and traffic conditions. These vehicles are commonly used in transportation engineering, urban planning, and infrastructure management. Here’s a breakdown of their key features and functionalities:",
    images: [Nsv1, Nsv2],
  },
  {
    title: "FWD (Falling Weight Deflectometer)",
    description:
      "A Falling Weight Deflectometer (FWD) is a specialized device used to evaluate the structural integrity and load-bearing capacity of pavement surfaces, particularly in road and airport runways. It simulates the impact of a vehicle's wheel load on the pavement and measures the resulting deflections to assess the pavement's condition. Here's a detailed overview:",
    images: [Fwd1, Fwd2],
  },
  {
    title: "MBIU (Mobile Bridge Inspection Unit)",
    description:
      "A Mobile Bridge Inspection Unit (MBIU) is a specialized vehicle or platform designed for the inspection, assessment, and maintenance of bridges and other elevated structures. These units are equipped with various tools and technologies that enable inspectors to evaluate the structural integrity and safety of bridges efficiently and effectively. Here’s a closer look at the features, components, and advantages of an MBIU:",
    images: [Mbiu1, Mbiu2, Mbiu3],
  },
  {
    title: "Retro Reflectometer",
    description:
      "A Retroreflectometer is an optical instrument used to measure the retroreflective properties of materials, particularly road signs, pavement markings, and other surfaces designed to enhance visibility at night or in low-light conditions. Retroreflectivity is the ability of a surface to reflect light back to its source, which is critical for safety in traffic and navigation. Here's a detailed overview:",
    images: [Rrt1, Rrt2],
  },
];

const Equipment = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);
  return (
    <>
      <section
        className="relative bg-cover bg-center h-64 md:h-72 lg:h-80"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1487132906645-8e0fbba067e0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex flex-col justify-center items-center p-4">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white text-center">
            Our Euipment
          </h1>
          {/* <p className="text-base md:text-lg lg:text-xl text-white mt-4 text-center">
                    Swag shoivdigoitch literally meditation subway tile tumblr
                    cold-pressed. Gastropub street art beard.
                </p> */}
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          {ourEquipment.map((attraction, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className={`mb-12 flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center shadow-lg rounded-md bg-white overflow-hidden`}
            >
              <div className="w-full md:w-1/2 flex justify-center">
                {attraction.images.length > 1 ? (
                  <Slider {...settings} className="w-full">
                    {attraction.images.map((image, i) => (
                      <div key={i} className="relative w-full h-72 rounded-md">
                        <Image
                          src={image}
                          alt={`Attraction ${index}-${i}`}
                          layout="fill" // Fills the container
                          objectFit="cover" // Ensures the image covers the area
                          className="rounded-md" // Adds rounded corners
                        />
                      </div>
                    ))}
                  </Slider>
                ) : (
                  <div className="relative w-full h-72">
                    <Image
                      src={attraction.images[0]}
                      alt={`Attraction ${index}`}
                      layout="fill" // Ensures the image fills the container
                      objectFit="cover" // Ensures the image covers the area perfectly
                      className="rounded-md" // Adds rounded corners
                    />
                  </div>
                )}
              </div>
              <div className="w-full md:w-1/2 p-4 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 border-b-4 border-orange-500 pb-2">
                  {attraction.title}
                </h3>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                  {attraction.description}
                </p>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-orange-500 mx-2 text-white font-bold py-1 px-1 rounded-sm hover:bg-orange-600 transition-all duration-300"
                  >
                    Learn more
                  </motion.button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Equipment;
