import hero from "../assets/hero.png";
import CV from "../assets/HannanButt-Resume2.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
const Hero = () => {
  return (
    <div className="p-2 px-7 mt-5 mx-5 md:h-screen font-mont bg-lightBeige text-charcoal md:flex md:justify-center md:items-center">
      <div className="flex flex-col items-center md:flex-row md:space-x-10">
        <section className="md:w-2/3">
          <img
            src={hero}
            className="w-32 h-32 lg:w-64 lg:h-64 border rounded-full object-contain bg-mintGreen bg-gradient-to-r from-mintGreen to-softBlue"
            alt="Profile Image"
          />
        </section>
        <section className="text-center mt-8 md:mt-0">
          <h1 className="font-bold text-5xl bg-gradient-to-r from-mintGreen to-softBlue bg-clip-text text-transparent">
            Hannan Butt
          </h1>
          <h2 className="mt-2 font-semibold text-xl">Front-End Developer</h2>
          <p className="mt-2 p-2 font-medium md:text-xl md:font-mediumx">
            A Front-End Developer focused on crafting visually stunning and
            highly functional web applications. With a passion for clean code
            and seamless user experiences, I bring design concepts to life
            through modern front-end technologies.
          </p>
          <div>
            <a
              href="https://github.com/Hannanbutt1256"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="p-2 size-9 " />
            </a>
            <a
              href="https://www.linkedin.com/in/hannan-butt/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="p-2 size-9 " />
            </a>
          </div>
          <a href={CV} download>
            <button className="px-5 py-3 mt-2 rounded-3xl bg-mintGreen font-medium hover:bg-softBlue hover:text-lightBeige transition-transform duration-300 ease-in text-center">
              Resume
            </button>
          </a>
        </section>
      </div>
    </div>
  );
};

export default Hero;
