import { projectsData } from "@/../utils/Data/projects-data";
import FeaturedProjects from "@/app/components/pages/Projects/_components/FeaturedProjects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Heading from "@/components/ui/Heading";
import { Code, Globe, User } from "lucide-react";
import Image from "next/image";

interface Props {
  params: { id: string };
}

const page = ({ params: { id } }: Props) => {
  const project = projectsData.find((projects) => projects.id == parseInt(id));
  return (
    <div className="w-full pt-14">
      <div className="relative h-[18rem] rounded-lg w-full bg-[url('/placeholder/placeholder.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 flex flex-col items-start justify-between gap-8 p-8 md:p-12 lg:p-16">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            {project?.name}
          </h1>
          <div className="flex gap-3 align-middle">
            <User />
            <h2> {project?.role}</h2>
          </div>
          <div className="flex gap-3">
            <Button>
              <Globe /> View Demo
            </Button>
            <Button>
              <Code /> Github code
            </Button>
          </div>
        </div>
      </div>
      <hr className="my-10 border-gray-700" />
      <div className="flex flex-col pt-3 gap-10">
        <div className="flex flex-col gap-2">
          <Heading>Overview:</Heading>
          <p>{project?.description}</p>
        </div>
        <div className="flex flex-col gap-2">
          <Heading>Technologies used:</Heading>
          <div className="flex gap-2">
            {project?.tools.map((item) => (
              <Badge className="text-md">{item}</Badge>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Heading>highlights:</Heading>
          <p>{project?.highlights}</p>
        </div>
        <div className="flex flex-col gap-2">
          <Heading>Images</Heading>
          <Carousel className="w-full ">
            <CarouselContent>
              {project?.images.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="relative flex h-[32rem] items-center justify-center   rounded-lg overflow-hidden">
                        <Image
                          src={item}
                          alt={project.name || "image"}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <hr className="my-10 border-gray-700" />
        <h2 className="text-2xl font-bold  mb-4">More Projects</h2>
        <div className="flex flex-col gap-2">
          <FeaturedProjects />
        </div>
      </div>
    </div>
  );
};

export default page;
