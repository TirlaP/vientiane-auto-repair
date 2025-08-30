import { service2Data } from "@/lib/mock-data";
import Image from "next/image";
import React from "react";
import { ServiceCard } from "./ServiceCard";
import { MotionDiv, MotionH2, MotionP } from "../animations/motion";

const Services = () => {
   return (
      <section className="overflow-hidden bg-background-dark bg-[url('/images/bg-1.svg')] py-9 text-white md:py-14 lg:py-[120px] xl:py-[150px]">
         <div className="container flex flex-col items-center justify-center gap-y-2.5 px-5 font-header md:gap-y-5 xl:px-0">
            <MotionP
               initial="offscreen"
               whileInView="onscreen"
               viewport={{ once: true }}
               variants={{
                  offscreen: { opacity: 0, x: -200 },
                  onscreen: {
                     opacity: 1,
                     x: 0,
                     transition: { duration: 0.5 },
                  },
               }}
               className="relative z-10 text-center text-sm font-extrabold uppercase leading-7 text-tertiary before:absolute before:-left-2 before:top-1/2 before:-z-10 before:ml-0.5 before:h-[23px] before:w-[23px] before:-translate-x-0 before:-translate-y-1/2 before:rounded-full before:bg-background-darkSecondary before:content-[''] md:text-lg"
            >
               Our service
            </MotionP>
            <MotionH2
               initial="offscreen"
               whileInView="onscreen"
               viewport={{ once: true }}
               variants={{
                  offscreen: { opacity: 0, x: 200 },
                  onscreen: {
                     opacity: 1,
                     x: 0,
                     transition: { duration: 0.5 },
                  },
               }}
               className="text-default-dark text-center text-2xl font-black uppercase lg:text-3xl xl:text-5xl xl:leading-heavy"
            >
               stylish Repairs for <br /> stylish rides
            </MotionH2>

            <div className="col-span-1 my-4 grid gap-4 md:my-8 md:grid-cols-3 lg:gap-[30px]">
               <MotionDiv
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true }}
                  variants={{
                     offscreen: { opacity: 0, x: -200 },
                     onscreen: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.5 },
                     },
                  }}
                  className="col-span-2 md:col-span-1"
               >
                  <Image
                     src="/images/image-30.png"
                     alt="service"
                     width={420}
                     height={718}
                     className="h-auto w-full"
                     quality={70}
                  />
               </MotionDiv>
               <MotionDiv
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true }}
                  variants={{
                     offscreen: { opacity: 0, x: 200 },
                     onscreen: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.5 },
                     },
                  }}
                  className="col-span-2 grid grid-cols-2 gap-4 lg:gap-[30px]"
               >
                  {service2Data.map((s, index) => (
                     <ServiceCard
                        key={s.id}
                        Icon={s.Icon}
                        desc={s.desc}
                        id={s.id}
                        title={s.title}
                        index={index}
                     />
                  ))}
               </MotionDiv>
            </div>
         </div>
      </section>
   );
};

export { Services };
