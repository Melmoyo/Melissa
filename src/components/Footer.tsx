import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <>
      <hr className="w-full border-t border-white/20 " />
      <div className="text-gray-500 flex flex-col items-center py-8 space-y-2 lg:flex flex-row justify-between mx-8  " >
      
        <div>
        <p className=" ">&copy;2026 Melissa .All rights reserved.</p>
        </div>
        <div className="socials flex justify-center space-x-4 lg:flex justify-end">
          <a
            href="https://www.linkedin.com/in/melissa-msayinwa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FontAwesomeIcon icon={faGithub} size="sm" className="my-icon" />
          </a>
          <a
            href="https://github.com/Melmoyo"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FontAwesomeIcon
              icon={faLinkedinIn}
              size="sm"
              className="my-icon"
            />
          </a>
        </div>
      </div>
    </>
  );
};
export default Footer;
