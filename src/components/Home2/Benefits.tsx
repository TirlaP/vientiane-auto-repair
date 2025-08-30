import Image from "next/image";

import { BenefitAccordion } from "./BenefitAccordion";
import { MotionDiv } from "../animations/motion";

const Benefits = () => {
   return (
      <section className="max-h-[1220px] font-header">
         <div className="flex gap-x-[70px]">
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
               className="hidden lg:block"
            >
               <Image
                  src="/images/image-13.png"
                  alt="benefits"
                  width={945}
                  height={785}
                  quality={100}
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
               className="flex max-w-[605px] flex-col space-y-4 p-5 lg:space-y-7"
            >
               <p className="relative z-10 text-base font-extrabold uppercase leading-6 text-default-black before:absolute before:-left-2 before:top-1/2 before:-z-10 before:ml-0.5 before:h-[23px] before:w-[23px] before:-translate-x-0 before:-translate-y-1/2 before:rounded-full before:bg-tertiary before:content-['']">
                  service benefit
               </p>
               <h2 className="text-default-dark text-3xl font-black uppercase lg:text-4xl xl:text-5xl xl:leading-heavy">
                  service Dedication Miles of Trust{" "}
               </h2>
               <p className="font-body text-lg font-normal leading-7 text-default-tertiary">
                  Because they note vehicles emotions diseu suspendisse netus
                  venenats sem rilus neque aliquet morbie green great over
                  called
               </p>
               <BenefitAccordion />
            </MotionDiv>
         </div>
         <FunFacts />
      </section>
   );
};

export { Benefits };

export const FunFacts = () => {
   return (
      <div className="bg-primary bg-[url('/images/bg-2.svg')]">
         <div className="container grid grid-cols-2 items-center justify-center gap-5 overflow-hidden px-3 py-14 font-header lg:grid-cols-4 lg:flex-row lg:py-[150px]">
            <FanFactCard footnote="vehicle repaired" title="20K" index={0} />

            <FanFactCard footnote="happy customer" title="35K" index={1} />

            <FanFactCard footnote="expert mechanics" title="350" index={2} />

            <FanFactCard footnote="awards winning" title="25+" index={3} />
         </div>
      </div>
   );
};

const FanFactCard = ({
   footnote,
   title,
   index,
}: {
   title: string;
   footnote: string;
   index: number;
}) => {
   return (
      <MotionDiv
         initial="offscreen"
         whileInView="onscreen"
         viewport={{ once: true }}
         variants={{
            offscreen: { opacity: 0, y: (index + 1) % 2 === 0 ? 50 : -50 },
            onscreen: {
               opacity: 1,
               y: 0,
               transition: { duration: 0.5, delay: index * 0.2 },
            },
         }}
         className="flex flex-col items-center justify-center gap-y-4 lg:gap-y-7"
      >
         <div className="flex h-[90px] w-[198px] skew-x-6 items-center justify-center rounded-md bg-tertiary text-6xl font-[900] text-default-black *:block *:-skew-x-6">
            <h2>{title}</h2>
         </div>
         <h3 className="text-center text-lg font-extrabold uppercase text-default">
            {footnote}
         </h3>
      </MotionDiv>
   );
};
