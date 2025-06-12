"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { name: "Home", href: "#" },
  { name: "Products", href: "#" },
  { name: "Services", href: "#" },
  { name: "Let's Talk", href: "#" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-[#b6024d]/95 backdrop-blur-md shadow-lg"
          : "bg-[#b6024d]"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4">
        {/* Logo with animation */}
        <div className="flex items-center gap-2 group">
          <div className="relative overflow-hidden">
            <span className="text-xl sm:text-2xl font-bold tracking-wider text-white transform transition-transform duration-300 group-hover:scale-110 inline-block">
              NEUERA
            </span>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex gap-1 text-sm font-medium">
          {navItems.map((item, index) => (
            <li key={item.name} className="relative group">
              <a
                href={item.href}
                className="block px-4 py-2 rounded-lg text-white/90 transition-all duration-300 ease-in-out hover:text-white hover:bg-white/10 relative overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-600"></div>
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Auth Buttons */}
        <div className="hidden sm:flex gap-3">
          <button className="relative px-4 sm:px-6 py-2 text-sm font-medium text-white border border-white/80 rounded-full transition-all duration-300 ease-in-out bg-transparent hover:bg-white hover:text-[#b6024d] hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/50 group overflow-hidden">
            <span className="relative z-10">Sign Up</span>
            <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>

          <button className="relative px-4 sm:px-6 py-2 text-sm font-medium text-[#b6024d] bg-white rounded-full transition-all duration-300 ease-in-out hover:bg-[#b6024d] hover:text-white hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/50 group overflow-hidden">
            <span className="relative z-10">Log In</span>
            <div className="absolute inset-0 bg-[#b6024d] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="sm:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <Menu
              size={24}
              className={`absolute inset-0 transition-all duration-300 ${
                isMenuOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
              }`}
            />
            <X
              size={24}
              className={`absolute inset-0 transition-all duration-300 ${
                isMenuOpen ? "rotate-0 opacity-100" : "rotate-180 opacity-0"
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#b6024d]/98 backdrop-blur-md border-t border-white/20">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 transform hover:translate-x-2"
                style={{
                  animationDelay: `${index * 50}ms`,
                  transform: isMenuOpen ? "translateY(0)" : "translateY(-20px)",
                  opacity: isMenuOpen ? 1 : 0,
                  transition: `all 0.3s ease-in-out ${index * 50}ms`,
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}

            {/* Mobile Auth Buttons */}
            <div className="pt-4 space-y-3 border-t border-white/20">
              <button
                className="w-full px-4 py-3 text-sm font-medium text-white border border-white/80 rounded-full transition-all duration-300 ease-in-out bg-transparent hover:bg-white hover:text-[#b6024d] focus:outline-none focus:ring-2 focus:ring-white/50"
                style={{
                  transform: isMenuOpen ? "translateY(0)" : "translateY(-20px)",
                  opacity: isMenuOpen ? 1 : 0,
                  transition: "all 0.3s ease-in-out 200ms",
                }}
              >
                Sign Up
              </button>

              <button
                className="w-full px-4 py-3 text-sm font-medium text-[#b6024d] bg-white rounded-full transition-all duration-300 ease-in-out hover:bg-[#b6024d] hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                style={{
                  transform: isMenuOpen ? "translateY(0)" : "translateY(-20px)",
                  opacity: isMenuOpen ? 1 : 0,
                  transition: "all 0.3s ease-in-out 250ms",
                }}
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
