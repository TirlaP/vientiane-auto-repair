"use client";
import { useMediaQuery } from "@mantine/hooks";

import { ProjectCard } from "@/components/ProjectCard";
import { project_carousel } from "@/lib/mock-data";
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { MotionDiv, MotionH2 } from "@/components/animations/motion";

interface ProjectSectionProps {
   isWhite?: boolean;
}

const ProjectSection = ({ isWhite }: ProjectSectionProps) => {
   const md = useMediaQuery("(max-width: 768px)");

   return (
      <section
         className={cn(
            "overflow-hidden bg-cover py-9 md:py-[80px] lg:py-[120px] xl:py-[150px]",
            isWhite
               ? "text-white"
               : "bg-[#1B2027] bg-[url('/images/bg-1.svg')]",
         )}
      >
         <Carousel className="container px-5 font-header lg:px-0">
            <div className="flex flex-col gap-y-3 md:flex-row md:items-center md:justify-around md:gap-y-0">
               <MotionH2
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true }}
                  variants={{
                     offscreen: { opacity: 0, x: -200 },
                     onscreen: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.5 },
                     },
                  }}
                  className={cn(
                     "text-[35px] font-black uppercase leading-[40px] md:text-[45px] md:leading-[55px] lg:text-[60px] lg:leading-[70px]",
                     isWhite ? "text-default-black" : "text-white",
                  )}
               >
                  our recent repair <br /> services
               </MotionH2>
               <MotionDiv
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true }}
                  variants={{
                     offscreen: { opacity: 0, x: 200 },
                     onscreen: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.5 },
                     },
                  }}
                  className="mt-3 flex items-center justify-between gap-x-1.5 md:mt-0 md:justify-center"
               >
                  <CarouselPrevious />

                  <CarouselNext />
               </MotionDiv>
            </div>

            <CarouselContent>
               {project_carousel.map((item, index) => (
                  <CarouselItem key={index}>
                     <div className="mt-5 grid w-full grid-cols-1 items-center gap-5 px-5 py-5 md:grid-cols-2 xl:px-0">
                        {item.slice(0, md ? 1 : 2).map((x, j) => (
                           <ProjectCard
                              key={j}
                              category={x.service}
                              id={x.id}
                              img={x.img}
                              title={x.title}
                              isWhite={isWhite}
                              index={j + 1}
                           />
                        ))}
                     </div>
                  </CarouselItem>
               ))}
            </CarouselContent>
         </Carousel>
      </section>
   );
};

export { ProjectSection };
