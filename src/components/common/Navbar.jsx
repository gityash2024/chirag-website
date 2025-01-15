import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img className="h-8 w-auto" src="/images/logo.png" alt="CHIRAG CONNECT" />
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-600">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-green-600">Services</Link>
            <Link to="/about" className="text-gray-700 hover:text-green-600">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-green-600">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
