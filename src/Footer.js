import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-blue-900 to-gray-900 text-white py-12 overflow-hidden">
      {/* Floating Glows */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-16 w-28 h-28 bg-yellow-400 blur-2xl animate-bounce"></div>
        <div className="absolute bottom-16 left-1/3 w-16 h-16 bg-purple-500 blur-xl animate-spin-slow"></div>
      </div>

      <div className="relative container mx-auto px-6 md:px-12">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center md:text-left">
          {/* Company Info */}
          <div>
            <h2 className="text-3xl font-extrabold text-yellow-400">MindHex365 Technologies</h2>
            <p className="text-gray-300 mt-3">
              Transforming industries with **AI, blockchain, and cloud solutions** for a smarter, connected future.
            </p>
          </div>

          {/* Services Offered */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-400">Our Expertise</h3>
            <ul className="mt-3 space-y-2">
              <li className="text-gray-300 hover:text-yellow-400 transition">🔹 AI & Machine Learning</li>
              <li className="text-gray-300 hover:text-yellow-400 transition">🔹 Blockchain Development</li>
              <li className="text-gray-300 hover:text-yellow-400 transition">🔹 Cloud & DevOps</li>
              <li className="text-gray-300 hover:text-yellow-400 transition">🔹 Custom Software Solutions</li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex flex-wrap justify-center md:justify-end gap-4">
          {[
            { icon: FaFacebookF, link: "#" },
            { icon: FaTwitter, link: "#" },
            { icon: FaLinkedinIn, link: "#" },
            { icon: FaInstagram, link: "#" },
            { icon: FaYoutube, link: "#" },
            { icon: FaGithub, link: "#" }
          ].map(({ icon: Icon, link }, idx) => (
            <a key={idx} href={link} className="text-gray-300 hover:text-yellow-400 text-xl transition transform hover:scale-125">
              <Icon />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} MindHex365 Technologies. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
