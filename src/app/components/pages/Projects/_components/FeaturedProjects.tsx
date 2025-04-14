'use client'
import { projectsData } from "@/../utils/Data/projects-data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectCard from "../project-card";

const FeaturedProjects = () => {
  return (
    <section id="projects">

<Carousel
      opts={{
        align: "start",
      }}
      className="w-full "
    >
      <CarouselContent>
        {projectsData.map((project, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <ProjectCard key={project.id} project={project} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-black" />
      <CarouselNext  className="text-black"/>
    </Carousel>        
    </section>
  );
};

export default FeaturedProjects;
