import React from "react";
import { motion } from "framer-motion";

function Product() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md md:max-w-lg lg:max-w-xl"
      >
        <motion.h1 
          className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Featured Product
        </motion.h1>
        
        <motion.img 
          src="https://via.placeholder.com/300" 
          alt="Product" 
          className="w-full rounded-lg mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
        
        <motion.p 
          className="text-gray-600 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          This is an amazing product with high quality and great features. Buy now to experience the best performance.
        </motion.p>
        
        <motion.button 
          className="mt-4 w-full py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Buy Now
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Product;
