import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
   extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
   ({ className, ...props }, ref) => {
      return (
         <textarea
            className={cn(
               "flex min-h-[80px] w-full rounded-sm border border-[#D9D9D9] p-2.5 font-sans text-sm font-normal text-default-tertiary ring-offset-background placeholder:font-medium placeholder:uppercase placeholder:text-default-tertiary focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 sm:p-3 md:p-4 lg:p-5 xl:p-6",
               className,
            )}
            ref={ref}
            {...props}
         />
      );
   },
);
Textarea.displayName = "Textarea";

export { Textarea };
