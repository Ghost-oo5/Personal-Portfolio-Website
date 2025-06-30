"use client";
import img from "@/../public/logo.png";
import { ModeToggle } from "@/components/ModeToggle";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

// Define your navigation items
const navItems = [
  { label: "About", to: "about" },
  { label: "Experience", to: "experience" },
  { label: "Skills", to: "skills" },
  { label: "Projects", to: "projects" },
  { label: "Contact", to: "contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const renderLink = (
    item: { label: string; to: string },
    isMobile = false,
  ) => {
    const commonClasses = isMobile
      ? "block cursor-pointer transition-colors duration-300 font-bold hover:text-pink-600"
      : "cursor-pointer transition-colors duration-300 hover:text-pink-600 relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-pink-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center";

    if (pathname === "/") {
      return (
        <ScrollLink
          key={item.to}
          to={item.to}
          smooth={true}
          duration={500}
          className={commonClasses}
          onClick={isMobile ? () => setIsMenuOpen(false) : undefined}
        >
          {item.label}
        </ScrollLink>
      );
    }
    return (
      <Link
        key={item.to}
        href={`/#${item.to}`}
        className={commonClasses}
        onClick={() => isMobile && setIsMenuOpen(false)}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <nav className="sticky top-0 z-[9999] backdrop-blur-md  text-white  shadow-md  rounded-lg">
      <div className="flex justify-between py-3 items-center container">
        <Link href="/" className="logo ">
          <Image src={img} alt="Abdul Basit" id="logo" width={80} height={80} />
        </Link>
        <div className="hidden md:flex navbarItems space-x-5 md:text-xl lg:text-xl items-center">
          {navItems.map((item) => renderLink(item))}
          <ModeToggle />
        </div>
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
      {isMenuOpen && (
        <div className="md:hidden shadow-2xl backdrop-blur-md p-5 space-y-4">
          <hr className="my-5 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
          {navItems.map((item) => renderLink(item, true))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
