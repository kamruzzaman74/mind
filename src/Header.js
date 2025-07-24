import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close menu when a nav link is clicked
  const handleNavClick = () => setIsOpen(false);

  return (
    <header className="bg-white shadow-md sticky top-0 w-full z-50 border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Company Name */}
        <Link to="/" className="text-2xl font-bold text-blue-700">
          KreatUs Technologies
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 text-gray-800 font-medium">
          <Link to="/product" className="hover:text-blue-600 transition">Products</Link>
          <Link to="/solutions" className="hover:text-blue-600 transition">Solutions</Link>
          <Link to="/resources" className="hover:text-blue-600 transition">Resources</Link>
          <Link to="/company" className="hover:text-blue-600 transition">Company</Link>
          <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </nav>
        
        {/* CTA Button */}
        <div className="hidden lg:flex">
          <Link to="/get-started" className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition font-semibold shadow-md">
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} className="text-gray-800" /> : <Menu size={28} className="text-gray-800" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="lg:hidden bg-white border-t border-gray-200 p-4 space-y-4 text-center shadow-md">
          <Link to="/product" className="block text-gray-800 hover:text-blue-600 transition" onClick={handleNavClick}>Products</Link>
          <Link to="/solutions" className="block text-gray-800 hover:text-blue-600 transition" onClick={handleNavClick}>Solutions</Link>
          <Link to="/resources" className="block text-gray-800 hover:text-blue-600 transition" onClick={handleNavClick}>Resources</Link>
          <Link to="/company" className="block text-gray-800 hover:text-blue-600 transition" onClick={handleNavClick}>Company</Link>
          <Link to="/contact" className="block text-gray-800 hover:text-blue-600 transition" onClick={handleNavClick}>Contact</Link>
          <Link to="/get-started" className="block px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition font-semibold shadow-md" onClick={handleNavClick}>
            Get Started
          </Link>
        </nav>
      )}
    </header>
  );
}
