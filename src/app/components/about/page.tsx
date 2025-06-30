"use client";
import { personalData } from "@/../utils/Data/PersonalData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap/dist/SplitText";
import Image from "next/image";

function About() {
  useGSAP(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);

    const split = new SplitText(".description", {
      type: "words",
    });

    gsap.set(split.words, { display: "inline-block", autoAlpha: 0, y: 20 });

    ScrollTrigger.batch(split.words, {
      start: "top 80%",
      onEnter: (batch) =>
        gsap.to(batch, {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.04,
        }),
      onLeaveBack: (batch) =>
        gsap.to(batch, {
          autoAlpha: 0,
          y: 20,
          duration: 0.3,
          stagger: 0.02,
        }),
    });

    return () => {
      split.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div id="about" className="max-sm:mt-16  md:pt-28 relative">
      <div className="hidden lg:flex flex-col  items-center absolute top-40 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-3 max-sm:pt-3 text-[#16f2b3] max-sm:text-xl md:text-2xl uppercase">
            Who I am?
          </p>
          <p className="description text-gray-200 text-base lg:text-lg !text-justify">
            {personalData.description}
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={300}
            height={280}
            alt="abdul basit"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
