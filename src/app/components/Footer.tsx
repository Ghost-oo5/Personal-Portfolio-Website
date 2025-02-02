"use client";
import Link from "next/link";
import img from "../../../public/Logo-v1-white.png";
import Image from "next/image";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
const Footer = () => {
  return (
    <>
      <footer className="relative bg-gradient-to-r from-purple-900 to-[#0D1224] text-white py-0">
        {/* Animated SVG Wave Separator */}
        {/* <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-[calc(100%+2px)] h-16 animate-wave"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.5,22,104.42,29.45,158.11,17.85,75.2-17.42,141.92-61.33,217.46-59.83,83.89,1.57,163.14,45.92,246.38,49.07,82.14,3.1,167.46-30.14,247.48-45.93,82.26-16.59,169.27-15.53,251.78,2.11V0Z"
              opacity=".25"
              className="fill-current text-indigo-700"
            ></path>
            <path
              d="M0,0V15.81C47.42,43.1,104.31,56,158,44.83c75.09-16.81,141.68-55,217.06-53.73,83.93,1.37,163.09,40.93,246.33,44.34,82.39,3.29,167.84-21,247.86-35.1,82.28-15.27,169.26-14.24,251.78,3.15V0Z"
              opacity=".5"
              className="fill-current text-indigo-600"
            ></path>
            <path
              d="M0,0V5.63C47.42,28,104.31,40,158,29.71c75.09-13.37,141.68-43,217.06-41.08,83.93,1.37,163.09,27.55,246.33,30.42,82.39,3.29,167.84-12,247.86-25.1,82.28-15.27,169.26-14.24,251.78,3.15V0Z"
              className="fill-current text-indigo-500"
            ></path>
          </svg>
        </div> */}

        {/* Footer Content */}
        <div className="flex max-sm:flex-col max-sm:py-5 max-sm:justify-center w-full justify-between px-10 items-center">
          {/* Signature */}
          <div className="">
            <Link href={"img"}>
              <Image
                src={img}
                alt="Abdul Basit"
                id="logo"
                className="max-sm:w-20 max-sm:h-20"
                width={100}
                height={100}
              />
            </Link>
          </div>
          <div>
            <DotLottieReact
              src="https://lottie.host/10269559-3768-4da6-a44c-affea0cdd5f8/hEUYHVwnzm.lottie"
              loop
              autoplay
              className="max-sm:w-32 max-sm:h-32"
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
