import React from "react";
import ProjectPic from "../images/ProjectPic.jpeg"

const projects = [
  {
    title: "Portfolio Website",
    image: ProjectPic,
   
  },
  {
    title: "Digital Clock App",
    image: ProjectPic,
    
  },
  {
    title: "Diamond Tech Website",
    image: ProjectPic,
    
  },
];

function ProjectsPage (){
  return (
    <section id="projects" className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold text-indigo-600 mb-10">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold py-2">{project.title}</h3>
              <a href="" className="bg-indigo-600 text-white rounded-lg px-1 py-1 ">
              Go to project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
