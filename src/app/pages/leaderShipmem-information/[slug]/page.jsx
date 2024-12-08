import Image from "next/image";
import { FaTrophy, FaCheckCircle, FaAward } from "react-icons/fa";
import CDFakirImage from "../../../../../public/leaders/cdFakir.jpeg";
import Amer1Image from "../../../../../public/leaders/Amer1.jpg";
import AmmanFakirImage from "../../../../../public/leaders/AmmanFakir.jpeg";

const services = [
  {
    slug: 1,
    leaderName: "Mr. C.D Fakir",
    position: "Honourable Chairman",
    image: CDFakirImage,
    message1:
      "At CDF Infra Con, we are not just building infrastructure; we are shaping the future of India.",
    message2:
      "Our commitment to excellence in engineering consultancy and services has positioned us as a leader in the industry.",
    message3:
      "Every day, we challenge ourselves to redefine standards, innovate, and deliver the best to our clients.",
    message4:
      "As we move forward, I encourage each one of you to embrace this spirit of innovation and strive for greatness.",
    message5: "Thank you for being a part of this incredible journey.",
  },
  {
    slug: 2,
    leaderName: "Mrs. Fawziya M. Karjatkar",
    position: "Chairman & Managing Director",
    image:
      "https://images.unsplash.com/photo-1508341591423-4347099e1f19?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    message1: "Welcome to CDF Infra Con Pvt. Ltd.",
    message2:
      "At CDF Infra Con Pvt. Ltd., we are redefining India's infrastructure landscape.",
    message3:
      "Our dedicated team is committed to excellence and works tirelessly to set new industry standards.",
    message4: "Thank you for visiting our website.",
    message5: null,
  },
  {
    slug: 3,
    leaderName: "Mr. Amer C Fakir",
    position: "Managing Director",
    image: Amer1Image,
    message1:
      "We are at the forefront of defining India's infrastructure landscape.",
    message2:
      "Our dedicated team works tirelessly to innovate and set new standards.",
    message3: "Thank you for visiting our website.",
    message4: "We look forward to partnering with you.",
    message5: null,
  },
  {
    slug: 4,
    leaderName: "Mr. Amman C Fakir",
    position: "Managing Director",
    image: AmmanFakirImage,
    message1:
      "We are proud to be at the forefront of shaping India's infrastructure landscape.",
    message2:
      "Our dedicated team is driven by a relentless passion for innovation.",
    message3: "Thank you for visiting our website.",
    message4: "We look forward to partnering with you.",
    message5: null,
  },
];

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug.toString(), // convert to string if needed
  }));
}

const LeaderShipmemberInfo = ({ params }) => {
  const { slug } = params; // Get the service ID from the URL
  const service = services.find((s) => s.slug === parseInt(slug));

  if (!service) return <p>Service not found</p>;

  return (
    <>
      <section
        className="relative bg-cover bg-center h-64 md:h-72 lg:h-80"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1487132906645-8e0fbba067e0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        }}
      >
        <div className="absolute inset-0 bg-gray-900 bg-opacity-60 flex flex-col justify-center items-center p-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
            Leadership That Drives Excellence
          </h1>
          <p className="text-md md:text-xl text-gray-300 mt-4 text-center">
            "Our leaders are visionaries shaping the future of infrastructure
            with passion, expertise, and commitment."
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 bg-[#1A1A37] ">
        <div className="flex flex-col md:flex-row  bg-white shadow-lg rounded-lg p-6 py-10">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <Image
              src={service.image}
              alt={service.leaderName}
              width={300} // Set a width for the image
              height={300} // Set a height for the image
              className=" md:w-5/6 h-56 md:h-60 lg:h-80 border-4 border-orange-500 object-center object-cover" // Style the image
            />
          </div>
          <div className="md:w-2/3 md:ml-6">
            <h1 className="text-4xl font-bold text-[#1A1A37] mb-2">
              {service.leaderName}
            </h1>
            <h2 className="text-2xl text-gray-600 mb-4">{service.position}</h2>
            <div className="text-gray-700">
              <p className="mb-2  ">{service.message1}</p>
              <br />
              <p className="mb-2 ">{service.message2}</p>
              <br />
              <p className="mb-2 ">{service.message3}</p>
              <br />
              {service.message4 && <p className="mb-2">{service.message4}</p>}
              <br />
              {service.message5 && <p className="mb-2">{service.message5}</p>}
            </div>
          </div>
        </div>
      </div>

      {/* Our Best Achievements Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-gray-800 text-center mb-12">
            Our Best Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Achievement 1 */}
            <div className="group relative bg-white p-8 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 p-3 rounded-full mr-4 transition-transform transform group-hover:scale-110">
                  <FaCheckCircle className="text-white text-2xl" />
                </div>
                <h3 className="text-3xl font-semibold text-gray-800">
                  100+ Successful Projects
                </h3>
              </div>
              <p className="text-gray-600">
                We’ve successfully completed over 100 major infrastructure
                projects across India.
              </p>
            </div>

            {/* Achievement 2 */}
            <div className="group relative bg-white p-8 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
              <div className="flex items-center mb-4">
                <div className="bg-green-500 p-3 rounded-full mr-4 transition-transform transform group-hover:scale-110">
                  <FaTrophy className="text-white text-2xl" />
                </div>
                <h3 className="text-3xl font-semibold text-gray-800">
                  20+ Years of Excellence
                </h3>
              </div>
              <p className="text-gray-600">
                With over two decades of experience, we’ve become a leader in
                the industry.
              </p>
            </div>

            {/* Achievement 3 */}
            <div className="group relative bg-white p-8 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
              <div className="flex items-center mb-4">
                <div className="bg-red-500 p-3 rounded-full mr-4 transition-transform transform group-hover:scale-110">
                  <FaAward className="text-white text-2xl" />
                </div>
                <h3 className="text-3xl font-semibold text-gray-800">
                  Award-Winning Team
                </h3>
              </div>
              <p className="text-gray-600">
                Our team has been recognized with numerous awards for innovation
                and excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LeaderShipmemberInfo;
