'use client'
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
    <nav className="sticky top-0 z-[9999]  backdrop-blur-md text-white px-5 sm:px-10 shadow-md w-full rounded-lg">
    <div className="flex justify-between py-5 items-center">
          {/* Logo */}
          <div className="logo pl-2 sm:pl-5">
            <Link
              href="/"
              className="text-[#16f2b3] hover:text-green-500 transition-colors duration-300 text-2xl sm:text-3xl font-bold"
            >
              Unknown Coder
            </Link>
          </div>

          {/* Desktop Navbar */}
          <div className="hidden md:flex navbarItems space-x-5 text-lg items-center">
            <Link
              href="#about"
              className="transition-colors duration-300 font-bold hover:text-pink-600"
            >
              About
            </Link>
            <Link
              href="#experience"
              className="transition-colors duration-300 font-bold hover:text-pink-600"
            >
              Experience
            </Link>
            <Link
              href="#education"
              className="transition-colors duration-300 font-bold hover:text-pink-600"
            >
              Education
            </Link>
            <Link
              href="#skills"
              className="transition-colors duration-300 font-bold hover:text-pink-600"
            >
              Skills
            </Link>
            <Link
              href="#blogs"
              className="transition-colors duration-300 font-bold hover:text-pink-600"
            >
              Blogs
            </Link>
            <Link
              href="#projects"
              className="transition-colors duration-300 font-bold hover:text-pink-600"
            >
              Projects
            </Link>
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
          <div className="md:hidden bg-gray-800 p-5 space-y-4">
            <Link
              href="/components/pages/about"
              className="block transition-colors duration-300 font-bold hover:text-pink-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/components/pages/experience"
              className="block transition-colors duration-300 font-bold hover:text-pink-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </Link>
            <Link
              href="/components/pages/education"
              className="block transition-colors duration-300 font-bold hover:text-pink-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Education
            </Link>
            <Link
              href="/components/pages/Skills"
              className="block transition-colors duration-300 font-bold hover:text-pink-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="/components/pages/Blogs"
              className="block transition-colors duration-300 font-bold hover:text-pink-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Blogs
            </Link>
            <Link
              href="/components/pages/Projects"
              className="block transition-colors duration-300 font-bold hover:text-pink-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
