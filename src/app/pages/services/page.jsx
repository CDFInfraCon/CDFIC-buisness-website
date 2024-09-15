"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Services = () => {
  const projects = [
    {
      id: 1,
      title: "Vadodara Mumbai Expressway",
      description:
        "Independent Engineer services for Supervision of Construction of Eight lane access controlled Expressway from Km 43.000 to Km 69.800 (Amne to Bhoj Section-SPUR of Vadodara Mumbai Expressway) in the State of Maharashtra on Hybrid Annuity mode under Bharatmala Pariyojana",
      image:
        "https://plus.unsplash.com/premium_photo-1668852917781-aa894ed23ac2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image paths

      //   image: require("../../../../public/projects/Vadodra4.jpeg"),
    },
    {
      id: 2,
      title: "O & M Khed-Sinner",
      description:
        "Consultancy Services for Supervision Consultant (SC) for 4/6L of Khed (Km 42.00) to Sinnar (Km 177.00) of NH - 60 (Old NH - 50) in the State of Maharashtra",
      image:
        "https://plus.unsplash.com/premium_photo-1668852917781-aa894ed23ac2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image paths
    },
    {
      id: 3,
      title: "O & M Ane-Mal-Kharwandi",
      description:
        "Consultancy Services of Supervision Consultant (SC) during O&M phase from Malshej Ghat to Ane Ghat Km 101/000 to Km 161/570, from end of Ane Ghat to Start of Ahmednagar Bypass Km 161/570 to Km 211/000 & from Kharwandi Kasar to Junction of NH-211 Km 284/000 to Km 337/000 of two lane with paved shoulder on NH-61 in the state of Maharashtra.",
      image:
        "https://plus.unsplash.com/premium_photo-1668852917781-aa894ed23ac2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image paths
    },
    // Add more projects as needed
  ];
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
            Building Futures with Our Vision!
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-white mt-4 text-center">
            Swag shoivdigoitch literally meditation subway tile tumblr
            cold-pressed. Gastropub street art beard.
          </p>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col mt-2">
            <div className="  text-center py-6 mb-2">
              <h1 className=" text-black font-extrabold title-font text-4xl mb-2 sm:mb-0">
                OUR SERVICES
              </h1>
              <h1 className="font-medium title-font text-2xl mb-2 sm:mb-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Veniam!
              </h1>
              {/* <p className="sm:w-3/5 leading-relaxed text-base ">Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.</p> */}
            </div>
          </div>

          {/* <!-- Responsive Grid for Cards --> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-5 ">
            {/* <!-- Card 1 --> */}
            <div className="p-2">
              <div className="rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                <img
                  alt="content"
                  className="object-cover object-center w-full h-48  transition-transform transform duration-300 ease-in-out hover:scale-110"
                  src="https://plus.unsplash.com/premium_photo-1664547606209-fb31ec979c85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <div className="p-4">
                  <h2 className="text-xl font-medium title-font text-gray-900 mb-3">
                    Shooting Stars
                  </h2>
                  <p className="text-base leading-relaxed mb-3">
                    Swag shoivdigoitch literally meditation subway tile tumblr
                    cold-pressed. Gastropub street art beard dreamcatcher
                    neutra, ethical XOXO lumbersexual.
                  </p>
                  <p className="text-indigo-500 inline-flex items-center mt-3 cursor-pointer">
                    Learn More
                    <FaArrowRight className="ml-3 text-lg transition-transform duration-300 ease-in-out transform hover:translate-x-2 cursor-pointer" />
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Card 2 --> */}
            <div className="p-2">
              <div className="rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                <img
                  alt="content"
                  className="object-cover object-center w-full h-48 transition-transform transform duration-300 ease-in-out hover:scale-110"
                  src="https://plus.unsplash.com/premium_photo-1664547606209-fb31ec979c85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <div className="p-4">
                  <h2 className="text-xl font-medium title-font text-gray-900 mb-3">
                    The Catalyzer
                  </h2>
                  <p className="text-base leading-relaxed mb-3">
                    Swag shoivdigoitch literally meditation subway tile tumblr
                    cold-pressed. Gastropub street art beard dreamcatcher
                    neutra, ethical XOXO lumbersexual.
                  </p>
                  <p className="text-indigo-500 inline-flex items-center mt-3 cursor-pointer">
                    Learn More
                    <FaArrowRight className="ml-3 text-lg transition-transform duration-300 ease-in-out transform hover:translate-x-2 cursor-pointer" />
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Card 3 --> */}
            <div className="p-2">
              <div className="rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                <img
                  alt="content"
                  className="object-cover object-center w-full h-48 transition-transform transform duration-300 ease-in-out hover:scale-110"
                  src="https://plus.unsplash.com/premium_photo-1664547606209-fb31ec979c85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <div className="p-4">
                  <h2 className="text-xl font-medium title-font text-gray-900 mb-3">
                    The 400 Blows
                  </h2>
                  <p className="text-base leading-relaxed mb-3">
                    Swag shoivdigoitch literally meditation subway tile tumblr
                    cold-pressed. Gastropub street art beard dreamcatcher
                    neutra, ethical XOXO lumbersexual.
                  </p>
                  <p className="text-indigo-500 inline-flex items-center mt-3 cursor-pointer">
                    Learn More
                    <FaArrowRight className="ml-3 text-lg transition-transform duration-300 ease-in-out transform hover:translate-x-2 cursor-pointer" />
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Card 4 --> */}
            <div className="p-2">
              <div className="rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                <img
                  alt="content"
                  className="object-cover object-center w-full h-48 transition-transform transform duration-300 ease-in-out hover:scale-110"
                  src="https://plus.unsplash.com/premium_photo-1664547606209-fb31ec979c85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <div className="p-4">
                  <h2 className="text-xl font-medium title-font text-gray-900 mb-3">
                    The New Frontier
                  </h2>
                  <p className="text-base leading-relaxed mb-3">
                    Swag shoivdigoitch literally meditation subway tile tumblr
                    cold-pressed. Gastropub street art beard dreamcatcher
                    neutra, ethical XOXO lumbersexual.
                  </p>
                  <p className="text-indigo-500 inline-flex items-center mt-3 cursor-pointer">
                    Learn More
                    <FaArrowRight className="ml-3 text-lg transition-transform duration-300 ease-in-out transform hover:translate-x-2 cursor-pointer" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="py-12 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">Our Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg"
                            whileHover={{ scale: 1.05, rotate: 1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <img
                                className="w-full h-48 object-cover rounded-md"
                                src={project.image}
                                alt={project.title}
                            />
                            <h3 className="mt-4 text-xl font-bold text-gray-900">{project.title}</h3>
                            <p className="mt-2 text-gray-600">{project.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div> */}

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
                <img
                  className="object-cover w-full h-full transform duration-700 backdrop-opacity-100 rounded-md"
                  src={project.image}
                  alt={project.title}
                />
                {/* "../../../../public/projects/Vadodra4.jpeg" */}
                {/* <div style={{backgroundImage:}}></div> */}
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

export default Services;
