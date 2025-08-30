import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";
import { CheckIcon, RightArrowIcon } from "./ui/icons";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { MotionDiv } from "./animations/motion";

interface PricingCardProps {
   id?: number;
   price: number;
   name: string;
   features: string[];
   isSecond: boolean;
   isCenter?: boolean;
}

const PricingCard = ({
   features,
   isSecond,
   name,
   price,
   isCenter,
}: PricingCardProps) => {
   return (
      <MotionDiv
         initial="offscreen"
         whileInView="onscreen"
         viewport={{ once: true }}
         variants={{
            offscreen: {
               opacity: 0,
               scale: 0,
            },
            onscreen: {
               opacity: 1,
               scale: 1,
               transition: {
                  duration: 0.5,
               },
            },
         }}
         className={cn(
            "rounded-[10px] border p-5 md:mx-0 md:w-auto",
            isCenter ? "col-span-1 md:col-span-2 lg:col-span-1" : "",
         )}
      >
         <div
            className={cn(
               "flex flex-col items-center justify-center gap-y-4 rounded-[10px] py-10",
               isSecond
                  ? "bg-black bg-[url('/images/bg-1.svg')]"
                  : "bg-[#F6F1FB]/50 bg-[url('/images/bg-3.svg')]",
            )}
         >
            <p
               className={cn(
                  "text-center font-body text-lg font-medium",
                  `${isSecond ? "text-default-foreground" : "text-default-tertiary"}`,
               )}
            >
               Every Repair
            </p>
            <h2
               className={cn(
                  "text-center text-5xl font-black leading-heavy",
                  `${isSecond ? "text-white" : "text-default-black"}`,
               )}
            >
               ${price.toFixed(2)}
            </h2>
            <div className="mx-auto my-2 flex h-[40px] w-[188px] skew-x-12 items-center justify-center rounded-xl bg-primary *:-skew-x-12">
               <h4 className="text-center text-lg font-extrabold uppercase text-default">
                  {name}
               </h4>
            </div>
            <Separator className="mx-auto my-2 block max-w-[300px] bg-[#D9D9D9]" />
            <div className="space-y-[18px]">
               {features.map((f) => (
                  <div
                     key={f}
                     className="flex items-center justify-center font-body"
                  >
                     <div>
                        <div className="flex items-center gap-x-1.5">
                           <CheckIcon className="h-[18px] w-5 fill-primary" />{" "}
                           <p
                              className={cn(
                                 "text-lg font-normal",
                                 `${isSecond ? "text-white" : "text-default-tertiary"}`,
                              )}
                           >
                              {f}
                           </p>{" "}
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            <div className="my-8">
               <Link
                  className={buttonVariants({
                     className: cn(
                        "h-[60px] w-[200px]",
                        `${isSecond ? "bg-tertiary" : "bg-primary"}`,
                     ),
                     variant: "skew",
                  })}
                  href="/about"
               >
                  <span
                     className={cn(
                        "flex items-center justify-between gap-x-1.5 text-sm font-extrabold leading-4",
                        `${isSecond ? "text-black" : "text-white"}`,
                     )}
                  >
                     BUY PACKAGE{" "}
                     <RightArrowIcon
                        className={cn(isSecond ? "fill-black" : "fill-white")}
                     />
                  </span>
               </Link>
            </div>
         </div>
      </MotionDiv>
   );
};

export { PricingCard };
