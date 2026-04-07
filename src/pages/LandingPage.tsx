//import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  
} from "@fortawesome/free-brands-svg-icons";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import About from "../components/About";




const LandingPage = () => {
  
  return (
    <>
    {/*HERO*/ }
      <section className=" text-white hero">
        <div className="glow"></div>
        <div className=" min-h-screen grid grid-cols-1 ">
          <div className="flex flex-col items-center justify-center mx-10 text-center space-y-6">
            <h1 className="text-teal-400 uppercase text-center text-2xl">
              Frontend Developer
            </h1>
            <h2 className="text-4xl font-semibold max-w-m md:text-6xl tracking-[-0.02em] leading-[1.05]">
              Crafting Modern Web Experiences
            </h2>
            <p className="text-gray-400 max-w-md text-lg ">
              I build accessible, pixel-perfect interfaces that blend thoughtful
              design with robust engineering.Focused on performance, usability,
              and the details that make products feel great.
            </p>
          </div>
          <div className="buttons flex flex-col justify-center items-center space-y-4  lg:flex flex-row gap-8 justify-center items-start  ">
            <a
              href="#projects"
              className=" view-btn text-black  bg-teal-600  border-none  py-2 px-6 rounded-lg  hover:bg-teal-500"
            >
              View Projects{" "}
              <FontAwesomeIcon
                icon={faArrowDown}
                size="sm"
                color="black"
                className="arrow"
              />
            </a>
            <a
              href="#contact"
              className=" contact-btn  p-2 rounded-lg text-gray-400 "
            >
              Contact Me
            </a>
          </div>
          <div className="socials flex justify-center space-x-4  lg: flex items-baseline">
            <a
              href="https://github.com/Melmoyo"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FontAwesomeIcon icon={faGithub} size="2x" className="my-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/melissa-msayinwa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FontAwesomeIcon
                icon={faLinkedinIn}
                size="2x"
                className="my-icon"
              />
            </a>
          </div>
        </div>
      </section>

      {/*SKILLS*/}
      <Skills/>
      {/*Projects*/}

     <Projects/>

      {/*About*/}
     <About/>
      {/*Contact Form*/}
     <Contact/>
      
    </>
  );
};

export default LandingPage;
