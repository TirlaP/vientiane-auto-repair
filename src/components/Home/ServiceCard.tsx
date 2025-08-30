import { cn } from "@/lib/utils";
import { RightArrow2Icon } from "../ui/icons";
import { type service1_data } from "@/lib/mock-data";
import Link from "next/link";
import { MotionDiv } from "@/components/animations/motion";

type Service = (typeof service1_data)[0];

interface FeatureCardProps extends Service {
   isWhite?: boolean;
   index: number;
}

const ServiceCard = ({
   Icon,
   title,
   bgImage,
   isWhite,
   id,
   index,
}: FeatureCardProps) => {
   return (
      <MotionDiv
         initial="offscreen"
         whileInView="onscreen"
         viewport={{ once: true }}
         variants={{
            offscreen: {
               opacity: 0,
               x: (index + 1) % 2 === 0 ? 300 : -300,
            },
            onscreen: {
               opacity: 1,
               x: 0,
               transition: {
                  delay: index * 0.05,
                  duration: 0.5,
               },
            },
         }}
         className="group flex h-[162px] cursor-pointer items-center justify-between md:h-[270px]"
      >
         <div
            className={`inline-block h-full w-[184px] md:w-1/2 lg:w-[308px] ${bgImage} rounded bg-cover bg-center bg-no-repeat`}
            style={{
               clipPath: "polygon(0 0, 88% 0, 100% 100%, 0% 100%)",
            }}
         />
         <div
            className={cn(
               "-ml-10 flex max-h-full flex-1 flex-col gap-y-4 rounded py-4 pl-12 pr-[2.5rem] md:py-8 md:pl-16 md:pr-5",
               isWhite
                  ? "bg-background-fade bg-[url('/images/bg-3.svg')]"
                  : "bg-background-darkSecondary",
            )}
         >
            <Icon
               className={cn(
                  "h-8 w-8 md:h-14 md:w-14",
                  isWhite ? "fill-primary" : "fill-tertiary",
               )}
            />
            <h4
               className={cn(
                  "text-base font-extrabold uppercase md:text-2xl md:leading-[34px]",
                  isWhite ? "text-default-black" : "text-default",
               )}
            >
               {title}
            </h4>
            <div className="flex justify-end">
               <Link
                  href={`/services/${id}`}
                  className={cn(
                     "flex h-[26px] w-14 skew-x-[8deg] items-center justify-center rounded-sm transition duration-200 ease-in-out *:-skew-x-[8deg]",
                     isWhite
                        ? "border border-default-tertiary group-hover:border-primary group-hover:bg-primary"
                        : "bg-white/10 group-hover:bg-primary",
                  )}
               >
                  <RightArrow2Icon
                     className={cn(
                        isWhite
                           ? "fill-default-tertiary group-hover:fill-white"
                           : "fill-white opacity-40 group-hover:opacity-100",
                     )}
                  />
               </Link>
            </div>
         </div>
      </MotionDiv>
   );
};

export { ServiceCard };
