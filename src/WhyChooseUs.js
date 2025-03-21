import React from "react";
import { FaCheckCircle, FaLightbulb, FaHandshake, FaShieldAlt, FaCogs, FaRocket } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="relative bg-white py-16 px-6 md:px-16 overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-purple-100 opacity-30 blur-2xl"></div>

      {/* Who We Are Section */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold text-gray-900 drop-shadow-lg animate__animated animate__fadeInDown">
          🚀 Who <span className="text-blue-600">We Are</span>
        </h2>
        <p className="text-lg text-gray-600 mt-4 animate__animated animate__fadeIn">
          At <strong>MindHex365 Technologies</strong>, we don’t just build software—we craft digital experiences that redefine industries.  
        </p>
      </div>

      {/* Our Commitment Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Card 1 */}
        <div className="relative bg-white shadow-lg rounded-2xl p-6 transform hover:scale-105 transition duration-300 border border-gray-200">
          <FaLightbulb className="text-5xl text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold text-gray-900">Innovation at Core</h3>
          <p className="text-gray-600 mt-2">We bring fresh, cutting-edge solutions that drive business success.</p>
        </div>

        {/* Card 2 */}
        <div className="relative bg-white shadow-lg rounded-2xl p-6 transform hover:scale-105 transition duration-300 border border-gray-200">
          <FaHandshake className="text-5xl text-purple-600 mb-4" />
          <h3 className="text-2xl font-bold text-gray-900">Client-Centric Approach</h3>
          <p className="text-gray-600 mt-2">Your goals are our priority. We build solutions tailored just for you.</p>
        </div>

        {/* Card 3 */}
        <div className="relative bg-white shadow-lg rounded-2xl p-6 transform hover:scale-105 transition duration-300 border border-gray-200">
          <FaShieldAlt className="text-5xl text-green-600 mb-4" />
          <h3 className="text-2xl font-bold text-gray-900">Security & Reliability</h3>
          <p className="text-gray-600 mt-2">We prioritize data security and system stability for seamless operations.</p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-16 text-center">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6">✨ Why <span className="text-blue-600">Choose Us?</span></h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We’re not just a service provider—we’re your **growth partner** in technology and innovation.
        </p>

        {/* Features List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="flex items-center space-x-4 p-4 bg-gray-50 shadow-md rounded-lg transition hover:shadow-lg">
            <FaCheckCircle className="text-blue-600 text-3xl" />
            <p className="text-gray-700 font-medium">🚀 AI & Blockchain Experts</p>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-gray-50 shadow-md rounded-lg transition hover:shadow-lg">
            <FaCheckCircle className="text-purple-600 text-3xl" />
            <p className="text-gray-700 font-medium">🎨 Stunning UI/UX Designs</p>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-gray-50 shadow-md rounded-lg transition hover:shadow-lg">
            <FaCheckCircle className="text-green-600 text-3xl" />
            <p className="text-gray-700 font-medium">🔧 Scalable & Secure Software</p>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-gray-50 shadow-md rounded-lg transition hover:shadow-lg">
            <FaCheckCircle className="text-red-600 text-3xl" />
            <p className="text-gray-700 font-medium">💡 Innovative & Future-Ready</p>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-gray-50 shadow-md rounded-lg transition hover:shadow-lg">
            <FaCheckCircle className="text-orange-600 text-3xl" />
            <p className="text-gray-700 font-medium">💰 Cost-Effective Solutions</p>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-gray-50 shadow-md rounded-lg transition hover:shadow-lg">
            <FaCheckCircle className="text-blue-600 text-3xl" />
            <p className="text-gray-700 font-medium">📞 24/7 Customer Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
