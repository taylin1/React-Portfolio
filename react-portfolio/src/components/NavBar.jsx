import React from "react";

function NavBar() {
  return (
     <nav className="bg-gray-900 text-white fixed w-full top-0 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <a href="#home" className="text-2xl font-bold text-indigo-400">My Portfolio</a>
        <div className="space-x-6">
         <a href="#home" className="text-gray-300 no-underline hover:text-blue-400">Home</a>
          <a href="#about" className="text-gray-300 no-underline hover:text-blue-400">About</a>
          <a href="#projects" className="text-gray-300 no-underline hover:text-blue-400">Projects</a>
          <a href="#contact" className="text-gray-300 no-underline hover:text-blue-400">Contact</a>
          </div>
      </div>
    </nav>
  );
};
 

export default NavBar;
