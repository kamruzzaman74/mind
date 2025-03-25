import { motion } from "framer-motion";

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="bg-white shadow-xl rounded-2xl p-10 max-w-5xl w-full text-center border border-gray-200"
      >
        <h2 className="text-4xl font-extrabold text-blue-700 mb-4">Welcome to MindHex Technologies</h2>
        <p className="text-gray-600 mb-6 text-lg">
          We specialize in cutting-edge software solutions and high-speed ISP services, ensuring businesses and individuals stay ahead in the digital era.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-blue-100 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold text-blue-800">Software Solutions</h3>
            <p className="text-gray-700">Providing custom software development, AI integration, and blockchain solutions tailored to your business needs.</p>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-blue-100 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold text-blue-800">High-Speed ISP Services</h3>
            <p className="text-gray-700">Delivering ultra-fast, reliable internet solutions for businesses and homes, ensuring seamless connectivity.</p>
          </motion.div>
        </div>
        
        <div className="mt-8">
          <h3 className="text-3xl font-bold text-blue-700 mb-4">Why Choose Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800">Innovative Technology</h4>
              <p className="text-gray-600">We leverage the latest technologies to create secure, scalable, and high-performance solutions.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800">Customer-Centric Approach</h4>
              <p className="text-gray-600">Our services are tailored to meet the unique needs of every client, ensuring maximum satisfaction.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold text-gray-800">24/7 Support</h4>
              <p className="text-gray-600">Our dedicated team is available round the clock to provide technical support and assistance.</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
