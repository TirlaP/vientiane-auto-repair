import Image from "next/image";

import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "../ui/carousel";
import { testimonial2_carousel } from "@/lib/mock-data";
import { MotionDiv, MotionP } from "../animations/motion";

const Testimonials = () => {
   return (
      <section className="relative bg-[#F5F6FA] bg-[url('/images/bg-3.svg')] px-5 py-6 md:py-[50px] lg:py-[100px] xl:px-0 xl:py-[150px]">
         <Carousel className="container z-10 flex items-center justify-center lg:max-h-[775px]">
            <CarouselContent className="w-full">
               {testimonial2_carousel.map((item, index) => (
                  <CarouselItem
                     className="flex h-full w-full flex-col items-center gap-x-[70px] gap-y-5 font-header md:flex-row"
                     key={index}
                  >
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
                        className="!size-fit"
                     >
                        <div className="h-fit w-fit">
                           <Image
                              src={item.author.img}
                              alt={item.author.name}
                              width={420}
                              height={473}
                              className="h-[382.5px] w-[340px] md:h-[425.5px] md:w-[378px] lg:h-[473px] lg:w-[420px]"
                           />
                        </div>
                     </MotionDiv>
                     <div className="grid max-w-[830px] flex-1 gap-y-4 md:gap-y-6 lg:gap-y-8 xl:gap-y-10">
                        <MotionDiv
                           initial="offscreen"
                           whileInView="onscreen"
                           viewport={{ once: true }}
                           variants={{
                              offscreen: {
                                 opacity: 0,
                                 y: -100,
                              },
                              onscreen: {
                                 opacity: 1,
                                 y: 0,
                                 transition: {
                                    duration: 0.5,
                                 },
                              },
                           }}
                           className="flex items-center gap-x-5"
                        >
                           <div>
                              <Image
                                 src="/images/icon-7.svg"
                                 alt="Testimonial"
                                 width={63}
                                 height={63}
                                 className="h-[40px] w-[40px] md:h-[50px] md:w-[50px] lg:h-[63px] lg:w-[63px]"
                              />
                           </div>
                           <div>
                              <h3 className="text-base font-extrabold uppercase md:text-lg">
                                 brandy adams
                              </h3>
                              <p className="font-body text-base font-medium text-default-tertiary md:text-lg">
                                 CEO of Ford
                              </p>
                           </div>
                        </MotionDiv>
                        <MotionP
                           initial="offscreen"
                           whileInView="onscreen"
                           viewport={{ once: true }}
                           variants={{
                              offscreen: {
                                 opacity: 0,
                              },
                              onscreen: {
                                 opacity: 1,
                                 transition: {
                                    duration: 1,
                                 },
                              },
                           }}
                           className="md:md-text-lg z-20 text-base font-extrabold uppercase xl:text-2xl xl:leading-[38px]"
                        >
                           {item.content}
                        </MotionP>

                        <div className="flex items-center justify-between gap-x-3 lg:ml-1.5 lg:justify-start">
                           <CarouselPrevious />
                           <CarouselNext />
                        </div>
                     </div>
                  </CarouselItem>
               ))}
            </CarouselContent>
         </Carousel>
         <Image
            src="/images/icon-8.png"
            alt="testimonial"
            width={477}
            height={446}
            className="absolute right-0 top-1/2 z-0 hidden h-[286px] w-[286px] -translate-y-1/2 md:h-[325px] md:w-[325px] lg:block lg:h-[370px] lg:w-[370px] xl:h-[420px] xl:w-[420px] 2xl:h-[466px] 2xl:w-[477px]"
         />
      </section>
   );
};

export { Testimonials };
