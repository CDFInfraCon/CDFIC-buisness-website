"use client";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    name: "Authority Engineer/ Independent Engineer",
    description: "Manufacturer of Wooden Pallet",
    image:
      "https://img.freepik.com/free-photo/waibaidu-bridge-shanghai_1359-943.jpg?t=st=1727329898~exp=1727333498~hmac=918b9f793e7c5554c3f38e568a89e6b39d5b0fb8347c9f371c6e401bd7920a4b&w=900",
  },
  {
    name: "DPR  ",
    description: "Supplier of Pine Wood Pallet",
    image:
      "https://img.freepik.com/free-photo/long-shot-people-running-together-outside_23-2149033508.jpg?ga=GA1.1.882660512.1723693951&semt=ais_hybrid",
  },
  {
    name: "Supervision Consultant Operation & Maintenance",
    description: "Heat treated wooden pallet",
    image:
      "https://img.freepik.com/free-photo/aerial-views-with-cars-streets_23-2148959679.jpg?ga=GA1.1.882660512.1723693951&semt=ais_hybrid",
  },
  {
    name: "Safety Consultant",
    description: "Euro standard pallets",
    image:
      "https://img.freepik.com/free-photo/new-recently-built-highway-brcko-district-bosnia-herzegovina_181624-4020.jpg?ga=GA1.1.882660512.1723693951&semt=ais_hybrid",
  },
  {
    name: "Project Managemnt",
    description: "Custom Wooden Boxes",
    image:
      "https://img.freepik.com/free-photo/new-recently-built-highway-brcko-district-bosnia-herzegovina_181624-13276.jpg?ga=GA1.1.882660512.1723693951&semt=ais_hybrid",
  },
  {
    name: "Design",
    description: "High quality plastic packaging",
    image:
      "https://img.freepik.com/free-photo/way-rural-transport-metropolitan-outdoor_1112-977.jpg?ga=GA1.1.882660512.1723693951&semt=ais_hybrid",
  },
];

const ServicesPage = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-5">
        {/* Page Header */}
        <div className="text-left mb-14">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1A1A37]  mb-6">
            Our Services
          </h2>
          <p className="text-lg lg:text-xl text-[#1A1A37] max-w-2xl mx-auto">
            We offer a range of professional services to meet your
            infrastructure needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              {/* Image Section */}
              <div className="relative h-56 md:h-60  overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Hover Content Sliding from Bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="p-6 absolute inset-x-0 bottom-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {service.name}
                  </h3>
                  <p className="text-base text-gray-200 leading-relaxed">
                    {service.description}
                  </p>
                  <div></div>
                  <Link href="/pages/services" className="mt-4 bg-orange-500 text-white px-2 py-1 rounded hover:bg-orange-600">
                    Lern More
                  </Link>
                </div>
              </div>

              {/* Service Name and Description Always Visible */}
              <div className="p-2  bg-[#1A1A37]  ">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
