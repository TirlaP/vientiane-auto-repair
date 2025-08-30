import Link from "next/link";

import { buttonVariants } from "../ui/button";
import { RightArrow2Icon } from "../ui/icons";
import { cn } from "@/lib/utils";
import { MotionDiv } from "../animations/motion";

interface ServiceCardProps {
   id: number;
   title: string;
   desc: string;
   Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
   isCenter?: boolean;
   index: number;
}

const ServiceCard = ({
   Icon,
   desc,
   id,
   title,
   isCenter,
   index,
}: ServiceCardProps) => {
   return (
      <MotionDiv
         initial="offscreen"
         whileInView="onscreen"
         viewport={{ once: true }}
         variants={{
            offscreen: {
               opacity: 0,
               scale: 0.3,
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
         className={cn(
            "mx-auto max-h-[344px] max-w-[420px] bg-white md:mx-0",
            isCenter
               ? "col-span-1 md:col-span-2 md:mx-auto lg:col-span-1 lg:mx-0"
               : "",
         )}
      >
         <div className="flex h-full w-full flex-col items-center justify-center gap-y-8 rounded-sm border border-[#DDE0E3] bg-[url('/images/icon-9.png')] bg-center bg-no-repeat py-7">
            <div className="flex h-[70px] w-[80px] skew-x-6 items-center justify-center rounded bg-primary *:-skew-x-6">
               <Icon className="h-11 w-11 fill-white" />
            </div>
            <div className="grid gap-y-2 md:gap-y-2.5 lg:gap-y-3">
               <h3 className="text-center text-lg font-extrabold uppercase leading-8 lg:text-xl xl:text-2xl">
                  {title}
               </h3>
               <p className="mx-auto max-w-[356px] text-center font-body text-sm font-normal text-default-foreground md:text-base lg:text-lg">
                  {desc}
               </p>
            </div>
            <div>
               <Link
                  href={`/services/${id}`}
                  className={buttonVariants({
                     variant: "skew",
                     className:
                        "group flex h-[30px] w-14 items-center justify-center rounded-sm border border-default-tertiary bg-white transition-all duration-150 hover:border-primary hover:bg-primary hover:text-white",
                  })}
               >
                  <RightArrow2Icon className="h-3 w-6 fill-default-tertiary group-hover:fill-white" />
               </Link>
            </div>
         </div>
      </MotionDiv>
   );
};

export { ServiceCard };
