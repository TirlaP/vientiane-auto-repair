import Link from "next/link";
import React from "react";

import { RightArrow2Icon } from "../ui/icons";
import { cn } from "@/lib/utils";
import { MotionDiv } from "../animations/motion";

interface FeatureCardProps {
   id: number;
   title: string;
   desc: string;
   Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
   isCenter?: boolean;
   index: number;
}

const FeatureCard = ({
   desc,
   Icon,
   id,
   title,
   isCenter,
   index,
}: FeatureCardProps) => {
   return (
      <MotionDiv
         initial="offscreen"
         whileInView="onscreen"
         viewport={{ once: true }}
         variants={{
            offscreen: {
               opacity: 0,
               y: 50,
            },
            onscreen: {
               opacity: 1,
               y: 0,
               transition: {
                  duration: 0.5,
                  delay: index * 0.1,
               },
            },
         }}
         className={cn(
            "relative mx-auto flex max-w-[335px] flex-col items-center justify-center gap-y-2 px-12 py-10 md:gap-y-4 md:px-0",
            isCenter ? "mx-auto sm:col-span-2 lg:col-span-1" : "",
         )}
      >
         <div className="absolute left-1/2 top-1/2 z-0 h-full w-[60%] -translate-x-1/2 -translate-y-1/2 -skew-x-6 rounded-sm bg-[#F5F6FA]" />
         <MotionDiv
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={{
               offscreen: {
                  opacity: 0,
                  scale: 0.25,
               },
               onscreen: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                     duration: 0.5,
                     delay: index * 0.1,
                  },
               },
            }}
            className="z-10 mb-2 ml-6 flex h-[66px] w-[75px] -skew-x-6 items-center justify-center rounded bg-primary *:block *:skew-x-6 md:h-[73px] md:w-[84px] lg:h-[81px] lg:w-[92px] xl:h-[90px] xl:w-[103px]"
         >
            <Icon className="h-8 w-11 fill-white lg:h-10 lg:w-[54px]" />
         </MotionDiv>
         <h4 className="z-10 text-sm font-extrabold uppercase text-default-black md:text-base lg:text-xl xl:text-2xl">
            {title}
         </h4>
         <p className="z-10 text-center font-body text-sm font-normal text-default-tertiary md:text-lg md:leading-7">
            {desc}
         </p>

         <Link
            href={`/features/${id}`}
            className="z-10 mr-6 mt-5 flex h-[20px] w-10 skew-x-12 items-center justify-center rounded border border-default-tertiary transition-all duration-100 *:block *:-skew-x-12 hover:border-primary hover:bg-primary *:hover:fill-white md:h-[30px] md:w-14"
         >
            <RightArrow2Icon className="h-2 w-4 fill-default-tertiary md:h-3 md:w-[23px]" />
         </Link>
      </MotionDiv>
   );
};

export { FeatureCard };
