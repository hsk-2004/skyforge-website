'use client';

import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      {/* Floating Pill Navbar */}
      <div
        className="flex items-center justify-between px-6 py-3 max-w-4xl w-full
        rounded-full bg-white/70 backdrop-blur-md shadow-lg border border-white/30"
      >
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="GenAI logo"
            className="w-8 h-8 md:w-9 md:h-9 object-contain"
          />
        </div>

        {/* Center Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-black transition">For Enterprise</a>
          <span className="text-gray-300">›</span>
          <a href="#" className="hover:text-black transition">Our Services</a>
          <a href="#" className="hover:text-black transition">About Us</a>
        </nav>

        {/* Right Side: CTA + Hamburger */}
        <div className="flex items-center gap-4">
          {/* CTA Button */}
          <button
            className="bg-black text-white px-5 py-2 rounded-full text-sm font-semibold
            hover:bg-gray-900 transition"
          >
            Contact us
          </button>

          {/* Hamburger Menu */}
          <button
            className="flex flex-col justify-center items-center gap-1.5 md:hidden"
            aria-label="Open menu"
          >
            <span className="w-5 h-0.5 bg-black rounded"></span>
            <span className="w-5 h-0.5 bg-black rounded"></span>
            <span className="w-5 h-0.5 bg-black rounded"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
