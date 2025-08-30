import Image from "next/image";

import { BenefitAccordion } from "../Home2/BenefitAccordion";
import { MotionDiv } from "../animations/motion";

const WhoChooseUs = () => {
   return (
      <section className="container flex max-w-[1466px] flex-col items-center justify-between gap-y-4 py-9 font-header md:py-[80px] lg:flex-row lg:py-[120px] xl:py-[150px]">
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
            className="flex max-w-[605px] flex-col space-y-3 px-3.5 md:space-y-4 lg:space-y-5 xl:space-y-7 xl:px-0"
         >
            <p className="relative z-10 text-base font-extrabold uppercase leading-7 text-default-black before:absolute before:-left-2 before:top-1/2 before:-z-10 before:ml-0.5 before:h-[23px] before:w-[23px] before:-translate-x-0 before:-translate-y-1/2 before:rounded-full before:bg-tertiary before:content-[''] md:text-lg">
               service benefit
            </p>
            <h2 className="text-2xl font-black uppercase lg:text-3xl xl:text-5xl xl:leading-heavy">
               service Dedication Miles of Trust{" "}
            </h2>
            <p className="font-body text-base font-normal leading-7 text-default-tertiary md:text-lg">
               Because they note vehicles emotions diseu suspendisse netus
               venenats sem rilus neque aliquet morbie green great over called
            </p>
            <BenefitAccordion />
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
            className="px-3.5 md:px-0"
         >
            <Image
               src="/images/image-58.png"
               width={709}
               height={595}
               alt="Who choose us"
               quality={70}
            />
         </MotionDiv>
      </section>
   );
};

export { WhoChooseUs };
