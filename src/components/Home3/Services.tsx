import Link from "next/link";

import { service2Data } from "@/lib/mock-data";
import { ServiceCard } from "./ServiceCard";
import { RightArrowIcon } from "../ui/icons";
import { buttonVariants } from "../ui/button";
import { MotionDiv, MotionH2, MotionP } from "../animations/motion";

const Services = () => {
   const cardData = service2Data.slice(0, 3);

   return (
      <section className="bg-[#F5F6FA] bg-[url('/images/bg-3.svg')] py-9 md:py-[80px] lg:py-[120px] xl:py-[150px]">
         <div className="container flex flex-col items-center justify-center px-5 font-header 2xl:px-0">
            <MotionP
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
               className="relative z-10 text-center text-base font-extrabold uppercase leading-7 text-default-black before:absolute before:-left-2 before:top-1/2 before:-z-10 before:ml-0.5 before:h-[23px] before:w-[23px] before:-translate-x-0 before:-translate-y-1/2 before:rounded-full before:bg-tertiary before:content-[''] md:text-lg"
            >
               Our service
            </MotionP>
            <MotionH2
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
               className="mb-6 mt-4 text-center text-2xl font-black uppercase md:mb-9 lg:mb-12 lg:text-3xl xl:mb-[60px] xl:text-5xl xl:leading-heavy"
            >
               stylish Repairs for <br /> stylish rides
            </MotionH2>

            <div className="grid w-full gap-2.5 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-[30px]">
               {cardData.map((s, index) => {
                  return (
                     <ServiceCard
                        key={s.id}
                        Icon={s.Icon}
                        desc={s.desc}
                        id={s.id}
                        title={s.title}
                        index={index}
                        isCenter={
                           (index + 1) % 2 !== 0 &&
                           index === cardData.length - 1
                        }
                     />
                  );
               })}
            </div>

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
                     },
                  },
               }}
               className="mt-7 flex flex-col items-center justify-center md:mt-10 lg:mt-[50px]"
            >
               <p className="mb-2.5 text-center text-lg font-black uppercase text-default-tertiary lg:mb-4 xl:mb-6">
                  exceptional service for exceptional cars
               </p>

               <Link
                  href="/all-services"
                  className={buttonVariants({
                     variant: "skewBig",
                     size: "skewBig",
                  })}
               >
                  <span>all service</span>
                  <RightArrowIcon className="fill-white" />
               </Link>
            </MotionDiv>
         </div>
      </section>
   );
};

export { Services };
