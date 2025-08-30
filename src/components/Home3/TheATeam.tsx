import Image from "next/image";

import { team3Data } from "@/lib/mock-data";
import { TheATeamCard } from "./TheATeamCard";
import { MotionH2, MotionP } from "../animations/motion";

const TheATeam = () => {
   return (
      <section className="relative px-5 py-9 md:py-[80px] lg:py-[120px] xl:px-0 xl:py-[150px]">
         <Image
            src="/images/image-61.svg"
            alt="The  a team"
            width={550}
            height={739}
            className="absolute left-0 top-[15%] -translate-y-1/2 select-none opacity-50"
         />
         <Image
            src="/images/image-62.svg"
            alt="The  a team"
            width={808}
            height={1155}
            className="absolute right-0 top-[15%] -translate-y-1/2 select-none opacity-50"
         />

         <div className="container flex flex-col items-center justify-center font-header">
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
               className="relative z-10 text-center text-base font-extrabold uppercase leading-7 text-default-black before:absolute before:-left-2 before:top-1/2 before:-z-10 before:ml-0.5 before:h-[23px] before:w-[23px] before:-translate-x-0 before:-translate-y-1/2 before:rounded-full before:bg-tertiary before:content-[''] md:text-lg"
            >
               expert team
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
               className="text-center text-2xl font-black uppercase lg:text-3xl xl:text-5xl xl:leading-heavy"
            >
               expert mechanics <br /> right here
            </MotionH2>

            <div className="mt-8 grid w-full gap-x-4 gap-y-2.5 md:mt-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-7 lg:gap-y-4 xl:mt-[60px]">
               {team3Data.map((team, i) => (
                  <TheATeamCard
                     key={team.id}
                     {...team}
                     isCenter={(i + 1) % 2 !== 0 && i === team3Data.length - 1}
                     index={i}
                  />
               ))}
            </div>
         </div>
      </section>
   );
};

export { TheATeam };
