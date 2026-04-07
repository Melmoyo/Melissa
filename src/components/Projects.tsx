
import { useState } from "react";

import { ProjectsData } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
const Projects=()=>{
  const [activeTab,setActiveTab]=useState<"frontend" | "email">("frontend");
console.log(ProjectsData)
    return(
        <>
         <section className="text-white scroll-mt-24" id="projects">
               <div className="m-8 space-y-4">
  <div className="space-y-2">
    <p className="text-teal-400 uppercase text-left text-2xl">
      Portfolio
    </p>
    <h2 className="text-3xl font-bold">Featured Projects</h2>
    <p className="text-gray-500">
      A selection of recent work that highlights my approach to project
      development and design
    </p>
  </div>

  {/* TOGGLE */}
  <div className="flex items-center bg-gray-800 p-1 rounded-lg w-fit gap-1">
    <button
      onClick={() => setActiveTab('frontend')}
      className={`px-5 py-2 rounded-md text-sm font-semibold transition-colors duration-200 ${
        activeTab === 'frontend'
          ? 'bg-teal-500 text-white'
          : 'text-gray-400 hover:text-white'
      }`}
    >
      Frontend Projects
       <span className={`text-xs font-bold px-1.5 py-0.5 rounded-full m-2  ${
        activeTab === 'email'
          ? 'bg-teal-700 text-white'
          : 'bg-gray-700 text-gray-400'
      }`}>
         {ProjectsData.filter((project)=>project.type==="frontend").length}
      </span>
    </button>
    <button
      onClick={() => setActiveTab('email')}
      className={`px-5 py-2 rounded-md text-sm font-semibold transition-colors duration-200 flex items-center gap-2 ${
        activeTab === 'email'
          ? 'bg-teal-500 text-white'
          : 'text-gray-400 hover:text-white'
      }`}
    >
      Email Templates
      <span className={`text-xs font-bold px-1.5 py-0.5 rounded-full ${
        activeTab === 'email'
          ? 'bg-teal-700 text-white'
          : 'bg-gray-700 text-gray-400'
      }`}>
        {ProjectsData.filter((project)=>project.type==="email").length}
      </span>
    </button>
  </div>

{/*  ProjectCard*/}

 
                  <div className="space-y-2 lg:grid grid-cols-3 gap-10">
                    {ProjectsData.filter((project)=>project.type===activeTab).map((project)=>(
  <ProjectCard  project={project}/>
  ))
}
                    </div>

</div>

              </section>
        </>
    )
}
export default Projects;