import Image from "next/image";

import { Button } from "../ui/button";
import { RightArrow2Icon } from "../ui/icons";

interface ProjectCardProps {
   title: string;
   service: string;
   img: string;
}

const ProjectCard = ({ img, service, title }: ProjectCardProps) => {
   return (
      <div className="group cursor-pointer">
         <Image
            src={`/images/project/${img}`}
            alt="Project"
            width={620}
            height={480}
         />

         <div className="my-8">
            <p className="text-lg font-bold uppercase leading-7 text-tertiary">
               {service}
            </p>
            <h3 className="mb-5 mt-2 text-2xl font-extrabold uppercase text-default">
               {title}
            </h3>

            <Button
               className="ml-2 flex h-10 w-[70px] items-center justify-center rounded-md bg-background-darkSecondary group-hover:bg-primary"
               variant="skew"
            >
               <RightArrow2Icon className="h-[12px] w-[23px] opacity-40 group-hover:opacity-100" />
            </Button>
         </div>
      </div>
   );
};

export { ProjectCard };
