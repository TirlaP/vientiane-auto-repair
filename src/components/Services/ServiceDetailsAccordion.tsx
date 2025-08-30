"use client";
import { service_accordions } from "@/lib/mock-data";
import { Accordion } from "../FAQ's/FAQAccordions";

const ServiceDetailsAccordion = () => {
   return (
      <div className="mt-2 w-full font-header">
         {service_accordions.map((accordion, index) => (
            <Accordion
               key={index}
               desc={accordion.desc}
               serial={index + 1}
               title={accordion.title}
            />
         ))}
      </div>
   );
};

export { ServiceDetailsAccordion };
