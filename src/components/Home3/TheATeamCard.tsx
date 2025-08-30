import Link from "next/link";
import Image from "next/image";

import { type team3Data } from "@/lib/mock-data";
import { Separator } from "../ui/separator";
import { BeIcon, FacebookIcon, InstagramIcon, TwitterIcon } from "../ui/icons";
import { cn } from "@/lib/utils";
import { MotionDiv } from "../animations/motion";

type TeamDataType = (typeof team3Data)[0];
interface TheATeamCardProps extends TeamDataType {
   isCenter?: boolean;
   index: number;
}

const TheATeamCard = ({
   id,
   img,
   name,
   title,
   isCenter,
   index,
}: TheATeamCardProps) => {
   return (
      <MotionDiv
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
                  duration: 0.5,
                  delay: index * 0.2,
               },
            },
         }}
         className={cn(
            "group mx-auto h-[628px] max-w-[420px] cursor-pointer",
            isCenter ? "col-span-1 md:col-span-2 lg:col-span-1" : "",
         )}
      >
         <div className="relative h-auto w-[full]">
            <div className="absolute bottom-0 left-1/2 -z-10 h-[397px] w-[380px] -translate-x-1/2 -skew-x-6 rounded bg-[#F2F6F7] bg-[url('/images/bg-3.svg')] transition-all duration-100 group-hover:bg-tertiary" />
            <Image
               src={`/images/${img}`}
               alt={name}
               width={313}
               height={475}
               quality={70}
               className="z-10 mx-auto"
            />
         </div>
         <div className="mx-auto mt-[26px] max-w-[300px]">
            <div className="flex flex-col items-center justify-center">
               <h4 className="text-2xl font-black uppercase text-default-black">
                  {name}
               </h4>
               <p className="my-3 font-body text-lg font-normal text-default-tertiary">
                  {title}
               </p>
            </div>
            <Separator />
            <div className="my-5 flex items-center justify-center">
               <ul className="flex items-center gap-x-4">
                  <li>
                     <Link
                        href={`/team/${id}`}
                        className="group1 *:transition-all *:duration-100 *:hover:fill-primary"
                     >
                        <FacebookIcon className="h-[22px] w-[22px] fill-default-tertiary" />
                     </Link>
                  </li>
                  <li>
                     <Link
                        href={`/team/${id}`}
                        className="group1 *:transition-all *:duration-100 *:hover:fill-primary"
                     >
                        <TwitterIcon className="h-[22px] w-[22px] fill-default-tertiary" />
                     </Link>
                  </li>
                  <li>
                     <Link
                        href={`/team/${id}`}
                        className="group1 *:transition-all *:duration-100 *:hover:fill-primary"
                     >
                        <InstagramIcon className="h-[22px] w-[22px] fill-default-tertiary" />
                     </Link>
                  </li>
                  <li>
                     <Link
                        href={`/team/${id}`}
                        className="group1 *:transition-all *:duration-100 *:hover:fill-primary"
                     >
                        <BeIcon className="h-[22px] w-[22px] fill-default-tertiary" />
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
      </MotionDiv>
   );
};

export { TheATeamCard };
