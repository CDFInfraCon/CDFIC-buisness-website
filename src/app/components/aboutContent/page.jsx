// "use client";

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Nagar4 from "../../../../public/ongoing/Nagar4.jpeg";
// import Nagar2 from "../../../../public/about/Nagar2.jpeg";
// import About2 from "../../../../public/about/about2.jpeg";
// import ProAbout1 from "../../../../public/about/proabout1.jpeg";

// const AboutusContent = () => {
//   // Carousel settings
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   // Array of images for the carousel - add more images as needed
//   const images = [
//     {
//       src: ProAbout1,
//       alt: "Road Infrastructure 1",
//     },
//     {
//       src: Nagar4,
//       alt: "Road Infrastructure 1",
//     },
//     {
//       src: Nagar2,
//       alt: "Road Infrastructure 1",
//     },
//     {
//       src: About2,
//       alt: "Road Infrastructure 1",
//     },
//   ];

//   return (
//     <div className="w-full bg-gray-50">
//       <div className="container mx-auto px-4 py-10">
//         {/* Side-by-Side Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//           {/* Carousel Section */}
//           <div className="w-full h-[400px] md:h-[500px] relative overflow-hidden rounded-lg shadow-xl">
//             <Slider {...settings}>
//               {images.map((image, index) => (
//                 <div key={index} className="relative h-[400px] md:h-[500px]">
//                   <Image
//                     src={image.src}
//                     alt={image.alt}
//                     fill
//                     className="object-cover"
//                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                     priority={index === 0}
//                   />
//                 </div>
//               ))}
//             </Slider>
//           </div>

//           {/* Information Section */}
//           <div className="space-y-6">
//             <h2 className="text-4xl font-bold text-gray-800">
//               About Our Company
//             </h2>
//             <p className="text-gray-600 leading-relaxed">
//               CDF INFRA CON Private Limited has laid its foundation to adhere to
//               the promise of non-compromised commitment and service delivery in
//               the world of infrastructural development.
//             </p>
//             <p className="text-gray-600 leading-relaxed">
//               Spreading smiles with our strongly backed construction equipment
//               and engineering works, we excel in some of the finest projects
//               created within the least turnaround time.
//             </p>
//             <p className="text-gray-600 leading-relaxed">
//               Operating successfully across the country, we have spearheaded our
//               road to achieving well integrated and quality committed services
//               for our esteemed clients.
//             </p>
//             <p className="text-gray-600 leading-relaxed">
//               Being a privately owned company, CDF has struggled pretty hard on
//               reaching such a benchmarked standard since our incorporation.
//             </p>
//             <p className="text-gray-600 leading-relaxed">
//               From planning to execution, we handle every step of the process
//               with professionalism, using state-of-the-art equipment and the
//               latest technologies.
//             </p>

//             <div className="pt-4">
//               <Link
//                 href="/pages/about"
//                 className="inline-block bg-orange-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-orange-500 transition duration-300 text-base md:text-lg font-medium"
//               >
//                 Explore
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx global>{`
//         .slick-dots {
//           bottom: 20px;
//         }

//         .slick-dots li button:before {
//           font-size: 12px;
//           color: white;
//           opacity: 0.7;
//         }

//         .slick-dots li.slick-active button:before {
//           color: white;
//           opacity: 1;
//         }

//         .slick-prev,
//         .slick-next {
//           z-index: 1;
//           width: 40px;
//           height: 40px;
//         }

//         .slick-prev {
//           left: 20px;
//         }

//         .slick-next {
//           right: 20px;
//         }

//         .slick-prev:before,
//         .slick-next:before {
//           font-size: 40px;
//           opacity: 0.7;
//         }

//         .slick-slider {
//           width: 100%;
//           height: 100%;
//         }

//         .slick-slide > div {
//           height: 100%;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default AboutusContent;

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Nagar4 from "../../../../public/ongoing/Nagar4.jpeg";
import Nagar2 from "../../../../public/about/Nagar2.jpeg";
import About2 from "../../../../public/about/about2.jpeg";
import ProAbout1 from "../../../../public/about/proabout1.jpeg";

const AboutusContent = () => {
  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Array of images for the carousel
  const images = [
    { src: ProAbout1, alt: "Road Infrastructure 1" },
    { src: Nagar4, alt: "Road Infrastructure 2" },
    { src: Nagar2, alt: "Road Infrastructure 3" },
    { src: About2, alt: "Road Infrastructure 4" },
  ];

  return (
    <div className="w-full bg-gray-50">
      <div className="container mx-auto px-6 md:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Carousel Section */}
          <div className="w-full h-[400px] md:h-[500px] relative overflow-hidden rounded-lg shadow-lg">
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index} className="relative h-[400px] md:h-[500px]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0}
                  />
                </div>
              ))}
            </Slider>
          </div>

          {/* Information Section */}
          <div className="space-y-6 md:pl-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              About Our Company
            </h2>
            <p className="text-gray-700 leading-relaxed">
              CDF INFRA CON Private Limited has laid its foundation to adhere to
              the promise of non-compromised commitment and service delivery in
              the world of infrastructural development.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Spreading smiles with our strongly backed construction equipment
              and engineering works, we excel in some of the finest projects
              created within the least turnaround time.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Operating successfully across the country, we have spearheaded our
              road to achieving well-integrated and quality-committed services
              for our esteemed clients.
            </p>
            <p className="text-gray-700 leading-relaxed">
              From planning to execution, we handle every step of the process
              with professionalism, using state-of-the-art equipment and the
              latest technologies.
            </p>
            <div className="pt-4">
              <Link
                href="/pages/about"
                className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg shadow hover:bg-orange-500 transition duration-300 text-base md:text-lg font-medium"
              >
                Explore
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .slick-dots {
          bottom: 15px;
        }

        .slick-dots li button:before {
          font-size: 12px;
          color: white;
          opacity: 0.8;
        }

        .slick-dots li.slick-active button:before {
          color: white;
          opacity: 1;
        }

        .slick-prev,
        .slick-next {
          z-index: 1;
          width: 40px;
          height: 40px;
        }

        .slick-prev {
          left: 20px;
        }

        .slick-next {
          right: 20px;
        }

        .slick-prev:before,
        .slick-next:before {
          font-size: 40px;
          opacity: 0.7;
        }

        .slick-slider {
          width: 100%;
          height: 100%;
        }

        .slick-slide > div {
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default AboutusContent;
