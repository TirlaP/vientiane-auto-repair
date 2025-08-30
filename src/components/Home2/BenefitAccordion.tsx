"use client";
import { useState } from "react";
import { MinusIcon, PlusIcon } from "../ui/icons";
import { cn } from "@/lib/utils";

const BenefitAccordion = () => {
   const [active, setActive] = useState<1 | 2 | 3 | null>(2);

   return (
      <div className="mt-2 w-full">
         <div className="border-b">
            <div className="flex w-full items-center justify-between">
               <h3 className="py-0 text-lg font-black uppercase leading-heavy text-default-black md:py-2.5 md:text-2xl">
                  Eco-Friendly Practices
               </h3>
               {active === 1 ? (
                  <button
                     onClick={() => setActive(null)}
                     className="flex h-[30px] w-[30px] rotate-0 transform items-center justify-center rounded-[5px] bg-primary transition-all duration-300"
                  >
                     <MinusIcon className="fill-white" />
                  </button>
               ) : (
                  <button
                     onClick={() => setActive(1)}
                     className="flex h-[30px] w-[30px] rotate-0 transform items-center justify-center rounded-[5px] bg-[#F5F6FA] transition-all duration-300"
                  >
                     <PlusIcon className="fill-default-tertiary" />
                  </button>
               )}
            </div>
            <div
               className={cn("overflow-hidden transition-all duration-300", {
                  "h-auto": active === 1,
                  "h-0": active === null || active === 2 || active === 3,
               })}
            >
               <p className="font-body text-base font-normal text-default-tertiary lg:text-lg lg:leading-7">
                  Emphasize your commitment to providing best top-quality
                  workmanship ensuring that all repairs are done to the highest
                  standards to guarantee customer satisfaction and safety.
               </p>
            </div>
         </div>
         <div className="border-b">
            <div className="flex w-full items-center justify-between">
               <h3 className="py-3 text-xl font-black uppercase text-default-black md:text-2xl lg:py-0 lg:leading-heavy">
                  quality Workmanship
               </h3>
               {active === 2 ? (
                  <button
                     onClick={() => setActive(null)}
                     className="flex h-[30px] w-[30px] rotate-0 transform items-center justify-center rounded-[5px] bg-primary transition-all duration-300"
                  >
                     <MinusIcon className="fill-white" />
                  </button>
               ) : (
                  <button
                     onClick={() => setActive(2)}
                     className="flex h-[30px] w-[30px] rotate-0 transform items-center justify-center rounded-[5px] bg-[#F5F6FA] transition-all duration-300"
                  >
                     <PlusIcon className="fill-default-tertiary" />
                  </button>
               )}
            </div>
            <div
               className={cn("overflow-hidden transition-all duration-300", {
                  "h-auto": active === 2,
                  "h-0": active === null || active === 1 || active === 3,
               })}
            >
               <p className="font-body text-base font-normal text-default-tertiary lg:text-lg lg:leading-7">
                  Emphasize your commitment to providing best top-quality
                  workmanship ensuring that all repairs are done to the highest
                  standards to guarantee customer satisfaction and safety.
               </p>
            </div>
         </div>
         <div className="border-b">
            <div className="flex w-full items-center justify-between">
               <h3 className="py-0 text-xl font-black uppercase leading-heavy text-default-black md:py-2.5 md:text-2xl">
                  Satisfaction Guarantee
               </h3>
               {active === 3 ? (
                  <button
                     onClick={() => setActive(null)}
                     className="flex h-[30px] w-[30px] rotate-0 transform items-center justify-center rounded-[5px] bg-primary transition-all duration-300"
                  >
                     <MinusIcon className="fill-white" />
                  </button>
               ) : (
                  <button
                     onClick={() => setActive(3)}
                     className="flex h-[30px] w-[30px] rotate-0 transform items-center justify-center rounded-[5px] bg-[#F5F6FA] transition-all duration-300"
                  >
                     <PlusIcon className="fill-default-tertiary" />
                  </button>
               )}
            </div>
            <div
               className={cn("overflow-hidden transition-all duration-300", {
                  "h-auto": active === 3,
                  "h-0": active === null || active === 1 || active === 2,
               })}
            >
               <p className="font-body text-base font-normal text-default-tertiary lg:text-lg lg:leading-7">
                  Emphasize your commitment to providing best top-quality
                  workmanship ensuring that all repairs are done to the highest
                  standards to guarantee customer satisfaction and safety.
               </p>
            </div>
         </div>
      </div>
   );
};

export { BenefitAccordion };
