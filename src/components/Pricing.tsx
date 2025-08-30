import { pricingData } from "@/lib/mock-data";
import { PricingCard } from "./PricingCard";
import { MotionH2, MotionP } from "./animations/motion";

const PricingSection = () => {
   return (
      <section className="overflow-hidden py-11 font-header md:py-24 lg:py-32 xl:py-[150px]">
         <div className="container flex flex-col items-center justify-center">
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
               className="relative z-10 mb-4 text-base font-extrabold uppercase leading-6 text-default-black before:absolute before:-left-2 before:top-1/2 before:-z-10 before:ml-0.5 before:h-[23px] before:w-[23px] before:-translate-x-0 before:-translate-y-1/2 before:rounded-full before:bg-tertiary before:content-['']"
            >
               Pricing Plan
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
               className="text-default-dark text-center text-3xl font-black uppercase lg:text-4xl xl:text-5xl xl:leading-heavy"
            >
               competitive repair <br /> pricing plan
            </MotionH2>
            <div className="mt-7 grid w-full grid-cols-1 gap-4 px-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-[30px] xl:px-0">
               {pricingData.map((p, index) => (
                  <PricingCard
                     key={p.id}
                     features={p.features}
                     isSecond={p.id === 2}
                     name={p.name}
                     price={p.price}
                     isCenter={
                        (index + 1) % 2 !== 0 &&
                        index === pricingData.length - 1
                     }
                  />
               ))}
            </div>
         </div>
      </section>
   );
};

export { PricingSection };
