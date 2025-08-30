"use client";
import { useState } from "react";

import { MinusIcon, PlusIcon } from "../ui/icons";
import { cn } from "@/lib/utils";
import { faqs_data } from "@/lib/mock-data";

interface AccordionProps {
   serial: number;
   title: string;
   desc: string;
}

const FAQAccordions = () => {
   return (
      <div className="mt-3 w-full px-5 font-header md:mt-5 lg:mt-7 xl:mt-10 xl:px-0">
         {faqs_data.map((faq, index) => (
            <Accordion
               key={index}
               desc={faq.desc}
               serial={index + 1}
               title={faq.title}
            />
         ))}
      </div>
   );
};

export default FAQAccordions;

export const Accordion = ({ desc, title, serial }: AccordionProps) => {
   const [active, setActive] = useState<number | null>(2);

   return (
      <div className="border-b">
         <div className="flex w-full items-center justify-between">
            <h3 className="py-2.5 text-xl font-black uppercase text-default-black md:text-2xl lg:leading-heavy">
               {title}
            </h3>
            {active === serial ? (
               <button
                  onClick={() => setActive(null)}
                  className="flex h-[30px] w-[30px] rotate-0 transform items-center justify-center rounded-[5px] bg-primary transition-all duration-300"
               >
                  <MinusIcon className="fill-white" />
               </button>
            ) : (
               <button
                  onClick={() => setActive(serial)}
                  className="flex h-[30px] w-[30px] rotate-0 transform items-center justify-center rounded-[5px] bg-[#F5F6FA] transition-all duration-300"
               >
                  <PlusIcon className="fill-default-tertiary" />
               </button>
            )}
         </div>
         <div
            className={cn("overflow-hidden transition-all duration-300", {
               "h-24": active === serial,
               "h-0": active === null || active !== serial,
            })}
         >
            <p className="font-body text-base font-normal text-default-tertiary lg:text-lg lg:leading-7">
               {desc}
            </p>
         </div>
      </div>
   );
};
