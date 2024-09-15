import Image from "next/image";
import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";

const LeadershipMember = () => {
  return (
    <>
      <div className="container mx-auto mt-5 bg-gray-300 h-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className=" flex flex-col  p-6 rounded-lg  ">
            <h2 className="text-2xl text-gray-900 font-medium title-font mb-4">
              OUR LEADERSHIP
            </h2>
            <p className="leading-relaxed text-base mb-4">
              Meet the dedicated leaders driving
              <b> CDF Infra Con Pvt. Ltd. </b>
              forward with their unparalleled experience and commitment to
              excellence.
            </p>

            <button className="flex items-center px-6 py-3 bg-orange-400 text-white font-semibold rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:bg-orange-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-300 w-40">
              <span>Explore</span>
              <FaArrowRight className="ml-3 text-lg transition-transform duration-300 ease-in-out transform hover:translate-x-2" />
            </button>
          </div>

          {/* Card 2 */}
          <div
            className="work h-64 "
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-duration="300"
          >
            {/* <img
              className="w-full h-full object-cover"
              src="../../../../public/leaders/cdFakir.jpeg"
              //   D:\CDFIC-infra\next.config\public\leaders
              alt=""
            /> */}
            <div className="w-full h-full object-cover leader1img"></div>
            <div className="layer">
              <h1 className="text-white font-extrabold ">Mr. C.D Fakir</h1>
              <p className="text-white font-normal">Honourable Chairman</p>

              <div>
                <a href="#">
                  <BsBoxArrowUpRight className="text-2xl " />
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}

          <div
            className="work h-64"
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-duration="600"
          >
            <Image
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              alt="Sample Image"
              width={600} // You can adjust width
              height={400} // You can adjust height
              layout="responsive"
            />
            <div className="layer">
              <h1 className="text-white font-extrabold">
                Mrs. Fawziya M. Karjatkar
              </h1>
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

          {/* Card 4 */}
          <div
            className="work h-64"
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-duration="900"
          >
            <div className="w-full h-full object-cover leader2img"></div>

            <div className="layer">
              <h1 className="text-white font-extrabold">Mr. Amer C Fakir</h1>
              <p className="text-white font-normal">Managing Director</p>
              <div>
                <a href="#">
                  <BsBoxArrowUpRight className="text-2xl " />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeadershipMember;
