import React from "react";
import { motion } from "framer-motion";
import { FaMobileAlt, FaCode } from "react-icons/fa";

const ModernAppDevelopment = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-800 py-20 px-6 md:px-16 text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div className="space-y-8">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight leading-snug text-center md:text-left"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            🚀 Modern App Development
          </motion.h2>

          <motion.p
            className="text-lg font-light max-w-lg mx-auto md:mx-0 text-center md:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We craft seamless mobile and web applications with cutting-edge technology. Focused on user experience and scalability, we build solutions that drive your business forward.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center md:justify-start items-center space-x-8 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="flex items-center space-x-2 text-lg font-medium">
              <FaMobileAlt className="text-3xl" />
              <p>Mobile-First Approach</p>
            </div>
            <div className="flex items-center space-x-2 text-lg font-medium">
              <FaCode className="text-3xl" />
              <p>Cutting-edge Technology</p>
            </div>
          </motion.div>
        </div>

        {/* Image Section */}
        <div className="relative">
          <motion.img
            src="yy.webp"
            alt="App Development"
            className="w-full h-full object-cover rounded-lg shadow-lg transform hover:scale-105 transition duration-500"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-lg"></div>
        </div>
      </div>

      {/* Animated Background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-400 via-indigo-600 to-purple-700 opacity-60"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      ></motion.div>

      {/* Subtle Scroll Animation */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-800 to-transparent opacity-30 pointer-events-none"></div>
    </section>
  );
};

export default ModernAppDevelopment;
