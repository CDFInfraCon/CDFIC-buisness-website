"use client"
import React from 'react'

const Carrers = () => {
    return <>
        <main className="min-h-screen bg-gray-100">
            {/* Hero Section */}
            <div
                className="relative h-64 md:h-72 lg:h-72"
                style={{
                    backgroundImage: `url(https://plus.unsplash.com/premium_photo-1661517335128-2bcf290d58f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex flex-col justify-center items-center p-4">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">
                        Building Futures with Carres!
                    </h1>
                    {/* <p className="text-base md:text-lg lg:text-xl text-white mt-4 text-center">
              Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard
            </p> */}
                </div>
            </div>

            {/* Additional Content Sections */}
            <section className="p-8">
                <h2 className="text-3xl font-semibold mb-4">Why Join Us?</h2>
                <p className="text-lg">
                    At Our Company, we believe in fostering a culture of innovation, collaboration, and growth. Our team
                    members are our most valuable assets, and we are committed to their success.
                </p>
            </section>

            <section className="p-8 bg-white">
                <h2 className="text-3xl font-semibold mb-4">Current Openings</h2>
                {/* Example job listing */}
                <div className="bg-gray-200 p-4 rounded-lg mb-4">
                    <h3 className="text-xl font-bold">Software Engineer</h3>
                    <p className="text-gray-700">Location: Remote</p>
                    <p className="text-gray-700">
                        We are looking for a skilled software engineer to join our team. You will be working on exciting
                        projects that make a real impact.
                    </p>
                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Apply Now
                    </button>
                </div>
                {/* Add more job listings as needed */}
            </section>
        </main>





    </>
}

export default Carrers