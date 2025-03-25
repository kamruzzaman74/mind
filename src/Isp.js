import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Isp = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simulate loading time
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center justify-center md:justify-between bg-gradient-to-r from-purple-500 to-indigo-500 p-6 md:p-12 rounded-2xl shadow-xl overflow-hidden w-full max-w-7xl mx-auto">
      {loading ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full flex justify-center items-center h-64"
        >
          <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-white"></div>
        </motion.div>
      ) : (
        <>
          {/* Text Content */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0 md:pr-8"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight transform transition-transform duration-300 hover:scale-105">
              Smart & Efficient Home Software Solutions
            </h2>
            <p className="text-lg md:text-xl text-white mb-6 leading-relaxed opacity-90 hover:opacity-100 transition-opacity duration-300">
              Experience seamless home software solutions designed for automation,
              security, and efficiency. Our cutting-edge technology simplifies
              your digital lifestyle with AI-driven home management tools,
              smart connectivity, and enhanced security protocols.
            </p>
            <p className="text-lg md:text-xl text-white opacity-80 hover:opacity-100 transition-opacity duration-300">
              Upgrade your home with the latest software innovations!
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-6 py-3 bg-white text-indigo-500 font-semibold text-lg rounded-lg shadow-md hover:bg-indigo-100 transition-all duration-300"
            >
              Stay with us
            </motion.button>
          </motion.div>

          {/* Image */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="kk.webp" // Replace with your image URL
              alt="kkkk"
              className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-lg shadow-xl transition-shadow duration-300 hover:shadow-2xl"
            />
          </motion.div>
        </>
      )}
    </section>
  );
};

export default Isp;
