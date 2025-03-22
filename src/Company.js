import React from "react";
import { motion } from "framer-motion";

function Company() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.6 }}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-4xl"
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-extrabold text-center text-indigo-700 mb-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Welcome to MindHex365 Technologies
        </motion.h1>
        
        <motion.p 
          className="text-gray-700 text-center text-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Innovating the future with cutting-edge blockchain and AI solutions.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            className="p-6 bg-indigo-100 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-bold text-indigo-800">Blockchain Development</h2>
            <p className="text-gray-600">Creating secure, decentralized solutions for the digital era.</p>
          </motion.div>
          
          <motion.div 
            className="p-6 bg-indigo-100 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-bold text-indigo-800">AI-Powered Solutions</h2>
            <p className="text-gray-600">Harnessing artificial intelligence for smarter, faster decision-making.</p>
          </motion.div>
          
          <motion.div 
            className="p-6 bg-indigo-100 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-bold text-indigo-800">Cloud Computing</h2>
            <p className="text-gray-600">Empowering businesses with scalable and secure cloud services.</p>
          </motion.div>
          
          <motion.div 
            className="p-6 bg-indigo-100 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-bold text-indigo-800">Cybersecurity</h2>
            <p className="text-gray-600">Protecting digital assets with next-gen security solutions.</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Company;
