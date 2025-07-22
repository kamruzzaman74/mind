import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000); // Hide message after 3s
    }
  };

  return (
    <footer className="bg-gradient-to-r from-indigo-800 via-purple-700 to-pink-600 text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Kreatustech</h2>
          <p className="text-sm">
            Empowering businesses with technology, creativity, and innovation.
            Your digital success is our mission.
          </p>
          <div className="flex mt-4 space-x-4">
            <a href="#" className="hover:text-yellow-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-yellow-300"><FaTwitter /></a>
            <a href="#" className="hover:text-yellow-300"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-yellow-300"><FaInstagram /></a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold mb-4">Subscribe to our Newsletter</h3>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full sm:w-auto px-4 py-2 rounded-md text-black focus:outline-none"
            />
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-2 rounded-md font-semibold transition"
            >
              Subscribe
            </button>
          </form>
          {submitted && <p className="text-green-200 mt-2">Okay</p>}
        </div>
      </div>

      <div className="text-center mt-12 border-t border-white/20 pt-6 text-sm opacity-80">
        &copy; {new Date().getFullYear()} growMore19. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
