import Image from "next/image";
import Link from "next/link";

import { MotionDiv } from "../animations/motion";
import { buttonVariants } from "../ui/button";
import { RightArrowIcon } from "../ui/icons";

const About = () => {
   return (
      <section className="flex flex-col gap-x-4 py-9 font-header md:py-[80px] lg:flex-row lg:py-[120px] xl:gap-x-10 xl:py-[150px] 2xl:gap-x-28">
         <MotionDiv
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
            <div className="relative max-w-[870px]">
               <Image
                  src="/images/image-12.png"
                  width={863}
                  height={643}
                  alt="about"
                  className="object-contain"
               />
            </div>
         </MotionDiv>

         <MotionDiv
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
            className="max-w-[600px] space-y-4 px-3.5 lg:space-y-5 xl:space-y-10 xl:px-0"
         >
            <p className="relative z-10 text-sm font-extrabold uppercase leading-6 text-default-black before:absolute before:-left-2 before:top-1/2 before:-z-10 before:ml-0.5 before:h-[23px] before:w-[23px] before:-translate-x-0 before:-translate-y-1/2 before:rounded-full before:bg-tertiary before:content-[''] md:text-base">
               about autofix
            </p>

            <h2 className="text-2xl font-black uppercase lg:text-3xl xl:text-5xl xl:leading-heavy">
               master mechanics at your service
            </h2>

            <p className="font-body text-base font-normal text-default-tertiary lg:text-lg">
               Because they note vehicles emotions diseu suspendisse netus
               venenats sem rilus neque aliquet morbie green great over called
            </p>

            <div>
               <h4 className="mb-3 text-lg font-extrabold uppercase text-default-black lg:text-2xl">
                  expert mechanic
               </h4>
               <p className="font-body text-base font-normal text-default-tertiary lg:text-lg">
                  Because they note vehicles emotions diseu suspen netus
                  benenats sem rilus neque Faucibus inceptos nullam varius
                  facilisi.
               </p>
            </div>

            <div>
               <h4 className="mb-3 text-lg font-extrabold uppercase text-default-black lg:text-2xl">
                  on time delivery
               </h4>
               <p className="font-body text-base font-normal text-default-tertiary lg:text-lg">
                  Because they note vehicles emotions diseu suspen netus
                  benenats sem rilus neque Faucibus inceptos nullam varius
                  facilisi.
               </p>
            </div>

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
                        delay: 0.4,
                     },
                  },
               }}
               className="ml-0.5"
            >
               <Link
                  href="/learn-more"
                  className={buttonVariants({
                     size: "skewBig",
                     variant: "skewBig",
                  })}
               >
                  <span>about more</span>
                  <RightArrowIcon className="fill-white" />
               </Link>
            </MotionDiv>
         </MotionDiv>
      </section>
   );
};

export { About };

