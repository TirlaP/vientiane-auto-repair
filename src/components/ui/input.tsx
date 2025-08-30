import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
   extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
   ({ className, type, ...props }, ref) => {
      return (
         <input
            type={type}
            className={cn(
               "flex h-[60px] w-full rounded-sm border border-[#D9D9D9] p-2.5 font-sans font-normal text-default-tertiary ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:font-medium placeholder:uppercase placeholder:text-default-tertiary focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 sm:p-3 md:p-4 lg:p-5 xl:p-6",
               className,
            )}
            ref={ref}
            {...props}
         />
      );
   },
);
Input.displayName = "Input";

export { Input };
