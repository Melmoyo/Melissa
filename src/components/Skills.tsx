import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 
  faTailwindCss,
  faReact,
  faTypescript,
  faCss,
  faHtml5,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";
const Skills =()=> {
    return (
        <>
        <section className="text-white scroll-mt-24" id="skills">
                <div className="grid grid-cols-1">
                  <div className="m-8 space-y-4">
                    <p className="text-teal-400 uppercase text-left text-2xl">
                      Expertise
                    </p>
                    <h2 className="text-3xl font-bold">Skills & Technologies</h2>
                    <p className="text-gray-500 max-w-md">
                      Technologies I work with daily to create fast, beautiful, and
                      accessible web applications.
                    </p>
                  </div>
        
                  {/* Skills grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6 m-8">
                    {/* Skill card */}
                    <div className="border border-gray-700/20 p-12 rounded-lg flex flex-col justify-center items-center h-[120px] transition-shadow duration-400 hover:shadow-[0_6px_10px_-2px_rgba(45,212,191,0.2)]">
                      <FontAwesomeIcon icon={faReact} size="3x" color="gray" />
                      <span>React</span>
                    </div>
        
                    <div className="border border-gray-700/20 p-12 rounded-lg flex flex-col justify-center items-center h-[120px] transition-shadow duration-400 hover:shadow-[0_6px_10px_-2px_rgba(45,212,191,0.2)]">
                      <FontAwesomeIcon icon={faTypescript} size="3x" color="gray" />
                      <span>TypeScript</span>
                    </div>
        
                    <div className="border border-gray-700/20 p-12 rounded-lg flex flex-col justify-center items-center h-[120px] transition-shadow duration-400 hover:shadow-[0_6px_10px_-2px_rgba(45,212,191,0.2)]">
                      <FontAwesomeIcon icon={faCss} size="3x" color="gray" />
                      <span>CSS</span>
                    </div>
        
                    <div className="border border-gray-700/20 p-12 rounded-lg flex flex-col justify-center items-center h-[120px] transition-shadow duration-400 hover:shadow-[0_6px_10px_-2px_rgba(45,212,191,0.2)]">
                      <FontAwesomeIcon icon={faTailwindCss} size="3x" color="gray" />
                      <span>Tailwind CSS</span>
                    </div>
        
                    <div className="border border-gray-700/20 p-12 rounded-lg flex flex-col justify-center items-center h-[120px] transition-shadow duration-400 hover:shadow-[0_6px_10px_-2px_rgba(45,212,191,0.2)]">
                      <FontAwesomeIcon icon={faSquareJs} size="3x" color="gray" />
                      <span>JavaScript</span>
                    </div>
        
                    <div className="border border-gray-700/20 p-12 rounded-lg flex flex-col justify-center items-center h-[120px] transition-shadow duration-400 hover:shadow-[0_6px_10px_-2px_rgba(45,212,191,0.2)]">
                      <FontAwesomeIcon icon={faHtml5} size="3x" color="gray" />
                      <span>HTML</span>
                    </div>
        
                      <div className="border border-gray-700/20 p-12 rounded-lg flex flex-col justify-center items-center h-[120px] transition-shadow duration-400 hover:shadow-[0_6px_10px_-2px_rgba(45,212,191,0.2)]">
                      <FontAwesomeIcon icon={faReact} size="3x" color="gray" />
                      <span>MJML</span>
                    </div>
                  </div>
                </div>
              </section>
        
        </>
    )
}
export default Skills