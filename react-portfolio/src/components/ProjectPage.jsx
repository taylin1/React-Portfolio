import React from "react";
import ProjectPic from "../assets/ProjectPic.jpeg"

const projects = [
  {
    title: "Url-Shortener ",
    image: ProjectPic,
    link:"https://url-shortener-five-tan.vercel.app",
   
  },
  {
    title: "Digital Clock App",
    image: ProjectPic,
    link:"https://lighthearted-gnome-6e12fd.netlify.app/",
    
  },
  {
    title: "Notes App",
    image: ProjectPic,
    link:"https://notes-fh5dakc7k-taylin1s-projects.vercel.app",
  },
  {
    title: "Quiz Website",
    image: ProjectPic,
    link:"https://rococo-gnome-fc6e46.netlify.app/",
  },

  {
    title: "System Reservation",
    image: ProjectPic,
    link:"https://reservation-system-orcin.vercel.app/",
  },
  {
    title: "Front End Calculator",
    image: ProjectPic,
    link:"https://sensational-gumdrop-64bef4.netlify.app/",
  },
];

function ProjectsPage (){
  return (
    <section id="projects" className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

        {/*This creates a new array that cycles through original array*/}

        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
            <img src={project.image} alt={project.title} className="w-full h-40 sm:h-44 md:h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
              <a 
                href={project.link} 
                className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition text-sm"
                target="_blank"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
