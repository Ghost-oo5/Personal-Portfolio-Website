"use client";
import { personalData } from "@/../utils/Data/PersonalData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/dist/SplitText";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import Tilt from "react-parallax-tilt";

const HeroSection = () => {
  const designationRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLElement>(null);
  useGSAP(() => {
    gsap.registerPlugin(SplitText);
    const titles = personalData.designationAlternateWords;
    let index = 0;
    let split: SplitText | null;

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

    const runAnimation = () => {
      const el = designationRef.current;
      if (!el) return;
      el.textContent = "";
      el.style.opacity = "1";
      el.textContent = titles[index];
      split = SplitText.create(el, { type: "chars" });

      // Type in
      tl.from(split.chars, {
        opacity: 0,
        duration: 0.03,
        stagger: 0.03,
        ease: "none",
      });

      // Pause, then erase
      tl.to(split.chars, {
        opacity: 0,
        duration: 0.08,
        stagger: { each: 0.08, from: "end" },
        ease: "none",
        delay: 1,
        onComplete: () => {
          split?.revert();
          index = (index + 1) % titles.length;
          runAnimation();
        },
      });
    };

    runAnimation();

    return () => {
      tl.kill();
      split?.revert();
    };
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();

    // 1. Fade-in .para
    tl.fromTo(
      ".para",
      { autoAlpha: 0, y: 20 },
      { autoAlpha: 1, y: 0, stagger: 0.3, duration: 0.6, ease: "power1.in" },
    );

    if (nameRef.current) {
      tl.fromTo(
        nameRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.1,
          repeat: 4,
          yoyo: true,
          ease: "power1.inOut",
        },
      )
        .to(nameRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        })
        .to(nameRef.current, {
          y: 3,
          repeat: -1,
          yoyo: true,
          duration: 0.8,
          ease: "circ.inOut",
        });
    }

    tl.to({}, { duration: 1.5 });

    tl.to(
      ".social-icons",
      {
        y: 3,
        repeat: -1,
        yoyo: true,
        duration: 0.8,
        stagger: 0.5,
        ease: "circ",
      },
      "<",
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
        <Image
          src="svg/common/hero.svg"
          alt="Hero"
          width={1572}
          height={795}
          className="absolute -top-[98px] -z-10"
        />
        <div className="grid grid-cols-1 max-sm:pt-8 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
          <div className="order-1 lg:order-1 flex flex-col items-start justify-center p-2 pb-5 md:pb-10 lg:pt-10">
            <h1 className="para invisible text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
              Hello,
              <br />
              This is{" "}
              <span
                id="name"
                className="name text-pink-500 filter drop-shadow-[0_0_8px_rgba(236,72,153,0.7)]"
                ref={nameRef}
              >
                {personalData.name}
              </span>
              {","}
              <br />
              I'm a Professional <br />
              <span
                className=" text-[#16f2b3] mr-3  designation inline-block"
                id="designation"
              >
                {personalData.designation}{" "}
              </span>
              <span
                className=" text-[#16f2b3] designationAlternate inline-block opacity-0"
                ref={designationRef}
                id="designationAlternate"
              >
                {personalData.designationAlternateWords}
              </span>
              <span id="cursor" className="inline-block opacity-0">
                |
              </span>
            </h1>
            <div className="social max-md:my-6 md:my-12 flex items-center gap-5">
              <Link
                href={personalData.github}
                target="_blank"
                className="para social-icons opacity-0 transition-all text-pink-500 hover:scale-125 duration-300"
              >
                <BsGithub size={30} />
              </Link>
              <Link
                href={personalData.linkedIn}
                target="_blank"
                className="para social-icons opacity-0 transition-all text-pink-500 hover:scale-125 duration-300"
              >
                <BsLinkedin size={30} />
              </Link>
              <Link
                href={personalData.facebook}
                target="_blank"
                className="para social-icons opacity-0 transition-all text-pink-500 hover:scale-125 duration-300"
              >
                <FaFacebook size={30} />
              </Link>
              <Link
                href={personalData.leetcode}
                target="_blank"
                className="para social-icons opacity-0 transition-all text-pink-500 hover:scale-125 duration-300"
              >
                <SiLeetcode size={30} />
              </Link>
              <Link
                href={personalData.twitter}
                target="_blank"
                className="para social-icons opacity-0 transition-all text-pink-500 hover:scale-125 duration-300"
              >
                <FaTwitterSquare size={30} />
              </Link>
            </div>
            <div className="flex items-center gap-3 py-1">
              <Link
                href="#contact"
                className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
              >
                <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-base font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                  <span>Contact me</span>
                  <RiContactsFill size={16} />
                </button>
              </Link>

              <Link
                className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-base font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
                role="button"
                target="_blank"
                href={personalData.resume}
              >
                <span>Get Resume</span>
                <MdDownload size={16} />
              </Link>
            </div>
          </div>
          <div>
            <Tilt
              className="background-stripes parallax-effect-glare-scale"
              glareEnable={true}
              glareMaxOpacity={0.4}
              glareBorderRadius="30"
              glareColor="red"
              tiltReverse={true}
            >
              <div className="data-frame order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
                <div className="flex flex-row">
                  <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
                  <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
                </div>
                <div className="px-4 lg:px-8 py-5">
                  <div className="flex flex-row space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-400"></div>
                    <div className="h-3 w-3 rounded-full bg-orange-400"></div>
                    <div className="h-3 w-3 rounded-full bg-green-200"></div>
                  </div>
                </div>
                <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
                  <code className="font-mono text-xs md:text-base lg:text-base">
                    <div className="blink">
                      <span className="mr-2 text-pink-500">const</span>
                      <span className="mr-2 text-white">coder</span>
                      <span className="mr-2 text-pink-500">=</span>
                      <span className="text-gray-400">{"{"}</span>
                    </div>
                    <div>
                      <span className="ml-4 lg:ml-8 mr-2 text-white">
                        name:
                      </span>
                      <span className="text-gray-400">{`'`}</span>
                      <span className="text-amber-300">Abdul Basit</span>
                      <span className="text-gray-400">{`',`}</span>
                    </div>
                    <div className="ml-4 lg:ml-8 mr-2">
                      <span className=" text-white">skills:</span>
                      <span className="text-gray-400">{`['`}</span>
                      <span className="text-amber-300">React</span>
                      <span className="text-gray-400">{"', '"}</span>
                      <span className="text-amber-300">NextJS</span>
                      <span className="text-gray-400">{"', '"}</span>
                      <span className="text-amber-300">Redux</span>
                      <span className="text-gray-400">{"', '"}</span>
                      <span className="text-amber-300">React Query</span>
                      <span className="text-gray-400">{"', '"}</span>
                      <span className="text-amber-300">Prisma</span>
                      <span className="text-gray-400">{"', '"}</span>
                      <span className="text-amber-300">Tailwind CSS</span>
                      <span className="text-gray-400">{"', '"}</span>
                      <span className="text-amber-300">Firebase</span>
                      <span className="text-gray-400">{"', '"}</span>
                      <span className="text-amber-300">AI Automation</span>
                      <span className="text-gray-400">{"'],"}</span>
                    </div>
                    <div>
                      <span className="ml-4 lg:ml-8 mr-2 text-white">
                        hardWorker:
                      </span>
                      <span className="text-orange-400">true</span>
                      <span className="text-gray-400">,</span>
                    </div>
                    <div>
                      <span className="ml-4 lg:ml-8 mr-2 text-white">
                        quickLearner:
                      </span>
                      <span className="text-orange-400">true</span>
                      <span className="text-gray-400">,</span>
                    </div>
                    <div>
                      <span className="ml-4 lg:ml-8 mr-2 text-white">
                        problemSolver:
                      </span>
                      <span className="text-orange-400">true</span>
                      <span className="text-gray-400">,</span>
                    </div>
                    <div>
                      <span className="ml-4 lg:ml-8 mr-2 text-green-400">
                        hireable:
                      </span>
                      <span className="text-orange-400">function</span>
                      <span className="text-gray-400">{"() {"}</span>
                    </div>
                    <div>
                      <span className="ml-8 lg:ml-16 mr-2 text-orange-400">
                        return
                      </span>
                      <span className="text-gray-400">{`(`}</span>
                    </div>
                    <div>
                      <span className="ml-12 lg:ml-24 text-cyan-400">
                        this.
                      </span>
                      <span className="mr-2 text-white">hardWorker</span>
                      <span className="text-amber-300">&amp;&amp;</span>
                    </div>
                    <div>
                      <span className="ml-12 lg:ml-24 text-cyan-400">
                        this.
                      </span>
                      <span className="mr-2 text-white">problemSolver</span>
                      <span className="text-amber-300">&amp;&amp;</span>
                    </div>
                    <div>
                      <span className="ml-12 lg:ml-24 text-cyan-400">
                        this.
                      </span>
                      <span className="mr-2 text-white">skills.length</span>
                      <span className="mr-2 text-amber-300">&gt;=</span>
                      <span className="text-orange-400">5</span>
                    </div>
                    <div>
                      <span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span>
                    </div>
                    <div>
                      <span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">{`};`}</span>
                    </div>
                  </code>
                </div>
              </div>
            </Tilt>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
