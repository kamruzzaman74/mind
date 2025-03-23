import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen bg-white flex flex-col-reverse md:flex-row items-center justify-center text-gray-900 overflow-hidden px-6 md:px-16">
      {/* Hero Content */}
      <motion.div 
        className="relative z-10 text-center md:text-left max-w-2xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          className="text-4xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Innovate. Disrupt. <br />
          <span className="text-yellow-500">Lead the Future</span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-2xl mt-6 text-gray-600 max-w-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          Pioneering advancements in AI, Blockchain, and Cloud Technology to redefine the digital landscape.
        </motion.p>
      </motion.div>

      {/* Image Section */}
      <motion.div 
        className="relative w-full md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <img src="hh.webp" alt="Innovative Technology" className="w-full max-w-lg rounded-lg shadow-lg" />
      </motion.div>

      {/* Floating Elements */}
      <motion.div 
        className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full blur-3xl opacity-40"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-20 right-16 w-28 h-28 bg-yellow-400 rounded-full blur-2xl opacity-50"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-10 left-1/3 w-16 h-16 bg-pink-500 rounded-full blur-xl opacity-40"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 6, repeat: Infinity }}
      ></motion.div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <svg className="w-10 h-10 text-blue-400 drop-shadow-md" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7 7 7-7"></path>
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
