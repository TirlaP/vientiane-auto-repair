import Link from "next/link";
import Image from "next/image";

import { Separator } from "../ui/separator";
import { buttonVariants } from "../ui/button";
import { RightArrowIcon, WaterPumpIcon } from "../ui/icons";
import { MotionDiv } from "../animations/motion";

const Offers = () => {
   return (
      <section className="relative bg-background-dark bg-[url('/images/bg-1.svg')] py-5 font-header text-white md:py-8 lg:py-[75px] xl:h-[420px]">
         <div className="container grid grid-cols-1 justify-between px-5 md:grid-cols-2 lg:justify-start">
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
            >
               <div className="flex flex-col gap-x-5 lg:flex-row">
                  <h3 className="my-auto text-xl font-black text-tertiary md:text-2xl lg:text-5xl lg:leading-heavy">
                     30% <br />
                     OFF
                  </h3>
                  <Separator
                     orientation="vertical"
                     className="my-auto hidden h-[120px] w-[1px] lg:block"
                  />
                  <div className="relative">
                     <h3 className="text-3xl font-black uppercase md:text-5xl lg:leading-heavy">
                        exclusive <br />
                        offers <br />
                        for this week
                     </h3>
                     <div className="absolute -bottom-20 left-1.5 lg:-bottom-24">
                        <Link
                           className={buttonVariants({
                              variant: "skewBig",
                              size: "skewBig",
                           })}
                           href="#"
                        >
                           <span>GET DISCOUNT</span>
                           <RightArrowIcon className="fill-white" />
                        </Link>
                     </div>
                  </div>
               </div>
            </MotionDiv>

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
               className="flex w-full items-center justify-end lg:justify-start"
            >
               <div>
                  <div className="-mt-8 ml-0 flex h-[160px] w-[140px] flex-col items-center justify-center gap-y-2 rounded-full bg-primary md:ml-14 lg:ml-20">
                     <h4 className="text-center text-3xl font-extrabold leading-[50px]">
                        25K
                     </h4>
                     <p className="text-center text-base font-extrabold uppercase">
                        satisfied <br />
                        clients
                     </p>
                  </div>

                  <WaterPumpIcon className="h-[120px] w-[131px] fill-white opacity-10" />
               </div>
            </MotionDiv>
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
            className="xl:absolute xl:right-0 xl:top-0 xl:block"
         >
            <div
               className="absolute right-0 w-full bg-tertiary bg-[url('/images/bg-1.svg')] xl:h-[420px] xl:w-[525px]"
               style={{
                  clipPath: "polygon(20% 0%, 100% 0, 100% 100%, 0% 100%)",
               }}
            />
            <div className="relative z-10 -mt-20 md:mt-0 xl:mt-10">
               <Image
                  src="/images/image-18.png"
                  alt="Offer"
                  width={734}
                  height={440}
                  quality={100}
                  className="ml-auto"
               />
            </div>
         </MotionDiv>
      </section>
   );
};

export { Offers };
