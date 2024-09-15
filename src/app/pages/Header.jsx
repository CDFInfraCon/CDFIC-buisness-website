"use client";
import React, { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaAward,
  FaBuilding,
  FaProjectDiagram,
  FaUsers,
} from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Image from "next/image";

const Header = () => {
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [team, setTeam] = useState(0);
  const [offices, setOffices] = useState(0);
  useEffect(() => {
    // Increment for "Glorious Years"
    const incrementYears = () => {
      let start = 0;
      const end = 24;
      const duration = 2000;
      const incrementTime = duration / end;

      const increment = () => {
        start += 1;
        setYears(start);
        if (start < end) {
          setTimeout(increment, incrementTime);
        }
      };

      increment();
    };

    // Increment for "Successful Projects"
    const incrementProjects = () => {
      let start = 0;
      const end = 170;
      const duration = 2000;
      const incrementTime = duration / end;

      const increment = () => {
        start += 1;
        setProjects(start);
        if (start < end) {
          setTimeout(increment, incrementTime);
        }
      };

      increment();
    };

    // Increment for "Strong Team"
    const incrementTeam = () => {
      let start = 0;
      const end = 2000;
      const duration = 2000;
      const incrementTime = duration / (end / 100);

      const increment = () => {
        start += 20;
        setTeam(start);
        if (start < end) {
          setTimeout(increment, incrementTime);
        }
      };

      increment();
    };

    // Increment for "Offices Nationwide"
    const incrementOffices = () => {
      let start = 0;
      const end = 38;
      const duration = 2000;
      const incrementTime = duration / end;

      const increment = () => {
        start += 1;
        setOffices(start);
        if (start < end) {
          setTimeout(increment, incrementTime);
        }
      };

      increment();
    };

    incrementYears();
    incrementProjects();
    incrementTeam();
    incrementOffices();
  }, []);

  return (
    <>
      <header className=" top-0 left-0 w-full text-gray-600 body-font z-50">
        <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center bg-slate-200">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg> */}
            <span className="ml-3 text-xl">vishal</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">First Link</a>
            <a className="mr-5 hover:text-gray-900">Second Link</a>
            <a className="mr-5 hover:text-gray-900">Third Link</a>
            <a className="mr-5 hover:text-gray-900">Fourth Link</a>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>

      <div className="container mx-auto mt-16 bg-gray-300 h-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className=" flex flex-col  p-6 rounded-lg  ">
            <h2 className="text-2xl text-gray-900 font-medium title-font mb-4">
              OUR LEADERSHIP
            </h2>
            <p className="leading-relaxed text-base mb-4">
              Meet the dedicated leaders driving Rodic forward with their
              unparalleled experience and commitment to excellence.
            </p>

            <button className="flex items-center px-6 py-3 bg-orange-400 text-white font-semibold rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:bg-orange-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-300 w-40">
              <span>Explore</span>
              <FaArrowRight className="ml-3 text-lg transition-transform duration-300 ease-in-out transform hover:translate-x-2" />
            </button>
          </div>

          {/* Card 2 */}
          <div className="work h-64 ">
            <Image
              className="w-full h-full object-cover "
              src="https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt="Energy"
              width={600} // You can adjust width
              height={400} // You can adjust height
              layout="responsive"
            />
            <div className="layer">
              <h1 className="text-white font-extrabold">Mr. Raj Kumar</h1>
              <p className="text-white font-normal">
                Chairman & Managing Director
              </p>

              <div>
                <a href="#">
                  <BsBoxArrowUpRight className="text-2xl " />
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}

          <div className="work h-64">
            <Image
              className="w-full h-full object-cover "
              src="https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt="Energy"
              width={600} // You can adjust width
              height={400} // You can adjust height
              layout="responsive"
            />
            <div className="layer">
              <h3>Social Media App</h3>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos, deserunt ducim
              </p>
              <div>
                <a href="#">
                  <BsBoxArrowUpRight className="text-2xl " />
                </a>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="work h-64">
            <Image
              className="w-full h-full object-cover "
              src="https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt="Energy"
              width={600} // You can adjust width
              height={400} // You can adjust height
              layout="responsive"
            />
            <div className="layer">
              <h3>Social Media App</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos, deserunt ducim
              </p>
              <div>
                <a href="#">
                  <BsBoxArrowUpRight className="text-2xl " />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-800 mt-10">
        <div className="container mx-auto ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-5">
            {/* Card 1 */}
            <div className="bg-indigo-500 text-white p-6 rounded-lg shadow-md flex items-center justify-between transform transition-transform duration-300 ease-in-out hover:translate-y-[-10px] hover:shadow-xl">
              <div>
                <div className="text-3xl font-bold">{years}</div>
                <div className="text-sm">Glorious Years</div>
              </div>
              <FaAward className="text-7xl bg-blue-600 p-2 rounded-full" />
            </div>

            {/* Card 2 */}
            <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md flex items-center justify-between transform transition-transform duration-300 ease-in-out hover:translate-y-[-10px] hover:shadow-xl">
              <div>
                <div className="text-3xl font-bold">{projects}</div>
                <div className="text-sm">Successful Projects</div>
              </div>
              <FaProjectDiagram className="text-7xl bg-blue-600 p-2 rounded-full" />
            </div>

            {/* Card 3 */}
            <div className="bg-green-500 text-white p-6 rounded-lg shadow-md flex items-center justify-between transform transition-transform duration-300 ease-in-out hover:translate-y-[-10px] hover:shadow-xl">
              <div>
                <div className="text-3xl font-bold">{team}</div>
                <div className="text-sm">Strong Team</div>
              </div>
              <FaUsers className="text-7xl bg-blue-600 p-2 rounded-full" />
            </div>

            {/* Card 4 */}
            <div className="bg-orange-500 text-white p-6 rounded-lg shadow-md flex items-center justify-between transform transition-transform duration-300 ease-in-out hover:translate-y-[-10px] hover:shadow-xl">
              <div>
                <div className="text-3xl font-bold">{offices}</div>
                <div className="text-sm">Offices Nationwide</div>
              </div>
              <FaBuilding className="text-7xl bg-blue-600 p-2 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">
        <div className="container mx-auto px-6 lg:px-20">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl font-bold mb-12 text-center text-white"
          >
            Awards and Recognition
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            {[
              {
                src: "https://rdb.rw/wp-content/uploads/2018/12/One-Only-Nyungwe-House-now-among-the-five-star-hotel-in-Rwanda-1024x683.jpg",
                title: "Best Road In Maharashtra",
                year: "2018",
              },
              {
                src: "https://www.hotelnewsme.com/wp-content/uploads/2023/03/FSX-8515-scaled.jpg",
                title: "Popular  Chh.Sambhajinagar",
                year: "2023",
              },
              {
                src: "https://worldwidebesthotel.com/wp-content/uploads/2022/08/img-20220802-wa0006.jpg",
                title: "Outstanding Service Award",
                year: "2022",
              },
            ].map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95, rotate: 0 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                whileHover={{
                  scale: 1.1,
                  rotate: -2,
                  boxShadow: "0px 20px 40px rgba(0,0,0,0.5)",
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center"
              >
                <motion.img
                  src={award.src}
                  alt={award.title}
                  className="w-full h-48 object-cover"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
                <div className="p-4 text-center">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-xl font-semibold text-gray-900"
                  >
                    {award.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.4,
                      ease: "easeInOut",
                    }}
                    className="text-lg text-gray-600"
                  >
                    {award.year}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col mb-12">
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-2">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                Services Final Frontier
              </h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                Street art subway tile salvia four dollar toast bitters selfies
                quinoa yuccie synth meditation iPhone intelligentsia prism tofu.
                Viral gochujang bitters dreamcatcher.
              </p>
            </div>
          </div>

          {/* <!-- Responsive Grid for Cards --> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
            {/* <!-- Card 1 --> */}
            <div className="p-2">
              <div className="rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                <Image
                  className="object-cover object-center w-full h-48"
                  src="https://plus.unsplash.com/premium_photo-1664547606209-fb31ec979c85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="content"
                  width={600} // You can adjust width
                  height={400} // You can adjust height
                  layout="responsive"
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
                <Image
                  className="object-cover object-center w-full h-48"
                  src="https://plus.unsplash.com/premium_photo-1664547606209-fb31ec979c85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="content"
                  width={600} // You can adjust width
                  height={400} // You can adjust height
                  layout="responsive"
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
                <Image
                  className="object-cover object-center w-full h-48"
                  src="https://plus.unsplash.com/premium_photo-1664547606209-fb31ec979c85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="content"
                  width={600} // You can adjust width
                  height={400} // You can adjust height
                  layout="responsive"
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
                <Image
                  className="object-cover object-center w-full h-48"
                  src="https://plus.unsplash.com/premium_photo-1664547606209-fb31ec979c85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="content"
                  width={600} // You can adjust width
                  height={400} // You can adjust height
                  layout="responsive"
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
    </>
  );
};

export default Header;
