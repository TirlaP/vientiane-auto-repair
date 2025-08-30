"use client";
import Link from "next/link";

import { ServiceCard } from "@/components/Home/ServiceCard";
import { buttonVariants } from "@/components/ui/button";
import { RightArrowIcon } from "@/components/ui/icons";
import { service1_data } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { MotionDiv, MotionH2 } from "@/components/animations/motion";

interface ServiceSectionProps {
   isWhite?: boolean;
}

const ServiceSection = ({ isWhite }: ServiceSectionProps) => {
   return (
      <section
         className={cn(
            "w-full overflow-hidden bg-cover py-10 sm:py-14 lg:py-[150px]",
            isWhite
               ? "bg-white"
               : "bg-default-black bg-[url('/images/bg-1.svg')]",
         )}
      >
         <div className="container flex h-full flex-col items-center justify-center px-5 font-header xl:px-0">
            <MotionDiv
               className="mb-5"
               initial="offscreen"
               whileInView="onscreen"
               viewport={{ once: true }}
               variants={{
                  offscreen: {
                     opacity: 0,
                     x: -100,
                  },
                  onscreen: {
                     opacity: 1,
                     x: 0,
                     transition: {
                        duration: 0.5,
                     },
                  },
               }}
            >
               <p className="-skew-x-12 rounded bg-tertiary px-5 py-1 text-center text-base font-extrabold leading-snug text-default-black *:block *:skew-x-12">
                  <span>OUR SERVICE</span>
               </p>
            </MotionDiv>
            <MotionH2
               className={cn(
                  "text-center text-[40px] font-black uppercase leading-[50px] md:text-[60px] md:leading-[70px]",
                  isWhite ? "text-default-black" : "text-white",
               )}
               initial="offscreen"
               whileInView="onscreen"
               viewport={{ once: true }}
               variants={{
                  offscreen: {
                     opacity: 0,
                     x: 100,
                  },
                  onscreen: {
                     opacity: 1,
                     x: 0,
                     transition: {
                        duration: 0.5,
                     },
                  },
               }}
            >
               our featured <br /> service
            </MotionH2>
            <div className="mt-6 grid grid-cols-1 gap-5 md:mt-10 md:grid-cols-2 md:gap-10">
               {service1_data.map((service, index) => (
                  <ServiceCard
                     key={service.id}
                     {...service}
                     isWhite={isWhite ?? false}
                     index={index}
                  />
               ))}
            </div>
            {isWhite ? null : (
               <MotionDiv
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true }}
                  variants={{
                     offscreen: {
                        opacity: 0,
                     },
                     onscreen: {
                        opacity: 1,
                        transition: {
                           duration: 2,
                           bounce: 0.25,
                           type: "spring",
                        },
                     },
                  }}
                  className="mt-8 flex flex-col items-center justify-center md:mt-11 lg:mt-[60px]"
               >
                  <h1 className="text-center text-lg font-extrabold uppercase leading-7 text-default-foreground">
                     if you interested visit to our all service
                  </h1>
                  <div className="mt-8">
                     <Link
                        href="/services"
                        className={buttonVariants({
                           className:
                              "h-[43px] w-[152px] md:h-[54px] md:w-[191px]",
                           variant: "skewBig",
                           size: "skewBig",
                        })}
                     >
                        <span>ALL SERVICE</span>{" "}
                        <RightArrowIcon className="fill-white" />
                     </Link>
                  </div>
               </MotionDiv>
            )}
         </div>
      </section>
   );
};

export { ServiceSection };
