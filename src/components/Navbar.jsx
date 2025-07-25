import React from "react";
import bannerimg from "../assets/banner.svg";

const Navbar = () => {
  return (
    <div className="bg-gray-100">
      <nav className="bg-sky-400 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 text-white text-2xl font-bold">
              Portfolio
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 text-white font-medium">
              <a href="#" className="hover:text-yellow-300 transition">
                Skills
              </a>
              <a href="#" className="hover:text-yellow-300 transition">
                Projects
              </a>

              <a href="#" className="hover:text-yellow-300 transition">
                Contact
              </a>
            </div>
            {/* Desktop Button */}
            <div className="hidden md:block">
              <a
                href="#"
                className="bg-white text-indigo-700 px-4 py-2 rounded-xl hover:bg-yellow-300 transition-all font-semibold"
              >
                Call Me
              </a>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                id="menu-toggle"
                className="text-white focus:outline-none text-2xl"
              >
                ☰
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className="md:hidden hidden px-4 pb-4 space-y-2 text-white font-medium"
        >
          <a href="#" className="block hover:text-yellow-300 transition">
            Skills
          </a>
          <a href="#" className="block hover:text-yellow-300 transition">
            Project
          </a>
          <a href="#" className="block hover:text-yellow-300 transition">
            Contact
          </a>

          <a
            href="#"
            className="block bg-white text-indigo-700 text-center px-4 py-2 rounded-xl hover:bg-yellow-300 transition-all font-semibold mt-2"
          >
            Call Me
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
