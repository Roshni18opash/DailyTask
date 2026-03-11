"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import style from "./service.module.css";
import rose from "@/public/u1.jpg";

// export const metadata = {
//   title: "Services",
//   description: "This is services page",
//   author: [{ name: "Rose", email: "rose@example.com" }],
//   keywords: ["nextjs", "services", "team", "animation"],
// };

//for animation
const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Services = () => {
  return (
    <section className="font-roboto py-12">
      <h1 className={style.common_heading}>Hello Services</h1>

      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-light-800">
          Our Team
        </h2>
        {/* grid layout for card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            animate="show"
            whileHover={{ scale: 1.08 }}
            className="bg-white rounded-xl shadow-md p-6 text-center transition"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="relative w-24 h-24 mx-auto mb-4 "
            >
              <Image
                src={rose}
                fill
                quality={100}
                priority={false}
                placeholder="blur"
                blurDataURL=""
                alt="team member"
                className="rounded-full object-cover"
              />
            </motion.div>

            <h3 className="text-lg font-semibold text-gray-800">
              Mike Johnson
            </h3>

            <p className="text-sm text-gray-600 mt-2">Backend Developer</p>

            <p className="text-xs text-gray-500 mt-1">Node.js & Python</p>
          </motion.div>
          {/* Card 2 */}

          <motion.div
            variants={cardVariant}
            initial="hidden"
            animate="show"
            whileHover={{ y: -10 }}
            className="bg-white rounded-xl shadow-md p-6 text-center  transition"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-24 h-24 mx-auto mb-4 relative"
            >
              <Image
                src="/u2.jpg"
                fill
                alt="team member"
                className="rounded-full object-cover"
              />
            </motion.div>

            <h3 className="text-lg font-semibold text-gray-800">
              Emily Wilson
            </h3>

            <p className="text-sm text-gray-600 mt-2">Product Manager</p>

            <p className="text-xs text-gray-500 mt-1">Strategy & Analytics</p>
          </motion.div>
          {/* Card 3 */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            animate="show"
            whileHover={{ rotate: 3 }}
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-24 h-24 mx-auto mb-4 relative"
            >
              <Image
                src="/u3.jpg"
                fill
                alt="team member"
                className="rounded-full object-cover"
              />
            </motion.div>

            <h3 className="text-lg font-semibold text-gray-800">David Lee</h3>

            <p className="text-sm text-gray-600 mt-2">DevOps Engineer</p>

            <p className="text-xs text-gray-500 mt-1">AWS & Docker</p>
          </motion.div>
          {/* Card 4 */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            animate="show"
            whileHover={{ boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-24 h-24 mx-auto mb-4 relative"
            >
              <Image
                src="/u4.jpg"
                fill
                alt="team member"
                className="rounded-full object-cover"
              />
            </motion.div>

            <h3 className="text-lg font-semibold text-gray-800">
              Mike Johnson
            </h3>

            <p className="text-sm text-gray-600 mt-2">Backend Developer</p>

            <p className="text-xs text-gray-500 mt-1">Node.js & Python</p>
          </motion.div>
          {/* Card 5 */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            animate="show"
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white rounded-xl shadow-md p-6 text-center transition"
          >
            <motion.div className="w-24 h-24 mx-auto mb-4 relative">
              <Image
                src="/u5.jpg"
                fill
                quality={100}
                alt="team member"
                className="rounded-full object-cover"
              />
            </motion.div>

            <h3 className="text-lg font-semibold text-gray-800">
              Mike Johnson
            </h3>

            <p className="text-sm text-gray-600 mt-2">Backend Developer</p>

            <p className="text-xs text-gray-500 mt-1">Node.js & Python</p>
          </motion.div>
          {/* Card 6 */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            animate="show"
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition"
          >
            <motion.div
              whileHover={{ rotateX: 10, rotateY: 10 }}
              transition={{ duration: 0.5 }}
              className="w-24 h-24 mx-auto mb-4 relative"
            >
              <Image
                src="/u6.jpg"
                fill
                alt="team member"
                className="rounded-full object-cover"
              />
            </motion.div>

            <h3 className="text-lg font-semibold text-gray-800">
              Mike Johnson
            </h3>

            <p className="text-sm text-gray-600 mt-2">Backend Developer</p>

            <p className="text-xs text-gray-500 mt-1">Node.js & Python</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
