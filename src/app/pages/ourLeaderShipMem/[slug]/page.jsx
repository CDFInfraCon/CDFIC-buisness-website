import Image from 'next/image';
import React from 'react'
import { FaAward, FaCheckCircle, FaTrophy } from 'react-icons/fa';

const OurTeams = [
    {
        slug: 1,
        leaderName: "Mr. Dilip Palve",
        position1: "Resident cum Highway Engineer",
        position2: "Former executive Engineer (PWD)",
        image: "https://images.unsplash.com/photo-1660798027105-5da8ad164e27?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        message1: "Welcome to CDF Infra Con Pvt. Ltd.",
        message2:
            "At CDF Infra Con, we stand at the forefront of shaping India's infrastructure landscape with our unparalleled Engineering Consultancy and Services. With extensive experience and a portfolio of successful projects, we are dedicated to pushing the boundaries of what’s possible in the world of infrastructure.",
        message3:
            "Our team is passionate about innovation, continually setting new benchmarks to ensure that we deliver the highest quality solutions to our clients. We are committed to excellence, driven by the vision of crafting the future of India’s infrastructure.",
        message4:
            "Thank you for visiting our website. We look forward to collaborating with you to create enduring and impactful infrastructure solutions.",
        message5: null,
    },
    {
        slug: 2,
        leaderName: "Mr. L.S. Joshi",
        position1: "Team Leader cum Senior Highway Engineer",
        position2: "Former Superintending Engineer",
        image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        message1: "Welcome to CDF Infra Con Pvt. Ltd.",
        message2:
            "At CDF Infra Con, we are proud to be at the forefront of shaping India's infrastructure landscape. Our journey, marked by a wealth of experience and numerous successful projects has established us as a leader in Engineering Consultancy and services. We are committed to excellence and innovation, constantly pushing the boundaries of what is possible in the field of infrastructure. Our dedicated team works tirelessly to set new standards and redefine the industry, ensuring that we remain a benchmark for quality and reliability.",
        message3:
            "Join us as we continue to build a brighter, more robust future for India.",
        message4: null,
        message5: null,
    },
    {
        slug: 3,
        leaderName: "Mr. Vijay B. Bhale",
        position1: "Resident Engineer cum Highway Engineer",
        position2: "Former Chief Engineer (PWD)",
        image: "https://images.unsplash.com/photo-1518644730709-0835105d9daa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        message1: "Welcome to CDF Infra Con Pvt. Ltd.",
        message2: "At CDF Infra Con, we are redefining India's",
        message3:
            "infrastructure through our comprehensive engineering consultancy and services. With a wealth of experience and numerous successful projects, we continually push the",
        message4:
            "boundaries of innovation and excellence in the infrastructure sector. Visit our website to learn more about our projects and services.",
        message5: null,
    },
    {
        slug: 4,
        leaderName: "Mr. Shivshankar Telamani",
        position1: "Highway Maintenance cum Resident Engineer",
        position2: null,
        image: "https://plus.unsplash.com/premium_photo-1661559063958-968c8f1928e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        message1: "Welcome to CDF Infra Con Pvt. Ltd.",
        message2:
            "As the Resident cum Highway Engineer at  CDF Infra Con, I am proud to be part of a team that is at the forefront of shaping India's infrastructure. Our commitment to excellence in engineering consultancy and services ensures that each project we undertake meets the highest standards of quality and efficiency.",
        message3:
            "With our extensive experience and innovative approach, we are dedicated to delivering infrastructure solutions that not only meet the needs of today but also pave the way for a sustainable and prosperous future. I invite you to explore our website at www.cdfic.com to learn more about our projects, our team, and our vision for the future.",
        message4:
            "Thank you for your interest in CDF Infra Con Pvt Ltd. We look forward to collaborating with you.",
        message5: null,
    },
    {
        slug: 5,
        leaderName: "Mr. Naushad Khan",
        position1: "Bridge Engineer",
        position2: null,
        image: "https://images.unsplash.com/photo-1631306039548-beb1a80fe8ab?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        message1: "Welcome to CDF Infra Con Pvt. Ltd.",
        message2:
            "As the Bridge Engineer at CDF Infra Con, I am proud to be part of a team that is at the forefront of shaping India's infrastructure. Our commitment to excellence in engineering consultancy and services ensures that each project we undertake meets the highest standards of quality and efficiency. With our extensive experience and innovative approach, we are dedicated to delivering infrastructure solutions that not only meet the needs of today but also pave the way for a sustainable and prosperous future. I invite you to explore our website at www.cdfic.com to learn more about our projects, our team, and our vision for the future.",
        message3:
            "Thank you for your interest in CDF Infra Con Pvt Ltd. We look forward to collaborating with you.",

        message4: null,
        message5: null,
    },
    {
        slug: 6,
        leaderName: "Mr. Dilip Shinde",
        position1: "Team Leader cum Highway Engineer",
        position2: null,
        image: "https://images.unsplash.com/photo-1605464765759-55272601601e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        message1: "Welcome to CDF Infra Con Pvt. Ltd.",
        message2:
            "At CDF Infra Con, we stand at the forefront of shaping India's infrastructure landscape with our unparalleled Engineering Consultancy and Services. With extensive experience and a portfolio of successful projects, we are dedicated to pushing the boundaries of what’s possible in the world of infrastructure.",
        message3:
            "Our team is passionate about innovation, continually setting new benchmarks to ensure that we deliver the highest quality solutions to our clients. We are committed to excellence, driven by the vision of crafting the future of India’s infrastructure.",
        message4:
            "Thank you for visiting our website. We look forward to collaborating with you to create enduring and impactful infrastructure solutions.",
        message5: null,
    },
];


export async function generateStaticParams() {
    return OurTeams.map(team => ({
        slug: team.slug.toString(), // convert to string if needed
    }));
}

const page = ({ params }) => {
    const { slug } = params; // Get the TeamMember ID from the URL
    const TeamMember = OurTeams.find(s => s.slug === parseInt(slug));

    if (!TeamMember) return <p>Service not found</p>;

    return <>

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
                    "Our leaders are visionaries shaping the future of infrastructure with passion, expertise, and commitment."
                </p>
            </div>
        </section>

        <div className='bg-[#1A1A37] '>
            <div className="container mx-auto px-4 py-8  ">
                <div className="flex flex-col md:flex-row  bg-white shadow-lg rounded-lg p-6 py-10">
                    <div className="md:w-1/3 mb-4 md:mb-0">
                        <Image
                            src={TeamMember.image}
                            alt={TeamMember.leaderName}
                            width={300} // Set a width for the image
                            height={300} // Set a height for the image
                            className=" md:w-5/6 h-56 md:h-60 lg:h-80 border-4 border-orange-500 object-center object-cover" // Style the image
                        />
                    </div>
                    <div className="md:w-2/3 md:ml-6">
                        <h1 className="text-4xl font-bold text-[#1A1A37] mb-2">{TeamMember.leaderName}</h1>
                        <h2 className="text-2xl text-gray-600 mb-4">{TeamMember.position}</h2>
                        <div className="text-gray-700">
                            <p className="mb-2  ">{TeamMember.message1}</p>
                            <br />
                            <p className="mb-2 ">{TeamMember.message2}</p>
                            <br />
                            <p className="mb-2 ">{TeamMember.message3}</p>
                            <br />
                            {TeamMember.message4 && <p className="mb-2">{TeamMember.message4}</p>}
                            <br />
                            {TeamMember.message5 && <p className="mb-2">{TeamMember.message5}</p>}

                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Our Best Achievements Section */}
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-bold text-gray-800 text-center mb-12">Our Best Achievements</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-12">
                    {/* Achievement 1 */}
                    <div className="group relative bg-white p-8 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                        <div className="flex items-center mb-4">
                            <div className="bg-blue-500 p-3 rounded-full mr-4 transition-transform transform group-hover:scale-110">
                                <FaCheckCircle className="text-white text-2xl" />
                            </div>
                            <h3 className="text-3xl font-semibold text-gray-800">100+ Successful Projects</h3>
                        </div>
                        <p className="text-gray-600">
                            We’ve successfully completed over 100 major infrastructure projects across India.
                        </p>
                    </div>

                    {/* Achievement 2 */}
                    <div className="group relative bg-white p-8 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                        <div className="flex items-center mb-4">
                            <div className="bg-green-500 p-3 rounded-full mr-4 transition-transform transform group-hover:scale-110">
                                <FaTrophy className="text-white text-2xl" />
                            </div>
                            <h3 className="text-3xl font-semibold text-gray-800">20+ Years of Excellence</h3>
                        </div>
                        <p className="text-gray-600">
                            With over two decades of experience, we’ve become a leader in the industry.
                        </p>
                    </div>

                    {/* Achievement 3 */}
                    <div className="group relative bg-white p-8 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                        <div className="flex items-center mb-4">
                            <div className="bg-red-500 p-3 rounded-full mr-4 transition-transform transform group-hover:scale-110">
                                <FaAward className="text-white text-2xl" />
                            </div>
                            <h3 className="text-3xl font-semibold text-gray-800">Award-Winning Team</h3>
                        </div>
                        <p className="text-gray-600">
                            Our team has been recognized with numerous awards for innovation and excellence.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default page