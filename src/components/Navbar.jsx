import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > 100) {

        if (window.scrollY > lastScrollY) {
          // Scroll Down
          setShowNavbar(false);
        } else {
          // Scroll Up
          setShowNavbar(true);
        }

      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Programs", id: "programs" },
    { name: "Gallery", id: "gallery" },
    { name: "Pricing", id: "pricing" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        text-white
        bg-black/25
        backdrop-blur-xs
        transition-transform
        duration-300

        ${
          showNavbar
            ? "translate-y-0"
            : "-translate-y-full"
        }
      `}
    >
      {/* CHANGED:
          max-w-7xl for consistent website width
      */}
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide">
          Fitness <span className="text-red-500">Hub</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="relative cursor-pointer group"
            >
              {/* CHANGED:
                  Added spy + activeClass
              */}
              <Link
                to={link.id}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                activeClass="text-red-500"
                className="transition duration-300 hover:text-red-500"
              >
                {link.name}
              </Link>

              <span className="absolute left-0 bottom-[-5px] w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}

          {/* CHANGED:
              Join Now scrolls to Contact section
          */}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
          >
            <button className="bg-red-500 px-6 py-2 rounded-full hover:scale-105 hover:bg-red-600 transition duration-300 shadow-lg cursor-pointer">
              Join Now
            </button>
          </Link>
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-2xl cursor-pointer z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md text-center py-6 space-y-5">

          {/* CHANGED:
              Mobile menu now uses Link too
          */}
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setIsOpen(false)}
              className="block text-lg hover:text-red-500 cursor-pointer transition duration-300"
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={() => setIsOpen(false)}
          >
            <button className="bg-red-500 px-6 py-3 rounded-full mt-4 hover:bg-red-600 transition duration-300">
              Join Now
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;