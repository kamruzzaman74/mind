import React from "react";
import { FaLaptopCode, FaCloud, FaMobileAlt, FaDatabase, FaServer, FaCogs, FaGlobe, FaShoppingCart, FaShieldAlt } from "react-icons/fa";
import { MdDesignServices, MdOutlinePhonelinkRing } from "react-icons/md";
import { BiNetworkChart } from "react-icons/bi";
import { RiComputerLine } from "react-icons/ri";

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
      { icon: <FaCloud />, title: "Virtual Private Server (VPS)", desc: "Get secure, scalable VPS hosting for your business needs." },
      { icon: <FaServer />, title: "Dedicated Server", desc: "Enjoy dedicated hosting solutions with high security and reliability." },
      { icon: <FaShieldAlt />, title: "Shared Hosting", desc: "Affordable and secure shared hosting for businesses of all sizes." },
    ],
  },
];

const Services = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 animate__animated animate__fadeInDown">
          🚀 Our Services
        </h2>
        <p className="text-lg text-gray-600 mt-4 animate__animated animate__fadeIn">
          We offer cutting-edge technology solutions to help your business grow.
        </p>
      </div>

      {services.map((section, index) => (
        <div key={index} className="mb-16">
          <h3 className="text-3xl font-bold text-blue-600 mb-6">{section.category}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {section.items.map((service, i) => (
              <div
                key={i}
                className="bg-gradient-to-r from-blue-50 to-white shadow-lg p-6 rounded-2xl transition transform hover:-translate-y-2 hover:shadow-xl flex items-center space-x-4"
              >
                <div className="text-blue-600 text-4xl">{service.icon}</div>
                <div>
                  <h4 className="text-xl font-semibold">{service.title}</h4>
                  <p className="text-gray-600 text-sm mt-2">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
