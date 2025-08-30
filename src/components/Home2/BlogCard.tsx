import Image from "next/image";
import Link from "next/link";

import { type blog2Data } from "@/lib/mock-data";
import { CopyIcon, RightArrow2Icon } from "../ui/icons";
import { DateCard } from "../DateCard";
import { MotionDiv } from "../animations/motion";

type BlogCardProps = (typeof blog2Data)[0] & {
   index: number;
};

const BlogCard = ({
   category,
   desc,
   id,
   title,
   img,
   date,
   index,
}: BlogCardProps) => {
   return (
      <>
         <MotionDiv
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={{
               offscreen: {
                  opacity: 0,
                  x: (index + 1) % 2 === 0 ? -50 : 50,
               },
               onscreen: {
                  opacity: 1,
                  x: 0,
                  transition: {
                     duration: 0.5,
                  },
               },
            }}
            className="relative max-h-[360px] overflow-hidden"
         >
            <Image
               src={img}
               alt={category}
               width={440}
               height={360}
               quality={100}
               className="h-full w-full object-cover"
            />
            <DateCard
               date={date}
               className="absolute left-0 top-1/2 -translate-x-[36.5%] -translate-y-1/2"
               isRotate
            />
         </MotionDiv>
         <MotionDiv
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={{
               offscreen: {
                  opacity: 0,
                  x: (index + 1) % 2 === 0 ? 50 : -50,
                  scale: 0.3,
               },
               onscreen: {
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  transition: {
                     duration: 0.5,
                  },
               },
            }}
            className="flex max-h-[360px] flex-col gap-y-1 bg-[#F5F6FA] bg-[url('/images/bg-3.svg')] p-10 md:gap-2.5 lg:gap-y-4"
         >
            <div className="flex items-center gap-x-2">
               <CopyIcon className="fill-primary" />{" "}
               <p className="font-body text-base font-bold uppercase leading-6 text-default-tertiary">
                  {category}
               </p>
            </div>
            <h3 className="text-base font-extrabold uppercase leading-[34px] text-default-black md:text-lg lg:text-xl xl:text-2xl">
               {title}
            </h3>

            <p className="mt-0 font-body text-sm text-default-tertiary md:text-base lg:mt-1 lg:text-lg lg:leading-7">
               {desc}
            </p>

            <div>
               <Link
                  href={`/blog/${id}`}
                  className="group z-10 ml-1 mt-0 flex h-[30px] w-14 skew-x-12 items-center justify-center rounded border border-default-tertiary *:-skew-x-12 hover:border-primary hover:bg-primary md:mt-1.5 lg:mt-3"
               >
                  <RightArrow2Icon className="fill-default-tertiary group-hover:fill-white" />
               </Link>
            </div>
         </MotionDiv>
      </>
   );
};

export { BlogCard };
