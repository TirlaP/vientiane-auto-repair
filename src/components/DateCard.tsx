import React from "react";

import { cn } from "@/lib/utils";

export interface DateCardProps extends React.HTMLAttributes<HTMLDivElement> {
   isRotate?: boolean;
   date: string;
}

const DateCard = React.forwardRef<HTMLDivElement, DateCardProps>(
   ({ className, date, isRotate, ...props }, ref) => {
      return (
         <div
            ref={ref}
            {...props}
            className={cn(
               className,
               "bg-primary px-[18px] py-[6px] text-white",
               {
                  "-rotate-90": isRotate,
               },
            )}
         >
            <span className="font-header text-lg font-extrabold uppercase">
               {date}
            </span>
         </div>
      );
   },
);
DateCard.displayName = "DateCard";

export { DateCard };
