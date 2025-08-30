import { type blogs_data } from "@/lib/mock-data";
import Image from "next/image";
import React from "react";
import { CopyIcon, RightArrow2Icon } from "../ui/icons";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { DateCard } from "../DateCard";

const BlogCard = ({
   category,
   desc,
   id,
   img,
   title,
}: (typeof blogs_data)[0]) => {
   return (
      <div className="flex flex-col items-center gap-0 overflow-hidden lg:flex-row">
         <div className="relative h-[280px] w-full md:h-[380px] lg:h-auto lg:w-[400px]">
            <DateCard
               date="22 March"
               isRotate
               className="absolute left-0 top-1/2 -translate-x-[36.5%] -translate-y-1/2"
            />
            <Image
               src={`/images/${img}`}
               alt={title}
               width={400}
               height={395}
               quality={50}
               className="h-[280px] w-full object-cover md:h-[380px] lg:h-auto"
            />
         </div>
         <div className="grid h-full w-full flex-1 gap-y-2 rounded-r-sm bg-background-fade p-3 lg:p-3.5 xl:p-12">
            <div className="flex items-center gap-x-1 md:gap-x-2">
               <CopyIcon className="h-3.5 w-3.5 fill-primary md:h-5 md:w-4" />{" "}
               <span className="font-body text-sm font-bold uppercase text-default-tertiary md:text-base">
                  {category}
               </span>
            </div>
            <h2 className="font-header text-base font-extrabold uppercase text-default-black md:text-lg lg:text-xl xl:text-2xl xl:leading-10 2xl:text-3xl">
               {title}
            </h2>
            <p className="text-base font-normal text-default-tertiary lg:text-lg lg:leading-7">
               {desc}
            </p>
            <Link
               href={`/blogs/${id}`}
               className={buttonVariants({
                  variant: "skew",
                  className:
                     "group ml-1 flex h-[30px] w-14 items-center justify-center rounded-sm border border-default-tertiary bg-white transition-all duration-150 hover:border-primary hover:bg-primary hover:text-white",
               })}
            >
               <RightArrow2Icon className="h-3 w-6 fill-default-tertiary group-hover:fill-white" />
            </Link>
         </div>
      </div>
   );
};

export { BlogCard };
