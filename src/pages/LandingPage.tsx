//import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUpRightFromSquare,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  faTailwindCss,
  faReact,
  faTypescript,
  faCss,
  faHtml5,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";
import mercatoApp from "../assets/images/mercato-store-screenshot.png";
import techtalentApp from "../assets/images/tech-talent-explorer-screenshot.png";
import wavestatApp from "../assets/images/wave-stats-app-screenshot.png";
import profile from "../assets/images/melissa_profile.jpg";
import fitnessApp from "../assets/images/fitness-booking-app-screenshot.png";

const LandingPage = () => {
  return (
    <>
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 m-8">
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
          </div>
        </div>
      </section>

      {/*Projects*/}

      <section className="text-white scroll-mt-24" id="projects">
        <div className="m-8 space-y-4">
          <div className="space-y-2">
            <p className="text-teal-400 uppercase text-left text-2xl">
              Portfolio
            </p>
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <p className="text-gray-500 ">
              A selection of recent work that highlights my approach to frontend
              development and design
            </p>
          </div>
          <div className="space-y-2 lg:grid grid-cols-3 gap-10">
            <div className="flex flex-col justify-center items-start space-y-2  ">
              <div className="lg:flex flex-col">
                <img src={mercatoApp} alt="mercato store app screenshot" />
                <h2 className=" font-semibold">Mercato Store App</h2>
                <p className="text-gray-500 mt-2">
                  A React-based e-commerce app powered by the Fake Store API.
                  Features include product listing, search functionality, and
                  category filtering, built to simulate a real-world shopping
                  experience.
                </p>
              </div>
              <div className="technologies flex flex-row space-x-4 ">
                <div className="bg-grey-500 border border-gray-700/10  text-gray-200 text-sm p-1 rounded-lg">
                  React
                </div>
                <div className="bg-grey-500 border border-gray-700/10  text-gray-200 text-sm p-1 rounded-lg">
                  TypeScript
                </div>
                <div className="bg-grey-500 border border-gray-700/10  text-gray-200 text-sm p-1 rounded-lg">
                  Tailwind CSS
                </div>
                <div className="bg-grey-500 border border-gray-700/10  text-gray-200 text-sm p-1 rounded-lg">
                  FakeStoreApi
                </div>
              </div>
              <div className="other space-x-4">
                <a
                  href="https://mercatostore.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  Live Demo
                </a>
                <a
                  href="https://github.com/Melmoyo/Mercato-Store"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                  Source
                </a>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex flex-col justify-center items-start space-y-2">
                <img src={wavestatApp} alt="Wave Stat" />
                <h2 className=" font-semibold">Wave Stat</h2>
                <p className="text-gray-500 mt-2">
                  Wave Stat is a React-based dashboard that consumes the Last.fm
                  API to surface K-pop listening statistics. It features dynamic
                  data visualizations using Recharts, including pie and bar
                  charts,
                </p>
                <div className="technologies flex flex-row space-x-4 ">
                  <div className="bg-grey-500 border border-gray-700/10  text-gray-200 text-sm p-1 rounded-lg">
                    React
                  </div>
                  <div className="bg-grey-500 border border-gray-700/10  text-gray-200 text-sm p-1 rounded-lg">
                    TypeScript
                  </div>
                  <div className="bg-grey-500 border border-gray-700/10  text-gray-200 text-sm p-1 rounded-lg">
                    Tailwind CSS
                  </div>
                  <div className="bg-grey-500 border border-gray-700/10  text-gray-200 text-sm p-1 rounded-lg">
                    Recharts
                  </div>
                </div>
                <div className="other space-x-4">
                  <a
                    href="https://wavestat.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/Melmoyo/Wave-Stat"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                    Source
                  </a>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex flex-col justify-center items-start space-y-2">
                <img src={techtalentApp} alt="tech talent explorer" />
                <h2 className=" font-semibold">Tech Talent Explorer</h2>
                <p className="text-gray-500 mt-2">
                  TechTalentExplorer is a React app that leverages the GitHub
                  REST API to search and explore developer profiles. View
                  repositories, follower counts, and contribution activity to
                  discover
                </p>
                <div className="technologies flex flex-row space-x-4 ">
                  <div className="bg-grey-500 border border-gray-700/10  text-gray-200 text-sm p-1 rounded-lg">
                    React
                  </div>
                  <div className="bg-grey-500 border border-gray-700/10  text-gray-200 text-sm p-1 rounded-lg">
                    TypeScript
                  </div>
                  <div className="bg-grey-500 border border-gray-700/10  text-gray-200 text-sm p-1 rounded-lg">
                    Tailwind CSS
                  </div>
                  <div className="bg-grey-500 border border-gray-700/10  text-gray-200 text-sm p-1 rounded-lg">
                    GitHub Rest API
                  </div>
                </div>
                <div className="other space-x-4">
                  <a
                    href="https://techtalentexplorer.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/Melmoyo/TechTalentExplorer"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                    Source
                  </a>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex flex-col justify-center items-start space-y-2">
                <img src={fitnessApp} alt="Fitness booking app screenshot" />
                <h2 className=" font-semibold">Fitness Booking App</h2>
                <p className="text-gray-500 mt-2">
                  Fitness platform with a landing page, user authentication, and
                  a personal dashboard for booking and managing training
                  sessions. Includes an admin portal with a full overview of all
                  bookings.
                </p>
                <div className="technologies flex flex-row space-x-4 ">
                  <div className="bg-grey-500 border border-gray-700/10  text-gray-200 text-sm p-1 rounded-lg">
                    React
                  </div>
                  <div className="bg-grey-500 border border-gray-700/10  text-gray-200 text-sm p-1 rounded-lg">
                    TypeScript
                  </div>
                  <div className="bg-grey-500 border border-gray-700/10  text-gray-200 text-sm p-1 rounded-lg">
                    Tailwind CSS
                  </div>
                  <div className="bg-grey-500 border border-gray-700/10  text-gray-200 text-sm p-1 rounded-lg">
                    SupaBase
                  </div>
                </div>
                <div className="other space-x-4">
                  <a
                    href="https://fitnessbookingapp.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/Melmoyo/Fitness-Booking-App"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                    Source
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*About*/}

      <section
        className="about text-white mx-auto scroll-mt-24 mb-8"
        id="about"
      >
        <div className="flex flex-col items-center text-center lg:flex-row lg:space-x-8 lg:text-left">
          {/* Image column */}
          <div className="w-full flex justify-center items-center mt-20 lg:w-1/2 mb-6 lg:mb-0">
            <img
              src={profile}
              alt="melissa"
              className="mx-auto rounded-full w-96 h-96 lg:mx-0"
            />
          </div>

          {/* Text column */}
          <div className="w-full lg:w-1/2 max-w-xl space-y-4">
            <h2 className="text-teal-400 uppercase">About Me</h2>
            <p className="text-white text-3xl font-bold tracking-tight">
              Passionate about building for the web
            </p>
            <p className="text-gray-500 tracking-tight leading-loose">
              I am a frontend developer with experience building modern web
              applications. I specialize in React, TypeScript and design systems
              that scale.
              <br /> My work focuses on crafting interfaces that are not only
              visually polished but also performant and accessible. I believe
              the best products come from close collaboration between design and
              engineering.
              <br />
              When I'm not coding, you can find me exploring and gaining
              knowledge in other tech fields such as cybersecurity.
            </p>
          </div>
        </div>
      </section>

      {/*Contact Form*/}

      <section className="scroll-mt-24 mb-24" id="contact">
        <div>
          <div className="flex flex-col items-center text-center mb-8">
            <h2 className="text-teal-400 uppercase">Get in Touch</h2>
            <h3 className="text-white text-3xl font-bold">
              Let's work together
            </h3>
            <p className="text-gray-400 max-w-md">
              Have a project in mind or want to collaborate? Drop me a message
              and I'll get back to you as soon as possible.
            </p>
          </div>

          <div className="mx-10 border border-gray-700/20 p-8 rounded-lg bg-gray-700/10 lg:max-w-2xl mx-auto">
            <form className="space-y-4">
              {/* Row 1: Name + Email */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <label className="text-white font-medium" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full border border-gray-700/10 rounded-lg text-gray-400 p-2"
                    type="text"
                    id="name"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-white font-medium" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full border border-gray-700/10 rounded-lg text-gray-400 p-2"
                    type="email"
                    id="email"
                    placeholder="Your email"
                  />
                </div>
              </div>

              {/* Row 2: Message */}
              <div>
                <label className="text-white font-medium" htmlFor="message">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full border border-gray-600/10 rounded-lg text-gray-400 p-2"
                  id="message"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {/* Row 3: Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-teal-500 rounded-lg p-2 flex justify-center items-center text-white font-semibold hover:bg-teal-600 transition"
                >
                  Send Message
                  <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
