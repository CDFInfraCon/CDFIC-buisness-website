"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "../../../../styles/Navbar.module.css";

const dummyData = {
  projects: [
    {
      title: "Mobile Development",
      items: [
        { name: "iOS Fitness App", link: "/projects/mobile/ios-fitness" },
        { name: "Android Game", link: "/projects/mobile/android-game" },
        { name: "Cross-platform Chat App", link: "/projects/mobile/chat-app" },
      ],
    },
    {
      title: "Machine Learning",
      items: [
        { name: "Image Recognition", link: "/projects/ml/image-recognition" },
        { name: "Natural Language Processing", link: "/projects/ml/nlp" },
        {
          name: "Predictive Analytics",
          link: "/projects/ml/predictive-analytics",
        },
      ],
    },
  ],
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className="text-gray-600 body-font shadow-md">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">CDFIC</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/pages/about"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </Link>
            <Link
              href="/pages/services"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Services
            </Link>
            <Link
              href="/pages/carrers"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              carres
            </Link>
            <Link
              href="/pages/contact"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>
          </nav>
          <Link
            href="/login"
            className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-medium"
          >
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Button Login
            </button>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Navbar;
