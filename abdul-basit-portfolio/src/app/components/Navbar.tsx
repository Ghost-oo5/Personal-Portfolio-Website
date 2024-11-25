import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="px-10">
          <div className="flex justify-between py-5 items-center">
            <div className="logo pl-5">
              <Link href={"./"} className="text-[#16f2b3] hover:text-green-500 transition-colors duration-300 text-3xl font-bold">Basit</Link>
            </div>
            <div className="navbarItems flex space-x-5 text-xl items-center">
              <Link href={""} className="transition-colors duration-300 hover:text-pink-600">About</Link>
              <Link href={""} className="transition-colors duration-300 hover:text-pink-600">Experience</Link>
              <Link href={""} className="transition-colors duration-300 hover:text-pink-600">Skills</Link>
              <Link href={""} className="transition-colors duration-300 hover:text-pink-600">Blogs</Link>
              <Link href={""} className="transition-colors duration-300 hover:text-pink-600">Projects</Link>
            </div>
          </div>
      </nav>
    </>
  );
};

export default Navbar;
