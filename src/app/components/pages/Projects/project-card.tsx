'use client'
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Code, Globe } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

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

const ProjectCard = ({ project }:ProjectCardProps) => {
  const route = useRouter();
  return (
    <Card className="border-none bg-[#19223f]  rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      {project.image ? (
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-48 object-cover rounded-t-md"
        />
      ) : (
        <div className="w-full h-48 bg-muted flex items-center justify-center rounded-t-md">
          <span className="text-muted-foreground">{project.name}</span>
        </div>
      )}

      <CardHeader>
        <Link href={`/projects/${project.id}`}>
          <CardTitle className="text-xl text-white">{project.name}</CardTitle>
        </Link>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded dark:bg-blue-200 dark:text-blue-800"
            >
              {tool}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between pt-4">
        {project.demo && (
          <Link
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 hover:underline text-sm"
          >
            <Button variant='outline'><Globe/> Demo</Button>
          </Link>
        )}
        {project.code && (
          <Link
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 hover:underline text-sm"
          >
            <Button variant='outline'><Code/> Code</Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
