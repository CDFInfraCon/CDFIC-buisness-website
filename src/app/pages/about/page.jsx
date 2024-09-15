// import React from "react";
// import CounterIncrement from "@/app/components/counter-increment/page";
// import Image from "next/image";

// const About = () => {
//   return (
//     <>
//       <section
//         className="relative bg-cover bg-center h-64 md:h-72 lg:h-80"
//         style={{
//           backgroundImage: `url('https://images.unsplash.com/photo-1487132906645-8e0fbba067e0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
//         }}
//       >
//         <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex flex-col justify-center items-center p-4">
//           <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white text-center">
//             Building Futures with Our Vision!
//           </h1>
//           <p className="text-base md:text-lg lg:text-xl text-white mt-4 text-center">
//             Swag shoivdigoitch literally meditation subway tile tumblr
//             cold-pressed. Gastropub street art.
//           </p>
//         </div>
//       </section>

//       <section className="container mx-auto py-16 px-6">
//         <div className="text-center">
//           <h2 className="text-4xl font-bold mb-4">Who We Are </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             At <strong>CDF Infra Con Pvt Ltd</strong>, we have been at the
//             forefront of road infrastructure development for over two decades.
//             Our mission is to deliver cutting-edge solutions in road
//             construction, ensuring safety, sustainability, and innovation in
//             every project.
//           </p>
//         </div>
//       </section>

//       <section className="text-gray-600 body-font  bg-slate-100 rounded-t-3xl">
//         <div className="container mx-auto  flex px-5 py-10 md:flex-row flex-col items-center">
//           <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
//             <Image
//               className="rounded object-cover object-center w-full h-80"
//               src="https://static.wixstatic.com/media/c837a6_567d2b6e76584c129e68e1179ec80fa2~mv2.jpg/v1/fill/w_956,h_1053,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_567d2b6e76584c129e68e1179ec80fa2~mv2.jpg"
//               alt="hero"
//               width={600} // You can adjust width
//               height={400} // You can adjust height
//               layout="responsive"
//             />
//           </div>
//           <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
//             <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
//               About Us
//             </h1>
//             <p className="mb-8 leading-relaxed">
//               CDF INFRA CON Private Limited has laid its foundation to adhere to
//               the promise of non-compromised commitment and service delivery in
//               the world of infrastructural development. Spreading smiles with
//               our strongly backed construction equipment and engineering works,
//               we excel in some of the finest projects created within the least
//               turnaround time. Operating successfully across the country, we
//               have spearheaded our road to achieving well integrated and quality
//               committed services for our esteemed clients. Being a privately
//               owned company, CDF has struggled pretty hard on reaching such a
//               benchmarked standard since our incorporation
//             </p>
//             <div className="flex justify-center">
//               <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
//                 Learn More
//               </button>
//               {/* <a href="#" className="cta">
//                 <span>Learn More</span>
//                 <svg width="13px" height="10px" viewBox="0 0 13 10">
//                   <path d="M1,5 L11,5"></path>
//                   <polyline points="8 1 12 5 8 9"></polyline>
//                 </svg>
//               </a> */}
//             </div>
//           </div>
//         </div>
//       </section>

//   <section className="bg-white py-16 mx-5">
//     <div className="container mx-auto text-center">
//       <h2 className="text-3xl font-bold mb-8">Our Expertise</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
//           <div className="text-blue-600 text-5xl mb-4">
//             <i className="fas fa-road"></i>
//           </div>
//           <h3 className="text-xl font-semibold mb-4">Road Construction</h3>
//           <p className="text-gray-600">
//             We specialize in building durable and sustainable roads that
//             connect cities, towns, and rural areas.
//           </p>
//         </div>
//         <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
//           <div className="text-blue-600 text-5xl mb-4">
//             <i className="fas fa-road"></i>
//           </div>
//           <h3 className="text-xl font-semibold mb-4">Bridges & Tunnels</h3>
//           <p className="text-gray-600">
//             Our team excels at constructing complex bridges and tunnels that
//             ensure smooth transit across challenging terrains.
//           </p>
//         </div>
//         <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
//           <div className="text-blue-600 text-5xl mb-4">
//             <i className="fas fa-city"></i>
//           </div>
//           <h3 className="text-xl font-semibold mb-4">
//             Urban Infrastructure
//           </h3>
//           <p className="text-gray-600">
//             We provide comprehensive solutions for urban infrastructure,
//             including highways, expressways, and public transport systems.
//           </p>
//         </div>
//         <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
//           <div className="text-blue-600 text-5xl mb-4">
//             <i className="fas fa-water"></i>
//           </div>
//           <h3 className="text-xl font-semibold mb-4">Drainage Systems</h3>
//           <p className="text-gray-600">
//             Our expertise extends to designing and building efficient
//             drainage systems for sustainable road infrastructure.
//           </p>
//         </div>
//       </div>
//     </div>
//   </section>

//   <section className="py-16 bg-gray-100">
//     <div className="container mx-auto text-center">
//       <h2 className="text-3xl font-bold mb-8">Our Journey</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         <div className="p-6 bg-white rounded-lg shadow-lg">
//           <h3 className="text-xl font-semibold mb-2">2001</h3>
//           <p className="text-gray-600">
//             Established CDF Infra Con Pvt Ltd and began our first major
//             highway construction project.
//           </p>
//         </div>
//         <div className="p-6 bg-white rounded-lg shadow-lg">
//           <h3 className="text-xl font-semibold mb-2">2010</h3>
//           <p className="text-gray-600">
//             Expanded into bridge and tunnel construction, completing the
//             landmark Sakore Nagar Bridge project.
//           </p>
//         </div>
//         <div className="p-6 bg-white rounded-lg shadow-lg">
//           <h3 className="text-xl font-semibold mb-2">2023</h3>
//           <p className="text-gray-600">
//             Celebrating over 20 years of excellence in road infrastructure,
//             with over 500 projects completed.
//           </p>
//         </div>
//       </div>
//     </div>
//   </section>

//   <section className="bg-gray-500 py-16 text-center text-white">
//     <h2 className="text-4xl font-bold mb-4">
//       Ready to Start Your Next Project?
//     </h2>
//     <p className="text-lg mb-8 mx-2">
//       Get in touch with us and let's build the future together.
//     </p>
//     <a
//       href="/pages/contact"
//       className="bg-white text-blue-600 py-3 px-6 rounded-lg shadow-lg font-bold hover:bg-gray-200 transition"
//     >
//       Contact Us
//     </a>
//   </section>

//   <CounterIncrement />

//   <div className="bg-gray-100 py-16">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       <h2 className="text-center text-3xl font-extrabold text-gray-900">
//         OUR HAPPY CLIENTS
//       </h2>
//       <div
//         id="logo-container"
//         className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
//       >
//         <div id="logo1" className="flex items-center justify-center">
//           <Image
//             className="h-32 w-32 object-contain"
//             src="https://images.unsplash.com/photo-1571035330093-fd93f6321a7b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt="Company 2"
//             width={600} // You can adjust width
//             height={400} // You can adjust height
//             layout="responsive"
//           />
//         </div>
//         <div id="logo2" className="flex items-center justify-center">
//           <Image
//             className="h-32 w-32 object-contain"
//             src="https://images.unsplash.com/photo-1571035330093-fd93f6321a7b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt="Company 2"
//             width={600} // You can adjust width
//             height={400} // You can adjust height
//             layout="responsive"
//           />
//         </div>
//         <div id="logo3" className="flex items-center justify-center">
//           <Image
//             className="h-32 w-32 object-contain"
//             src="https://images.unsplash.com/photo-1571035330093-fd93f6321a7b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt="Company 2"
//             width={600} // You can adjust width
//             height={400} // You can adjust height
//             layout="responsive"
//           />
//         </div>
//         <div id="logo4" className="flex items-center justify-center">
//           <Image
//             className="h-32 w-32 object-contain"
//             src="https://images.unsplash.com/photo-1571035330093-fd93f6321a7b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt="Company 2"
//             width={600} // You can adjust width
//             height={400} // You can adjust height
//             layout="responsive"
//           />
//         </div>
//       </div>
//     </div>
//   </div>
// </>
//   );
// };

// export default About;

import React from "react";
import CounterIncrement from "@/app/components/counter-increment/page";
import Image from "next/image";

const About = () => {
  return (
    <>
      <section className="relative bg-cover bg-center h-64 md:h-72 lg:h-80 about-hero-back-image">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex flex-col justify-center items-center p-4">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white text-center">
            Building Futures with Our Vision!
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-white mt-4 text-center">
            Swag should literally meditation subway tile tumblr cold-pressed.
            Gastropub street art.
          </p>
        </div>
      </section>

      <section className="container mx-auto py-16 px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Who We Are</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At <strong>CDF Infra Con Pvt Ltd</strong>, we have been at the
            forefront of road infrastructure development for over two decades.
            Our mission is to deliver cutting-edge solutions in road
            construction, ensuring safety, sustainability, and innovation in
            every project.
          </p>
        </div>
      </section>

      <section className="text-gray-600 body-font  bg-slate-100 rounded-t-3xl">
        <div className="container mx-auto  flex px-5 py-10 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="rounded object-cover object-center w-full h-80"
              src="https://static.wixstatic.com/media/c837a6_567d2b6e76584c129e68e1179ec80fa2~mv2.jpg/v1/fill/w_956,h_1053,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_567d2b6e76584c129e68e1179ec80fa2~mv2.jpg"
              alt="hero"
              width={600}
              height={400}
              layout="responsive"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
              About Us
            </h1>
            <p className="mb-8 leading-relaxed">
              CDF INFRA CON Private Limited has laid its foundation to adhere to
              the promise of non-compromised commitment and service delivery in
              the world of infrastructural development. Spreading smiles with
              our strongly backed construction equipment and engineering works,
              we excel in some of the finest projects created within the least
              turnaround time. Operating successfully across the country, we
              have spearheaded our road to achieving well integrated and quality
              committed services for our esteemed clients. Being a privately
              owned company, CDF has struggled pretty hard on reaching such a
              benchmarked standard since our incorporation
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 mx-5">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <div className="text-blue-600 text-5xl mb-4">
                <i className="fas fa-road"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Road Construction</h3>
              <p className="text-gray-600">
                We specialize in building durable and sustainable roads that
                connect cities, towns, and rural areas.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <div className="text-blue-600 text-5xl mb-4">
                <i className="fas fa-road"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Bridges & Tunnels</h3>
              <p className="text-gray-600">
                Our team excels at constructing complex bridges and tunnels that
                ensure smooth transit across challenging terrains.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <div className="text-blue-600 text-5xl mb-4">
                <i className="fas fa-city"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Urban Infrastructure
              </h3>
              <p className="text-gray-600">
                We provide comprehensive solutions for urban infrastructure,
                including highways, expressways, and public transport systems.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
              <div className="text-blue-600 text-5xl mb-4">
                <i className="fas fa-water"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Drainage Systems</h3>
              <p className="text-gray-600">
                Our expertise extends to designing and building efficient
                drainage systems for sustainable road infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">2001</h3>
              <p className="text-gray-600">
                Established CDF Infra Con Pvt Ltd and began our first major
                highway construction project.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">2010</h3>
              <p className="text-gray-600">
                Expanded into bridge and tunnel construction, completing the
                landmark Sakore Nagar Bridge project.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">2023</h3>
              <p className="text-gray-600">
                Celebrating over 20 years of excellence in road infrastructure,
                with over 500 projects completed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-500 py-16 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Start Your Next Project?
        </h2>
        <p className="text-lg mb-8 mx-2">
          Get in touch with us and let&apos;s build the future together.
        </p>
        <a
          href="/pages/contact"
          className="bg-white text-blue-600 py-3 px-6 rounded-lg shadow-lg font-bold hover:bg-gray-200 transition"
        >
          Contact Us
        </a>
      </section>

      <CounterIncrement />

      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            OUR HAPPY CLIENTS
          </h2>
          <div
            id="logo-container"
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <div id="logo1" className="flex items-center justify-center">
              <Image
                className="h-32 w-32 object-contain"
                src="https://images.unsplash.com/photo-1571035330093-fd93f6321a7b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Company 2"
                width={600} // You can adjust width
                height={400} // You can adjust height
                layout="responsive"
              />
            </div>
            <div id="logo2" className="flex items-center justify-center">
              <Image
                className="h-32 w-32 object-contain"
                src="https://images.unsplash.com/photo-1571035330093-fd93f6321a7b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Company 2"
                width={600} // You can adjust width
                height={400} // You can adjust height
                layout="responsive"
              />
            </div>
            <div id="logo3" className="flex items-center justify-center">
              <Image
                className="h-32 w-32 object-contain"
                src="https://images.unsplash.com/photo-1571035330093-fd93f6321a7b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Company 2"
                width={600} // You can adjust width
                height={400} // You can adjust height
                layout="responsive"
              />
            </div>
            <div id="logo4" className="flex items-center justify-center">
              <Image
                className="h-32 w-32 object-contain"
                src="https://images.unsplash.com/photo-1571035330093-fd93f6321a7b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Company 2"
                width={600} // You can adjust width
                height={400} // You can adjust height
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
