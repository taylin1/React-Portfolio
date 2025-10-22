 
import React from "react";
import PortfolioWeb from "../images/PortfolioWeb.png"
import AboutMeWeb from "../images/AboutMeWeb.jpg"

function HeroPage() {
  return (
     <>

     <section id="home" className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-5xl font-bold text-gray-800">Building Ideas One Code At A Time </h1>
      <h2 className="text-2xl mt-3 text-gray-700">Web Developer & Designer</h2>
      <p className="mt-4 text-gray-600 max-w-lg text-center"></p>
      <img src={PortfolioWeb} alt="image" width="300" height="300"></img>
      <a href="#projects" className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">
        View My Work
      </a>
    </section>

       </>
    )
}
export default HeroPage;