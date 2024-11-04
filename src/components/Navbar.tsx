import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import hero from "../assets/hero.png";

const Navbar = () => {
  // State to manage the mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle function to open and close the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="p-2 px-7 mt-5 mx-5 font-mont bg-lightBeige text-charcoal flex justify-between items-center">
      <a href="#" className=" flex items-center gap-4">
        <img
          src={hero}
          alt=""
          className="w-10 h-10 border rounded-full bg-mintGreen bg-gradient-to-r from-mintGreen to-softBlue object-cover"
        />
        <h2 className="text-lg font-bold">Hannan Butt</h2>
      </a>

      <div className="hidden md:flex flex-row items-center gap-8">
        <ul className="flex flex-row gap-8">
          <li>
            <a
              className="px-5 py-3 rounded-3xl bg-mintGreen font-medium hover:bg-softBlue hover:text-lightBeige transition-transform duration-300 ease-in text-center"
              href="#"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="px-5 py-3 rounded-3xl bg-mintGreen font-medium hover:bg-softBlue hover:text-lightBeige transition-transform duration-300 ease-in text-center"
              href="#"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="px-5 py-3 rounded-3xl bg-mintGreen font-medium hover:bg-softBlue hover:text-lightBeige transition-transform duration-300 ease-in text-center"
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile menu toggle button */}
      <button className="p-2 md:hidden" onClick={toggleMenu}>
        <FontAwesomeIcon
          icon={isMenuOpen ? faXmark : faBars}
          className="text-charcoal"
        />
      </button>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="p-2 px-7 mt-5 mx-5 fixed inset-0 bg-lightBeige z-50">
          <div className="flex justify-between items-center mb-6">
            <a href="#" className=" flex items-center gap-4">
              <img
                src={hero}
                alt=""
                className="w-10 h-10 border rounded-full bg-mintGreen bg-gradient-to-r from-mintGreen to-softBlue object-cover"
              />
              <h2 className="text-lg font-bold">Hannan Butt</h2>
            </a>
            <button className="p-2 md:hidden" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faXmark} className="text-charcoal" />
            </button>
          </div>

          <ul className="flex flex-col gap-4">
            <li>
              <a className="font-medium hover:text-mintGreen" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="font-medium hover:text-mintGreen" href="#">
                About
              </a>
            </li>
            <li>
              <a className="font-medium hover:text-mintGreen" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
