"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";
import {
  FaArrowLeft,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import Khed1 from "../../../public/projects/Khed1.jpeg";
import VadodraImage from "../../../../public/projects/Vadodra4.jpeg";
import NagarImage from "../../../../public/ongoing/Nagar4.jpeg";
import AETWTAhemadnagar2 from "../../../../public/AETWTAhemadnagar/2.jpeg";
import AETWTAhemadnagar3 from "../../../../public/AETWTAhemadnagar/3.jpeg";
import AETWTAhemadnagar6 from "../../../../public/AETWTAhemadnagar/6.jpeg";
import DilipPalve from "../../../../public/ourLeaders/dilipPalwe.jpg";

const OurTeams = [
  {
    slug: 1,
    leaderName: "Mr. Dilip Palve",
    position1: "Resident cum Highway Engineer",
    position2: "Former executive Engineer (PWD)",
    image: DilipPalve,
    message1: "Welcome to CDF Infra Con Pvt. Ltd.",
    message2:
      "At CDF Infra Con, we stand at the forefront of shaping India's infrastructure landscape with our unparalleled Engineering Consultancy and Services. With extensive experience and a portfolio of successful projects, we are dedicated to pushing the boundaries of what’s possible in the world of infrastructure.",
    message3:
      "Our team is passionate about innovation, continually setting new benchmarks to ensure that we deliver the highest quality solutions to our clients. We are committed to excellence, driven by the vision of crafting the future of India’s infrastructure.",
    message4:
      "Thank you for visiting our website. We look forward to collaborating with you to create enduring and impactful infrastructure solutions.",
    message5: null,
  },
  {
    slug: 2,
    leaderName: "Mr. L.S. Joshi",
    position1: "Team Leader cum Senior Highway Engineer",
    position2: "Former Superintending Engineer",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    message1: "Welcome to CDF Infra Con Pvt. Ltd.",
    message2:
      "At CDF Infra Con, we are proud to be at the forefront of shaping India's infrastructure landscape. Our journey, marked by a wealth of experience and numerous successful projects has established us as a leader in Engineering Consultancy and services. We are committed to excellence and innovation, constantly pushing the boundaries of what is possible in the field of infrastructure. Our dedicated team works tirelessly to set new standards and redefine the industry, ensuring that we remain a benchmark for quality and reliability.",
    message3:
      "Join us as we continue to build a brighter, more robust future for India.",
    message4: null,
    message5: null,
  },
  {
    slug: 3,
    leaderName: "Mr. Vijay B. Bhale",
    position1: "Resident Engineer cum Highway Engineer",
    position2: "Former Chief Engineer (PWD)",
    image:
      "https://images.unsplash.com/photo-1518644730709-0835105d9daa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    message1: "Welcome to CDF Infra Con Pvt. Ltd.",
    message2: "At CDF Infra Con, we are redefining India's",
    message3:
      "infrastructure through our comprehensive engineering consultancy and services. With a wealth of experience and numerous successful projects, we continually push the",
    message4:
      "boundaries of innovation and excellence in the infrastructure sector. Visit our website to learn more about our projects and services.",
    message5: null,
  },
  // {
  //   slug: 4,
  //   leaderName: "Mr. Shivshankar Telamani",
  //   position1: "Highway Maintenance cum Resident Engineer",
  //   position2: null,
  //   image:
  //     "https://plus.unsplash.com/premium_photo-1661559063958-968c8f1928e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   message1: "Welcome to CDF Infra Con Pvt. Ltd.",
  //   message2:
  //     "As the Resident cum Highway Engineer at  CDF Infra Con, I am proud to be part of a team that is at the forefront of shaping India's infrastructure. Our commitment to excellence in engineering consultancy and services ensures that each project we undertake meets the highest standards of quality and efficiency.",
  //   message3:
  //     "With our extensive experience and innovative approach, we are dedicated to delivering infrastructure solutions that not only meet the needs of today but also pave the way for a sustainable and prosperous future. I invite you to explore our website at www.cdfic.com to learn more about our projects, our team, and our vision for the future.",
  //   message4:
  //     "Thank you for your interest in CDF Infra Con Pvt Ltd. We look forward to collaborating with you.",
  //   message5: null,
  // },
  // {
  //   slug: 5,
  //   leaderName: "Mr. Naushad Khan",
  //   position1: "Bridge Engineer",
  //   position2: null,
  //   image:
  //     "https://images.unsplash.com/photo-1631306039548-beb1a80fe8ab?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   message1: "Welcome to CDF Infra Con Pvt. Ltd.",
  //   message2:
  //     "As the Bridge Engineer at CDF Infra Con, I am proud to be part of a team that is at the forefront of shaping India's infrastructure. Our commitment to excellence in engineering consultancy and services ensures that each project we undertake meets the highest standards of quality and efficiency. With our extensive experience and innovative approach, we are dedicated to delivering infrastructure solutions that not only meet the needs of today but also pave the way for a sustainable and prosperous future. I invite you to explore our website at www.cdfic.com to learn more about our projects, our team, and our vision for the future.",
  //   message3:
  //     "Thank you for your interest in CDF Infra Con Pvt Ltd. We look forward to collaborating with you.",

  //   message4: null,
  //   message5: null,
  // },
  {
    slug: 6,
    leaderName: "Mr. Dilip Shinde",
    position1: "Team Leader cum Highway Engineer",
    position2: null,
    image:
      "https://images.unsplash.com/photo-1605464765759-55272601601e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    message1: "Welcome to CDF Infra Con Pvt. Ltd.",
    message2:
      "At CDF Infra Con, we stand at the forefront of shaping India's infrastructure landscape with our unparalleled Engineering Consultancy and Services. With extensive experience and a portfolio of successful projects, we are dedicated to pushing the boundaries of what’s possible in the world of infrastructure.",
    message3:
      "Our team is passionate about innovation, continually setting new benchmarks to ensure that we deliver the highest quality solutions to our clients. We are committed to excellence, driven by the vision of crafting the future of India’s infrastructure.",
    message4:
      "Thank you for visiting our website. We look forward to collaborating with you to create enduring and impactful infrastructure solutions.",
    message5: null,
  },
];

const projects = [
  {
    id: 1,
    title: "Vadodara Mumbai Expressway",
    description:
      "Independent Engineer services for Supervision of Construction of Eight lane access controlled Expressway from Km 43.000 to Km 69.800 (Amne to Bhoj Section-SPUR of Vadodara Mumbai Expressway) in the State of Maharashtra on Hybrid Annuity mode under Bharatmala Pariyojana",
    image: VadodraImage,
  },
  {
    id: 2,
    title: "O & M Khed-Sinner",
    description:
      "Consultancy Services for Supervision Consultant (SC) for 4/6L of Khed (Km 42.00) to Sinnar (Km 177.00) of NH - 60 (Old NH - 50) in the State of Maharashtra",
    image: Khed1,
  },
  {
    id: 3,
    title: "O & M Ane-Mal-Kharwandi",
    description:
      "Consultancy Services of Supervision Consultant (SC) during O&M phase from Malshej Ghat to Ane Ghat Km 101/000 to Km 161/570, from end of Ane Ghat to Start of Ahmednagar Bypass Km 161/570 to Km 211/000 & from Kharwandi Kasar to Junction of NH-211 Km 284/000 to Km 337/000 of two lane with paved shoulder on NH-61 in the state of Maharashtra.",
    image: NagarImage,
  },
  {
    id: 4,
    title: "Authority Engineer of design and construction using (TWT)",
    description:
      "Including routine maintenance and balance work of the Khed–Sinnar section from km. 42.00 to km. 179.946 (Total Length: 137.946) of NH-60 in Maharashtra as a standalone project on EPC Mode.",
    image: AETWTAhemadnagar2,
  },
  {
    id: 5,
    title: "Authority Engineer of White Topping (WT)",
    description:
      "Along with the reconstruction of 20 culverts for NH-61 from Km 101.00 to Km 211.00 and Km 287.00 to Km 337.00 in Maharashtra.",
    image: AETWTAhemadnagar3,
  },
  {
    id: 6,
    title:
      "Consultancy service for feasibility study and preparation of a (DPR)",
    description:
      "For improvement and upgradation of the newly declared National Highway, including the existing Ghazipur-Jamaniya-Saiyadraja road of NH-97 in Uttar Pradesh.",
    image: AETWTAhemadnagar6,
  },
  // Add more projects as needed
];

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="custom-next-arrow absolute right-3 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <FaChevronRight className="text-orange-500 text-3xl hover:text-orange-600" />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="custom-prev-arrow absolute left-3 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <FaChevronLeft className="text-orange-500 text-3xl hover:text-orange-600" />
    </div>
  );
};

const OurTeam = () => {
  const sliderRef = React.useRef(null);
  const settings = {
    dots: true, // Display dots navigation
    infinite: true, // Infinite loop
    speed: 500, // Animation speed
    slidesToShow: 4, // Show 4 cards at a time
    slidesToScroll: 1, // Scroll 1 card at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay interval (3 seconds)
    arrows: false, // Hide default arrows
    responsive: [
      {
        breakpoint: 1024, // For screens smaller than 1024px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // For screens smaller than 600px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="py-16 bg-[#1A1A37] text-white">
        {/* Dark blue background */}
        <div className="container mx-auto px-6 lg:px-5 overflow-hidden relative">
          <h2 className="text-4xl font-bold mb-12 text-center text-orange-500">
            Our Leadership Team
          </h2>

          {/* Custom Prev Arrow */}
          <PrevArrow onClick={() => sliderRef.current.slickPrev()} />

          {/* Slick Slider */}
          <Slider {...settings} ref={sliderRef} className="slick-slider">
            {OurTeams.map((member, index) => (
              <div key={index} className="">
                <div className="flex flex-col items-center py-2">
                  <Link href={`/pages/ourLeaderShipMem/${member.slug}`}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-32 h-32 object-cover cursor-pointer rounded-full shadow-lg border-4 border-orange-500 transform transition-transform duration-500 hover:scale-110"
                    />
                  </Link>
                  <h3 className="text-xl font-semibold mt-4 text-white">
                    {member.leaderName}
                  </h3>
                  <p className="font-semibold mt-1 text-center text-orange-500 ">
                    {member.position1}
                  </p>
                </div>
              </div>
            ))}
          </Slider>

          {/* Custom Next Arrow */}
          <NextArrow onClick={() => sliderRef.current.slickNext()} />
        </div>
      </section>

      <div className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
            Our Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative group w-96 h-96 overflow-hidden bg-black m-auto mt-6 rounded-lg shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  className="object-cover w-full h-full transform duration-700 backdrop-opacity-100 rounded-md"
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  layout="responsive"
                />

                <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
                <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
                  <div className="absolute w-full flex place-content-center px-3">
                    <p className="capitalize font-serif font-bold text-1.5xl text-center shadow-2xl text-white mt-10 mb-10">
                      {project.title}
                    </p>
                  </div>
                  <div className="absolute w-full flex place-content-center mt-20">
                    <p className="font-sans text-center w-4/5 text-white mt-5">
                      {project.description}
                    </p>
                  </div>
                  <button className="absolute left-1/4 bottom-4 bg-white text-black text-center font-bold rounded-lg h-10 w-48">
                    View Projects
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
