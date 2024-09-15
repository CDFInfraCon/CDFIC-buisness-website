// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const teamMembers = [
//   {
//     src: "https://images.unsplash.com/photo-1660798027105-5da8ad164e27?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     name: "John Doe",
//     position: "CEO",
//     description: "Leader with 20 years of experience in management.",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1660798027105-5da8ad164e27?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     name: "Jane Smith",
//     position: "CTO",
//     description: "Expert in technology and innovation.",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1660798027105-5da8ad164e27?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     name: "Michael Johnson",
//     position: "CFO",
//     description: "Financial strategist and decision maker.",
//   },
//   {
//     src: "https://images.unsplash.com/photo-1660798027105-5da8ad164e27?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     name: "Emily Davis",
//     position: "COO",
//     description: "Specialist in operations and efficiency.",
//   },
// ];

// const CompanyAward = () => {
//   return (
//     <section className="py-16 ">
//       <div className="container mx-auto px-6 lg:px-5">
//         <motion.h2
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           className="text-4xl font-bold mb-12 text-center"
//         >
//           Our Leadership Team
//         </motion.h2>
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center"
//         >
//           {teamMembers.map((member, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               whileHover={{
//                 scale: 1.1,
//                 transition: { duration: 0.5, ease: "easeInOut" },
//               }}
//               transition={{
//                 duration: 0.8,
//                 delay: index * 0.2,
//                 ease: "easeOut",
//               }}
//               className="flex flex-col items-center"
//             >
//               <motion.img
//                 src={member.src}
//                 alt={member.name}
//                 className="w-32 h-32 object-cover rounded-full shadow-lg border-4 border-yellow-500"
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, ease: "easeOut" }}
//               />
//               <motion.h3
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
//                 className="text-xl font-semibold  mt-4"
//               >
//                 {member.name}
//               </motion.h3>
//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, delay: 0.4, ease: "easeInOut" }}
//                 className="text-lg text-indigo-400"
//               >
//                 {member.position}
//               </motion.p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default CompanyAward;

"use client";
import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    src: "https://images.unsplash.com/photo-1660798027105-5da8ad164e27?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "John Doe",
    position: "CEO",
    description: "Leader with 20 years of experience in management.",
  },
  {
    src: "https://images.unsplash.com/photo-1660798027105-5da8ad164e27?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Jane Smith",
    position: "CTO",
    description: "Expert in technology and innovation.",
  },
  {
    src: "https://images.unsplash.com/photo-1660798027105-5da8ad164e27?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Michael Johnson",
    position: "CFO",
    description: "Financial strategist and decision maker.",
  },
  {
    src: "https://images.unsplash.com/photo-1660798027105-5da8ad164e27?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Emily Davis",
    position: "COO",
    description: "Specialist in operations and efficiency.",
  },
];

const CompanyAward = () => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-6 lg:px-5">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Our Leadership Team
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              className="flex flex-col items-center"
            >
              <motion.img
                src={member.src}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full shadow-lg border-4 border-yellow-500"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-xl font-semibold  mt-4"
              >
                {member.name}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4, ease: "easeInOut" }}
                className="text-lg text-indigo-400"
              >
                {member.position}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyAward;
