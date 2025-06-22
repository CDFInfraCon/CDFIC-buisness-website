"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Custom Arrows for Slick Carousel with color adjustments
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-[#1A1A37] p-3 rounded-full text-white cursor-pointer hover:bg-[#FF7F50] transition"
    onClick={onClick}
  >
    <FaArrowLeft size={20} />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-[#1A1A37] p-3 rounded-full text-white cursor-pointer hover:bg-[#FF7F50] transition"
    onClick={onClick}
  >
    <FaArrowRight size={20} />
  </div>
);

const Testimonials = () => {
  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div>
        <ul className="slick-dots"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className="w-4 h-4 bg-gray-300 rounded-full hover:bg-gray-600 transition cursor-pointer"
        style={{ margin: "0 8px" }}
      />
    ),
    responsive: [
      {
        breakpoint: 1024, // Large screens (desktops)
        settings: {
          slidesToShow: 2, // Show 2 cards
        },
      },
      {
        breakpoint: 768, // Medium screens (tablets)
        settings: {
          slidesToShow: 1, // Show 1 card
        },
      },
    ],
  };

  const testimonials = [
    {
      name: "Digvijay F. Patankar",
      position: "Senior Pavement Specialist",
      image:
        "https://img.freepik.com/free-photo/long-shot-people-running-together-outside_23-2149033508.jpg?ga=GA1.1.882660512.1723693951&semt=ais_hybrid",
      quote:
        "Working with M/s CDF Infra as a Senior Pavement Specialist has been a rewarding experience, marked by technical excellence and strong project execution. Their commitment to quality, coordination, and timely decisions ensures smooth and impactful infrastructure development.",
    },
    {
      name: "Dilip Palve",
      position: "Resident cum Highway Engineer",
      image:
        "https://img.freepik.com/free-photo/high-angle-shot-big-highway-with-multiple-roads-train-riding-through-central-road_181624-26996.jpg?ga=GA1.1.882660512.1723693951&semt=ais_hybrid",
      quote:
        "Their expert team, clear communication, and systematic approach have played a vital role in the successful execution of our highway project",
    },
    {
      name: "Gaurav Malewar",
      position: "SQME",
      image:
        "https://img.freepik.com/free-photo/aerial-views-with-cars-streets_23-2148959679.jpg?t=st=1727331492~exp=1727335092~hmac=0f97b118da36705fb063d86e586088126d4bb5d3ae177703d7a787fa60c747c1&w=900",
      quote:
        "Working with M/s CDF Infra has been a professionally enriching experience, showcasing their unwavering commitment to quality and engineering excellence.",
    },
    {
      name: "Krushandev Mahadkar",
      position: "SQME",
      image:
        "https://img.freepik.com/free-photo/modern-tower-city-finance-skyline_1417-317.jpg?t=st=1727331542~exp=1727335142~hmac=ce42521c5549e51b40546774b7d4993719f49679de998ba82703edbc3dac8e53&w=900",
      quote:
        "M/s CDF Infra’s professionalism and commitment to engineering excellence are evident in every phase of the project.",
    }
  ];

  return (
    <section className="py-16 overflow-hidden  bg-[#1A1A37]">
      <div className="container mx-auto px-10">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-orange-500 mb-4">
            {" "}
            {/* Dark blue heading */}
            Testimonials
          </h2>
          <p className="text-lg text-orange-500 max-w-2xl mx-auto">
            Hear from our clients about the professional services we provide.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-3">
                <div className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden p-6 h-full border-2 border-[#FF7F50]">
                  {" "}
                  {/* Orange border */}
                  {/* Image Section */}
                  <div className="mb-4 w-20 h-20 relative">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  {/* Testimonial Content */}
                  <div className="text-center">
                    <p className="text-lg font-semibold text-gray-800 mb-3">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <h3 className="text-md font-bold text-[#1A1A37]">
                      {" "}
                      {/* Dark blue for the name */}
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
