import React from "react";

const Footer = () => {
  return (
    <>
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
            <h1>CDF Infra Con Pvt. Ltd.</h1>
            <p className="mt-2 text-sm text-white">
              A 401, Gokul Crest, Sakore Nagar Viman Nagar, Pune, Maharashtra,
              4110146
            </p>
            <br />
            <p className="mt-2 text-sm text-white">+91 20 93717 49999</p>
            <br />
            <p className="mt-2 text-sm text-white">+91 20 4863 0099</p>
            <br />
            <p className="mt-2 text-sm text-white">info.cdfic@gmail.com</p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-50 tracking-widest text-lg mb-3">
                SERVICES
              </h2>
              <nav className="list-none mb-10">
                <li className="footer-link">
                  <a className=" ">Supervision consultant</a>
                </li>
                <li className="footer-link">
                  <a className=" ">Project Management consultant</a>
                </li>
                <li className="footer-link">
                  <a className=" ">Third</a>
                </li>
                <li className="footer-link">
                  <a className=" ">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-50 tracking-widest text-lg mb-3">
                SECTORS
              </h2>
              <nav className="list-none mb-10">
                <li className="footer-link">
                  <a className=" ">First Link</a>
                </li>
                <li className="footer-link">
                  <a className=" ">Second Link</a>
                </li>
                <li className="footer-link">
                  <a className=" ">Third Link</a>
                </li>
                <li className="footer-link">
                  <a className=" ">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-50 tracking-widest text-lg mb-3">
                KEY PROJECTS
              </h2>
              <nav className="list-none mb-10">
                <li className="footer-link">
                  <a className=" ">First Link</a>
                </li>
                <li className="footer-link">
                  <a className=" ">Second Link</a>
                </li>
                <li className="footer-link">
                  <a className=" ">Third Link</a>
                </li>
                <li className="footer-link">
                  <a className=" ">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-50 tracking-widest text-lg mb-3">
                COMUNITY
              </h2>
              <nav className="list-none mb-10">
                <li className="footer-link">
                  <a className=" ">First Link</a>
                </li>
                <li className="footer-link">
                  <a className=" ">Second Link</a>
                </li>
                <li className="footer-link">
                  <a className=" ">Third Link</a>
                </li>
                <li className="footer-link">
                  <a className=" ">Fourth Link</a>
                </li>
              </nav>
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
              <a className="" style={{ color: "#ffb933" }}>
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
              <a className="ml-3 " style={{ color: "#ffb933" }}>
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
              <a className="ml-3 " style={{ color: "#ffb933" }}>
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
              <a className="ml-3 " style={{ color: "#ffb933" }}>
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
                  <i class="fab fa-facebook-f icon"></i>
                </a>
              </li>
              <li>
                <a href="https://x.com/Cdficpl">
                  <i class="fab fa-twitter icon"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/35883383/admin/dashboard/">
                  <i class="fab fa-linkedin-in icon"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/cdficpl/">
                  <i class="fab fa-instagram icon"></i>
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
