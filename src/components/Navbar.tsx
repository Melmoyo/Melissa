import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="relative overflow:hidden border-b sticky top-0 z-50 border-gray-700/20 background-gray-700/20">
        <div className="  w-full flex justify-around items-center h-12 text-white ">
          <div className="text-3xl font-bold hover:text-teal-500">MM.</div>

          <ul className="flex space-x-4 hidden md:flex ">
            <li className="hover:text-teal-500">
              <a href="#skills">Skills</a>
            </li>
            <li className="hover:text-teal-500">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-teal-500">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-teal-500">
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <a href="/Melissa Msayinwa CV.pdf" download="Melissa Msayinwa.pdf">
            <button className="bg-teal-500 p-2 rounded-lg hidden cursor-pointer hover:bg-black hover:text-teal-500 hover:border hover:border-teal-500 md:flex ">
              Resume
            </button>
          </a>

          <button
            onClick={handleClick}
            className=" w-10 h-10 flex items-center justify-center md:hidden"
          >
            <FontAwesomeIcon
              icon={isOpen ? faXmark : faBars}
              className="fa-fw "
            />
          </button>

          {isOpen && (
            <div className=" flex justify-around items-center  ">
              <ul className=" absolute top-full left-2 space-y-2   w-full  flex flex-col space-x-4 border border-gray-700/50  border p-10 rounded-lg text-gray-400 bg-gray-700/10 ">
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  {" "}
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  {" "}
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact </a>
                </li>
                <li>
                  <button className="bg-teal-500 p-2 rounded-lg text-gray-200 md:hidden">
                    Resume
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
