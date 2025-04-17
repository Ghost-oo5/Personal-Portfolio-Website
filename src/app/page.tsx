import About from "./components/about/page";
import Contact from "./components/contact/index";
// import Education from "./components/pages/education/page";
import Experience from "./components/experience/page";
import HeroSection from "./components/hero-section/page";
import Projects from "./components/projects/index";
import Skills from "./components/skills/page";

import "./css/card.css";
export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Experience />
      <Skills />
      <Projects />
      {/* <Education /> */}
      <Contact />
    </>
  );
}
