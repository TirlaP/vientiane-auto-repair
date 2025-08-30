import Image from "next/image";
import Link from "next/link";

import { AutomobileIcon, CarServiceIcon, RightArrowIcon } from "../ui/icons";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { MotionDiv } from "../animations/motion";

interface AboutProps {
   isPage?: boolean;
}

const About = ({ isPage }: AboutProps) => {
   return (
      <section
         className={cn(
            "container max-w-[--container-2] space-y-5 overflow-hidden font-header lg:space-y-0",
            isPage
               ? "py-8 sm:py-16 md:py-20 lg:py-24 xl:py-32 2xl:py-[150px]"
               : "pb-8 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-32 2xl:pb-[150px]",
         )}
      >
         <div className="grid grid-cols-1 gap-x-0 gap-y-5 lg:grid-cols-2 lg:gap-y-0">
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
            >
               <Image
                  src="/images/image-59.png"
                  alt="Fxiton_about"
                  width={860}
                  height={600}
                  quality={100}
                  className="h-auto max-w-full"
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
               className="flex flex-col gap-y-3 px-5 md:gap-y-3 lg:gap-y-8 xl:px-16"
            >
               <p className="relative z-10 text-sm font-extrabold uppercase leading-7 text-default-black before:absolute before:-left-2 before:top-1/2 before:-z-10 before:ml-0.5 before:h-[23px] before:w-[23px] before:-translate-x-0 before:-translate-y-1/2 before:rounded-full before:bg-tertiary before:content-[''] md:text-base">
                  {isPage ? "Why choose us" : "About Autofix"}
               </p>

               <h2 className="text-2xl font-black uppercase text-default-black lg:text-4xl lg:leading-tight xl:text-5xl">
                  master mechanics <br /> at your service
               </h2>

               <p className="font-body text-base font-normal text-default-tertiary lg:text-lg lg:leading-7">
                  Because they note vehicles emotions diseu suspendisse netus
                  venenats sem rilus neque aliquet morbie green great over
                  called
               </p>

               <div className="flex items-start gap-x-5 lg:gap-x-10">
                  <div>
                     <div className="flex h-[49px] w-14 skew-x-6 items-center justify-center rounded bg-primary *:-skew-x-6 lg:h-[70px] lg:w-20">
                        <AutomobileIcon className="h-9 w-9 fill-white lg:h-11 lg:w-11" />
                     </div>
                  </div>
                  <div className="-mt-2 grid items-center gap-y-1.5 lg:gap-y-3">
                     <h3 className="text-base font-extrabold uppercase text-default-black lg:text-2xl lg:leading-9">
                        Expert mechanic
                     </h3>
                     <p className="font-body text-base text-default-tertiary lg:text-lg lg:leading-7">
                        Because they note vehicles emotions diseu suspen netus{" "}
                        <br />
                        benenats sem rilus neque.
                     </p>
                  </div>
               </div>

               <div className="flex items-start gap-x-5 lg:gap-x-10">
                  <div>
                     <div className="flex h-[49px] w-14 skew-x-6 items-center justify-center rounded bg-primary *:-skew-x-6 lg:h-[70px] lg:w-20">
                        <CarServiceIcon className="h-9 w-9 fill-white lg:h-11 lg:w-11" />
                     </div>
                  </div>
                  <div className="-mt-2 grid items-center gap-y-1.5 lg:gap-y-3">
                     <h3 className="text-base font-extrabold uppercase text-default-black lg:text-2xl lg:leading-9">
                        Expert mechanic
                     </h3>
                     <p className="font-body text-base text-default-tertiary lg:text-lg lg:leading-7">
                        Because they note vehicles emotions diseu suspen netus{" "}
                        <br />
                        benenats sem rilus neque.
                     </p>
                  </div>
               </div>
            </MotionDiv>
         </div>

         <div className="grid grid-cols-1 gap-x-0 gap-y-5 lg:grid-cols-2 lg:gap-y-0">
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
               className="flex flex-col items-start justify-end px-5 xl:px-16"
            >
               <div className="grid w-full gap-y-3 lg:gap-y-8">
                  <h2 className="text-2xl font-black uppercase text-default-black lg:text-4xl lg:leading-tight xl:text-5xl">
                     reliable <br /> remarkable result
                  </h2>
                  <p className="font-body text-base font-normal text-default-tertiary lg:text-lg lg:leading-7">
                     Because they note vehicles emotions suspendisse netus
                     venena <br /> sem rilus neque aliquet morbie green for the
                     called.
                  </p>

                  <div className="grid gap-y-2.5 lg:gap-y-4">
                     <div className="flex items-center gap-x-2">
                        <Image
                           src="/images/icon-1.png"
                           alt="check"
                           width={23}
                           height={18}
                        />
                        <h5 className="text-base font-extrabold uppercase text-default-black lg:text-lg lg:leading-7">
                           on a mission to fix
                        </h5>
                     </div>
                     <div className="flex items-center gap-x-2">
                        <Image
                           src="/images/icon-1.png"
                           alt="check"
                           width={23}
                           height={18}
                        />
                        <h5 className="text-base font-extrabold uppercase text-default-black lg:text-lg lg:leading-7">
                           Driving Quality Repairs Home
                        </h5>
                     </div>
                     <div className="flex items-center gap-x-2">
                        <Image
                           src="/images/icon-1.png"
                           alt="check"
                           width={23}
                           height={18}
                        />
                        <h5 className="text-base font-extrabold uppercase text-default-black lg:text-lg lg:leading-7">
                           Engineered to Perfection
                        </h5>
                     </div>
                  </div>

                  <div className="ml-1.5">
                     <Link
                        className={buttonVariants({
                           variant: "skewBig",
                           size: "skewBig",
                        })}
                        href="/about"
                     >
                        <span>ABOUT MORE</span>
                        <RightArrowIcon className="fill-white" />
                     </Link>
                  </div>
               </div>
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
            >
               <Image
                  src="/images/image-60.png"
                  alt="Fxiton_about"
                  width={860}
                  height={600}
                  quality={100}
               />
            </MotionDiv>
         </div>
      </section>
   );
};

export { About };
