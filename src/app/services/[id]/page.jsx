"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaClipboardList,
  FaUsers,
} from "react-icons/fa";
import { servicesData } from "@/app/data/services";

export default function ServiceDetails({ params }) {
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const serviceData = servicesData[params.id];
    setService(serviceData);
    setLoading(false);
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-700">Loading...</h2>
        </div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-md mx-4">
          <div className="text-red-500 text-5xl mb-4">404</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Service Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The service you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <FaArrowLeft className="mr-2" /> Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const ServiceIcon = service.icon;

  return (
    <div className="min-h-screen bg-slate-300 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div>
          <Link
            href="/services"
            className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 mb-12 text-lg"
          >
            <FaArrowLeft className="mr-2" /> Back to Services
          </Link>
        </div>
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-700 to-blue-900 px-8 py-16 text-white">
            <div className="flex items-center gap-6 mb-8">
              <ServiceIcon className="text-6xl opacity-90" />
              <h1 className="text-5xl font-bold">{service.title}</h1>
            </div>
            <p className="text-xl text-blue-100 leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Content Section */}
          <div className="px-12 py-16">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-semibold text-gray-800 mb-8 flex items-center">
                <FaClipboardList className="mr-4 text-blue-700" />
                Detailed Overview
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {service.fullDescription}
              </p>
            </div>

            {/* Additional Info Card */}
            <div className="mt-16 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-10 border border-blue-100/20 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <FaUsers className="mr-4 text-blue-700" />
                Why Choose Our Service
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our team of experts brings years of experience and a commitment
                to excellence, ensuring your project&apos;s success through
                innovative solutions and dedicated support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
