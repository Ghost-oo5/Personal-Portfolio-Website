import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: number;
  name: string;
  tools: string[];
  role: string;
  description: string;
  code: string;
  demo: string;
  images: string[];
  videos?: string[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="flex flex-col h-full justify-between border-none bg-[#19223f]  rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <div>
        {project.videos?.map((item, index) =>
          item ? (
            <video key={index} src={item} controls />
          ) : (
            <div key={index}>
              {project.images.map((item, index) =>
                item ? (
                  <Image
                    src={item}
                    width={400}
                    height={192}
                    alt={project.name}
                    className="w-full h-48 object-cover object-top rounded-t-md"
                    key={index}
                  />
                ) : (
                  <div
                    key={index}
                    className="w-full h-48 bg-muted flex items-center justify-center rounded-t-md"
                  >
                    <span className="text-muted-foreground">
                      {project.name}
                    </span>
                  </div>
                )
              )}
            </div>
          )
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
      </div>

      <CardFooter className="flex justify-between pt-4">
        <Button
          className="text-indigo-500 hover:underline text-sm"
          disabled={!project.demo}
          variant="outline"
        >
          <Globe />{" "}
          <Link href={project.demo} target="_blank" rel="noopener noreferrer">
            Demo
          </Link>
        </Button>
        <Button
          variant="outline"
          className="text-indigo-500 hover:underline text-sm"
          disabled={!project.code}
        >
          <Code />
          <Link href={project.code} target="_blank" rel="noopener noreferrer">
            Code
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
