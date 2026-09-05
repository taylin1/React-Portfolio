import React from "react";
import PortfolioWeb from "../assets/PortfolioWeb.png";

function HeroPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-[80vh] md:min-h-[70vh] flex flex-col justify-center items-center px-4 py-12 bg-gradient-to-br from-gray-50 via-white to-indigo-50"
      >
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-indigo-700 bg-indigo-100 rounded-full">
            Web Developer & Designer
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Building Ideas <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              One Code At A Time
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            I create digital experiences that feel both{" "}
            <span className="font-medium text-gray-800">powerful</span> and{" "}
            <span className="font-medium text-gray-800">effortless</span>.
            Specializing in React, Node.js, and modern web technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="#projects"
              className="inline-block bg-indigo-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-indigo-700 transition shadow-lg hover:shadow-xl w-full sm:w-auto text-center"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-block border-2 border-indigo-600 text-indigo-600 px-8 py-3.5 rounded-lg font-semibold hover:bg-indigo-50 transition w-full sm:w-auto text-center"
            >
              Contact Me
            </a>
          </div>

          <img
            src={PortfolioWeb}
            alt="Portfolio preview"
            className="w-40 md:w-64 lg:w-80 mx-auto rounded-2xl shadow-xl border-4 border-white mb-4"
          />
        </div>
      </section>

      {/* Quick Stats Bar - Stack on mobile */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12">
            <div className="text-center p-2">
              <p className="text-2xl md:text-3xl font-bold text-indigo-700">10+</p>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">Projects Completed</p>
            </div>
            <div className="text-center p-2">
              <p className="text-2xl md:text-3xl font-bold text-indigo-700">5+</p>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">Happy Clients</p>
            </div>
            <div className="text-center p-2">
              <p className="text-2xl md:text-3xl font-bold text-indigo-700">100%</p>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">Commitment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee - Pause on mobile */}
      <section className="bg-indigo-600 py-5 overflow-hidden md:overflow-visible">
        <div className="flex flex-nowrap gap-6 sm:gap-8 md:gap-10 animate-scroll marquee overflow-x-auto md:overflow-visible">
          {[...["React", "Node.js", "JavaScript", "TypeScript", "TailwindCSS", "HTML5", "CSS3", "Express", "Supabase", "REST APIs"],
            ["React", "Node.js", "JavaScript", "TypeScript", "TailwindCSS", "HTML5", "CSS3", "Express", "Supabase", "REST APIs"]
          ].flat().map((tech) => (
            <span
              key={tech}
              className="text-white font-semibold text-sm sm:text-base md:text-lg px-4 py-2 bg-indigo-700 rounded-lg whitespace-nowrap flex-shrink-0"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-2">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-sm text-gray-500">Learn more about who I am</p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="w-full md:w-1/2">
              <p className="text-gray-700 leading-relaxed text-base">
                I'm a self-driven creative who's deeply interested in technology,
                design, and how they connect people. I enjoy solving problems
                through thoughtful code and crafting smooth, visually engaging
                interfaces. Every project I work on is a chance to learn something
                new and refine my craft. My goal is to keep growing as a developer
                while creating work that inspires and adds real value to others.
              </p>
            </div>

            <div className="w-full md:w-1/2">
              <div className="bg-gray-50 rounded-xl p-5 md:p-6">
                <h3 className="text-base md:text-lg font-semibold text-indigo-700 mb-4">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Technical Skills
                  </span>
                </h3>
                <div className="grid grid-cols-2 gap-2 md:gap-3">
                  {["HTML", "CSS / TailwindCSS", "JavaScript", "React", "Node.js", "Express", "REST APIs", "Git / GitHub"].map(
                    (skill) => (
                      <div key={skill} className="flex items-center gap-2 text-sm md:text-gray-700">
                        <svg className="w-4 h-4 text-indigo-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {skill}
                      </div>
                    )
                  )}
                </div>

                <h3 className="text-base md:text-lg font-semibold text-indigo-700 mt-5 md:mt-6 mb-3">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Soft Skills
                  </span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Problem Solving", "Time Management", "Adaptable", "Communication", "Teamwork"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs md:text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default HeroPage;
