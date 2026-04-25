import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 mx-6 my-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300">
      
      {/* Logo Section */}
      <div className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform">
        Get Me A Kofi
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
        <li className="hover:text-white cursor-pointer transition-colors">Home</li>
        <li className="hover:text-white cursor-pointer transition-colors">About</li>
        <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
      </ul>

      {/* Action Buttons */}
      <div className="flex items-center gap-4">
        <button className="px-4 py-2 text-sm font-medium text-white hover:text-gray-300 transition-colors">
          Login
        </button>
        <button className="px-5 py-2 text-sm font-semibold text-black bg-white rounded-full hover:bg-gray-200 transition-all active:scale-95 shadow-lg shadow-white/5">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;