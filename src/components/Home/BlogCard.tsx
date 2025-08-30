import Image from "next/image";
import Link from "next/link";

import { CopyIcon, RightArrow2Icon } from "@/components/ui/icons";
import { buttonVariants } from "@/components/ui/button";
import { type blogs1_data } from "@/lib/mock-data";
import { DateCard } from "@/components/DateCard";
import { cn } from "@/lib/utils";
import { MotionDiv } from "../animations/motion";

type BlogCardProps = (typeof blogs1_data)[0] & {
   isCenter?: boolean;
   index: number;
};

const BlogCard = ({
   category,
   description,
   title,
   date,
   month,
   img,
   id,
   isCenter,
   index,
}: BlogCardProps) => {
   return (
      <MotionDiv
         initial="offscreen"
         whileInView="onscreen"
         viewport={{ once: true }}
         variants={{
            offscreen: {
               opacity: 0,
               y: 20,
            },
            onscreen: {
               opacity: 1,
               y: 0,
               transition: {
                  duration: 0.5,
                  delay: 0.1 * index,
               },
            },
         }}
         className={cn(
            "group grid w-full items-center gap-y-3 rounded-sm bg-background-darkSecondary p-3 md:gap-y-5 md:p-10 lg:flex lg:gap-y-0",
            {
               "col-span-1 md:col-span-2 md:mx-auto md:w-[370px] lg:col-span-1 lg:mx-0 lg:w-auto":
                  isCenter,
            },
         )}
      >
         <div className="relative mx-auto md:mx-0">
            <Image src={img} alt="blog" width={400} height={260} />
            <DateCard
               className="absolute right-1 top-1 rounded-[2px] bg-opacity-20 lg:hidden"
               date={`${date} ${month}`}
            />
         </div>

         <div className="hidden lg:block">
            <div className="grid h-[80px] w-[180px] -rotate-90 place-content-center rounded-sm bg-primary text-default">
               <div className="flex items-center gap-x-3">
                  <span className="text-3xl font-extrabold leading-7">
                     {date}
                  </span>
                  <span className="text-lg font-extrabold leading-7">
                     {month}
                  </span>
               </div>
            </div>
         </div>

         <div className="grid flex-1 gap-y-2.5 md:gap-y-5">
            <div className="flex items-center gap-x-2">
               <CopyIcon className="fill-tertiary" />
               <p className="font-body text-[15px] font-bold uppercase leading-6 text-default-foreground">
                  {category}
               </p>
            </div>

            <h4 className="text-base font-extrabold uppercase leading-6 text-default md:text-lg md:leading-8 lg:text-2xl">
               {title}
            </h4>

            <p className="font-body text-base font-normal leading-6 text-default-foreground md:text-lg md:leading-7">
               {description}
            </p>

            <Link
               href={`/blogs/${id}`}
               className={buttonVariants({
                  variant: "skew",
                  className:
                     "ml-2 flex h-6 w-12 items-center justify-center rounded-sm bg-[#4A4D53] group-hover:bg-tertiary md:h-9 md:w-[70px]",
               })}
            >
               <RightArrow2Icon className="h-[12px] w-[23px] fill-white opacity-60 group-hover:fill-black group-hover:opacity-100" />
            </Link>
         </div>
      </MotionDiv>
   );
};

export { BlogCard };
