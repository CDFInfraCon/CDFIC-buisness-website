"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import {
  BsEnvelopeArrowDown,
  BsFillHouseFill,
  BsFillTelephoneForwardFill,
} from "react-icons/bs";

const Contact = () => {
  return (
    <>
      <div className="card">
        <div className="card-content">
          <h2 className="card-title">Something Awesome</h2>
          <p className="card-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
            culpa.
          </p>
          <a href="#" className="button">
            Learn More
          </a>
        </div>
      </div>

      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* <!-- Contact Form --> */}
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
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  leading-8 transition-colors duration-200 ease-in-out"
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
                  className="shadow appearance-none border rounded w-full border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out"
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

          {/* <!-- Contact Information --> */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <div className="items-center mb-2 justify-around">
              <div className="flex items-center gap-6">
                <BsEnvelopeArrowDown className="text-4xl" />
                <a
                  href="mailto:contact@example.com"
                  className="text-blue-500 hover:underline text-2xl"
                >
                  contact@example.com
                </a>
              </div>

              <div className="flex items-center gap-6 mt-5">
                <BsFillTelephoneForwardFill className="text-4xl" />
                <a
                  href="tel:+1234567890"
                  className="text-blue-500 hover:underline text-2xl"
                >
                  +1 234 567 890
                </a>
              </div>
              <div className="flex items-center gap-6 mt-5">
                <BsFillHouseFill className="text-4xl" />
                <p className="text-2xl">Aurangbad Maharashatra</p>
              </div>
            </div>

            <p className="mb-4">
              Feel free to reach out to us via phone, email, or by filling out
              the form. We look forward to hearing from you!
            </p>
            <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
            <ul className="list-disc list-inside">
              <li>Monday - Friday: 9:00 AM to 5:00 PM</li>
              <li>Saturday: 10:00 AM to 2:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
