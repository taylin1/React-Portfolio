import React from "react";
import PortfolioWeb from "../images/PortfolioWeb.png";
import AboutMeWeb from "../images/AboutMeWeb.jpg";

function HeroPage() {
  return (
    <>
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center">
          
        <h1 className="text-5xl font-bold text-gray-800">
          Building Ideas One Code At A Time{" "}
        </h1>
        <h2 className="text-2xl mt-3 text-gray-700">
          Web Developer & Designer.
        </h2>
        <p className="mt-4 text-gray-600 max-w-lg text-center"></p>
        <img src={PortfolioWeb} alt="image" width="300" height="300"></img>
        <p className="text-2xl font-bold text-gray-700 py-5">
          Creating digital experiences that feel both{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {" "}
            Powerful and Effortless.
          </span>
        </p>
        <a
          href="#projects"
          className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          View My Work
        </a>
      </section>
    
     <div id="about" className="flex flex-col md:flex-row justify-center items-start md:gap-32 py-16 px-6 bg-gray-200">
  {/* About Me Section */}
  <div className="max-w-xl mb-10 md:mb-0">
    <h2 className="text-3xl font-bold text-indigo-800 mb-4"><span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">About Me</span></h2>
    <p className="text-gray-800 leading-relaxed">
      I’m a self-driven creative who’s deeply interested in technology,
      design, and how they connect people. I enjoy solving problems
      through thoughtful code and crafting smooth, visually engaging
      interfaces. Every project I work on is a chance to learn something
      new and refine my craft. My goal is to keep growing as a developer
      while creating work that inspires and adds real value to others.
    </p>
  </div>

  {/* Skills Section */}
  <div className="flex flex-col md:flex-row md:gap-16 w-full md:w-auto justify-center">
    <div className="mb-8 md:mb-0">
      <h2 className="text-3xl font-bold text-indigo-800 mb-4 text-center"><span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">My Skills</span></h2>
      <ul className="list-disc list-inside text-gray-800 space-y-1 text-center md:text-left">
        <li>HTML</li>
        <li>TailwindCSS</li>
        <li>React</li>
        <li>Javascript</li>
      </ul>
    </div>
     
    {/* Soft Skills */}
    <div>
      <h2 className="text-3xl font-bold text-indigo-800 mb-4 text-center"><span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Soft Skills</span></h2>
      <ul className="list-disc list-inside text-gray-800 space-y-1 text-center md:text-left">
        <li>Problem Solving</li>
        <li>Time Management</li>
        <li>Adaptable</li>
      </ul>
    </div>
  </div>
</div>
 
    </>
  );
}
export default HeroPage;
