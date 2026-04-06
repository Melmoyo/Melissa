import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

interface ProjectProps{
    image:string;
    title:string;
    description:string;
    techStack:string[];
    liveDemo?:string;
    sourceCode?:string;
    
}
const ProjectCard=({project}:{project: ProjectProps})=>{


    return(<>
    
                       <React.Fragment key={project.title}>
                    <div className="flex flex-col justify-center items-start space-y-2  ">
                      
                    
                      <div className="lg:flex flex-col">
                        
                        <img src={project.image} alt="mercato store app screenshot" />
                        <h2 className=" font-semibold">{project.title}</h2>
                        <p className="text-gray-500 mt-2">
                         {project.description}
                        </p>
                      </div>
                                        
                          <div className="technologies flex flex-row space-x-4 ">
                              {project.techStack.map((stack,index)=>(
                        <React.Fragment key={index}> 
                        <div className="bg-grey-500 border border-gray-700/10  text-gray-200 text-sm p-1 rounded-lg">
                          {stack}
                        </div>
                        
                   
 </React.Fragment>
  ))
                              }
                      </div> 
                          
                     
                    
                      <div className="other space-x-4">
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                          Live Demo
                        </a>
                        <a
                          href={project.sourceCode}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon icon={faGithub} size="lg" />
                          Source
                        </a>
                      </div>
                      </div>
                      
                      
                      </React.Fragment>
                      

 
                    
       
                   
            
    </>)
}
export default ProjectCard;