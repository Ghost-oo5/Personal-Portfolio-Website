import Link from "next/link";
import React from "react";
import { BiFork } from "react-icons/bi";
import { BsStar } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="footer w-100% bg-red-900 flex justify-between items-center px-20 ">
        <div>
          Made with ❤ by
          <Link
            href={"https://abdulbasit.dev"}
            className="font-bold text-[#16f2b3]"
          >
            Basit
          </Link>
        </div>
        <h1>this is footer</h1>
        <div className="footerItems flex space-x-10">
          <Link
            href={"https://github.com/abdulbasitdev"}
            className="Footer-item flex space-x-1 items-center  uppercase"
          >
            <BsStar />
            <p> Star</p>
          </Link>
          <Link
            href={"https://github.com/abdulbasitdev"}
            className="Footer-item flex space-x-1 items-center  uppercase"
          >
            <BiFork /> 
            <p>Fork</p>
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
