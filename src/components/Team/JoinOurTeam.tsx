"use client";
import Link from "next/link";
import { useMediaQuery } from "@mantine/hooks";

import { RightArrowIcon } from "../ui/icons";
import { cn } from "@/lib/utils";

const JoinOurTeam = () => {
   const lg = useMediaQuery("(min-width:1024px)");

   return (
      <div className="container mt-5 grid max-w-[1720px] items-center font-header md:h-[440px] md:grid-cols-2 lg:mt-0 xl:h-[520px] 2xl:h-[600px]">
         <div
            className={cn(
               "flex h-full flex-col items-center justify-center bg-primary bg-[url('/images/bg-2.svg')] px-2.5 text-white lg:pr-10 xl:px-0",
               lg ? "w-[119%]" : "w-full",
            )}
            style={{
               clipPath: lg
                  ? "polygon(0 0, 100% 0, 83% 100%, 0% 100%)"
                  : "none",
            }}
         >
            <div className="grid max-w-[633px] gap-2 py-2 md:gap-y-4 lg:gap-y-6 xl:gap-y-8 2xl:gap-y-10">
               <h1 className="text-3xl font-black uppercase lg:text-4xl xl:mb-8 xl:text-5xl xl:leading-heavy">
                  get opportunity to <br /> join our team
               </h1>

               <p className="font-body text-base font-normal lg:text-lg">
                  Diam nisad iaculis sociis massa auctors into duila fringilla
                  bibendum nostra mattis crased auctor dictum vestibulum
                  tincidunt convallis fusce commodo condimentum vestibulum
                  habitant nostra
               </p>

               <Link
                  href="/join-our-team"
                  className="flex h-[48px] w-[160px] skew-x-12 items-center justify-center gap-x-1.5 rounded-sm bg-default-black text-[13px] font-extrabold uppercase *:-skew-x-12 lg:h-[60px] lg:w-[201px]"
               >
                  <span>view details</span>
                  <RightArrowIcon className="fill-white" />
               </Link>
            </div>
         </div>
         <div
            className="h-[300px] bg-[url('/images/image-33.png')] bg-cover bg-center bg-no-repeat md:h-full"
            style={{
               clipPath: lg
                  ? "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)"
                  : "none",
            }}
         />
      </div>
   );
};

export { JoinOurTeam };
