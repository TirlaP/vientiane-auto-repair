import { project3Data } from "@/lib/mock-data";
import { ProjectCard } from "../ProjectCard";

const Projects = () => {
   return (
      <section className="container grid grid-cols-2 gap-2 px-2 py-9 font-header md:gap-4 md:py-[80px] lg:gap-5 lg:py-[120px] xl:gap-7 xl:px-0 xl:py-[150px]">
         {project3Data.map((project, index) => (
            <ProjectCard key={project.id} {...project} isWhite index={index} />
         ))}
      </section>
   );
};

export { Projects };
