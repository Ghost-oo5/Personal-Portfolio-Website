"use client";
import Image from "next/image";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import img from "../../../public/Logo-v1-white.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-[9999] backdrop-blur-md text-white px-5 sm:px-10 shadow-md w-full rounded-lg">
        <div className="flex justify-between py-3 items-center">
          <div className="logo pl-5 md:ml-5 sm:pl-5">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <Image
                src={img}
                alt="Abdul Basit"
                id="logo"
                className=""
                width={80}
                height={80}
              />
            </ScrollLink>
          </div>

          {/* Desktop Navbar */}
          <div className="hidden md:flex navbarItems space-x-5 md:text-xl lg:text-xl items-center">
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer transition-colors duration-300 hover:text-pink-600  relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-pink-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            >
              About
            </ScrollLink>
            <ScrollLink
              to="experience"
              smooth={true}
              duration={500}
              className="cursor-pointer transition-colors duration-300 hover:text-pink-600  relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-pink-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            >
              Experience
            </ScrollLink>

            <ScrollLink
              to="skills"
              smooth={true}
              duration={500}
              className="cursor-pointer transition-colors duration-300 hover:text-pink-600  relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-pink-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            >
              Skills
            </ScrollLink>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer transition-colors duration-300 hover:text-pink-600  relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-pink-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            >
              Projects
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer transition-colors duration-300 hover:text-pink-600  relative  w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-pink-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            >
              Contact
            </ScrollLink>
          </div>

          {/* Hamburger Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden shadow-2xl backdrop-blur-md p-5 space-y-4">
            <hr className="my-5 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="block cursor-pointer transition-colors duration-300 font-bold hover:text-pink-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </ScrollLink>
            <ScrollLink
              to="experience"
              smooth={true}
              duration={500}
              className="block cursor-pointer transition-colors duration-300 font-bold hover:text-pink-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </ScrollLink>
            {/* <ScrollLink
              to="education"
              smooth={true}
              duration={500}
              className="block cursor-pointer transition-colors duration-300 font-bold hover:text-pink-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Education
            </ScrollLink> */}
            <ScrollLink
              to="skills"
              smooth={true}
              duration={500}
              className="block cursor-pointer transition-colors duration-300 font-bold hover:text-pink-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </ScrollLink>
            {/* <ScrollLink
              to="blogs"
              smooth={true}
              duration={500}
              className="block cursor-pointer transition-colors duration-300 font-bold hover:text-pink-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Blogs
            </ScrollLink> */}
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className="block cursor-pointer transition-colors duration-300 font-bold hover:text-pink-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="block cursor-pointer transition-colors duration-300 font-bold hover:text-pink-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </ScrollLink>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
