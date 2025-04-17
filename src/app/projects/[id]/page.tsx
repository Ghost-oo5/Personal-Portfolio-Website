import { projectsData } from "@/../utils/Data/projects-data";
import FeaturedProjects from "@/app/components/projects/_components/FeaturedProjects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Heading from "@/components/ui/Heading";
import { Code, Globe, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: Promise<{ id: string }>;
};

const page = async ({ params }: Props) => {
  const { id } = await params;
  const project = projectsData.find((projects) => projects.id == parseInt(id));
  return (
    <div className="w-full py-14">
      <div
        className="header relative md:h-[18rem] rounded-lg w-full  bg-cover bg-top"
        style={{
          backgroundImage: `url(${project?.images ?? "/placeholder/placeholder.png"})`,
        }}
      >
        <div className="rounded-lg absolute inset-0  bg-gradient-to-r from-[#EC4899] via-indigo-500 to-[#0D1224] opacity-85"></div>
        <div className="relative z-10 flex flex-col items-start justify-between max-sm:gap-5 md:gap-8 py-8 pl-5 md:p-12 lg:p-16">
          <h1 className="text-2xl font-bold md:text-4xl lg:text-5xl">
            {project?.name}
          </h1>
          <div className="flex gap-3 align-middle">
            <User />
            <h2> {project?.role}</h2>
          </div>
          <div className="flex gap-3">
            <Link href={project?.demo || "/"}>
              <Button className="max-sm:text-sm">
                <Globe /> View Demo
              </Button>
            </Link>
            <Link href={project?.code || "/"}>
              <Button className="max-sm:text-sm">
                <Code /> Github code
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <hr className="my-10 border-gray-700" />
      <div className="flex flex-col pt-3 gap-10">
        <div className="flex flex-col gap-3">
          <Heading>Overview:</Heading>
          <p>{project?.description}</p>
        </div>
        <div className="flex flex-col gap-3">
          <Heading>Technologies used:</Heading>
          <div className="flex gap-2 flex-wrap">
            {project?.tools.map((item, index) => (
              <Badge key={index} className="max-sm:text-sm text-base  text-nowrap">
                {item}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Heading>highlights:</Heading>
          <p>{project?.highlights}</p>
        </div>
        <div className="flex flex-col gap-2">
          <Heading>Images</Heading>
          <Carousel className="w-full">
            <CarouselContent>
              {project?.videos.map((item, index) =>
                item ? (
                  <video key={index} src={item} controls />
                ) : (
                  <>
                    {project?.images.map((item, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <Card>
                            <CardContent className="relative w-full aspect-video rounded-lg overflow-hidden">
                              <Image
                                src={item}
                                alt={project.name || "image"}
                                fill
                                className="object-cover object-top rounded-lg"
                              />
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </>
                )
              )}
            </CarouselContent>
            <CarouselPrevious className="text-black hidden md:flex" />
            <CarouselNext className="text-black hidden md:flex" />
          </Carousel>
        </div>
        <hr className="md:my-10 border-gray-700" />
        <h2 className="text-2xl font-bold mx-auto  md:mb-4">More Projects</h2>
        <div className="flex flex-col gap-2">
          <FeaturedProjects />
        </div>
      </div>
    </div>
  );
};

export default page;
