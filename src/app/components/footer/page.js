"use client";
import Link from "next/link";
import React from "react";
import "./footer.css";
import { usePathname } from "next/navigation";

const Footer = () => {
const path = usePathname()
console.log("pathpathpathpath",path)
  return (
    <>
  
  {path !== "/pages/projects" && (
        <footer className="text-white body-font footer-container">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            {/* <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">CDFIC</span>
            </a> */}
            <h1 className="font-bold text-2xl font-sans">
              CDF Infra Con Pvt. Ltd.
            </h1>
            <p className="mt-2 text-sm text-white">
              A 401, Gokul Crest, Sakore Nagar Viman Nagar, Pune, Maharashtra,
              4110146
            </p>
            <br />
            <p className="mt-2 text-sm text-white">+91 93717 49999</p>
            <br />
            <p className="mt-2 text-sm text-white">+91 20486 30099</p>
            <br />
            <p className="mt-2 text-sm text-white">info.cdfic@gmail.com</p>
            <br />
            <p className="mt-2 text-sm text-white">hr.cdficpl@gmail.com</p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-50 tracking-widest text-lg mb-3">
                SERVICES
              </h2>
              <nav className="list-none mb-10">

                <li className="footer-link">
                  <a href={`/services/authority-engineer`}>Authority Engineer</a>        
                </li>
                <li className="footer-link">
                  <a href={`/services/dpr`}>DPR</a>
                </li>
                <li className="footer-link">
                  <a href={`/services/maintenance`}>O&M Supervision</a>        
                </li>
                <li className="footer-link">
                  <a href={`/services/safety`}>Safety Consultant</a>
                </li>
                <li className="footer-link">
                  <a href={`/services/project-management`}>Project Management</a>
                </li>
                <li className="footer-link">
                  <a href={`/services/design-engineering`}>Design Engineering</a>
                </li>
                <li className="footer-link">
                  <a href={`/services/Arbitration`}>Arbitration </a>
                </li>
             
             

              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-50 tracking-widest text-lg mb-3">
                SECTORS
              </h2>
              <nav className="list-none mb-10">
                <li className="footer-link">
                  <a className=" ">Road Infrastructure</a>
                </li>
                <li className="footer-link">
                  <a className=" ">Highways, Bridges & Tunnels</a>
                </li>
                <li className="footer-link">
                  <a className=" ">Design Consultant</a>
                </li>
                <li className="footer-link">
                  <a className=" ">Road Safety Consultant</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-50 tracking-widest text-lg mb-3">
                KEY PROJECTS
              </h2>
              <nav className="list-none mb-10">
                <li className="footer-link">
                  <a href={`pages/projects`} className=" ">Vadodara Mumbai Expressway PKG-16</a>
                </li>
                <li className="footer-link">
                  <a href={`pages/projects`} className=" ">O & M Khed-Sinner</a>
                </li>
                <li className="footer-link" >
                  <a href={`pages/projects`} className=" ">O & M Ane-Mal-Kharwandi</a>
                </li>
                <li className="footer-link">
                  <a href={`pages/projects`} className=" ">
                    Authority Engineer of White Topping (WT) Malshej Ghat
                  </a>
                </li>
                <li className="footer-link">
                  <a href={`pages/projects`} className=" ">
                    Authority Engineer of White Topping (WT) Khed Sinnar
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <Link href="/pages/contact">
                <h2 className="title-font font-medium text-gray-50 tracking-widest text-lg mb-3 flex items-center gap-2 cursor-pointer border-b-2 border-white contact-us">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#ff9f61]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.659 1.591l-7.5 7.5a2.25 2.25 0 01-3.182 0l-7.5-7.5A2.25 2.25 0 012.25 6.993V6.75" />
                </svg> */}
                  Contact Us
                </h2>
              </Link>
              {/* <form className="bg-white/10 rounded-lg p-5 flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="px-4 py-3 rounded-md bg-white/80 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#ff9f61] placeholder-gray-500 transition-all duration-200 border border-transparent focus:border-[#ff9f61]"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="px-4 py-3 rounded-md bg-white/80 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#ff9f61] placeholder-gray-500 transition-all duration-200 border border-transparent focus:border-[#ff9f61]"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-[#ff9f61] hover:bg-[#ff7e1d] text-white font-bold py-3 rounded-md transition-colors duration-200 tracking-widest mt-2 shadow-none pl-4"
                >
                  SUBMIT
                </button>
              </form> */}
            </div>
          </div>
        </div>

        {/* <div className="bg-white ">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p
              className="font-medium text-center sm:text-left"
              style={{ color: "#201E43" }}
            >
              Copyright 2024 © CDF Infracon Private Limited . All Rights
              Reserved.
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className=" ml-1"
                target="_blank"
              >
                @knyttneve
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="" style={{ color: "#ffa15e" }}>
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 " style={{ color: "#ffa15e" }}>
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 " style={{ color: "#ffa15e" }}>
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 " style={{ color: "#ffa15e" }}>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div> */}
      </footer>
)} 
      <div className="" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container mx-auto px-5 py-4 flex align-middle  flex-wrap flex-row justify-between sm:flex-row">
          <p
            className="font-medium text-center sm:text-left"
            style={{ color: "#201E43" }}
          >
            Copyright 2024 © CDF Infracon Private Limited . All Rights Reserved.
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className=" ml-1"
              target="_blank"
            >
              @knyttneve
            </a>
          </p>
          <div>
            <ul className="social-cont">
              <li>
                <a href="https://www.facebook.com/CDFIC/">
                  <i className="fab fa-facebook-f icon"></i>
                </a>
              </li>
              <li>
                <a href="https://x.com/Cdficpl">
                  <i className="fab fa-twitter icon"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/35883383/admin/dashboard/">
                  <i className="fab fa-linkedin-in icon"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/cdficpl/">
                  <i className="fab fa-instagram icon"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
