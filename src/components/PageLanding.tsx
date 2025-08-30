import { MotionDiv, MotionH1 } from "./animations/motion";

interface LandingProps {
   title: string;
   header: string;
}

const PageLanding = ({ header, title }: LandingProps) => {
   return (
      <section className="relative h-[250px] !w-full bg-[url('/images/image-34.png')] bg-cover bg-center bg-no-repeat font-header md:h-[350px] lg:h-[450px] xl:h-[550px]">
         <div className="absolute left-1/2 top-1/2 grid -translate-x-1/2 -translate-y-1/2">
            <MotionDiv
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
                        delay: 0.3,
                     },
                  },
               }}
               className="mx-auto flex h-6 w-auto -skew-x-12 items-center justify-center rounded-[4px] bg-tertiary px-3 *:skew-x-0 lg:h-[30px]"
            >
               <div className="flex items-center justify-center gap-x-1">
                  <div className="h-[6px] w-[6px] rounded-full bg-[#846E00]" />
                  <span className="text-sm font-bold text-default-black lg:text-base lg:font-extrabold">
                     {title}
                  </span>
                  <div className="h-[6px] w-[6px] rounded-full bg-[#846E00]" />
               </div>
            </MotionDiv>
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
               className="text-center text-2xl font-black uppercase text-white md:text-3xl lg:text-5xl xl:text-7xl"
            >
               {header}
            </MotionH1>
         </div>
      </section>
   );
};

export { PageLanding };
