import Image from "next/image";
import React from "react";
import { Separator } from "./ui/separator";
import { BeIcon, FacebookIcon, InstagramIcon, TwitterIcon } from "./ui/icons";
import Link from "next/link";

interface TeamCardProps {
   id: number;
   name: string;
   title: string;
   imgUrl: string;
}

const TeamCard = ({ id, imgUrl, name, title }: TeamCardProps) => {
   return (
      <div className="group h-[628px] w-[420px] cursor-pointer">
         <div className="relative h-auto w-[full]">
            <div className="absolute bottom-0 left-1/2 -z-10 h-[397px] w-[380px] -translate-x-1/2 -skew-x-6 rounded bg-[#F2F6F7] bg-[url('/images/bg-3.svg')] transition-all duration-100 group-hover:bg-tertiary" />
            <Image
               src={imgUrl}
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
      </div>
   );
};

export { TeamCard };
