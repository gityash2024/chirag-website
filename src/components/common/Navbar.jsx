import React from 'react';
import { X, Circle } from 'lucide-react';

const VerticalNavbar = ({
  menuItems = [
    { label: "Home", href: "/", icon: Circle },
    { label: "Product", href: "/product" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" }
  ]
}) => {
  return (
    <div className="fixed right-8 top-8 flex flex-col bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-lg z-50 max-h-[calc(100vh-4rem)]">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-6">
        <X className="w-5 h-5" />
        <span className="font-semibold text-gray-800">CHIRAG</span>
        <span className="text-sm text-gray-500">CONNECT</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-4 mb-6">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className={`flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors ${
              index === 0 ? 'font-medium' : ''
            }`}
          >
            {index === 0 && <Circle size={16} className="fill-current" />}
            {item.label}
          </a>
        ))}
      </nav>

      {/* Grid of Plus Signs */}
      <div className="grid grid-cols-6 gap-2">
        {Array(60).fill(null).map((_, i) => (
          <span key={i} className="text-gray-300 text-xs select-none">+</span>
        ))}
      </div>
    </div>
  );
};

export default VerticalNavbar;