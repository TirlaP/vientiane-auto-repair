import { team_3_Data } from "@/lib/mock-data";
import React from "react";
import { TeamCard } from "../TeamCard";

const Teams = () => {
   return (
      <section className="container flex flex-col items-center justify-center py-9 font-header md:py-[80px] lg:py-[120px] xl:py-[150px]">
         <p className="relative z-10 text-sm font-extrabold uppercase leading-7 text-default-black before:absolute before:-left-2 before:top-1/2 before:-z-10 before:ml-0.5 before:h-[23px] before:w-[23px] before:-translate-x-0 before:-translate-y-1/2 before:rounded-full before:bg-tertiary before:content-[''] lg:text-base">
            our members
         </p>
         <h1 className="text-center text-3xl font-black uppercase text-default-black lg:text-4xl xl:mb-8 xl:text-5xl xl:leading-heavy">
            expert mechanics <br /> right here
         </h1>

         <div className="mt-4 grid gap-2.5 md:mt-6 md:grid-cols-2 md:gap-3 lg:mt-10 lg:grid-cols-3 lg:gap-5 xl:mt-14 xl:gap-7">
            {team_3_Data.map((team) => (
               <TeamCard
                  key={team.id}
                  id={team.id}
                  imgUrl={team.imgUrl}
                  name={team.name}
                  title={team.title}
               />
            ))}
         </div>
      </section>
   );
};

export { Teams };
