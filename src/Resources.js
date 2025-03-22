import React from "react";
import { motion } from "framer-motion";

function Resources() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-3xl"
      >
        <motion.h1 
          className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Software Development Resources
        </motion.h1>
        
        <motion.p 
          className="text-gray-700 text-center mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Explore the best tools, guides, and articles for software developers and IT professionals.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            className="p-4 bg-blue-100 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-xl font-semibold text-blue-700">Documentation</h2>
            <p className="text-gray-600">Comprehensive guides and API references for modern software technologies.</p>
          </motion.div>
          
          <motion.div 
            className="p-4 bg-blue-100 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-xl font-semibold text-blue-700">Tutorials</h2>
            <p className="text-gray-600">Step-by-step tutorials covering full-stack development, DevOps, and AI.</p>
          </motion.div>
          
          <motion.div 
            className="p-4 bg-blue-100 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-xl font-semibold text-blue-700">Tools & Frameworks</h2>
            <p className="text-gray-600">A collection of the best development tools, libraries, and frameworks.</p>
          </motion.div>
          
          <motion.div 
            className="p-4 bg-blue-100 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-xl font-semibold text-blue-700">Community & Support</h2>
            <p className="text-gray-600">Join forums, discussions, and developer communities for networking.</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Resources;
