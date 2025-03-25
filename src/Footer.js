import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion"; // Import framer-motion for animations

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-indigo-800 via-purple-700 to-pink-600 text-white py-16 px-6 md:px-12 overflow-hidden">
      {/* Floating Glows */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-24 h-24 bg-blue-500 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-16 w-32 h-32 bg-yellow-400 blur-2xl animate-bounce"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-purple-500 blur-xl animate-spin-slow"></div>
      </div>

      <div className="relative container mx-auto px-6 md:px-12">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center md:text-left">
          {/* Company Info */}
          <div>
            <motion.h2
              className="text-4xl md:text-5xl font-extrabold text-yellow-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              MindHex Technology
            </motion.h2>
            <motion.p
              className="text-gray-200 mt-3 text-lg font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Transforming industries with <span className="text-yellow-400">AI, Blockchain,</span> and <span className="text-yellow-400">Cloud Solutions</span> for a smarter, connected future.
            </motion.p>
          </div>

          {/* Services Offered */}
          <div>
            <motion.h3
              className="text-2xl font-semibold text-yellow-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Our Expertise
            </motion.h3>
            <ul className="mt-3 space-y-3 text-lg">
              <motion.li
                className="text-gray-200 hover:text-yellow-400 transition"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                🔹 AI & Machine Learning
              </motion.li>
              <motion.li
                className="text-gray-200 hover:text-yellow-400 transition"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                🔹 Blockchain Development
              </motion.li>
              <motion.li
                className="text-gray-200 hover:text-yellow-400 transition"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                🔹 Cloud & DevOps
              </motion.li>
              <motion.li
                className="text-gray-200 hover:text-yellow-400 transition"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                🔹 Custom Software Solutions
              </motion.li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-8">
          {[
            { icon: FaFacebookF, link: "#" },
            { icon: FaTwitter, link: "#" },
            { icon: FaLinkedinIn, link: "#" },
            { icon: FaInstagram, link: "#" },
            { icon: FaYoutube, link: "#" },
            { icon: FaGithub, link: "#" }
          ].map(({ icon: Icon, link }, idx) => (
            <motion.a
              key={idx}
              href={link}
              className="text-gray-200 hover:text-yellow-400 text-3xl transition transform hover:scale-125"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <Icon />
            </motion.a>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            © {new Date().getFullYear()} growMore19. All Rights Reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

