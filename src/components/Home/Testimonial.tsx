"use client";
import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { testimonial1_carousel } from "@/lib/mock-data";
import {
   Carousel,
   type CarouselApi,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/components/ui/carousel";
import { MotionImage, MotionSeparator } from "@/components/animations/motion";

export function TestimonialSection() {
   const [api, setApi] = React.useState<CarouselApi>();
   const [current, setCurrent] = React.useState(0);

   React.useEffect(() => {
      if (!api) {
         return;
      }

      setCurrent(api.selectedScrollSnap() + 1);

      api.on("select", () => {
         setCurrent(api.selectedScrollSnap() + 1);
      });
   }, [api]);

   return (
      <Carousel
         setApi={setApi}
         className="relative overflow-hidden bg-default-black bg-[url('/images/bg-1.svg')] bg-cover px-5 py-14 font-header md:px-0 md:py-24 lg:py-[150px]"
      >
         <CarouselPrevious className="group absolute left-4 top-5 ml-2 flex h-8 w-12 items-center justify-center rounded-sm bg-background-darkSecondary hover:bg-primary md:hidden" />

         <CarouselNext className="group absolute right-4 top-5 ml-2 flex h-8 w-12 items-center justify-center rounded-sm bg-background-darkSecondary hover:bg-primary md:hidden" />
         <div className="container">
            <div className="grid justify-center gap-y-4 md:gap-y-8">
               <motion.div
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true }}
                  variants={{
                     offscreen: { opacity: 0, y: -100 },
                     onscreen: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5 },
                     },
                  }}
                  className="mx-auto w-fit"
               >
                  <Image
                     src="/images/icon-6.png"
                     alt="Quote"
                     width={120}
                     height={120}
                     className="mx-auto size-11 md:size-[120px]"
                  />
               </motion.div>

               <motion.div
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true }}
                  variants={{
                     offscreen: { opacity: 0 },
                     onscreen: {
                        opacity: 1,
                        transition: { duration: 0.5, delay: 0.1 },
                     },
                  }}
                  className="flex items-center justify-between gap-x-14 lg:gap-x-[100px]"
               >
                  <CarouselPrevious className="group ml-2 hidden items-center justify-center rounded-md bg-background-darkSecondary hover:bg-primary md:flex" />

                  <CarouselContent>
                     {testimonial1_carousel.map((item, index) => (
                        <CarouselItem key={index}>
                           <p className="text-center text-sm font-extrabold uppercase leading-4 text-default md:text-xl md:leading-[28px] lg:text-2xl xl:leading-[38px]">
                              {item.content}
                           </p>
                        </CarouselItem>
                     ))}
                  </CarouselContent>

                  <CarouselNext className="group ml-2 hidden items-center justify-center rounded-sm bg-background-darkSecondary hover:bg-primary md:flex" />
               </motion.div>

               <div>
                  <div className="my-2 flex items-center justify-center gap-x-5 md:gap-x-16">
                     {testimonial1_carousel.map((item, index) => {
                        return (
                           <div className="relative" key={index}>
                              <MotionImage
                                 initial="offscreen"
                                 whileInView="onscreen"
                                 viewport={{ once: true }}
                                 variants={{
                                    offscreen: { opacity: 0 },
                                    onscreen: {
                                       opacity: 1,
                                       transition: {
                                          duration: 0.5,
                                          delay: 0.09 * (index + 1),
                                       },
                                    },
                                 }}
                                 src={item.author.img}
                                 alt={item.author.name}
                                 width={120}
                                 height={100}
                                 className="h-auto w-14 md:w-[120px]"
                              />
                              {current === index + 1 && (
                                 <div className="absolute -bottom-[10px] left-0 h-[2px] w-full bg-primary transition-all duration-100" />
                              )}
                           </div>
                        );
                     })}
                  </div>
                  <MotionSeparator
                     initial="offscreen"
                     whileInView="onscreen"
                     viewport={{ once: true }}
                     variants={{
                        offscreen: { opacity: 0 },
                        onscreen: {
                           opacity: 1,
                           transition: { duration: 1 },
                        },
                     }}
                     className="h-[2px]"
                  />

                  <motion.div
                     initial="offscreen"
                     whileInView="onscreen"
                     viewport={{ once: true }}
                     variants={{
                        offscreen: { opacity: 0, y: 50 },
                        onscreen: {
                           opacity: 1,
                           y: 0,
                           transition: { duration: 1 },
                        },
                     }}
                     className="mt-5"
                  >
                     <h2 className="text-center text-base font-extrabold text-default md:text-lg">
                        {testimonial1_carousel[current - 1]?.author?.name}
                     </h2>
                     <p className="text-center font-body text-base text-default-foreground md:text-lg">
                        {
                           testimonial1_carousel[current - 1]?.author
                              ?.designation
                        }
                     </p>
                  </motion.div>
               </div>
            </div>
         </div>
      </Carousel>
   );
}
