'use client'
import { projectsData } from "@/../utils/Data/projects-data";
import ProjectCard from "./project-card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Projects = () => {
const route =   useRouter();
  const displayedProjects = projectsData.slice(0, 3);
  return (
    <section id="projects">
      <div className="sticky top-10">
        <div className="w-[100px] h-[90px]  rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      <div className="flex flex-col gap-10 items-center container mt-24 mx-auto py-20 px-4 sm:px-8   from-purple-800 to-purple-900">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-white dark:text-gray-100">
            Projects Showcase
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-300 dark:text-gray-300">
            A selection of creative and innovative projects, each crafted with
            passion and precision.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <Link href={'/projects'}>
          <Button variant='default' >See all projects</Button>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
