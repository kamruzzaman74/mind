import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen bg-white flex items-center justify-center text-black overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-16 w-24 h-24 bg-yellow-400 rounded-full blur-2xl opacity-40 animate-bounce"></div>
      <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-pink-500 rounded-full blur-xl opacity-30 animate-spin-slow"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 md:px-12">
        <h1 className="text-4xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate__animated animate__fadeInDown">
          Transforming Ideas into <br />
          <span className="text-yellow-500">Innovative Tech Solutions</span>
        </h1>

        <p className="text-lg md:text-2xl mt-4 text-gray-600 animate__animated animate__fadeInUp">
          AI, Blockchain & Next-Gen Technologies for Future-Driven Businesses.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-8 space-x-4 flex justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold rounded-full shadow-lg transform hover:scale-110 transition-all duration-300">
            Discover More 🚀
          </button>
          <button className="px-8 py-4 bg-black text-white font-semibold rounded-full shadow-lg transform hover:scale-110 transition-all duration-300">
            Get Started 💡
          </button>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-10 h-10 text-blue-600 drop-shadow-md" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7 7 7-7"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
 