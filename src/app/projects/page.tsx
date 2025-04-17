import { projectsData } from "@/../utils/Data/projects-data";
import ProjectCard from "@/app/components/projects/project-card";

const ProjectDetails = () => {
  return (
    <section id="projects">
      <div className="flex flex-col gap-10 items-center container  mx-auto py-20 px-4 sm:px-8   from-purple-800 to-purple-900">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-white dark:text-gray-100">
          Things I've Built         
           </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-300 dark:text-gray-300">
          Explore a collection of my work — real-world solutions, creative experiments, and everything in between.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
