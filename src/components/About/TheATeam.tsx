import { team3Data } from "@/lib/mock-data";
import { TheATeamCard } from "../Home3/TheATeamCard";

const TheATeam = () => {
   return (
      <section className="-z-10 py-9 md:py-[80px] lg:py-[120px] xl:py-[150px]">
         <div className="container flex flex-col items-center justify-center font-header">
            <p className="relative z-10 text-sm font-extrabold uppercase leading-7 text-default-black before:absolute before:-left-2 before:top-1/2 before:-z-10 before:ml-0.5 before:h-[23px] before:w-[23px] before:-translate-x-0 before:-translate-y-1/2 before:rounded-full before:bg-tertiary before:content-[''] lg:text-base">
               expert team
            </p>
            <h2 className="mt-4 text-center text-3xl font-black uppercase md:mb-3.5 md:mt-4 lg:mb-6 lg:mt-4 lg:text-4xl xl:mb-8 xl:text-5xl xl:leading-heavy">
               expert mechanics <br /> right here
            </h2>

            <div className="mt-4 grid w-full md:mt-9 md:grid-cols-2 md:gap-x-2.5 lg:mt-11 lg:grid-cols-3 lg:gap-x-7 xl:mt-[60px]">
               {team3Data.map((team, index) => (
                  <TheATeamCard
                     key={team.id}
                     {...team}
                     isCenter={
                        (index + 1) % 2 !== 0 && index === team3Data.length - 1
                     }
                     index={index}
                  />
               ))}
            </div>
         </div>
      </section>
   );
};

export { TheATeam };
