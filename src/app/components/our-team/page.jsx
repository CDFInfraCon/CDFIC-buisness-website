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
import Khed1 from "../../../../public/projects/Khed1.jpeg";
import VadodraImage from "../../../../public/projects/Vadodra4.jpeg";
import NagarImage from "../../../../public/ongoing/Nagar4.jpeg";
import AETWTAhemadnagar2 from "../../../../public/AETWTAhemadnagar/2.jpeg";
import AETWTAhemadnagar3 from "../../../../public/AETWTAhemadnagar/3.jpeg";
import AETWTAhemadnagar6 from "../../../../public/AETWTAhemadnagar/6.jpeg";
import DilipPalve from "../../../../public/ourLeaders/dilipPalwe.jpg";
import MrMVPatil from "../../../../public/ourLeaders/MrMVPatil .jpeg";
import MrLSJoshi from "../../../../public/ourLeaders/MrLSJoshi.jpeg";
import MrVBBhale from "../../../../public/ourLeaders/MrVBBhale.jpeg";

const OurTeams = [
  {
    slug: 2,
    leaderName: "Mr. M. V. Patil ",
    position1: "Advisor of the Company",
    position2: "Former Secretary of PWD Maharashtra",
    image: MrMVPatil,
    message1:
      "Mr. M. V. Patil, former Secretary of PWD Maharashtra and ex-President of the Indian Roads Congress (IRC), now serves as an esteemed advisor to CDF Infra Con Private Limited. With decades of leadership in infrastructure development, policy-making, and highway engineering, he brings unparalleled expertise and strategic vision to the organization.",
    message2:
      "Throughout his distinguished career, Mr. Patil has championed innovation, quality, and sustainability in the road sector. As an advisor, he guides the company with a strong focus on technical excellence, compliance, and future-ready solutions. His leadership inspires a culture of professionalism, accountability, and continuous growth within the team.",
    message3:
      "He was a President of IRC – Year 1999, Vice- President IABSE – Year 1998 & 2002, Chairman IIBE – Pune Centre 1990 to 1994, Member of Technical commission on Bridge Engineering – IABSE, Convener of Rural Road Committee, Convener of Sub –Group for State Roads – 10th Five Year Plan, Convener – Committee for Maintenance Norms for State Roads- MORT&H. He was  Member of Fact Finding Committee appointed by Maharashtra Govt. to look into the problem of Flooding in Mumbai in July 2005.",
    message4: null,
    message5: null,
  },
  {
    slug: 4,
    leaderName: "Mr. L. S. Joshi",
    position1: "Team Leader",
    position2: "Former Superintending Engineer",
    image: MrLSJoshi,
    message1:
      "Mr. L. S. Joshi, a former Superintending Engineer of PWD Maharashtra, is currently serving as the Team Leader for one of CDF Infra Con Private Limited's major NHAI projects. With his extensive experience in highway construction and infrastructure management, he has played a crucial role in ensuring the successful execution of this project. His in-depth knowledge of engineering practices, combined with his practical approach to problem-solving, has been integral in enhancing the project's efficiency and overall performance.",
    message2:
      "Under Mr. Joshi’s leadership, the project has become more streamlined, with a heightened focus on quality, safety, and timely completion. His ability to make quick, well-informed decisions and his hands-on management style have significantly improved the coordination between teams, resulting in smoother operations and fewer delays. His commitment to maintaining high standards of technical and safety compliance has ensured the project progresses without compromising on quality.",
    message3:
      "Beyond his technical expertise, Mr. Joshi is an exceptional team leader who fosters a positive, collaborative work environment. His guidance has motivated the team to strive for excellence, promoting a culture of continuous improvement. With his leadership, the team has grown both professionally and personally, further contributing to the success of the project. Mr. Joshi’s unwavering dedication to delivering exceptional results makes him a valuable asset to CDF Infra Con Private Limited.",
    message4: null,
    message5: null,
  },
  {
    slug: 1,
    leaderName: "Mr. Dilip G. Palve",
    position1: "Resident Engineer",
    position2: "Former Executive Engineer",
    image: DilipPalve,
    message1:
      "Mr. Dilip G. Palve, a seasoned former Executive Engineer, now serves as the Resident Engineer for one of CDF Infra Con Private Limited's key NHAI projects. With his wealth of experience in civil engineering and infrastructure development, Mr. Palve brings invaluable expertise and practical insight to our team. Over the years, he has been instrumental in ensuring the seamless execution of large-scale projects, consistently meeting deadlines while upholding the highest standards of quality and safety.",
    message2:
      "His hands-on approach, coupled with his deep understanding of technical and regulatory requirements, allows him to effectively oversee all aspects of the project. From managing day-to-day operations on-site to troubleshooting complex engineering challenges, Mr. Palve’s skill set ensures that the project runs efficiently, minimizing risks and delays. His attention to detail and commitment to precision are evident in every task he undertakes, whether it’s coordinating with contractors, managing resources, or ensuring strict adherence to timelines.",
    message3:
      "Beyond his technical acumen, Mr. Palve excels at leading and motivating teams. His leadership style is rooted in clarity, trust, and collaboration, which has fostered a culture of accountability and high performance among his team members. His ability to manage diverse groups, resolve conflicts, and keep the project on track makes him an invaluable asset to CDF Infra Con. Mr. Palve’s dedication, work ethic, and strong problem-solving abilities not only contribute to the success of the current project but also inspire those around him to strive for excellence.",
    message4: null,
    // "Thank you for visiting our website. We look forward to collaborating with you to create enduring and impactful infrastructure solutions.",
    message5: null,
  },
  {
    slug: 3,
    leaderName: "Mr. V. B. Bhale",
    position1: "Resident Engineer",
    position2: "Former Chief Engineer",
    image: MrVBBhale,
    message1:
      "Mr. V. B. Bhale, a former Chief Engineer of PWD Maharashtra, brings a wealth of experience to CDF Infra Con Private Limited. Having worked extensively in the Pradhan Mantri Gram Sadak Yojana (PMGSY), he has developed a deep understanding of rural and national highway infrastructure. Currently, Mr. Bhale is contributing his expertise to one of our significant NHAI projects, where his guidance has been instrumental in helping our team achieve major milestones.",
    message2:
      "His extensive knowledge in project management, technical planning, and civil engineering has been a tremendous asset to the project. Mr. Bhale’s leadership and strategic insights have enabled the team to improve efficiency, adhere to stringent deadlines, and meet high-quality standards. His experience in handling large-scale infrastructure projects has enhanced the team's capability to tackle complex challenges and achieve optimal results.",
    message3:
      "As a civil engineer, Mr. Bhale is known for his sharp problem-solving skills, meticulous attention to detail, and deep understanding of engineering principles. He excels in managing resources effectively, ensuring safety, and adhering to regulatory standards. His leadership not only enhances project execution but also fosters a culture of continuous learning and development within the team. With a strong focus on quality, innovation, and sustainability, Mr. Bhale’s contribution continues to elevate the standard of our work and drive the project’s success forward.",
    message4: null,
    message5: null,
  },

];

const projects = [
  {
    id: 1,
    title: "Vadodara Mumbai Expressway",
    description:
      "Independent Engineer services for Supervision of Construction of 8 lane access controlled Expressway from Km 43.000 to Km 69.800 (Amne to Bhoj Section-SPUR of Vadodara Mumbai Expressway) in the State of Maharashtra on Hybrid Annuity mode under Bharatmala Pariyojana",
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
                  <Link href={"/pages/projects"}>
                    <button className="absolute left-1/4 bottom-4 bg-white text-black text-center font-bold rounded-lg h-10 w-48">
                      View Projects
                    </button>
                  </Link>
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
