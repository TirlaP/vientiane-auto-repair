"use client";
import Image from "next/image";
import Link from "next/link";

import { type project3Data } from "@/lib/mock-data";
import { RightArrow2Icon } from "./ui/icons";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { MotionDiv } from "./animations/motion";

const ProjectCard = ({
   category,
   id,
   title,
   img,
   isWhite,
   index,
}: (typeof project3Data)[0] & { isWhite?: boolean; index: number }) => {
   return (
      <MotionDiv
         initial="offscreen"
         whileInView="onscreen"
         viewport={{ once: true }}
         variants={{
            offscreen: { opacity: 0, x: (index + 1) % 2 === 0 ? -200 : 200 },
            onscreen: {
               opacity: 1,
               x: 0,
               transition: { duration: 0.5 },
            },
         }}
         className="w-full"
      >
         <Image
            src={img}
            alt={title}
            width={645}
            height={580}
            className="h-auto max-w-full overflow-hidden rounded-md object-cover"
         />
         <div className="mt-4 md:mt-7">
            <p
               className={cn(
                  "text-sm font-extrabold uppercase md:text-base lg:text-lg",
                  isWhite
                     ? "text-default-tertiary "
                     : "font-header text-tertiary",
               )}
            >
               {category}
            </p>
            <h4
               className={cn(
                  "text-lg font-extrabold uppercase md:text-xl lg:text-2xl xl:text-3xl",
                  isWhite ? "text-default-black" : "text-default",
               )}
            >
               {title}
            </h4>

            <div className="ml-1 mt-2 md:mt-3.5 lg:mt-4 xl:mt-6">
               <div>
                  <Link
                     href={`/projects/${id}`}
                     className={buttonVariants({
                        variant: "skew",
                        className: cn(
                           "group flex h-8 w-14 items-center justify-center rounded-sm border border-default-tertiary transition-all duration-150 hover:border-primary hover:bg-primary hover:text-white",
                           isWhite
                              ? "bg-white"
                              : "border-[#292E36] bg-[#292E36]",
                        ),
                     })}
                  >
                     <RightArrow2Icon
                        className={cn(
                           "h-2 w-4 fill-white opacity-70 group-hover:fill-white group-hover:opacity-100 lg:h-3 lg:w-6",
                           {
                              "fill-primary": isWhite,
                           },
                        )}
                     />
                  </Link>
               </div>
            </div>
         </div>
      </MotionDiv>
   );
};

export { ProjectCard };
