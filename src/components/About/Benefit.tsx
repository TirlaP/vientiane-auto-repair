import Image from "next/image";
import { BenefitAccordion } from "../Home2/BenefitAccordion";

const Benefit = () => {
   return (
      <section className="w-full py-9 font-header md:py-[80px] lg:py-[120px] xl:py-[150px]">
         <div className="ml-auto flex max-w-[1620px] flex-col gap-x-5 gap-y-5 px-5 md:gap-x-7 lg:flex-row lg:gap-12 xl:gap-x-[152px] xl:px-0 2xl:items-center">
            <div className="flex w-full flex-col space-y-3 md:space-y-5 lg:w-[605px] lg:space-y-7">
               <p className="relative z-10 text-sm font-extrabold uppercase leading-7 text-default-black before:absolute before:-left-2 before:top-1/2 before:-z-10 before:ml-0.5 before:h-[23px] before:w-[23px] before:-translate-x-0 before:-translate-y-1/2 before:rounded-full before:bg-tertiary before:content-[''] lg:text-base">
                  service benefit
               </p>
               <h2 className="text-3xl font-black uppercase md:mb-3.5 md:mt-4 lg:mb-6 lg:mt-4 lg:text-4xl xl:mb-8 xl:text-5xl xl:leading-heavy">
                  service Dedication Miles of Trust{" "}
               </h2>
               <p className="font-body font-normal text-default-tertiary md:text-base lg:text-lg lg:leading-7">
                  Because they note vehicles emotions diseu suspendisse netus
                  venenats sem rilus neque aliquet morbie green great over
                  called
               </p>
               <BenefitAccordion />
            </div>
            <div className="flex-1">
               <Image
                  src="/images/image-14.png"
                  width={945}
                  height={650}
                  alt="Who choose us"
                  quality={70}
               />
            </div>
         </div>
      </section>
   );
};

export { Benefit };
