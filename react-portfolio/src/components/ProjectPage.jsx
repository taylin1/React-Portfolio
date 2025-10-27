import React from "react";
import ProjectPic from "../assets/ProjectPic.jpeg"

const projects = [
  {
    title: "Portfolio Website",
    image: ProjectPic,
    link:"https://eclectic-boba-20376a.netlify.app/",
   
  },
  {
    title: "Digital Clock App",
    image: ProjectPic,
    link:"https://lighthearted-gnome-6e12fd.netlify.app/",
    
  },
  {
    title: "Diamond Tech Website",
    image: ProjectPic,
    link:"https://silly-sherbet-a92e15.netlify.app/",
  },
  {
    title: "Quiz Website",
    image: ProjectPic,
    link:"https://rococo-gnome-fc6e46.netlify.app/",
  },

  {
    title: "Food Website",
    image: ProjectPic,
    link:"https://classy-unicorn-c438ec.netlify.app/",
  },
  {
    title: "Front End Calculator",
    image: ProjectPic,
    link:"https://sensational-gumdrop-64bef4.netlify.app/",
  },
];

function ProjectsPage (){
  return (
    <section id="projects" className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold text-indigo-600 mb-10">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 w-6xl mx-auto px-4">
        {/*This creates a new array that cycles through original array*/}
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-200 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="text-xl font-semibold py-2">{project.title}</h3>
              <a href={project.link} className="bg-indigo-600 text-white rounded-lg px-1 py-1 " target="_blank">
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
