"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import {
  BsEnvelopeArrowDown,
  BsFillHouseFill,
  BsFillTelephoneForwardFill,
} from "react-icons/bs";
import Image from "next/image";

const Contact = () => {
  return (
    <>
      <section
        className="relative bg-cover bg-center h-64 md:h-72 lg:h-80 "
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1487132906645-8e0fbba067e0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        }}
      >
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex flex-col justify-center items-center p-4">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white text-center">
            Get in Touch
          </h1>
        </div>
      </section>

      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="py-2 px-3 shadow appearance-none border rounded w-full border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="flex mb-4 space-x-4">
                <div className="w-1/2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="py-2 px-3 shadow appearance-none border rounded w-full border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out"
                    id="email"
                    type="email"
                    placeholder="Your Email"
                  />
                </div>
                <div className="w-1/2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="phone"
                  >
                    Phone
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none leading-8 transition-colors duration-200 ease-in-out"
                    id="phone"
                    type="tel"
                    placeholder="Your Phone Number"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out"
                  id="message"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <div className="items-center mb-2">
              <div className="flex items-center gap-6">
                <BsEnvelopeArrowDown className="text-3xl" />
                <a
                  href="mailto:info.cdfic@gmail.com"
                  className="text-blue-500 hover:underline"
                >
                  info.cdfic@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-6 mt-5">
                <BsFillTelephoneForwardFill className="text-3xl" />
                <a
                  href="phone:+919371749999"
                  className="text-blue-500 hover:underline"
                >
                  +91 9371749999
                </a>
                <a
                  href="tel:+912048630099"
                  className="text-blue-500 hover:underline"
                >
                  +91 2048630099
                </a>
              </div>

              <div className="flex items-center gap-6 mt-5">
                <BsFillHouseFill className="text-3xl" />
                <p className="">
                  A 401, Gokul Crest, Sakore Nagar Viman Nagar, Pune,
                  Maharashtra, 411014
                </p>
              </div>

              {/* Barcode Image */}
              <div className="flex justify-center items-center mt-6">
                <Image
                  className="object-cover"
                  src="/photos/scanner.jpeg"
                  alt="Barcode"
                  width={200} // You can adjust width
                  height={20} // You can adjust height
                  layout="fixed"
                />
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-5">Business Hours</h3>
            <ul className="list-disc list-inside">
              <li>Monday - Saturday: 10:00 AM to 7:00 PM</li>
              <li>Third saturday: Week off</li>
              <li>
                Sunday: <b className="text-red-600">Closed</b>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="h-96 mt-5 px-5 mb-2">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.682140582598!2d73.90535957599957!3d18.561705221760707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c16ea0e10881%3A0x95573d8f0b48803c!2sCDF%20INFRA%20CON%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1694776271470!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
