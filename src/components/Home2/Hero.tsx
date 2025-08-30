import Image from "next/image";
import Link from "next/link";

import { MotionDiv } from "@/components/animations/motion";
import { buttonVariants } from "@/components/ui/button";
import { RightArrowIcon } from "@/components/ui/icons";
import { HeroFeatures } from "./HeroFeatures";

const Hero = () => {
   return (
      <section className="relative bg-background-dark pb-[100px] pt-[40px] font-header text-default md:pb-[166.5px] md:pt-[80px] lg:pb-[208px] lg:pt-[11px] xl:pb-[260px] xl:pt-[150px]">
         <div className="container">
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
               className="px-5 xl:px-0"
            >
               <h1 className="text-4xl font-black uppercase md:text-6xl lg:text-[70px] lg:leading-[90px] xl:text-[80px]">
                  best car <br /> engineering <br /> company
               </h1>
               <p className="lx:text-xl my-2.5 text-base font-bold md:text-lg lg:my-5 xl:leading-7">
                  Because they are not vehicles they are a emotions
               </p>

               <div className="my-3 ml-1.5 md:my-5 lg:my-7 xl:my-10">
                  <Link
                     className={buttonVariants({
                        variant: "skewBig",
                        size: "skewBig",
                     })}
                     href="/about"
                  >
                     <span>LEARN MORE</span>
                     <RightArrowIcon className="fill-white" />
                  </Link>
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
                     transition: { duration: 0.5, delay: 0.5 },
                  },
               }}
               className="relative ml-auto w-full lg:hidden"
            >
               <Image
                  src="/images/image-18.png"
                  className="h-auto w-full object-cover"
                  alt="autofix"
                  width={530}
                  height={400}
                  quality={100}
               />
            </MotionDiv>
         </div>

         <MotionDiv
            className="absolute right-0 top-[83%] hidden w-full -translate-y-full lg:block lg:h-[450px] lg:w-1/2 xl:h-[665px]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={{
               offscreen: { opacity: 0 },
               onscreen: {
                  opacity: 1,
                  transition: { duration: 1 },
               },
            }}
         >
            <Image
               src="/images/image-19.png"
               alt="autofix"
               quality={100}
               width={660}
               height={600}
               className="absolute mr-auto h-auto w-full object-contain"
            />
         </MotionDiv>

         <HeroFeatures />
      </section>
   );
};

export { Hero };

