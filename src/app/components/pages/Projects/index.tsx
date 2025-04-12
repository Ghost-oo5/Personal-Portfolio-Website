import { projectsData } from "../../../../../utils/Data/projects-data";
import ProjectCard from "./project-card";

const Projects = () => {
  return (
    <section
      id="projects"
      className="container mx-auto py-20 px-4 sm:px-8 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Projects Showcase
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          A selection of creative and innovative projects, each crafted with
          passion and precision.
        </p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
