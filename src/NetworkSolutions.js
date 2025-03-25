import React from "react";
import { FaLaptopCode, FaDatabase, FaCloud, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const EnterpriseSolutions = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-gray-100 py-16 px-6 md:px-16">
      <div className="text-center mb-12">
        <motion.h2 
          className="text-5xl font-extrabold text-gray-900 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          🚀 Advanced <span className="text-blue-600">Enterprise Solutions</span>
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-600 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Scalable, secure, and innovative **enterprise software solutions** to drive efficiency and growth for your business.
        </motion.p>
      </div>

      {/* Content Wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side: Image */}
        <div className="relative">
          <motion.img 
            src="kkkk.webp" 
            alt="Enterprise Solutions" 
            className="rounded-2xl shadow-lg w-full h-auto object-cover transform hover:scale-105 transition duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30 rounded-2xl"></div>
        </div>

        {/* Right Side: Content */}
        <div className="space-y-6">
          <motion.div 
            className="flex items-center space-x-4 p-6 bg-white shadow-lg rounded-xl transition hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
          >
            <FaLaptopCode className="text-blue-600 text-5xl" />
            <p className="text-gray-700 font-medium text-lg">Custom Software Development</p>
          </motion.div>
          <motion.div 
            className="flex items-center space-x-4 p-6 bg-white shadow-lg rounded-xl transition hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
          >
            <FaDatabase className="text-green-600 text-5xl" />
            <p className="text-gray-700 font-medium text-lg">Enterprise Data Management</p>
          </motion.div>
          <motion.div 
            className="flex items-center space-x-4 p-6 bg-white shadow-lg rounded-xl transition hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
          >
            <FaCloud className="text-purple-600 text-5xl" />
            <p className="text-gray-700 font-medium text-lg">Cloud Computing & Integration</p>
          </motion.div>
          <motion.div 
            className="flex items-center space-x-4 p-6 bg-white shadow-lg rounded-xl transition hover:shadow-2xl"
            whileHover={{ scale: 1.05 }}
          >
            <FaShieldAlt className="text-red-600 text-5xl" />
            <p className="text-gray-700 font-medium text-lg">Cybersecurity & Risk Management</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSolutions;
