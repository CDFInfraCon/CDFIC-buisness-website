import React from "react";
import CounterIncrement from "@/app/components/counter-increment/page";

const About = () => {
  return (
    <>
      <section
        className="relative bg-cover bg-center h-64 md:h-72 lg:h-80"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1487132906645-8e0fbba067e0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex flex-col justify-center items-center p-4">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white text-center">
            Building Futures with Our Vision!
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-white mt-4 text-center">
            Swag shoivdigoitch literally meditation subway tile tumblr
            cold-pressed. Gastropub street art.
          </p>
        </div>
      </section>

      <section className="text-gray-600 body-font  bg-slate-300 rounded-t-3xl">
        <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="rounded object-cover object-center w-full h-80"
              alt="hero"
              src="https://static.wixstatic.com/media/c837a6_567d2b6e76584c129e68e1179ec80fa2~mv2.jpg/v1/fill/w_956,h_1053,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_567d2b6e76584c129e68e1179ec80fa2~mv2.jpg"
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
              {/* <a href="#" class="cta">
                <span>Learn More</span>
                <svg width="13px" height="10px" viewBox="0 0 13 10">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </a> */}
            </div>
          </div>
        </div>
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
              <img
                src="https://images.unsplash.com/photo-1571035330093-fd93f6321a7b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Company 2"
                className="h-32 w-32 object-contain"
              />
            </div>
            <div id="logo2" className="flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1571035330093-fd93f6321a7b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Company 2"
                className="h-32 w-32 object-contain"
              />
            </div>
            <div id="logo3" className="flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1571035330093-fd93f6321a7b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Company 2"
                className="h-32 w-32 object-contain"
              />
            </div>
            <div id="logo4" className="flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1571035330093-fd93f6321a7b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Company 2"
                className="h-32 w-32 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
