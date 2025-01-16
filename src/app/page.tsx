import About from "./components/pages/about/page";
import Blogs from "./components/pages/Blogs/index";
import Contact from "./components/pages/Contact/index";
import Education from "./components/pages/education/page";
import Experience from "./components/pages/experience/page";
import HeroSection from "./components/pages/hero-section/page";
import Projects from "./components/pages/Projects/index";
import Skills from "./components/pages/Skills/page";

import './css/card.css';
export default function Home() {
  return (
    <>
      <HeroSection/>
      <About/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Education/>
      <Blogs blogs={[]}/>
      <Contact/>
    </>
  );
}
