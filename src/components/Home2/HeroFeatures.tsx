"use client";
import React, { forwardRef, type Ref } from "react";
import { motion } from "framer-motion";
import { MotionHeroCard } from "../animations/motion";
import {
   DiscBrakeIcon,
   HouseIcon,
   ShipPropellerIcon,
   SteeringWheelIcon,
   WaterPumpIcon,
} from "../ui/icons";

const HeroFeatures = () => (
   <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      className="container absolute bottom-0 left-1/2 grid -translate-x-1/2 translate-y-1/2 grid-cols-5 divide-x-[1.5px] rounded bg-[#F5F6FA] bg-[url('/images/bg-3.svg')] text-black"
   >
      <MotionHeroCard
         Icon={ShipPropellerIcon}
         title="motor mount"
         variants={{
            offscreen: { opacity: 0, scale: 0.3 },
            onscreen: {
               opacity: 1,
               scale: 1,
               transition: { duration: 1, delay: 0.1 },
            },
         }}
      />
      <MotionHeroCard
         Icon={DiscBrakeIcon}
         title="brake repair"
         variants={{
            offscreen: { opacity: 0, scale: 0.3 },
            onscreen: {
               opacity: 1,
               scale: 1,
               transition: { duration: 1, delay: 0.2 },
            },
         }}
      />
      <MotionHeroCard
         Icon={SteeringWheelIcon}
         title="wheel repair"
         variants={{
            offscreen: { opacity: 0, scale: 0.3 },
            onscreen: {
               opacity: 1,
               scale: 1,
               transition: { duration: 1, delay: 0.25 },
            },
         }}
      />
      <MotionHeroCard
         Icon={WaterPumpIcon}
         title="car inspection"
         variants={{
            offscreen: { opacity: 0, scale: 0.3 },
            onscreen: {
               opacity: 1,
               scale: 1,
               transition: { duration: 1, delay: 0.3 },
            },
         }}
      />
      <MotionHeroCard
         Icon={HouseIcon}
         title="radiator repair"
         variants={{
            offscreen: { opacity: 0, scale: 0.3 },
            onscreen: {
               opacity: 1,
               scale: 1,
               transition: { duration: 1, delay: 0.35 },
            },
         }}
      />
   </motion.div>
);

export { HeroFeatures };

interface FunFactProps {
   title: string;
   Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}

export const HeroCard = forwardRef(
   ({ Icon, title }: FunFactProps, ref: Ref<HTMLDivElement>) => {
      return (
         <div
            ref={ref}
            className="group flex cursor-pointer items-center justify-center py-6 md:py-12"
         >
            <div className="flex flex-col items-center justify-center gap-y-4">
               <Icon className="h-6 w-6 fill-black transition-all duration-150 group-hover:fill-primary md:h-10 md:w-10 lg:h-[57px] lg:w-[57px]" />
               <p className="text-center text-[10px] font-bold uppercase transition group-hover:text-primary sm:text-sm md:text-base md:font-extrabold lg:text-lg">
                  {title}
               </p>
            </div>
         </div>
      );
   },
);

HeroCard.displayName = "HeroCard";
