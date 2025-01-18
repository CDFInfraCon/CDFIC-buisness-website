"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import CDFakirImage from "../../../../public/leaders/cdFakir.jpeg";
import Amer1Image from "../../../../public/leaders/Amer.jpg";
import AmmanFakirImage from "../../../../public/leaders/AmmanFakir.jpeg";

const leadershipMembers = [
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

const LeadershipMember = () => {
  return (
    <section className="py-16 px-6 bg-[#1A1A37]">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-orange-500">Our Leadership</h2>
        <p className="text-lg text-[#F1A365] mt-2">
          Meet the dedicated leaders driving CDF Infra Con Pvt. Ltd.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {leadershipMembers.map((member, index) => (
          <div
            key={index}
            className="relative group overflow-hidden bg-white shadow-lg rounded-lg transition-transform duration-500 hover:scale-105"
          >
            <div
              className="w-full h-60 overflow-hidden"
              style={
                {
                  // padding: member.slug == 2 || member.slug == 4 ? "50px" : "0px",
                }
              }
            >
              <Image
                src={member.image}
                alt={member.leaderName}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-black bg-opacity-75 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
              <h3 className="text-xl font-semibold text-white">
                {member.leaderName}
              </h3>
              <h4 className="text-md text-gray-300 mb-4">{member.position}</h4>

              <Link href={`/pages/leaderShipmem-information/${member.slug}`}>
                <button className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 text-white transition-transform duration-300 hover:scale-110">
                  <FaArrowRight />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeadershipMember;
