import React, { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed w-full top-0 shadow-md z-50 h-20">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-full">
        <a href="#home" className="text-xl md:text-2xl font-bold text-indigo-400">
          My Portfolio
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-6 text-sm">
          <a href="#home" className="text-gray-300 hover:text-indigo-400 transition">Home</a>
          <a href="#about" className="text-gray-300 hover:text-indigo-400 transition">About</a>
          <a href="#projects" className="text-gray-300 hover:text-indigo-400 transition">Projects</a>
          <a href="#contact" className="text-gray-300 hover:text-indigo-400 transition">Contact</a>
        </div>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 py-4 flex flex-col gap-3 border-t border-gray-700">
          <a href="#home" className="text-gray-300 hover:text-indigo-400 py-2 transition" onClick={() => setIsOpen(false)}>
            Home
          </a>
          <a href="#about" className="text-gray-300 hover:text-indigo-400 py-2 transition" onClick={() => setIsOpen(false)}>
            About
          </a>
          <a href="#projects" className="text-gray-300 hover:text-indigo-400 py-2 transition" onClick={() => setIsOpen(false)}>
            Projects
          </a>
          <a href="#contact" className="text-gray-300 hover:text-indigo-400 py-2 transition" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
