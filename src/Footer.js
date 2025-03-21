import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold text-blue-500">MindHex365 Technologies</h2>
            <p className="text-gray-400 mt-3">
              Leading the way in **AI, blockchain, and software solutions** to drive digital innovation.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-end">
            <a href="#" className="text-gray-400 hover:text-blue-500 text-xl transition"><FaFacebookF /></a>
            <a href="#" className="text-gray-400 hover:text-blue-500 text-xl transition"><FaTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-blue-500 text-xl transition"><FaLinkedinIn /></a>
            <a href="#" className="text-gray-400 hover:text-blue-500 text-xl transition"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-blue-500 text-xl transition"><FaYoutube /></a>
            <a href="#" className="text-gray-400 hover:text-blue-500 text-xl transition"><FaGithub /></a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} MindHex365 Technologies. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
