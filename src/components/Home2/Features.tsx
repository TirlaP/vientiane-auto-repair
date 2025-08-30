import { MotionDiv, MotionH2 } from "../animations/motion";
import { FeatureCard } from "./FeatureCard";
import { feature2Data } from "@/lib/mock-data";

const Features = () => {
   return (
      <section className="container py-14 font-header md:py-20 lg:py-[120px] xl:py-[150px]">
         <div className="flex flex-col items-center justify-center">
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
               className="relative z-10 py-5 text-sm font-extrabold uppercase leading-7 text-default-black before:absolute before:-left-2 before:top-1/2 before:-z-10 before:ml-0.5 before:h-[23px] before:w-[23px] before:-translate-x-0 before:-translate-y-1/2 before:rounded-full before:bg-tertiary before:content-[''] md:text-base"
            >
               core feature
            </MotionDiv>
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
               className="text-default-dark text-center text-2xl font-black uppercase lg:text-3xl xl:text-5xl xl:leading-heavy"
            >
               quality & trusted <br /> repair service
            </MotionH2>

            <div className="mt-5 grid w-full grid-cols-1 gap-x-3 gap-y-5 sm:grid-cols-2 md:mt-9 lg:mt-14 lg:grid-cols-3">
               {feature2Data.map((f, index) => (
                  <FeatureCard
                     key={f.id}
                     Icon={f.icon}
                     desc={f.desc}
                     id={f.id}
                     title={f.title}
                     isCenter={
                        (index + 1) % 2 !== 0 &&
                        index === feature2Data.length - 1
                     }
                     index={index}
                  />
               ))}
            </div>
         </div>
      </section>
   );
};

export { Features };
