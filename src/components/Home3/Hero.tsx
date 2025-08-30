import { RightArrowIcon } from "../ui/icons";
import { buttonVariants } from "../ui/button";
import { MotionH1, MotionLink, MotionP } from "../animations/motion";

const Hero = () => {
   return (
      <section className="flex h-[400px] w-full items-center justify-center bg-[url('/images/image-34.png')] bg-cover bg-center bg-no-repeat font-header text-white md:h-[500px] lg:h-[600px] xl:h-[810px]">
         <div className="flex flex-col items-center justify-center gap-y-3 md:gap-y-3 lg:gap-y-4 xl:gap-y-5">
            <MotionP
               initial="offscreen"
               whileInView="onscreen"
               viewport={{ once: true }}
               variants={{
                  offscreen: {
                     opacity: 0,
                     y: -50,
                  },
                  onscreen: {
                     opacity: 1,
                     y: 0,
                     transition: {
                        duration: 0.5,
                        delay: 0.35,
                     },
                  },
               }}
               className="text-center text-sm font-medium uppercase leading-7 md:text-base lg:text-xl"
            >
               first class performance
            </MotionP>
            <MotionH1
               initial="offscreen"
               whileInView="onscreen"
               viewport={{ once: true }}
               variants={{
                  offscreen: {
                     opacity: 0,
                     y: -50,
                  },
                  onscreen: {
                     opacity: 1,
                     y: 0,
                     transition: {
                        duration: 0.5,
                     },
                  },
               }}
               className="text-center text-4xl font-black uppercase md:text-5xl lg:text-7xl xl:text-[90px] xl:leading-[90px]"
            >
               engineering for <br /> auto service
            </MotionH1>

            <MotionLink
               initial="offscreen"
               whileInView="onscreen"
               viewport={{ once: true }}
               variants={{
                  offscreen: {
                     opacity: 0,
                     scale: 0.2,
                  },
                  onscreen: {
                     opacity: 1,
                     scale: 1,
                     transition: {
                        duration: 0.5,
                     },
                  },
               }}
               href="/learn-more"
               className={buttonVariants({
                  size: "skewBig",
                  variant: "skewBig",
                  className: "*:skew-x-0",
               })}
            >
               <span>learn more</span>
               <RightArrowIcon className="fill-white" />
            </MotionLink>
         </div>
      </section>
   );
};

export { Hero };
