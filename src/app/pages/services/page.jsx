// "use client";
// import React from "react";
// import { FaArrowRight } from "react-icons/fa";
// import Image from "next/image";
// import KhedImage from "../../../../public/projects/khed3.jpeg";
// import KhedImage2 from "../../../../public/projects/khed4.jpeg";
// import VadodraImage from "../../../../public/projects/Vadodra4.jpeg";
// import AiiE from "../../../../public/services/AiiE.jpeg";
// import Link from "next/link";

// const services = [
//   {
//     title: "Authority Engineer/ Independent Engineer",
//     description:
//       "In India, road projects under the Public-Private Partnership (PPP) framework typically operate according to the Model Concession Agreement. This agreement outlines the roles, responsibilities, and obligations of the various parties involved, including the Authority and the Concessionaire. Within this context, the Independent Engineer plays a critical role in ensuring the timely and effective execution of projects. Appointed jointly by the Authority and the Concessionaire, the Independent Engineer serves as a neutral party, responsible for monitoring the progress of the project, ensuring compliance with standards, and facilitating communication between stakeholders.",
//     image: AiiE,
//   },
//   {
//     title: "DPR",
//     description:
//       "CDFICPL’s planning team consists of professionals in architecture, engineering, and design, offering innovative solutions that empower decision-makers at all levels. Our planning services include Master Planning, Infrastructure Planning, Environmental Compliance Studies, and Area Development Plans We provide comprehensive design solutions for sectors like transportation, energy, urban development, and industrial infrastructure. Our engineers focus on cost-effective, time-sensitive designs that ensure smooth construction, compliance, and high-quality results.CDFICPL combines global resources and proven expertise to deliver world-class projects, using advanced engineering methods and efficient communication systems. Our engineering services range from Preliminary and Detailed Engineering to EPC Contracting Assistance and Design-Build Construction.",
//     image: "",
//   },
//   {
//     title: "Supervision Consultant Operation & Maintenance",
//     description:
//       "To ensure that roads are maintained in optimal condition, Authorities engage concessionaires who are responsible for carrying out maintenance activities according to the prescribed standards. This includes routine maintenance, repairs, and ensuring overall road safety and functionality. To further support this process and guarantee adherence to the maintenance objectives, the Authorities also appoint Independent Engineers or Authority Engineers. These professionals act as representatives of the Authority, overseeing and monitoring the concessionaire's work to ensure compliance with the specified standards and contractual obligations.In the financial year 2015-16, the National Highways Authority of India (NHAI) made a significant budgetary provision of Rs. 1,300 crores in grants specifically for the maintenance and repair of National Highways. This allocation was aimed at enhancing road quality, reducing accidents, and ensuring a smooth flow of traffic. By January 2016, NHAI had further increased the allocation to Rs. 2,200 crores for the maintenance of National Highways across various States and Union Territories. This financial commitment underscores the importance placed on maintaining the national road network in excellent condition, ensuring safety and efficiency for all road users.",
//     image: KhedImage2,
//   },
//   {
//     title: "Safety Consultant",
//     description:
//       "We develop infrastructure projects that support transportation and enhance connectivity in communities.",
//     image: "",
//   },
//   {
//     title: "Project Managemnt",
//     description:
//       "Our experts provide consultation on best practices in road infrastructure and project management.",
//     image: "",
//   },
//   {
//     title: "Design",
//     description:
//       "We specialize in designing pavements that are not only durable but also environmentally friendly.",
//     image: "",
//   },
// ];

// const Services = () => {
//   const projects = [
//     {
//       id: 1,
//       title: "Vadodara Mumbai Expressway",
//       description:
//         "Independent Engineer services for Supervision of Construction of Eight lane access controlled Expressway from Km 43.000 to Km 69.800 (Amne to Bhoj Section-SPUR of Vadodara Mumbai Expressway) in the State of Maharashtra on Hybrid Annuity mode under Bharatmala Pariyojana",
//       image: VadodraImage,
//     },
//     {
//       id: 2,
//       title: "O & M Khed-Sinner",
//       description:
//         "Consultancy Services for Supervision Consultant (SC) for 4/6L of Khed (Km 42.00) to Sinnar (Km 177.00) of NH - 60 (Old NH - 50) in the State of Maharashtra",
//       image: KhedImage,
//     },
//     {
//       id: 3,
//       title: "O & M Ane-Mal-Kharwandi",
//       description:
//         "Consultancy Services of Supervision Consultant (SC) during O&M phase from Malshej Ghat to Ane Ghat Km 101/000 to Km 161/570, from end of Ane Ghat to Start of Ahmednagar Bypass Km 161/570 to Km 211/000 & from Kharwandi Kasar to Junction of NH-211 Km 284/000 to Km 337/000 of two lane with paved shoulder on NH-61 in the state of Maharashtra.",
//       image:
//         "https://plus.unsplash.com/premium_photo-1668852917781-aa894ed23ac2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image paths
//     },
//     // Add more projects as needed
//   ];
//   return (
//     <>
//       <section
//         className="relative bg-cover bg-center h-64 md:h-72 lg:h-80 services-back-image"
//         // style={{
//         //   backgroundImage: `url('../../../../public/projects/khed3.jpeg')`,
//         // }}
//       >
//         <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex flex-col justify-center items-center p-4">
//           <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white text-center">
//             Building Futures with Our Vision!
//           </h1>
//           <p className="text-base md:text-lg lg:text-xl text-white mt-4 text-center">
//             Swag shoivdigoitch literally meditation subway tile tumblr
//             cold-pressed. Gastropub street art beard.
//           </p>
//         </div>
//       </section>

//       <div className="bg-gray-400 py-16 ">
//         <div className="container mx-auto px-5">
//           {/* Hero Section */}
// <div className="text-center">
//   <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//     Our Services
//   </h1>
//   <p className="text-lg text-gray-600 mb-12">
//     We offer a wide range of road infrastructure services to meet your
//     needs.
//   </p>
// </div>

//           {/* Services Section */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-8 ">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className="bg-white shadow-lg rounded-sm overflow-hidden transform transition-transform duration-300 hover:scale-105"
//               >
//                 <Image
//                   src={service.image}
//                   alt={service.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                     {service.title}
//                   </h3>
//                   <p className="text-gray-600 ">{service.description}</p>
//                   <div className="mt-5">
//                     <Link
//                       href="/learn-more"
//                       className=" mt-4 bg-orange-500 text-white px-4 py-2 rounded-sm shadow-md hover:bg-orange-600 transition duration-300 transform hover:-translate-y-1"
//                     >
//                       Learn More
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* <div className="py-12 bg-gray-100">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">Our Projects</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {projects.map((project, index) => (
//                         <motion.div
//                             key={index}
//                             className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg"
//                             whileHover={{ scale: 1.05, rotate: 1 }}
//                             transition={{ type: "spring", stiffness: 300 }}
//                         >
//                             <img
//                                 className="w-full h-48 object-cover rounded-md"
//                                 src={project.image}
//                                 alt={project.title}
//                             />
//                             <h3 className="mt-4 text-xl font-bold text-gray-900">{project.title}</h3>
//                             <p className="mt-2 text-gray-600">{project.description}</p>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </div> */}

//       <div className="py-12 bg-gray-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
//             Our Projects
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {projects.map((project, index) => (
//               <div
//                 key={index}
//                 className="relative group w-96 h-96 overflow-hidden bg-black m-auto mt-6 rounded-lg shadow-md hover:shadow-lg"
//                 whileHover={{ scale: 1.05, rotate: 1 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <Image
//                   className="object-cover w-full h-full transform duration-700 backdrop-opacity-100 rounded-md"
//                   // src={KhedImage}
//                   src={project.image}
//                   alt={project.title}
//                   width={600} // You can adjust width
//                   height={400} // You can adjust height
//                   layout="responsive"
//                 />

//                 <div className="absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
//                 <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
//                   <div className="absolute w-full flex place-content-center px-3">
//                     <p className="capitalize font-serif font-bold text-1.5xl text-center shadow-2xl text-white mt-10 mb-10">
//                       {project.title}
//                     </p>
//                   </div>
//                   <div className="absolute w-full flex place-content-center mt-20">
//                     <p className="font-sans text-center w-4/5 text-white mt-5">
//                       {project.description}
//                     </p>
//                   </div>
//                   <button className="absolute left-1/4 bottom-4 bg-white text-black text-center font-bold rounded-lg h-10 w-48">
//                     View Projects
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Services;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaRoad,
  FaClipboardCheck,
  FaHardHat,
  FaRegChartBar,
  FaShieldAlt,
  FaRulerCombined,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    id: "authority-engineer",
    title: "Authority Engineer",
    description:
      "Neutral monitoring and facilitation of infrastructure projects under PPP frameworks.",
    fullDescription:
      "In India, road projects under the Public-Private Partnership (PPP) framework require meticulous oversight. Our Authority Engineers provide independent, comprehensive monitoring to ensure project compliance, quality, and timely execution.",
    icon: FaHardHat,
    image: "/projects/AiiE.jpeg",
  },
  {
    id: "dpr",
    title: "Detailed Project Report (DPR)",
    description:
      "Comprehensive planning and design solutions for infrastructure development.",
    fullDescription:
      "Our expert team delivers detailed project reports that encompass master planning, infrastructure design, environmental studies, and comprehensive engineering solutions across transportation, energy, and urban development sectors.",
    icon: FaClipboardCheck,
    image: "/projects/khed4.jpeg",
  },
  {
    id: "maintenance",
    title: "O&M Supervision",
    description:
      "Ensuring optimal road maintenance and adherence to prescribed standards.",
    fullDescription:
      "We provide comprehensive Operation & Maintenance supervision, monitoring road conditions, ensuring safety standards, and maintaining infrastructure quality through rigorous inspection and proactive management.",
    icon: FaRoad,
    image: "/projects/khed3.jpeg",
  },
  {
    id: "safety",
    title: "Safety Consulting",
    description:
      "Developing infrastructure projects with comprehensive safety protocols.",
    fullDescription:
      "Our safety consultants develop robust safety management systems, conduct risk assessments, and implement comprehensive safety protocols to ensure the highest standards of infrastructure safety.",
    icon: FaShieldAlt,
    image: "",
  },
  {
    id: "project-management",
    title: "Project Management",
    description:
      "Expert consultation on road infrastructure and project management best practices.",
    fullDescription:
      "We offer end-to-end project management solutions, combining technical expertise, strategic planning, and innovative approaches to deliver successful infrastructure projects efficiently.",
    icon: FaRegChartBar,
    image: "",
  },
  {
    id: "design-engineering",
    title: "Design Engineering",
    description:
      "Specialized pavement design focusing on durability and environmental sustainability.",
    fullDescription:
      "Our design engineering team creates innovative, sustainable pavement solutions that balance durability, performance, and environmental considerations, ensuring long-lasting infrastructure.",
    icon: FaRulerCombined,
    image: "",
  },
  {
    id: "Arbitration",
    title: "Arbitration",
    description:
      "Specialized pavement design focusing on durability and environmental sustainability.",
    fullDescription:
      "Our design engineering team creates innovative, sustainable pavement solutions that balance durability, performance, and environmental considerations, ensuring long-lasting infrastructure.",
    icon: FaRulerCombined,
    image: "",
  },
];

const projects = [
  {
    id: 1,
    title: "Vadodara Mumbai Expressway",
    description:
      "Eight-lane access-controlled Expressway construction supervision in Maharashtra.",
    image: "/projects/Vadodra4.jpeg",
  },
  {
    id: 2,
    title: "Khed-Sinner Highway",
    description:
      "Consultancy services for 4/6 lane highway supervision in Maharashtra.",
    image: "/projects/khed3.jpeg",
  },
  {
    id: 3,
    title: "Ane-Mal-Kharwandi Route",
    description:
      "Supervision consultant for O&M phase of two-lane highway sections.",
    image: "/projects/khed4.jpeg",
  },
];

const Services = () => {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-r flex justify-center align-middle text-white py-20 px-4 services-back-image"
        style={{ height: "75vh" }}
      >
        <div className="container mx-auto text-center rounded-sm bg-gray-700 bg-opacity-25 flex justify-center align-middle flex-col">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Building Infrastructure, Connecting Communities
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-200">
            Delivering innovative engineering solutions that transform
            transportation infrastructure with precision, safety, and
            sustainable design.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Comprehensive Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tailored engineering solutions across the infrastructure lifecycle
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-lg p-6 transform transition hover:scale-105 hover:shadow-xl group"
              >
                <div className="flex items-center mb-4">
                  <Icon className="text-blue-600 text-4xl mr-4" />
                  <h3 className="text-xl font-semibold text-gray-800">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href={`/services/${service.id}`}
                  // href={`/services/${service.id}`}
                  className="flex items-center text-blue-600 hover:text-blue-800 transition group"
                >
                  Learn More
                  <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Projects Carousel */}
      {/* <section className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Showcasing our expertise in infrastructure development and
              management
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 px-4">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {projects[activeProject].title}
              </h3>
              <p className="text-gray-600 mb-6">
                {projects[activeProject].description}
              </p>
              <Link
                href="/projects"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                View Project Details
                <FaArrowRight className="ml-2" />
              </Link>
            </div>

            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={projects[activeProject].image}
                  alt={projects[activeProject].title}
                  layout="fill"
                  objectCover="cover"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>

              <div className="flex justify-center mt-6 space-x-4">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveProject(index)}
                    className={`h-3 w-3 rounded-full ${
                      activeProject === index ? "bg-blue-600" : "bg-gray-300"
                    } hover:bg-blue-600 transition`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Services;
