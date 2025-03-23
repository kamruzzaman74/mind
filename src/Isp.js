import React from "react";

const Isp = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-500 to-teal-500 p-8 rounded-lg shadow-lg overflow-hidden">
      {/* Text Content */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
        <h2 className="text-4xl font-bold text-white mb-4 leading-tight transform transition-transform duration-300 hover:scale-105">
          Reliable & Fast Internet Services
        </h2>
        <p className="text-lg text-white mb-4 leading-relaxed opacity-90 hover:opacity-100 transition-opacity duration-300">
          Our Internet services provide lightning-fast speeds and reliable
          connectivity for both residential and business needs. With our robust
          infrastructure and state-of-the-art technology, we ensure that your
          online experience is seamless and uninterrupted. Whether you are
          streaming, gaming, or working remotely, we've got you covered!
        </p>
        <p className="text-lg text-white opacity-80 hover:opacity-100 transition-opacity duration-300">
          Join us today and experience the best in connectivity!
        </p>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2 transform transition-transform duration-500 hover:scale-105">
        <img
          src="kkkk.webp" // Replace with your image URL
          alt="ISP Services"
          className="w-full h-auto rounded-lg shadow-xl transition-shadow duration-300 hover:shadow-2xl"
        />
      </div>
    </section>
  );
};

export default Isp;
