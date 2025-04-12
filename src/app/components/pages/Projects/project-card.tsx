import Link from "next/link";
import * as React from "react";

interface Project {
  id: number;
  name: string;
  tools: string[];
  role: string;
  description: string;
  code: string;
  demo: string;
  image: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Project Image */}
      <div className="relative">
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-48 object-cover"
          />
        ) : (
          <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
            <span className="text-gray-500">{project.name}</span>
          </div>
        )}
      </div>

      {/* Project Details */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
          {project.name}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tools Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tools.map((tool, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded dark:bg-blue-200 dark:text-blue-800"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex space-x-4">
          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 hover:text-indigo-600 font-medium"
            >
              Demo
            </Link>
          )}
          {project.code && (
            <Link
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 hover:text-indigo-600 font-medium"
            >
              Code
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
