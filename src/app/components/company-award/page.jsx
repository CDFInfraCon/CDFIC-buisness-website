"use client"
import React from 'react'
import { motion } from "framer-motion"

const CompanyAward = () => {
    return <>
        <section className="py-16 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">
            <div className="container mx-auto px-6 lg:px-20">
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-4xl font-bold mb-12 text-center text-white"
                >
                    Awards and Recognition
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
                >
                    {[
                        {
                            src: "https://rdb.rw/wp-content/uploads/2018/12/One-Only-Nyungwe-House-now-among-the-five-star-hotel-in-Rwanda-1024x683.jpg",
                            title: "Best Road In Maharashtra",
                            year: "2018"
                        },
                        {
                            src: "https://www.hotelnewsme.com/wp-content/uploads/2023/03/FSX-8515-scaled.jpg",
                            title: "Popular  Chh.Sambhajinagar",
                            year: "2023"
                        },
                        {
                            src: "https://worldwidebesthotel.com/wp-content/uploads/2022/08/img-20220802-wa0006.jpg",
                            title: "Outstanding Service Award",
                            year: "2022"
                        },

                    ].map((award, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95, rotate: 0 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            whileHover={{
                                scale: 1.1,
                                rotate: -2,
                                boxShadow: "0px 20px 40px rgba(0,0,0,0.5)",
                                transition: { duration: 0.5, ease: "easeInOut" }
                            }}
                            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center"
                        >
                            <motion.img
                                src={award.src}
                                alt={award.title}
                                className="w-full h-48 object-cover"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            />
                            <div className="p-4 text-center">
                                <motion.h3
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                    className="text-xl font-semibold text-gray-900"
                                >
                                    {award.title}
                                </motion.h3>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.4, ease: "easeInOut" }}
                                    className="text-lg text-gray-600"
                                >
                                    {award.year}
                                </motion.p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    </>
}

export default CompanyAward