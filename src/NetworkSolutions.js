import React from "react";
import { FaWifi, FaNetworkWired, FaShieldAlt } from "react-icons/fa";

const NetworkSolutions = () => {
  return (
    <section className="relative bg-white py-16 px-6 md:px-16">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold text-gray-900 drop-shadow-lg animate__animated animate__fadeInDown">
          🌐 Advanced <span className="text-blue-600">Network Solutions</span>
        </h2>
        <p className="text-lg text-gray-600 mt-4 animate__animated animate__fadeIn">
          Reliable, secure, and scalable **networking services** to ensure **seamless connectivity** for your business.  
        </p>
      </div>

      {/* Content Wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side: Image */}
        <div className="relative">
          <img 
            src="kk.webp" 
            alt="Network Solutions" 
            className="rounded-2xl shadow-lg w-full h-auto object-cover transform hover:scale-105 transition duration-300"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30 rounded-2xl"></div>
        </div>

        {/* Right Side: Content */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4 p-4 bg-gray-50 shadow-md rounded-lg transition hover:shadow-lg">
            <FaWifi className="text-blue-600 text-4xl" />
            <p className="text-gray-700 font-medium">High-Speed & Reliable Connectivity</p>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-gray-50 shadow-md rounded-lg transition hover:shadow-lg">
            <FaNetworkWired className="text-green-600 text-4xl" />
            <p className="text-gray-700 font-medium">Enterprise-Grade Networking Solutions</p>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-gray-50 shadow-md rounded-lg transition hover:shadow-lg">
            <FaShieldAlt className="text-red-600 text-4xl" />
            <p className="text-gray-700 font-medium">Advanced Cybersecurity & Protection</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkSolutions;
