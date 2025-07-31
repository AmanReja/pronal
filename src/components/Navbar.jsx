import React, { useState } from "react";
import bannerimg from "../assets/banner.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <a href="index.html" className="flex items-center">
          <h1 className="text-2xl font-bold text-gray-800">Pronal Hira</h1>
        </a>

        {/* Toggle Button for Mobile */}
        <button
          className="text-2xl text-gray-700 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="bi bi-list"></i>
        </button>

        {/* Nav Menu */}
        <nav
          className={`text-orange-400 ${
            isOpen ? "block" : "hidden"
          } absolute left-0 top-full w-full bg-white md:static md:block md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:items-center gap-4 p-4 md:p-0 md:gap-6 text-gray-800">
            <li>
              <a href="index.html" className="hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="about.html" className="text-blue-600 font-semibold">
                About
              </a>
            </li>
            <li>
              <a href="resume.html" className="hover:text-blue-600">
                Resume
              </a>
            </li>
            <li>
              <a href="services.html" className="hover:text-blue-600">
                Services
              </a>
            </li>
            <li>
              <a href="portfolio.html" className="hover:text-blue-600">
                Portfolio
              </a>
            </li>

            <li>
              <a href="contact.html" className="hover:text-blue-600">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-3 ml-4 text-xl text-gray-600">
          <a href="#" className="hover:text-blue-500">
            <i className="bi bi-twitter-x" />
          </a>
          <a href="#" className="hover:text-blue-700">
            <i className="bi bi-facebook" />
          </a>
          <a href="#" className="hover:text-pink-500">
            <i className="bi bi-instagram" />
          </a>
          <a href="#" className="hover:text-blue-600">
            <i className="bi bi-linkedin" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
