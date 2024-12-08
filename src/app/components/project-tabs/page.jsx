// import React, { useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown, ChevronUp } from "lucide-react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; // Import Slick carousel styles
// import "slick-carousel/slick/slick-theme.css";
// import Vmeproj1 from "../../../../public/ongoing/Vmeproj1.jpeg";
// import Vmeproj2 from "../../../../public/ongoing/Vmeproj2.jpeg";
// import Vmeproj3 from "../../../../public/ongoing/Vmeproj3.jpeg";
// import Vmeproj4 from "../../../../public/ongoing/Vmeproj4.jpeg";

// const ProjectTabs = () => {
// const categories = [
//   "All",
//   "DPR",
//   "Design",
//   "PMC",
//   "Safety Consultant",
//   "Authority Engineer/ Independent Engineer",
// ];
// const [statusFilter, setStatusFilter] = useState("Completed");
// const [categoryFilter, setCategoryFilter] = useState("All");
// const [isDropdownOpen, setIsDropdownOpen] = useState(false);

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
// };

// const filteredProjects = OurProjects.filter((project) => {
//   return (
//     project.status === statusFilter &&
//     (categoryFilter === "All" || project.category === categoryFilter)
//   );
// });

//   return (
//     <>
//       <div className="">
//         {/* Status Tabs */}
//         <div className="flex items-center  w-full">
//           {/* Button Group */}
// <div className="flex justify-start space-x-4 mt-5">
//   <button
//     className={`px-4 py-2 font-bold rounded-md ${
//       statusFilter === "Completed"
//         ? "bg-orange-500 text-white shadow-lg"
//         : "bg-gray-300 text-gray-700"
//     } transition duration-300 ease-in-out transform hover:scale-110 hover:bg-orange-400 text-xl cursor-pointer`}
//     onClick={() => setStatusFilter("Completed")}
//   >
//     Completed
//   </button>
//   <button
//     className={`px-4 py-2 font-bold rounded-md ${
//       statusFilter === "Ongoing"
//         ? "bg-orange-500 text-white shadow-lg"
//         : "bg-gray-300 text-gray-700"
//     } transition duration-300 ease-in-out transform hover:scale-110 hover:bg-orange-400 text-xl cursor-pointer`}
//     onClick={() => setStatusFilter("Ongoing")}
//   >
//     Ongoing
//   </button>
// </div>

//           {/* Dropdown */}
//           <div className=" mx-5 mt-5 text-center">
// <motion.button
//   className="w-40 px-6 py-2 bg-orange-500 text-white rounded-lg text-left text-xl font-semibold flex justify-between items-center"
//   onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//   whileHover={{ scale: 1.02 }}
//   whileTap={{ scale: 0.98 }}
// >
//   {categoryFilter}
//   {isDropdownOpen ? (
//     <ChevronUp size={24} />
//   ) : (
//     <ChevronDown size={24} />
//   )}
// </motion.button>

//             <AnimatePresence>
//               {isDropdownOpen && (
//                 <motion.div
//                   className="absolute w-52 mt-2 bg-white border border-blue-200 rounded-lg overflow-hidden z-10 shadow-lg"
//                   initial={{ opacity: 0, y: -20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                 >
//                   {categories.map((category) => (
//                     <motion.button
//                       key={category}
//                       className="w-full text-sm px-6 py-3 text-left hover:bg-blue-50 transition-colors text-blue-800"
//                       onClick={() => {
//                         setCategoryFilter(category);
//                         setIsDropdownOpen(false);
//                       }}
//                       whileHover={{ x: 10 }}
//                     >
//                       {category}
//                     </motion.button>
//                   ))}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* Category Filter Dropdown */}
//         {/* <div className="mb-4 text-center">
//         <label htmlFor="category" className="mr-2 text-xl  font-medium">
//           Filter by Category:
//         </label>
//         <select
//           id="category"
//           className="p-2 border border-gray-300 rounded-md w-full sm:w-auto transition duration-300 text-sm ease-in-out transform hover:scale-105 hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           value={categoryFilter}
//           onChange={(e) => setCategoryFilter(e.target.value)}
//         >
//           {categories.map((category) => (
//             <option key={category} value={category}>
//               {category}
//             </option>
//           ))}
//         </select>
//       </div> */}

//         {/* Project Cards */}
//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 overflow-hidden mt-5">
//           {filteredProjects.map((project, index) => (
//             <motion.div
//               key={index}
//               className="p-4 border rounded-lg shadow-lg bg-white flex flex-col"
//               whileHover={{
//                 scale: 1.05,
//                 boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
//                 transition: { duration: 0.3 },
//               }}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               {/* <Image
//                 src={project.image}
//                 alt={project.name}
//                 width={500}
//                 height={300}
//                 className="mb-4 rounded-md text-xs"
//                 objectFit="cover"
//               /> */}

//               {project?.images?.length > 1 ? (
//                 <Slider {...settings} className="w-full">
//                   {project.images.map((image, i) => (
//                     <Image
//                       src={image}
//                       alt={project.name}
//                       width={500}
//                       height={300}
//                       className="mb-4 rounded-md text-xs"
//                       layout="fill" // Fills the container
//                       objectFit="cover" // Ensures the image covers the area
//                     />
//                   ))}
//                 </Slider>
//               ) : (
//                 <Image
//                   src={project.images[0]}
//                   alt={`Attraction ${project.name}`}
//                   width={500}
//                   height={300}
//                   layout="fill" // Ensures the image fills the container
//                   objectFit="cover" // Ensures the image covers the area perfectly
//                   className="rounded-md" // Adds rounded corners
//                 />
//               )}

//               {/* <h3 className="mb-2 text-xs font-semibold">{project.name}</h3> */}
//               <p className="mb-2 text-sm">{project.name}</p>

//               {/* This <p> tag will now be aligned to the bottom */}
//               <p className="text-sm mt-auto self-start">
//                 Length: {project.length}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProjectTabs;

// images: [Vmeproj1, Vmeproj2, Vmeproj3, Vmeproj4],

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Vmeproj1 from "../../../../public/ongoing/Vmeproj1.jpeg";
import Vmeproj2 from "../../../../public/ongoing/Vmeproj2.jpeg";
import Vmeproj3 from "../../../../public/ongoing/Vmeproj3.jpeg";
import Vmeproj4 from "../../../../public/ongoing/Vmeproj4.jpeg";
import Nagar1 from "../../../../public/ongoing/Nagar1.jpeg";
import Nagar2 from "../../../../public/ongoing/Nagar2.jpeg";
import Nagar3 from "../../../../public/ongoing/Nagar3.jpeg";
import KhedSinner1 from "../../../../public/ongoing/KhedSinner1.jpeg";
import KhedSinner2 from "../../../../public/ongoing/KhedSinner2.jpeg";
import Khed2 from "../../../../public/projects/Khed2.jpeg";
import Khed3 from "../../../../public/projects/Khed3.jpeg";
import BadneraRoadNagzariKharda from "../../../../public/completed/O1.jpg";
import GujaratMaharashtra from "../../../../public/completed/GujaratMaharashtra.jpg";
import KhedSinnarSectionofNH50 from "../../../../public/completed/Khed-SinnarSectionofNH-50.jpg";
import AmravatiChikhliSection from "../../../../public/completed/AmravatiChikhliSection.jpg";
import AmravatiChikhlisectionofNH6 from "../../../../public/completed/Amravati-ChikhlisectionofNH-6.jpg";
import PuneSolapurSectionofNH9 from "../../../../public/completed/PuneSolapurSectionofNH-9.jpg";
import TuIjapurShingoliYedshi from "../../../../public/completed/TuIjapurShingoli&Yedshi.jpg";
import PaudKolvanLonavalaRoad from "../../../../public/completed/PaudKolvanLonavalaRoad.jpg";

const OurProjects = [
  {
    id: 1,
    status: "Completed",
    name: "Package 9 (NH-53 Badnera Road-Nagzari Kharda Road section from Belora Kherda Karanja Mangrulpir SH 280 and SH 274 and Murtizapur to Kherda SH 282 excluding Badnera Nagzari) for up gradation to Two Lane paved shoulder/ Four Lane configuration in the state of Maharashtra",
    length: "16.55 KM",
    client: "EPC Contractor Pentacle Consultant (I) Pvt Ltd.",
    category: "DPR",
    images: [BadneraRoadNagzariKharda],
  },
  {
    id: 2,
    status: "Completed",
    name: "Four laning of Fagne to Gujarat-Maharashtra Border section of NH 6 from Km 510 to Km 650.79 in Maharashtra under NHDP Phase IV.",
    length: "141.59 km.",
    client: "GHV (India) Pvt Ltd",
    category: "Design",
    images: [GujaratMaharashtra],
  },
  {
    id: 3,
    status: "Completed",
    name: "Four Laning of Khed-Sinnar Section of NH-50 from Km 42+000 to Km 177+000 (Design Length - 137.946 Km) under NHDP Phase IV in the state of Maharashtra on DBFOT Basis",
    length: "137.94 km.",
    client: "IL&FS Transportation Network Limited",
    category: "Design",
    images: [KhedSinnarSectionofNH50],
  },
  {
    id: 4,
    status: "Completed",
    name: "Four Laning of Amravati- Chikhli section of NH-6 [Package-1 from km 166.000 (Amravati) to km 220.000 (Near Kurankhed)] in the state of Maharashtra",
    length: "54 km.",
    client: "Skylark",
    category: "Design",
    images: [AmravatiChikhliSection],
  },
  {
    id: 5,
    status: "Completed",
    name: "Amravati- Chikhli section of NH-6 [Package-II from km 220.000 (Near Kurankhed) to km 270.000 (Near Shelad)] in the state of Maharashtra",
    length: "40 km.",
    client: "BCCPIL",
    category: "Design",
    images: [AmravatiChikhlisectionofNH6],
  },
  {
    id: 6,
    status: "Completed",
    name: "Widening of existing road from Km 144.400 to Km 249.000 on the Pune Solapur Section of NH-9.",
    length: "105 km.",
    client: "IL&FS Transportation Network Limited",
    category: "Design",
    images: [PuneSolapurSectionofNH9],
  },
  {
    id: 7,
    status: "Completed",
    name: "Development of existing roads where bypasses are provided, in towns/village (Ule, Suratgaon, Malumbra, TuIjapur, Shingoli & Yedshi) On NH-211 (New-NH-52) & Naldurg,Omarga on NH-09 ,(New NH-65) In the State of Maharashtra on EPC Mode",
    length: "5 km.",
    client: "M/s Anant Chaitanya Consultancy Services",
    category: "Design",
    images: [TuIjapurShingoliYedshi],
  },
  {
    id: 8,
    status: "Completed",
    name: "Improvement to Paud Kolvan Lonavala Road, MDR 26, Km 16/400 to 41/300, Tal. Maval, Dist. Pune, and associated roads",
    length: "71.16 km.",
    client: "Roadway Solution India Infra Limited",
    category: "PMC",
    images: [PaudKolvanLonavalaRoad],
  },
  {
    id: 9,
    status: "Completed",
    name: "Improvements to Malharpeth- Umbraj- Masur- Mayani - Diganchi -Mahud Pandharpur Road S.H.143 (Km 55/000 to 153/420) in the state of Maharashtra under MRIP on Hybrid Annuity Mode",
    length: "46.08 km.",
    client: "Roadway Solution India Infra Limited",
    category: "PMC",
    images: [],
  },
  {
    id: 10,
    status: "Completed",
    name: "Improvement of roads connecting the tourist destination in Pune District (Panshet, Lonavala, Rajmachi. Torna, Sinhgad, Purandar)",
    length: "51.18 km.",
    client: "Roadway Solution India Infra Limited",
    category: "PMC",
    images: [],
  },
  {
    id: 11,
    status: "Completed",
    name: "Improvements to Roads in Industrial Sector in Pune District (Hinjewadi, Chakan, Talegaon, Ranjangaon, Jejuri)",
    length: "58.36 km.",
    client: "Roadway Solution India Infra Limited",
    category: "PMC",
    images: [],
  },
  {
    id: 12,
    status: "Completed",
    name: "Improvements to Mahabaleshwar Satara Rahimatpur Pusesawali Vita Road, SH - 140 in the state of Maharashtra under MRIP on Hybrid Annuity Mode.",
    length: "71.78 km.",
    client: "Roadway Solution India Infra Limited",
    category: "PMC",
    images: [],
  },
  {
    id: 13,
    status: "Completed",
    name: "Consultancy Services for Feasibility study and preparation of Detail Project Report (DPR) for improvement and up-gradation of newly declared National Highways in the State of Uttar Pradesh.",
    length: "60 km.",
    client: "NHAI",
    category: "DPR",
    images: [],
  },
  {
    id: 14,
    status: "Completed",
    name: "Construction of Eight lane access-controlled Expressway from Km 103.400 to Km 128.000 of Vadodara Mumbai Expressway in the State of Gujarat, UT of DNH and Maharashtra on Hybrid Annuity Mode under Bharatmala Pariyojana.",
    length: "24.60 km.",
    client: "Roadway Solution India Infra Limited",
    category: "PMC",
    images: [],
  },
  {
    id: 15,
    status: "Completed",
    name: "Construction of Eight lane access-controlled Expressway from km 128.000 to km 154.600 of Vadodara Mumbai Expressway in the state of Gujarat on Hybrid Annuity mode under Bharatmala Pariyojna.",
    length: "26.60 km.",
    client: "Roadway Solution India Infra Limited",
    category: "PMC",
    images: [],
  },
  {
    id: 16,
    status: "Completed",
    name: "Construction of Eight lane access-controlled Expressway from Km 154.600 to Km 190.000 of Vadodara Mumbai Expressway in the State of Gujarat on Hybrid Annuity Mode under Bharatmala Pariyojana.",
    length: "35.400 km.",
    client: "Roadway Solution India Infra Limited",
    category: "PMC",
    images: [],
  },
  {
    id: 17,
    status: "Completed",
    name: "Balance Work under Phase -II for 4 laning of Khed Sinner Section of NH-50 (New NH-60) Comprising of the Stretches of Kalamb Bypass, Bhatkalwadi, and Alephata bypass in the State of Maharashtra.",
    length: "8.634 km.",
    client: "NHAI",
    category: "Safety Consultant",
    images: [],
  },
  {
    id: 18,
    status: "Completed",
    name: "Balance work of Khed Ghat Realignment and Narayangaon Bypass on Khed - Sinnar section of NH - 60 in the State of Maharashtra on EPC Mode.",
    length: "9.319 km.",
    client: "NHAI",
    category: "Safety Consultant",
    images: [],
  },
  {
    id: 19,
    status: "Completed",
    name: "Four Laning of NH-52 (New-NH 15) from end of Biswanath Chariali by-pass to Gohpur in the state of Assam on EPC mode.",
    length: "57.50 km.",
    client: "NHIDCL",
    category: "Safety Consultant",
    images: [],
  },
  {
    id: 20,
    status: "Completed",
    name: "4-lanning of Balwara to Dhangaon section of NH-347BG & 753L in the State of Madhya Pradesh under Bharatmala Pariyojana Phase-I.",
    length: "40.40 km.",
    client: "NHAI",
    category: "Safety Consultant",
    images: [],
  },
  {
    id: 21,
    status: "Ongoing",
    name: "Consultancy Services for Authority’s Engineer for Supervision of construction of four laning of NH 965 G from Baramati to Indapur in the State of Maharashtra under Bharatmala Pariyojna on EPC mode.",
    length: "42.131 km.",
    client: "NHAI",
    category: "Safety Consultant",
    images: [],
  },
  {
    id: 22,
    status: "Ongoing",
    name: "Consultancy Services for Authority’s Engineer for Supervision of construction of four laning of NH 965 G from Indapur to Tondale in the State of Maharashtra under Bharatmala Pariyojna on EPC mode.",
    length: "24.76 km.",
    client: "NHAI",
    category: "Safety Consultant",
    images: [],
  },
  {
    id: 23,
    status: "Ongoing",
    name: "Consultancy Services for Authority’s Engineer for Supervision of construction of four laning of NH 965 G from Indapur to Tondale in the State of Maharashtra under Bharatmala Pariyojna on EPC mode.",
    length: "22.94 km.",
    client: "NHAI",
    category: "Safety Consultant",
    images: [],
  },
  {
    id: 24,
    status: "Completed",
    name: "Rehabilitation and Upgradation to Intermediate Lane configuration of Shri Kyari - Gumma section of NH-707 in the State of Himachal Pradesh under Green National Highways Corridor project (GNHCP) with the loan assistance of World Bank on EPC mode.",
    length: "19.900 km.",
    client: "NHAI",
    category: "Safety Consultant",
    images: [],
  },
  {
    id: 25,
    status: "Ongoing",
    name: "Independent Engineer services for Supervision of Construction of Eight lane access-controlled Expressway from Amne to Bhoj Section-SPUR of Vadodara Mumbai Expressway in the State of Maharashtra on Hybrid Annuity mode under Bharatmala Pariyojana.",
    length: "24.6 km.",
    client: "NHAI",
    category: "Authority Engineer/ Independent Engineer",
    images: [Vmeproj1, Vmeproj2, Vmeproj3, Vmeproj4],
  },
  {
    id: 26,
    status: "Ongoing",
    name: "Four Lanning of existing 2/4 lane stretch from Lonand to Dive Ghat of Mohol – Alandi section of NH – 965 in the state of Maharashtra to be executed on EPC Mode under Bharatmala Pariyojana.",
    length: "54.500 km.",
    client: "NHAI",
    category: "Safety Consultant",
    images: [],
  },
  {
    id: 27,
    status: "Ongoing",
    name: "Consultancy Services of Road Safety Audit and black spot rectification on NHs with PWD in the state of Punjab.",
    length: "500 km.",
    client: "MoRTH",
    category: "Safety Consultant",
    images: [],
  },
  {
    id: 28,
    status: "Ongoing",
    name: "Consultancy Services of Supervision Consultant during O&M phase from Malshej Ghat to Ane Ghat on NH-61 in the state of Maharashtra.",
    length: "167.700 km.",
    client: "NHAI",
    category: "Supervision Consultant Operation & Maintenance",
    images: [Nagar1, Nagar2, Nagar3],
  },
  {
    id: 29,
    status: "Ongoing",
    name: "Consultancy Services for Supervision Consultant for 4/6L of Khed to Sinnar of NH - 60 in the State of Maharashtra.",
    length: "131.900 km.",
    client: "NHAI",
    category: "Supervision Consultant Operation & Maintenance",
    images: [Khed2, Khed3, KhedSinner1, KhedSinner2],
  },
  {
    id: 30,
    status: "Completed",
    name: "Detailed Project Report of additional Service Road / Slip Road in the stretch of Pune-Solapur section NH-65 in the State of Maharashtra as Standalone project on EPC Mode.",
    length: "16.645 km.",
    client: "NHAI",
    category: "DPR",
    images: [],
  },
  {
    id: 31,
    status: "Ongoing",
    name: "Road Safety Audit of construction of 2-lanning with paved shoulder from Karnataka/Goa Border on NH-4A in the state of Karnataka on EPC Mode.",
    length: "84.120 km.",
    client: "NHAI",
    category: "Safety Consultant",
    images: [],
  },
  {
    id: 32,
    status: "Ongoing",
    name: "Widening to 2-lane with paved shoulder of Adilabad-Bela section of NH353B in the state of Telangana under annual plan 2021-22 on EPC mode under NH(O).",
    length: "32.970 km.",
    client: "PWD Telangana – NH Division",
    category: "Safety Consultant",
    images: [],
  },
  {
    id: 33,
    status: "Ongoing",
    name: "Construction of balance works (VUP, service Road, Drain, Junction Devetopment, Bus-Bay and FOB) for four laning of Tutjapur-Ausa section of NH-361 under Bharatmata Pariyojna in the State of Maharashtra on EPC Mode.",
    length: "55.835 km.",
    client: "NHAI",
    category: "Safety Consultant",
    images: [],
  },
  {
    id: 34,
    status: "Ongoing",
    name: "Project Management Unit (PMU) at MRRDA for roads to be taken up for construction/up-gradation with Full Depth Reclamation Technology in Maharashtra.",
    length: "250 km.",
    client: "PMGSY",
    category: "DPR",
    images: [],
  },
  {
    id: 35,
    status: "Ongoing",
    name: "Authority Engineer of White topping (TWT) along with reconstruction of 20 nos. culverts for NH-61 in the State of Maharashtra.",
    length: "167.700 km.",
    client: "NHAI",
    category: "Authority Engineer/ Independent Engineer",
    images: [],
  },
  {
    id: 36,
    status: "Ongoing",
    name: "Authority Engineer of design and construction of using Thin White topping (TWT) including routine maintenance & balance work of Khed – Sinnar section of NH-60 in the State of Maharashtra as Standalone project on EPC Mode.",
    length: "131.900 km.",
    client: "NHAI",
    category: "Authority Engineer/ Independent Engineer",
    images: [],
  },
];

const ProjectTabs = ({}) => {
  // const categories = [
  //   "All",
  //   "DPR",
  //   "Design",
  //   "PMC",
  //   "Safety Consultant",
  //   "Authority Engineer/ Independent Engineer",
  // ];

  // const [statusFilter, setStatusFilter] = useState("Completed");
  // const [categoryFilter, setCategoryFilter] = useState("All");
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const sliderSettings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  // };

  // const filteredProjects = projects.filter((project) => {
  //   return (
  //     project.status === statusFilter &&
  //     (categoryFilter === "All" || project.category === categoryFilter)
  //   );
  // });

  const categories = [
    "All",
    "DPR",
    "Design",
    "PMC",
    "Safety Consultant",
    "Supervision Consultant Operation & Maintenance",
    "Authority Engineer/ Independent Engineer",
  ];
  const [statusFilter, setStatusFilter] = useState("Completed");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const filteredProjects = OurProjects.filter((project) => {
    return (
      project.status === statusFilter &&
      (categoryFilter === "All" || project.category === categoryFilter)
    );
  });

  const ProjectCard = ({ project, index }) => (
    <motion.div
      key={index}
      className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
      whileHover={{
        scale: 1.05,
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
        transition: { duration: 0.3 },
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative h-[300px] w-full">
        {project.images && project.images.length > 0 ? (
          project.images.length > 1 ? (
            <div className="h-[300px]">
              <Slider {...sliderSettings}>
                {project.images.map((image, i) => (
                  <div key={i} className="relative h-[300px]">
                    <Image
                      src={image}
                      alt={`${project.name} - Image ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          ) : (
            <Image
              src={project.images[0]}
              alt={project.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )
        ) : (
          <div className="absolute top-0 left-0 w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">No image available</span>
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-sm font-medium mb-2">{project.name}</h3>
        <p className="text-sm text-gray-600 mt-auto">
          Length: {project.length}
        </p>
      </div>
    </motion.div>
  );

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        {/* Status Tabs */}
        <div className="flex gap-4">
          {["Completed", "Ongoing"].map((status) => (
            <button
              key={status}
              className={`px-4 py-2 font-bold rounded-md transition duration-300 text-xl
                ${
                  statusFilter === status
                    ? "bg-orange-500 text-white shadow-lg"
                    : "bg-gray-300 text-gray-700 hover:bg-orange-400"
                }`}
              onClick={() => setStatusFilter(status)}
            >
              {status}
            </button>
          ))}
        </div>

        {/* Category Dropdown */}
        <div className="relative">
          <motion.button
            className="w-40 px-4 py-2 bg-orange-500 text-white rounded-lg text-xl
                     text-left font-semibold flex justify-between items-center"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {categoryFilter}
            {isDropdownOpen ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </motion.button>
          {/*  */}

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                className="absolute right-0 w-52 mt-2 bg-white border rounded-lg 
                         shadow-lg overflow-hidden z-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    className="w-full px-4 py-2 text-left hover:bg-orange-50  text-xl
                             transition-colors text-gray-800"
                    onClick={() => {
                      setCategoryFilter(category);
                      setIsDropdownOpen(false);
                    }}
                    whileHover={{ x: 10 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id || index}
            project={project}
            index={index}
          />
        ))}
      </div>

      <style jsx global>{`
        .slick-slider {
          height: 300px;
        }
        .slick-list,
        .slick-track {
          height: 100%;
        }
        .slick-slide {
          height: 300px;
        }
        .slick-slide > div {
          height: 100%;
        }
        .slick-dots {
          bottom: 10px;
          z-index: 10;
        }
        .slick-dots li button:before {
          color: white;
          opacity: 0.7;
        }
        .slick-dots li.slick-active button:before {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default ProjectTabs;
