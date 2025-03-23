import React from "react";

const Isp = () => {
  return (
    <section className="flex items-center justify-between bg-gray-100 p-8 rounded-lg shadow-md">
      {/* Text Content */}
      <div className="w-full md:w-1/2 pr-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Reliable & Fast Internet Services
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Our Internet services provide lightning-fast speeds and reliable
          connectivity for both residential and business needs. With our
          robust infrastructure and state-of-the-art technology, we ensure that
          your online experience is seamless and uninterrupted. Whether you are
          streaming, gaming, or working remotely, we've got you covered!
        </p>
        <p className="text-lg text-gray-700">
          Join us today and experience the best in connectivity!
        </p>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2">
        <img
          src="kkkk.webp" // Replace with your image URL
          alt="ISP Services"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </section>
  );
};

export default Isp;
