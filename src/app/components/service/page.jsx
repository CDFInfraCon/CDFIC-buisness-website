"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

const Service = () => {
  return (
    <>
      <section className="text-gray-600 body-font bg-gray-50">
        <div className="container px-5 py-20 mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-black font-extrabold text-4xl mb-2">
              OUR INFRASTRUCTURE SERVICES
            </h1>
            <p className="text-lg font-medium text-gray-500">
              Providing innovative and reliable infrastructure solutions
              tailored to meet modern needs.
            </p>
          </div>

          {/* Grid for Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
            {/* Card 1 */}
            <div className="p-4">
              <div className="h-full rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                <Image
                  className="object-cover object-center w-full h-48 transition-transform transform hover:scale-110"
                  src="https://images.unsplash.com/photo-1632389449564-c590eef05d87?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Engineering"
                  width={600} // You can adjust width
                  height={400} // You can adjust height
                  layout="responsive"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                    Engineering & Design
                  </h2>
                  <p className="text-base text-gray-700 mb-3">
                    Our team delivers innovative and sustainable engineering
                    solutions for infrastructure projects.
                  </p>
                  <p className="text-indigo-600 inline-flex items-center mt-4 cursor-pointer">
                    Learn More
                    <FaArrowRight className="ml-2 text-lg transition-transform duration-300 ease-in-out transform hover:translate-x-2" />
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-4">
              <div className="h-full rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                <Image
                  className="object-cover object-center w-full h-48 transition-transform transform hover:scale-110"
                  src="https://images.unsplash.com/photo-1685799098734-ce4c9834623e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Urban Planning"
                  width={600} // You can adjust width
                  height={400} // You can adjust height
                  layout="responsive"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                    Urban Development
                  </h2>
                  <p className="text-base text-gray-700 mb-3">
                    From concept to , we shape cities with forward-thinking
                    urban and infrastructure solutions.
                  </p>
                  <p className="text-indigo-600 inline-flex items-center mt-4 cursor-pointer">
                    Learn More
                    <FaArrowRight className="ml-2 text-lg transition-transform duration-300 ease-in-out transform hover:translate-x-2" />
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-4">
              <div className="h-full rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                <Image
                  className="object-cover object-center w-full h-48 transition-transform transform hover:scale-110"
                  src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29"
                  alt="Transport"
                  width={600} // You can adjust width
                  height={400} // You can adjust height
                  layout="responsive"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                    Transportation Systems
                  </h2>
                  <p className="text-base text-gray-700 mb-3">
                    We design and implement transportation infrastructure to
                    streamline movement across .
                  </p>
                  <p className="text-indigo-600 inline-flex items-center mt-4 cursor-pointer">
                    Learn More
                    <FaArrowRight className="ml-2 text-lg transition-transform duration-300 ease-in-out transform hover:translate-x-2" />
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="p-4">
              <div className="h-full rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                <Image
                  className="object-cover object-center w-full h-48 transition-transform transform hover:scale-110"
                  src="https://images.unsplash.com/photo-1701795785443-aa6878aaa5b6?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Energy"
                  width={600} // You can adjust width
                  height={400} // You can adjust height
                  layout="responsive"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                    Energy & Utilities
                  </h2>
                  <p className="text-base text-gray-700 mb-3">
                    Leading the way in sustainable energy solutions, we build
                    resilient utility infrastructures Best solution team.
                  </p>
                  <p className="text-indigo-600 inline-flex items-center mt-4 cursor-pointer">
                    Learn More
                    <FaArrowRight className="ml-2 text-lg transition-transform duration-300 ease-in-out transform hover:translate-x-2" />
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

export default Service;
