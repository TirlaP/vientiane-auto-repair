import React from "react";
import Link from "next/link";

import { buttonVariants } from "../ui/button";
import { RightArrow2Icon } from "../ui/icons";
import { MotionDiv } from "../animations/motion";

interface ServiceCardProps {
   id: number;
   title: string;
   desc: string;
   Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
   index: number;
}

const ServiceCard = ({ Icon, desc, id, title, index }: ServiceCardProps) => {
   return (
      <MotionDiv
         initial="offscreen"
         whileInView="onscreen"
         viewport={{ once: true }}
         variants={{
            offscreen: { opacity: 0, scale: 0.2 },
            onscreen: {
               opacity: 1,
               scale: 1,
               transition: { duration: 0.5, delay: index * 0.1 },
            },
         }}
         className="bg-background-dark"
      >
         <div className="flex h-full w-full flex-col items-center justify-center gap-y-3 rounded-sm border border-white/15 bg-white/10 bg-[url('/images/icon-9.png')] bg-center bg-no-repeat p-3 md:gap-y-6 md:p-5 lg:gap-y-8">
            <div className="flex h-[56px] w-[64px] skew-x-6 items-center justify-center rounded bg-primary *:-skew-x-6 md:h-[70px] md:w-[80px]">
               <Icon className="h-11 w-11 fill-white" />
            </div>
            <div className="grid gap-y-3">
               <h3 className="text-center text-lg font-extrabold uppercase leading-8 md:text-2xl">
                  {title}
               </h3>
               <p className="mx-auto text-center font-body text-base font-normal text-default-foreground md:text-lg">
                  {desc}
               </p>
            </div>
            <div>
               <Link
                  href={`/services/${id}`}
                  className={buttonVariants({
                     variant: "skew",
                     className: "h-[30px] w-14 bg-white/10",
                  })}
               >
                  <RightArrow2Icon className="h-3 w-6 fill-white/40" />
               </Link>
            </div>
         </div>
      </MotionDiv>
   );
};

export { ServiceCard };
