import Link from "next/link";
import React from "react";
import { BiFork } from "react-icons/bi";
import { BsStar } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="footer w-screen bg-red-500 flex justify-between items-center px-20 ">
        <div>
          Made with love by <Link href={"https://abdulbasit.dev"}>Basit</Link>
        </div>
        <div className="footerItems flex space-x-10">
          <div className="Footer-item flex space-x-1 items-center">
            {" "}
            <BsStar /> Star
          </div>
          <div className="Footer-item flex space-x-1 items-center">
            {" "}
            <BiFork /> Fork
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
