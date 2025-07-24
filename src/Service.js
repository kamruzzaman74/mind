import React, { useState, useEffect } from "react";
import { FaLaptopCode, FaCloud, FaMobileAlt, FaDatabase, FaServer, FaGlobe, FaShoppingCart, FaShieldAlt } from "react-icons/fa";
import { MdDesignServices, MdOutlinePhonelinkRing } from "react-icons/md";
import { BiNetworkChart } from "react-icons/bi";
import { motion } from "framer-motion";
import { ClipLoader } from "react-spinners"; // Import ClipLoader from react-spinners

const services = [
  {
    category: "Software Services",
    items: [
      { icon: <FaLaptopCode />, title: "Software Development", desc: "Accelerate disruption within your organization and industry. Bring your ideas to life with custom software." },
      { icon: <MdDesignServices />, title: "UI/UX Design", desc: "Create visually stunning interfaces with expert UI/UX design services to enhance user experiences." },
      { icon: <FaMobileAlt />, title: "Mobile App Development", desc: "Unlock your business potential with cutting-edge mobile applications that engage users." },
      { icon: <FaShoppingCart />, title: "E-Commerce Development", desc: "Build powerful e-commerce platforms with secure payment integration and user-friendly experiences." },
      { icon: <FaServer />, title: "Cloud Migration", desc: "Migrate your business to the cloud for better scalability, security, and efficiency." },
      { icon: <FaDatabase />, title: "Database Development", desc: "Optimize your business data with efficient, scalable, and secure database solutions." },
    ],
  },
  {
    category: "IT Services",
    items: [
      { icon: <MdOutlinePhonelinkRing />, title: "PBX – IP Telephony", desc: "Enhance business communication with reliable PBX & IP telephony solutions." },
      { icon: <BiNetworkChart />, title: "Network Solutions", desc: "Optimize and secure your IT network infrastructure for seamless operations." },
      { icon: <FaGlobe />, title: "SEO & Digital Marketing", desc: "Boost online visibility and engagement with strategic digital marketing solutions." },
    ],
  },
  {
    category: "Data Center Services",
    items: [
      { icon: <FaCloud />, title: "Modern Software Solutions", desc: "Get secure, scalable software for your business needs." },
      { icon: <FaServer />, title: "Tech Enterpriseship", desc: "Enjoy solutions with high security and reliability." },
      { icon: <FaShieldAlt />, title: "Modern Tech", desc: "Affordable modern technology for businesses of all sizes." },
    ],
  },
];

const Services = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <section className="bg-gradient-to-b from-purple-100 to-blue-50 py-16 px-6 md:px-16">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <ClipLoader color="#3b82f6" loading={loading} size={50} />
        </div>
      ) : (
        <>
          <div className="text-center mb-12">
            <motion.h2 
              className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-wider leading-tight"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              🚀 Our Services
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto font-sans"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              We offer cutting-edge technology solutions designed to accelerate your business growth and innovation.
            </motion.p>
          </div>

          {services.map((section, index) => (
            <motion.div 
              key={index} 
              className="mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold text-indigo-600 mb-6">{section.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.items.map((service, i) => (
                  <motion.div
                    key={i}
                    className="bg-white shadow-lg p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex flex-col items-center justify-between space-y-4"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 * i, duration: 0.8 }}
                  >
                    <div className="text-indigo-600 text-5xl transform hover:rotate-12 transition duration-300">{service.icon}</div>
                    <h4 className="text-xl font-semibold text-gray-800">{service.title}</h4>
                    <p className="text-gray-600 text-sm">{service.desc}</p>
                    <motion.div 
                      className="w-full h-1 bg-gradient-to-r from-pink-500 to-yellow-500 mt-4"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.5, duration: 1.5 }}
                    ></motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </>
      )}
    </section>
  );
};

export default Services;
