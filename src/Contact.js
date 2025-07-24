import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="bg-white shadow-lg rounded-2xl p-8 max-w-4xl w-full text-center"
      >
        <h2 className="text-4xl font-bold text-blue-700 mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-6 text-lg">
          Have a question or need assistance? Our team is here to help! Reach out to us via phone, email, or visit our office.
        </p>
        
        <div className="space-y-6">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-sm"
          >
            <Phone className="text-blue-600" size={28} />
            <span className="text-lg font-medium">Hotline:09603000365</span>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-sm"
          >
            <Mail className="text-blue-600" size={28} />
            <span className="text-lg font-medium">Email: info@kreatustech.com</span>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-sm"
          >
            <MapPin className="text-blue-600" size={28} />
            <span className="text-lg font-medium">Address: H-22, R-11, South Baridhara, Merul Badda, Dhaka</span>
          </motion.div>
        </div>
        
        {/* Google Map Embed */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 rounded-lg overflow-hidden shadow-md"
        >
          <iframe
            className="w-full h-80 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.123456789012!2d90.4123456789!3d23.810123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a123456789%3A0x1234567890abcdef!2sH-22%2C%20R-11%2C%20South%20Baridhara%2C%20Merul%20Badda%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </motion.div>
    </div>
  );
}
