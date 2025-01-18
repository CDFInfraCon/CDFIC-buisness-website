import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaClipboardList,
  FaUsers,
} from "react-icons/fa";
import { useRouter } from "next/router";

const servicesData = {
  "authority-engineer": {
    title: "Authority Engineer",
    fullDescription:
      "In India's infrastructure development, Authority Engineers play a critical role in ensuring the successful implementation of Public-Private Partnership (PPP) projects. Our team provides independent, comprehensive monitoring to guarantee project compliance, quality, and timely execution.",
    keyHighlights: [
      "Neutral project oversight",
      "Compliance monitoring",
      "Stakeholder communication",
      "Quality assurance",
    ],
    benefits: [
      "Ensures project adherence to contractual obligations",
      "Facilitates transparent communication",
      "Minimizes project risks",
      "Supports efficient project delivery",
    ],
    image: "/projects/AiiE.jpeg",
  },
  dpr: {
    title: "Detailed Project Report (DPR)",
    fullDescription:
      "Our comprehensive Detailed Project Report (DPR) service provides in-depth planning and analysis for infrastructure projects. We combine technical expertise, strategic insights, and innovative design to create robust project blueprints.",
    keyHighlights: [
      "Comprehensive infrastructure planning",
      "Feasibility studies",
      "Environmental impact assessment",
      "Cost-benefit analysis",
    ],
    benefits: [
      "Provides clear project roadmap",
      "Identifies potential challenges",
      "Supports informed decision-making",
      "Optimizes resource allocation",
    ],
    image: "/projects/khed4.jpeg",
  },
  maintenance: {
    title: "O&M Supervision",
    fullDescription:
      "Our Operation & Maintenance (O&M) Supervision service ensures the highest standards of infrastructure maintenance. We provide comprehensive monitoring, preventive maintenance, and performance optimization.",
    keyHighlights: [
      "Regular infrastructure inspections",
      "Preventive maintenance strategies",
      "Performance tracking",
      "Safety compliance",
    ],
    benefits: [
      "Extends infrastructure lifespan",
      "Reduces unexpected downtime",
      "Ensures safety and reliability",
      "Optimizes operational efficiency",
    ],
    image: "/projects/khed3.jpeg",
  },
  safety: {
    title: "Safety Consulting",
    fullDescription:
      "Our Safety Consulting service develops comprehensive safety management systems tailored to infrastructure projects. We identify risks, implement robust safety protocols, and ensure compliance with national and international standards.",
    keyHighlights: [
      "Risk assessment",
      "Safety protocol development",
      "Compliance monitoring",
      "Training and awareness",
    ],
    benefits: [
      "Minimizes workplace accidents",
      "Ensures regulatory compliance",
      "Protects workforce and assets",
      "Enhances project reputation",
    ],
    image: "",
  },
  "project-management": {
    title: "Project Management",
    fullDescription:
      "Our Project Management service provides end-to-end solutions that transform complex infrastructure challenges into successful implementations. We combine technical expertise, strategic planning, and innovative approaches.",
    keyHighlights: [
      "Comprehensive project planning",
      "Resource optimization",
      "Risk management",
      "Stakeholder coordination",
    ],
    benefits: [
      "Delivers projects on time and budget",
      "Ensures high-quality outcomes",
      "Manages complex interdependencies",
      "Provides transparent reporting",
    ],
    image: "",
  },
  "design-engineering": {
    title: "Design Engineering",
    fullDescription:
      "Our Design Engineering service creates innovative, sustainable infrastructure solutions. We focus on developing pavements and designs that balance durability, performance, and environmental considerations.",
    keyHighlights: [
      "Sustainable design principles",
      "Advanced materials research",
      "Performance optimization",
      "Environmental integration",
    ],
    benefits: [
      "Long-lasting infrastructure",
      "Reduced environmental impact",
      "Cost-effective solutions",
      "Enhanced user experience",
    ],
    image: "",
  },
};

const ServiceDetails = ({ params }) => {
  const router = useRouter();

  const { serviceId } = router.query;
  const service = servicesData[serviceId];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Service Not Found
          </h1>
          <Link
            href="/services"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <FaArrowLeft className="mr-2" /> Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <Link
          href="/services"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <FaArrowLeft className="mr-2" /> Back to Services
        </Link>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Service Image */}
          <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
            {service.image ? (
              <Image
                src={service.image}
                alt={service.title}
                layout="fill"
                objectCover="cover"
                className="transition-transform duration-300 hover:scale-110"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">No Image Available</span>
              </div>
            )}
          </div>

          {/* Service Details */}
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              {service.title}
            </h1>
            <p className="text-gray-600 mb-8">{service.fullDescription}</p>

            {/* Key Highlights */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <FaClipboardList className="mr-3 text-blue-600" />
                Key Highlights
              </h2>
              <ul className="space-y-2">
                {service.keyHighlights.map((highlight, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <FaCheckCircle className="mr-3 text-green-500" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <FaUsers className="mr-3 text-blue-600" />
                Benefits
              </h2>
              <ul className="space-y-2">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <FaCheckCircle className="mr-3 text-green-500" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
