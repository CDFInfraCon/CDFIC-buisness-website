// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import styles from "../../../styles/Navbar.module.css";

// const dummyData = {
//   projects: [
//     {
//       title: "Completed",
//       items: [
//         {
//           name: "Pentacle Consultant (I) Pvt Ltd.",
//           link: "/projects/mobile/ios-fitness",
//         },
//         { name: "GHV(India) Pvt. Ltd.", link: "/projects/mobile/android-game" },
//         {
//           name: "IL&FS Transportation Network Limited",
//           link: "/projects/mobile/chat-app",
//         },
//         { name: "Skylark", link: "/projects/mobile/chat-app" },
//         { name: "BCCPIL", link: "/projects/mobile/chat-app" },
//         {
//           name: "L&FS Transportation Network Limited",
//           link: "/projects/mobile/chat-app",
//         },
//         {
//           name: "M/s Anant Chaitanya Consultancy Services",
//           link: "/projects/mobile/chat-app",
//         },
//       ],
//     },
//     {
//       title: "Ongoing",
//       items: [
//         { name: "NHAI", link: "/projects/ml/image-recognition" },
//         {
//           name: "Roadway Solution India Infra Ltd",
//           link: "/projects/ml/predictive-analytics",
//         },
//         {
//           name: "Interbuild Infrastructure PVt LTd",
//           link: "/projects/ml/predictive-analytics",
//         },
//         {
//           name: "V M Matere Infrastructure (I) Pvt Ltd",
//           link: "/projects/ml/predictive-analytics",
//         },
//         { name: "T&T Infra Ltd.", link: "/projects/ml/predictive-analytics" },
//         {
//           name: "Roadways Solution India Infra Ltd.",
//           link: "/projects/ml/predictive-analytics",
//         },
//       ],
//     },
//   ],
// };

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth > 768) {
//         setIsOpen(false);
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className={`${styles.navbar} sticky top-0 z-50 appColor`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex-shrink-0">
//             <Link href="/" className={styles.logo}>
//               <div className={styles.logoContent}></div>
//             </Link>
//           </div>
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-4">
//               <Link href="/" className={styles.navLink}>
//                 Home
//               </Link>
//               <Link href="/pages/about" className={styles.navLink}>
//                 About
//               </Link>
//               <div className={styles.dropdown}>
//                 <span className={styles.navLink}>Projects</span>
//                 <div className={styles.dropdownContent}>
//                   {dummyData.projects.map((category, index) => (
//                     <div key={index} className={styles.dropdownCategory}>
//                       <span className={styles.dropdownTitle}>
//                         {category.title}
//                       </span>
//                       <div className={styles.dropdownItems}>
//                         {category.items.map((item, itemIndex) => (
//                           <Link
//                             key={itemIndex}
//                             href={item.link}
//                             className={styles.dropdownItem}
//                           >
//                             {item.name}
//                           </Link>
//                         ))}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <Link href="/pages/contact" className={styles.navLink}>
//                 Contact
//               </Link>
//               <Link href="/pages/services" className={styles.navLink}>
//                 Services
//               </Link>
//               <Link href="/pages/carrers" className={styles.navLink}>
//                 Careers
//               </Link>
//             </div>
//           </div>
//           <div className="md:hidden">
//             <button onClick={toggleMenu} className={styles.mobileMenuButton}>
//               <span className="sr-only">Open main menu</span>
//               {!isOpen ? (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   className="block h-6 w-6"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
//       {isOpen && (
// <div className={styles.mobileMenu}>
//   <Link href="/" className={styles.mobileNavLink}>
//     Home
//   </Link>
//   <Link href="/about" className={styles.mobileNavLink}>
//     About
//   </Link>
//   <div className={styles.mobileDropdown}>
//     <span className={styles.mobileNavLink}>Projects</span>
//     <div className={styles.mobileDropdownContent}>
//       {dummyData.projects.map((category, index) => (
//         <div key={index} className={styles.mobileDropdownCategory}>
//           <span className={styles.mobileDropdownTitle}>
//             {category.title}
//           </span>
//           {category.items.map((item, itemIndex) => (
//             <Link
//               key={itemIndex}
//               href={item.link}
//               className={styles.mobileDropdownItem}
//             >
//               {item.name}
//             </Link>
//           ))}
//         </div>
//       ))}
//     </div>
//   </div>
//   <Link href="/contact" className={styles.mobileNavLink}>
//     Contact
//   </Link>
// </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../../../styles/Navbar.module.css";

const dummyData = {
  projects: [
    {
      title: "Completed",
      items: [
        {
          name: "Pentacle Consultant (I) Pvt Ltd.",
          link: "/projects/mobile/ios-fitness",
        },
        { name: "GHV(India) Pvt. Ltd.", link: "/projects/mobile/android-game" },
        {
          name: "IL&FS Transportation Network Limited",
          link: "/projects/mobile/chat-app",
        },
        { name: "Skylark", link: "/projects/mobile/chat-app" },
        { name: "BCCPIL", link: "/projects/mobile/chat-app" },
        {
          name: "L&FS Transportation Network Limited",
          link: "/projects/mobile/chat-app",
        },
        {
          name: "M/s Anant Chaitanya Consultancy Services",
          link: "/projects/mobile/chat-app",
        },
      ],
    },
    {
      title: "Ongoing",
      items: [
        { name: "NHAI", link: "/projects/ml/image-recognition" },
        {
          name: "Roadway Solution India Infra Ltd",
          link: "/projects/ml/predictive-analytics",
        },
        {
          name: "Interbuild Infrastructure PVt LTd",
          link: "/projects/ml/predictive-analytics",
        },
        {
          name: "V M Matere Infrastructure (I) Pvt Ltd",
          link: "/projects/ml/predictive-analytics",
        },
        { name: "T&T Infra Ltd.", link: "/projects/ml/predictive-analytics" },
        {
          name: "Roadways Solution India Infra Ltd.",
          link: "/projects/ml/predictive-analytics",
        },
      ],
    },
  ],
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingUp = prevScrollPos > currentScrollPos;

      setScrolled(currentScrollPos > 50);
      setVisible(isScrollingUp || currentScrollPos < 50);
      setPrevScrollPos(currentScrollPos);
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navbarClasses = `${styles.navbar} sticky top-0 z-50 ${scrolled ? styles.scrolled : ""
    } ${visible ? styles.visible : styles.hidden}`;

  return (
    <nav className={navbarClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className={styles.logo}>
              <div className={styles.logoContent}></div>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link href="/" className={styles.navLink}>
                Home
              </Link>
              <Link href="/pages/about" className={styles.navLink}>
                About
              </Link>
              <Link href="/pages/projects" className={styles.navLink}>
                Projects
              </Link>
              {/* <div className={styles.dropdown}>
                <span className={styles.navLink}>Projects</span>
                <div className={styles.dropdownContent}>
                  {dummyData.projects.map((category, index) => (
                    <div key={index} className={styles.dropdownCategory}>
                      <span className={styles.dropdownTitle}>
                        {category.title}
                      </span>
                      <div className={styles.dropdownItems}>
                        {category.items.map((item, itemIndex) => (
                          <Link
                            key={itemIndex}
                            href={item.link}
                            className={styles.dropdownItem}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}

              <Link href="/pages/services" className={styles.navLink}>
                Services
              </Link>
              <Link href="/pages/ourEquipment" className={styles.navLink}>
                Equipment
              </Link>
              <Link href="/pages/carrers" className={styles.navLink}>
                Careers
              </Link>
              <Link href="/pages/contact" className={styles.navLink}>
                Contact
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className={styles.mobileMenuButton}>
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#ff9f61"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#ff9f61"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/" className={styles.mobileNavLink}>
            Home
          </Link>
          <Link href="/pages/about" className={styles.mobileNavLink}>
            About
          </Link>
          <Link href="/pages/projects" className={styles.navLink}>
            Projects
          </Link>
          {/* <div className={styles.mobileDropdown}>
            <span className={styles.mobileNavLink}>Projects</span>
            <div className={styles.mobileDropdownContent}>
              {dummyData.projects.map((category, index) => (
                <div key={index} className={styles.mobileDropdownCategory}>
                  <span className={styles.mobileDropdownTitle}>
                    {category.title}
                  </span>
                  {category.items.map((item, itemIndex) => (
                    <Link
                      key={itemIndex}
                      href={item.link}
                      className={styles.mobileDropdownItem}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div> */}

          <Link href="/pages/services" className={styles.mobileNavLink}>
            Services
          </Link>
          <Link href="/pages/carrers" className={styles.mobileNavLink}>
            Careers
          </Link>
          <Link href="/pages/contact" className={styles.mobileNavLink}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// components/Navbar.js
// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import styles from "../../../styles/Navbar.module.css";

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [visible, setVisible] = useState(true);
//   const [lastScrollTop, setLastScrollTop] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop =
//         window.pageYOffset || document.documentElement.scrollTop;
//       const scrollThreshold = 100;

//       if (scrollTop > scrollThreshold) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }

//       if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
//         setVisible(false);
//       } else {
//         setVisible(true);
//       }

//       setLastScrollTop(scrollTop);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollTop]);

//   return (
//     <nav
//       className={`${styles.navbar} ${scrolled ? styles.scrolled : ""} ${
//         visible ? styles.visible : styles.hidden
//       }`}
//     >
//       <div className={styles.navbarContent}>
//         <Link href="/" className={styles.logo}>
//           Logo
//         </Link>
//         <ul className={styles.navLinks}>
//           <li className={styles.navItem}>
//             <Link href="/" className={styles.navLink}>
//               Home
//             </Link>
//           </li>
//           <li className={styles.navItem}>
//             <Link href="/about" className={styles.navLink}>
//               About
//             </Link>
//           </li>
//           <li className={styles.navItem}>
//             <Link href="/services" className={styles.navLink}>
//               Services
//             </Link>
//           </li>
//           <li className={styles.navItem}>
//             <Link href="/contact" className={styles.navLink}>
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
