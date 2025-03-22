import React from "react";
import { motion } from "framer-motion";

function Solutions() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.6 }}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-5xl"
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-extrabold text-center text-indigo-700 mb-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Our Cutting-Edge Solutions
        </motion.h1>
        
        <motion.p 
          className="text-gray-700 text-center text-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          MindHex365 Technologies delivers innovative solutions in blockchain, AI, cloud computing, and cybersecurity.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div 
            className="p-6 bg-indigo-100 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-bold text-indigo-800">Blockchain Solutions</h2>
            <p className="text-gray-600">Empowering businesses with decentralized and secure digital transactions.</p>
          </motion.div>
          
          <motion.div 
            className="p-6 bg-indigo-100 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-bold text-indigo-800">AI & Machine Learning</h2>
            <p className="text-gray-600">Leveraging AI to drive automation, efficiency, and intelligent decision-making.</p>
          </motion.div>
          
          <motion.div 
            className="p-6 bg-indigo-100 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-bold text-indigo-800">Cloud Infrastructure</h2>
            <p className="text-gray-600">Providing scalable, reliable, and secure cloud computing services.</p>
          </motion.div>
          
          <motion.div 
            className="p-6 bg-indigo-100 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-bold text-indigo-800">Cybersecurity</h2>
            <p className="text-gray-600">Implementing robust security measures to protect digital assets.</p>
          </motion.div>
          
          <motion.div 
            className="p-6 bg-indigo-100 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-bold text-indigo-800">IoT Solutions</h2>
            <p className="text-gray-600">Enabling smart, connected devices to optimize industrial and personal use.</p>
          </motion.div>
          
          <motion.div 
            className="p-6 bg-indigo-100 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-bold text-indigo-800">Data Analytics</h2>
            <p className="text-gray-600">Turning raw data into actionable insights for smarter business decisions.</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Solutions;
